((MyBigInt) => {

    /**
     * @typedef {Object} BBSOptions
     * @property {MyBigInt} [seed] The seed of the generator, Optional
     * @property {MyBigInt} [module] The module of the generator, Optional
     * @property {MyBigInt | number} s The start seed or the bitlength of the module
     */

    /**
     * Used in {@link createBlumPrimes()}.
     * @typedef {Object} Blum
     * @property {MyBigInt} N The module of the generator
     * @property {MyBigInt} P The first blum prime factor
     * @property {MyBigInt} Q The second blum prime factor
     */

    /**
     * The main MyBBS class
     * @author Chris Rebbelin [s0548921@htw-berlin.de]
     */
    class MyBBS {

        /**
         * Creates a new MyBBS Generator with start seed `s`
         * and `bit` length size.
         * @param {BBSOptions} opts The options for setting seed and module.
         */
        constructor(opts) {

            let success = false;

            // used for testing, sets S and N and returns (no checking)
            if (opts.seed instanceof MyBigInt && opts.module instanceof MyBigInt) {

                this.seed = opts.seed;
                this.n = opts.module;
                
                success = true;
            }

            const isBigint = opts.s instanceof MyBigInt;
            let s = isBigint ? opts.s : null;

            while (!success) {

                // create a module
                const {
                    N: n
                } = MyBBS.createBlumPrimes(opts.s);

                // if s is not MyBigInt, create a random seed
                // from [2,n-1] inclusive.
                if (!isBigint) {
                    const lo = MyBigInt.TWO()
                    const hi = n._sub(MyBigInt.ONE(), true);
                    s = MyBigInt.getRandomBetween(lo, hi);
                }

                // if module and seed are coprime, set their values and break
                if (MyBigInt.gcd(s, n).eqo()) {

                    this.seed = s;
                    this.n = n;

                    success = true;
                } else {

                    // if we had a given seed, trying again would be pointless
                    // as p and q will always be the same
                    if (isBigint) throw new RangeError(`Can't find an N for this Seed!`);

                    // if we had a given bit length for the module,
                    // just generate new random values for n and s
                }
            }
            this.reset();
        }

        /**
         * Creates two blum primes and returns their product (with p and q).
         * P and Q are only returned for testing purposes.
         * Used in the constructor of MyBBS.
         * - If `start` is MyBigInt, `p` will the smallest blum prime greater than `start`.
         * `q` will then be the smallest blum prime greater than `p+25%`.
         * - If `start` is a number, p and q will by random blum primes so that their product
         * `n` = `p` x `q` has a bit length of `start` or `start+1`.
         * @public
         * @static
         * @param {MyBigInt | number} start The start parameter for `p`.
         * @returns {Blum} p, q and their product n (module of the generator).
         */
        static createBlumPrimes(start) {

            let p, q;

            if (start instanceof MyBigInt && start.sign) {

                // find p after start
                p = start.copy();
                p._nextBlumPrime();

                // find q after p+25%
                q = p.add(p.shiftRight(2));
                q._nextBlumPrime();

                // p and q can't be equal

            } else if (Number.isSafeInteger(start) && start > 4 && start < 4000) {

                const k = Math.floor(start / 2);
                const l = start - k + 1;

                do {
                    p = MyBBS.getBlumPrimeWithBits(k);
                    q = MyBBS.getBlumPrimeWithBits(l);
                } while (p.eq(q))

            } else {
                throw new TypeError(`start must be positive MyBigInt or Number!`);
            }

            return {
                N: p.mul(q),
                P: p,
                Q: q
            }
        }

        /**
         * Returns a blum prime with `n` bits.
         * Used in {@link createBlumPrimes()}.
         * @public
         * @static
         * @param {number} n The length in bits.
         * @returns {MyBigInt} The random MyBigInt prime.
         */
        static getBlumPrimeWithBits(n) {

            if (!Number.isSafeInteger(n) || n < 4 || n > 2000) {
                throw new TypeError(`n must be a number in range [4,2000]!`);
            }

            // generate a random value and find the next blum prime
            let v = MyBigInt.getRandom(n, true);
            v._nextBlumPrime();

            // get bit length
            const l = v.spart;
            const ol = Math.floor(Math.log2(v.value[l - 1])) + 1;
            const nrbits = (l - 1) * 8 + ol;

            // if resulting prime is larger than 2^n - 1, set it
            // to 2^(n-1) and find the next blum prime again.
            if (nrbits > n) {
                v = MyBigInt.ONE().shiftLeft(n - 1);
                v._nextBlumPrime();
            }
            return v;
        }

        /**
         * Gets the next random byte from
         * the MyBBS generator.
         * @public
         * @param {boolean} [asBitstring=false] Whether to return the byte as bitstring.
         * @returns {number | string} The next random byte.
         */
        randomByte(asBitstring = false) {

            if ('undefined' === typeof this.v || 'undefined' === typeof this.n) {
                throw new ReferenceError('Generator was not initialized correctly!');
            }

            let r = '';
            this.history = this.history || [];

            // repeat 8 times to get 8 bits = 1 byte
            for (let i = 0; i < 8; i++) {

                this.v = this.v.square().divmod(this.n).r;
                this.history.push(this.v.toString());

                r = `${r}${this.v.bit(0)}`;
            }

            // return byte as string or number
            return asBitstring ? r : parseInt(r, 2);
        }

        /**
         * Helper method for testing.
         * Resets the MyBBS value to the start seed.
         * @private
         */
        reset() {

            if ('undefined' === typeof this.seed || 'undefined' === typeof this.n) {
                throw new ReferenceError('Generator was not initialized correctly!');
            }

            this.v = this.seed.copy();
            this.history = [];
            //console.debug(`Generator reset.`);
        }

        /**
         * Generator method used for testing.
         * Continually returns the random bits from 
         * the MyBBS generator.
         * @public
         * @param {number} bits The number of bits.
         * @returns {number} The random bits parsed as a number.
         */
        * randomBitStream(bits) {

            if (!Number.isSafeInteger(bits) || bits < 1 || bits > 32) {
                throw new TypeError(`bits must be a number in range [1,32]!`);
            }

            while (true) {
                let r = '';
                for (let i = 0; i < bits; i++) {
    
                    this.v = this.v.square().divmod(this.n).r;
                    r = `${r}${this.v.bit(0)}`;
                }
                yield parseInt(r, 2);
            }
        }
    }

    if ('undefined' !== typeof module && module.exports) {
        module.exports = MyBBS;
    } else {
        window.MyBBS = MyBBS;
    }

})('function' === typeof require ? require('../MyBigInt/mybigint.js') : MyBigInt);
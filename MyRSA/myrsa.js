(([MyBigInt, getRand]) => {
    
    /**
     * @typedef {Object} RSAOptions
     * @property {MyBigInt} [e] Public key e
     * @property {number} [size] Bitlength of keypair
     * @property {boolean} [isTest] TRUE for testing
     * @property {MyBigInt} [testP] First prime factor (tests only)
     * @property {MyBigInt} [testQ] Second prime factor (tests only)
     * @property {MyBigInt} [testN] Product of p and q (tests only)
     * @property {MyBigInt} [testE] Public key e (tests only)
     * @property {MyBigInt} [testD] Private key e (tests only)
     */

    /**
     * @typedef {Object} MyRsaPublicKey
     * @property {MyBigInt} n The product of p and q
     * @property {MyBigInt} e The public key
     */

    /**
     * @typedef {Object} MyRsaPrivateKey
     * @property {MyBigInt} n The product of p and q
     * @property {MyBigInt} d The private key
     * @property {MyBigInt} p The first prime
     * @property {MyBigInt} q The second prime
    */
    
    /**
     * @typedef {Object} MyRSAPrimePair
     * @property {MyBigInt} n The product of p and q
     * @property {MyBigInt} p The first prime
     * @property {MyBigInt} q The second prime
     */

    /**
     * @typedef {Object} Block
     * @property {Uint8Array} octets The octet string (as an UInt8Array)
     * @property {number} mLen The length of the octet string (Number of octets)
     */

    /**
     * The main MyRSA class
     * @author Chris Rebbelin [s0548921@htw-berlin.de]
     */
    class MyRSA {

        /**
         * Generates a MyRSA key pair. 
         * - If `opts.isTest` is set, all values are taken
         * from the opts object with no checking / validation. This
         * is only used for testing purposes.
         * - If `opts.size` is set, two random primes p and q will be created,
         * so that their product n has a bitlength of `size` or `size+1`. `size`
         * is optional and defaults to 50.
         * - If `opts.e` is set, it will be used as public key value E. `e` is
         * optional and defaults to 2^16 + 1 = 65537.
         * @param {RSAOptions} opts
         */
        constructor(opts) {

            if (opts.isTest) {
                this.P = opts.testP;
                this.Q = opts.testQ;

                if (this.N) {
                    this.N = opts.testN;
                } else {
                    this.N = this.P.mul(this.Q);
                }
                this.E = opts.testE;
                this.D = opts.testD;
                return;
            }

            const MAX_TRIES = 50;
            const defaultE = MyBigInt.fromString('65537');
            const one = MyBigInt.ONE();

            const size = opts.size || 50;       
            const e = opts.e || defaultE;

            if (!Number.isSafeInteger(size) || size < 10 || size > 4096) {
                throw new TypeError(`opts.size must be a number in [10,4096]!`);
            }

            if (!(e instanceof MyBigInt) || e.lt(defaultE)) {
                throw new TypeError(`opts.e must be a MyBigInt >= 65537!`);
            }

            let success = false, abort = 0;

            while (!success) {
                const { N: n, P: p, Q: q } = MyRSA.generatePrimePair(size);

                const phiN = p.sub(one).mul(q.sub(one));
                const d = e.mulInvers(phiN);

                if (d) {
                    
                    this.P = p;
                    this.Q = q;
                    this.N = n;
                    this.E = e;
                    this.D = d;
   
                    success = this.testRun();

                } else {
                    if (++abort > MAX_TRIES) throw new RangeError(`Can't initialize RSA with the given parameters!`);
                }
            }
        }

        /**
         * Performs one en- and decryption with a constant value 
         * to check if the set parameters are correct.
         * Only used internally in the MyRSA constructor.
         * @private
         * @returns {boolean} Whether the test was passed.
         */
        testRun() {
            const STR = '101';
            const enc = this.encrypt(STR);
            const dec = this.decrypt(enc);

            console.debug(`${STR} === ${dec.toString()} ?`);

            return (STR === dec.toString());
        }

        /**
         * Creates two primes and returns their product (with p and q).
         * The product `p`x`q` has a bit length of `size` or `size+1`.
         * @public
         * @param {number} size The bit length of `n`.
         * @returns {MyRSAPrimePair} The primes and their product.
         */
        static generatePrimePair(size) {

            let p, q;

            if (Number.isSafeInteger(size) && size >= 10 && size <= 4096) {

                const k = Math.floor(size / 2);
                const l = size - k + 1;

                do {
                    p = MyRSA.getPrimeWithBits(k);
                    q = MyRSA.getPrimeWithBits(l);
                } while (p.eq(q))

            } else {
                throw new TypeError(`size must be a number in [10,4000]!`);
            }

            return {
                N: p.mul(q),
                P: p,
                Q: q
            }
        }

        /**
         * Generates a prime number with `n` bits.
         * @public
         * @param {number} n The number of bits.
         * @returns {MyBigInt} The random prime.
         */
        static getPrimeWithBits(n) {

            if (!(Number.isSafeInteger(n) && n >= 5 && n <= 2048)) {
                throw new TypeError(`n must be a Number in [5,2048]!`);
            }

            // generate a random value and find the next prime
            const v = MyBigInt.getRandom(n, true);
            v._nextPrime();

            // get bit length
            const l = v.spart;
            const ol = Math.floor(Math.log2(v.value[l - 1])) + 1;
            const nrbits = (l - 1) * 8 + ol;

            // if resulting prime is larger than 2^n - 1, set it
            // to 2^(n-1) and find the next prime again.
            if (nrbits > n) {
                v = MyBigInt.TWO().pow(n - 1);
                v._nextPrime();
            }
            return v;
        }

        /**
         * Retrieves the public key
         * from the MyRSA key pair.
         * @public
         * @returns {MyRsaPublicKey} The public key
         */
        getPublicKey() {

            if (!(this.N instanceof MyBigInt &&
                    this.E instanceof MyBigInt)) {
                throw new TypeError('Not a valid MyRSA KeyPair!');
            }

            return {
                n: this.N,
                e: this.E
            };
        }

        /**
         * Retrieves the private key, with p and q,
         * from the MyRSA key pair.
         * @public
         * @returns {MyRsaPrivateKey} The private key, with p and q.
         */
        getPrivateKey() {

            if (!(this.N instanceof MyBigInt &&
                    this.D instanceof MyBigInt &&
                    this.P instanceof MyBigInt &&
                    this.Q instanceof MyBigInt)) {
                throw new TypeError('Not a valid MyRSA KeyPair!');
            }

            return {
                n: this.N,
                d: this.D,
                p: this.P,
                q: this.Q
            };
        }

        /**
         * Encrypts a number with the public key from this
         * MyRSA context. Valid `E` and `N` have to be set.
         * No padding or else is done.
         * - (1) A MyBigInt `p` is set to `plain` (or created from `plain` if its a string).
         * - (2) The result of `p^E (mod N)` is returned.
         * @public
         * @param {string | MyBigInt} plain The number to encrypt as string or MyBigInt.
         * @returns {MyBigInt} The encrypted number as MyBigInt.
         */
        encrypt(plain) {

            if (!(this.N instanceof MyBigInt &&
                this.E instanceof MyBigInt)) {
            throw new TypeError('MyRSA Public key not set!');
        }

            const p = (plain instanceof MyBigInt) ?
                plain :
                MyBigInt.fromString(plain);
            return p.powMod(this.E, this.N);
        }

        /**
         * Decrypts a number with the private key from this
         * MyRSA context. Valid `D` and `N` have to be set.
         * No padding or else is done.
         * - (1) A MyBigInt `c` is set to `cipher` (or created from `cipher` if its a string).
         * - (2) The result of `c^D (mod N)` is returned.
         * @public
         * @param {string | MyBigInt} cipher The number to decrypt as string or MyBigInt.
         * @returns {MyBigInt} The decrypted number as MyBigInt.
         */
        decrypt(cipher) {

            if (!(this.N instanceof MyBigInt &&
                this.D instanceof MyBigInt)) {
            throw new TypeError('MyRSA Private key not set!');
            }

            const c = (cipher instanceof MyBigInt) ?
                cipher :
                MyBigInt.fromString(cipher);
            return c.powMod(this.D, this.N);
        }

        /**
         * Encrypts a data block with the public key.
         * https://tools.ietf.org/html/rfc8017#section-7.2.1
         * @public
         * @static
         * @param {MyRsaPublicKey} pk The public key.
         * @param {Block} plain The data block to encrypt.
         * @returns {Block} The encrypted data block.
         */
        static encryptRSA(pk, plain) {

            if ('object' !== typeof pk || !pk.hasOwnProperty('e') ||
                !pk.e instanceof MyBigInt || !pk.hasOwnProperty('n') || !pk.n instanceof MyBigInt) {
                throw new TypeError(`${pk} is not a valid MyRSA Public Key!`);
            }

            if ('object' !== typeof plain || !(plain.octets instanceof Uint8Array) || 'number' !== typeof plain.mLen) {
                throw new TypeError(`${plain} is not a valid data block!`);
            }

            const E = pk.e;
            const N = pk.n;

            const k = N.spart;
            const mLen = plain.mLen;

            if (mLen > k - 11) {
                throw new RangeError('Message too long');
            }

            // Generate at least 8 random non-zero octets
            const PS = new Uint8Array(k - mLen - 3);
            while (PS.includes(0)) getRand(PS);

            // The encoded octet string has format:
            // EM = 0x00 || 0x02 || PS || 0x00 || M
            // where PS is a random octet string with at least 8 non-zero octets
            // and M is the actual message octet string
            const EM = new Uint8Array(k);
            EM.set([0x00], 0);
            EM.set([0x02], 1);
            EM.set(PS, 2);
            EM.set([0x00], PS.length + 2);
            EM.set(plain.octets, PS.length + 3);

            const m = MyBigInt.fromOctetString(EM);

            const C = m.powMod(E, N);

            return {
                octets: C.toOctetString(k),
                mLen: k
            };
        }

        /**
         * Decrypts a data block with the private key.
         * https://tools.ietf.org/html/rfc8017#section-7.2.2
         * @public
         * @static
         * @param {MyRsaPrivateKey} sk The private key.
         * @param {Block} cipher The data block to decrypt.
         * @returns {Block} The decrypted data block.
         */
        static decryptRSA(sk, cipher) {

            if ('object' !== typeof sk ||
                !sk.hasOwnProperty('p') || !sk.p instanceof MyBigInt ||
                !sk.hasOwnProperty('q') || !sk.q instanceof MyBigInt ||
                !sk.hasOwnProperty('n') || !sk.n instanceof MyBigInt ||
                !sk.hasOwnProperty('d') || !sk.d instanceof MyBigInt) {
                throw new TypeError(`${sk} is not a valid MyRSA Private Key!`);
            }

            if ('object' !== typeof cipher || !(cipher.octets instanceof Uint8Array) || 'number' !== typeof cipher.mLen) {
                throw new TypeError(`${cipher} is not a valid data block!`);
            }

            const D = sk.d;
            const N = sk.n;

            const k = N.spart;
            const mLen = cipher.mLen;

            if (mLen !== k || k < 11) {
                throw new RangeError('Decryption Error');
            }

            const c = MyBigInt.fromOctetString(cipher.octets);

            const m = c.powMod(D, N);

            const EM = m.toOctetString(k);

            if (EM[0] !== 0x00) {
                console.debug(`first value of EM is not 0x00, but ${EM[0]}`);
                throw RangeError('Decryption Error');
            }

            if (EM[1] !== 0x02) {
                console.debug(`second value of EM is not 0x02, but ${EM[1]}`);
                throw RangeError('Decryption Error');
            }

            let j = 2;
            while (EM[j++] !== 0x00);
            j--;

            if (j - 2 < 8) {
                console.debug(`PS values of EM are less than 8`);
                throw RangeError('Decryption Error');
            }
            
            if (EM[j++] !== 0x00) {
                console.debug(`no 0x00 octet to separate PS from M`);
                throw RangeError('Decryption Error');
            }

            return {
                octets: EM.slice(j),
                mLen: mLen - j
            };
        }

        /**
         * Wrapper method to encryppt a string.
         * The string is converted in bytes with the
         * `TextEncoder` api and then encrypted with
         * {@link MyRSA.encryptRSA()}. Assumes that a valid
         * public key is set.
         * @public
         * @param {string} str The string to encrypt.
         * @returns {Block} The encrypted data
         */
        encryptText(str) {

            if ('string' !== typeof str) {
                throw new TypeError(`${str} is not a valid string!`);
            }

            const bytes = new TextEncoder().encode(str);
            return MyRSA.encryptRSA(this.getPublicKey(), {
                octets: bytes,
                mLen: bytes.length
            });
        }

        /**
         * Wrapper method to decrypt a block.
         * The Uin8array is decrypted with {@link MyRSA.decryptRSA()}
         * and then converted to string with the `TextDecoder` api. Assumes that a valid
         * private key is set.
         * @public
         * @param {Block} cipher The encrypted data.
         * @returns {string} The decrypted string.
         */
        decryptText(cipher) {

            if ('object' !== typeof cipher || !(cipher.octets instanceof Uint8Array) || !Number.isSafeInteger(cipher.mLen) || cipher.mLen < 1) {
                throw new TypeError(`${cipher} is not a valid data block!`);
            }

            const { octets: bytes } = MyRSA.decryptRSA(this.getPrivateKey(), cipher);
            return new TextDecoder().decode(bytes);
        }
    }

    if ('undefined' !== typeof module && module.exports) {
        module.exports = MyRSA;
    } else {
        window.MyRSA = MyRSA;
    }
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('crypto').randomFillSync] : [MyBigInt, crypto.getRandomValues.bind(crypto)]);
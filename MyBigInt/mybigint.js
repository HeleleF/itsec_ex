let getRandValues;
if ('function' === typeof require) {

    // NodeJS, import crypto API
    const crypt = require('crypto');
    getRandValues = crypt.randomFillSync;
} else {

    // Browser, bind existing function
    getRandValues = crypto.getRandomValues.bind(crypto);
}

/**
 * @typedef {Object} SIGN
 * @property {Symbol} PP The quotient
 * @property {Symbol} PN The quotient
 * @property {Symbol} NP The quotient
 * @property {Symbol} NN The quotient
 */
const SIGN = Object.freeze({
    PP: Symbol('pospos'),
    PN: Symbol('posneg'),
    NP: Symbol('negpos'),
    NN: Symbol('negneg'),
});

/**
 * base
 */
const BASE = 8;

/**
 * mask
 */
const MASK = 0xFF;

/**
 * highest bit mask
 */
const HIGH_BIT = 0x80;

/**
 * shift
 */
const HIGH_SHIFT = 7;

/**
 * default array size
 */
const INIT_SIZE = 400;

/**
 * maximum bit length
 */
const MAX_BIT_LENGTH = 10000;

/**
 * For array sizes larger than this, use Karatsuba multiplication
 * TODO: Needs Testing for optimal value
 */
const KARATSUBA_LIMIT = 50;

/**
 * Default number of rounds for prime tests
 */
const DEFAULT_ROUNDS = 2;

/**
 * Maximum number of rounds for prime tests
 */
const MAX_ROUNDS = 38;

/**
 * A 8-bit unsigned int
 * @typedef {number} Cell
 */

/**
 * A 16-bit unsigned int
 * @typedef {number} Cell2
 */

/**
 * @typedef {Object} Divmod
 * @property {MyBigInt} q The quotient
 * @property {MyBigInt} r The rest
 */

/**
 * Used in @see split()
 * @typedef {Object} Split
 * @property {MyBigInt} first The first MyBigInt
 * @property {MyBigInt} second The second MyBigInt
 */

/**
 * Used in @see egcd()
 * @typedef {Object} Egcd
 * @property {MyBigInt} gcd The greatest common divisor
 * @property {MyBigInt} u The first factor of the linear combination
 * @property {MyBigInt} v The second factor of the linear combination
 */

/**
 * The main BigInt Class
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
class MyBigInt {

    /**
     * Zero as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Zero as MyBigInt.
     */
    static ZERO() {
        return new MyBigInt(1, 0, true);
    }

    /**
     * One as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} One as MyBigInt.
     */
    static ONE() {
        return new MyBigInt(1, 1, true);
    }

    /**
     * Two as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Two as MyBigInt.
     */
    static TWO() {
        return new MyBigInt(1, 2, true);
    }

    /**
     * Three as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Three as MyBigInt.
     */
    static THREE() {
        return new MyBigInt(1, 3, true);
    }

    /**
     * Four as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Four as MyBigInt.
     */
    static FOUR() {
        return new MyBigInt(1, 4, true);
    }

    /**
     * Ten as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Ten as MyBigInt.
     */
    static TEN() {
        return new MyBigInt(1, 10, true);
    }

    /**
     * Sixteen as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt} Sixteen as MyBigInt.
     */
    static SIXTEEN() {
        return new MyBigInt(1, 16, true);
    }

    /**
     * Array of the first 50 primes as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt[]} Array of the first 50 primes as MyBigInt.
     */
    static PRIMES50() {

        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229];
        return primes.map(p => new MyBigInt(1, p, true));
    }

    /**
     * Array of the primes to 100 as MyBigInt.
     * @public
     * @static
     * @returns {MyBigInt[]} Array of the primes to 100 as MyBigInt.
     */
    static PRIMES_TO_100() {

        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
        return primes.map(p => new MyBigInt(1, p, true));
    }

    /**
     * Array of the primes to 38 as MyBigInt.
     * Used for default bases in primality tests.
     * @public
     * @static
     * @returns {MyBigInt[]} Array of the primes to 38 as MyBigInt.
     */
    static PRIMES_TO_38() {

        const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
        return primes.map(p => new MyBigInt(1, p, true));
    }

    /**
     * Constructs a new MyBigInt object.
     * @param {number} size The length of the array
     * @param {MyBigInt | number | Uint8Array | Uint16Array} [init] The initial value(s), optional.
     * @param {boolean} s The sign, negative is `FALSE`.
     */
    constructor(size, init, s) {

        this.value = new Uint16Array(size);
        this.spart = 1;
        this.sign = s;

        if (init instanceof MyBigInt) {

            // prevent RangeError
            if (init.value.length > size) {
                this.value = new Uint16Array(init.value.length);
            }
            this.value.set(init.value, 0)
            this.spart = init.spart;

        } else if (init instanceof Uint8Array || init instanceof Uint16Array) {

            // prevent RangeError
            if (init.length > size) {
                this.value = new Uint16Array(init.length);
            }
            this.value.set(init, 0);
            this.reduce();

        } else if (Number.isSafeInteger(init) && init >= 0 && init < 2 ** BASE) {
            this.value[0] = init;
        }
    }

    /**
     * Helper method to convert a MyBigInt to a 
     * javascript number. This will be inaccurate
     * if the value is larger than `2^53 - 1`
     * or smaller than `-(2^53 - 1)` due to the way
     * javascript numbers work internally.
     * @public
     * @returns {number} This MyBigInt as a number.
     */
    toNumber() {
        return parseInt(this.toString(), 10);
    }

    /**
     * Parses the MyBigInt into a string containing decimals.
     * @public
     * @returns {string} The MyBigInt as a decimal string.
     */
    toString() {

        if (this.eqz()) return '0';

        let res = [],
            a = this.copy(),
            r,
            tmp;

        const TEN = MyBigInt.TEN();

        while (a.neqz()) {

            tmp = a._divmod(TEN, a.sign, false);

            a = tmp.q;
            r = tmp.r;

            res.unshift(r.value[0]);
        }

        if (!this.sign) res.unshift('-');
        return res.join('');
    }

    /**
     * Parses the MyBigInt into a string containing hexadecimals.
     * @public
     * @returns {string} The MyBigInt as a hexadecimal string (uppercase!).
     */
    toString16() {

        if (this.eqz()) return '0';

        let res = [],
            a = this.copy(),
            r,
            tmp;

        const SIXTEEN = MyBigInt.SIXTEEN();

        while (a.neqz()) {

            tmp = a._divmod(SIXTEEN, a.sign, false);

            a = tmp.q;
            r = tmp.r;

            // turn 10-15 into A-F
            res.unshift(r.value[0].toString(16));
        }

        if (!this.sign) res.unshift('-');
        return res.join('').toUpperCase();
    }

    /**
     * Parses a decimal string into MyBigInt
     * using the horner-method.
     * Cell addition is done with the unsafe {@link _addCell2()} method
     * to be faster. 
     * @public
     * @static
     * @param {string} str A string representing a decimal.
     * @returns {MyBigInt} The created MyBigInt.
     */
    static fromString(str) {

        if ('string' !== typeof str || !/^\-?[0-9]+$/g.test(str)) {
            throw new TypeError('Input must be a string containing decimals!');
        }

        // determine sign and remove it
        let newSign = '-' !== str.charAt(0);
        if (!newSign) str = str.substring(1);

        // strip leading zeros
        str = str.replace(/^0+(?=\d)/, '');

        // horner method with base 10
        // +str.charAt(i) converts the digit at index i from string to number
        let len = str.length,
            c = new MyBigInt(INIT_SIZE, +str.charAt(0), newSign);

        for (let i = 1; i < len; i++) {
            c = c.mul10();
            c._addCell2(0, +str.charAt(i));
        }
        return c._safeZero();
    }

    /**
     * Parses a hexstring into MyBigInt
     * using the horner-method.
     * Cell addition is done with the unsafe {@link _addCell2()} method
     * to be faster. 
     * @public
     * @static
     * @param {string} hexstr A string representing a hexadecimal (can be upper- or lowercase).
     * @returns {MyBigInt} The created MyBigInt.
     */
    static fromString16(hexstr) {

        if ('string' !== typeof hexstr || !/^\-?[0-9a-fA-F]+$/g.test(hexstr)) {
            throw new TypeError('Input must be a string containing hexadecimals!');
        }

        // determine sign and remove it
        let newSign = '-' !== hexstr.charAt(0);
        if (!newSign) hexstr = hexstr.substring(1);

        // strip leading zeros
        hexstr = hexstr.replace(/^0+(?=\d)/, '');

        // horner method with base 16
        let len = hexstr.length,
            c = new MyBigInt(INIT_SIZE, parseInt(hexstr.charAt(0), 16), newSign);

        for (let i = 1; i < len; i++) {
            c = c.shiftLeft(4);
            c._addCell2(0, parseInt(hexstr.charAt(i), 16));
        }
        return c._safeZero();
    }

    /**
     * Helper method for MyBigInt relations.
     * @private
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {0 | 1 | -1} 0 if equal, 1 if greater, -1 if smaller.
     */
    _compare(bigval) {

        // make sure that -0 and +0 are 'equal'
        if (this.eqz() && bigval.eqz()) return 0;

        if (this.sign !== bigval.sign) return this.sign ? 1 : -1;

        MyBigInt.sameSize(this, bigval);

        let i = this.spart - 1;
        while (this.value[i] !== undefined && this.value[i] === bigval.value[i]) i--;

        this.reduce();
        bigval.reduce();

        if (i === -1) {
            return 0;
        } else {
            return this.value[i] > bigval.value[i] ? (this.sign ? 1 : -1) : (this.sign ? -1 : 1);
            // return this.value[i] > bigval.value[i] XOR this.sign ? -1 : 1;
        }
    }

    /**
     * Less-or-equal relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is less than or equal to `bigval`.
     */
    le(bigval) {
        return this._compare(bigval) !== 1;
    }

    /**
     * Less-than relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is less than `bigval`.
     */
    lt(bigval) {
        return this._compare(bigval) === -1;
    }

    /**
     * Equal relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is equal to `bigval`.
     */
    eq(bigval) {
        return this._compare(bigval) === 0;
    }

    /**
     * Not-equal relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is not equal to `bigval`.
     */
    neq(bigval) {
        return this._compare(bigval) !== 0;
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * If we only need to check for Zero, this is faster and more convenient
     * than creating a new MyBigInt with Zero and using {@link eq()} after.
     * The sign is irrelevant, so that -0 and +0 are the same.
     * @public
     * @returns {boolean} Whether `this` is equal to zero.
     */
    eqz() {
        this.reduce();
        return (this.spart === 1 && this.value[0] === 0);
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * If we only need to check for (positive) One, this is faster and more convenient
     * than creating a new MyBigInt with One and using {@link eq()} after.
     * The sign is relevant, so this only returns True for +1.
     * @public
     * @returns {boolean} Whether `this` is equal to positive one.
     */
    eqo() {
        this.reduce();
        return (this.spart === 1 && this.value[0] === 1 && this.sign);
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * The sign is relevant, so this only returns True for +2.
     * @public
     * @returns {boolean} Whether `this` is equal to positive two.
     */
    eq2() {
        this.reduce();
        return (this.spart === 1 && this.value[0] === 2 && this.sign);
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * The sign is relevant, so this only returns True for +3.
     * @public
     * @returns {boolean} Whether `this` is equal to positive three.
     */
    eq3() {
        this.reduce();
        return (this.spart === 1 && this.value[0] === 3 && this.sign);
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * @public
     * @returns {boolean} Whether `this` is not equal to zero.
     */
    neqz() {
        return !this.eqz();
    }

    /**
     * Convenience method.
     * This does not modify the MyBigInt.
     * @public
     * @returns {boolean} Whether `this` is not equal to positive one.
     */
    neqo() {
        return !this.eqo();
    }

    /**
     * Greater-or-equal relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is greater than or equal to `bigval`.
     */
    ge(bigval) {
        return this._compare(bigval) !== -1;
    }

    /**
     * Greater-than relation for MyBigInt.
     * This does not modify the MyBigInts.
     * @public
     * @param {MyBigInt} bigval The MyBigInt to compare.
     * @returns {boolean} Whether `this` is greater than `bigval`.
     */
    gt(bigval) {
        return this._compare(bigval) === 1;
    }

    /**
     * Returns the absolute value of this MyBigInt.
     * For positive MyBigInts, this is the same as {@link copy()}.
     * @public
     * @returns {MyBigInt} The absolute value of `this`.
     */
    abs() {
        return new MyBigInt(this.spart, this, true);
    }

    /**
     * Convenience function.
     * To prevent errors happening with +0 / -0, turn every 0 to +0.
     * This modifies the MyBigInt.
     * @private
     * @returns {MyBigInt} `this`
     */
    _safeZero() {
        if (this.eqz()) this.sign = true;
        return this;
    }

    /**
     * This does not modify the MyBigInt.
     * @public
     * @returns {boolean} True if `this` is even.
     */
    even() {
        return !(this.value[0] & 0x1);
    }

    /**
     * This does not modify the MyBigInt.
     * @public
     * @returns {boolean} True if `this` is odd.
     */
    odd() {
        return !!(this.value[0] & 0x1);
    }

    /**
     * Squares `this`.
     * This is faster than using the multiplication method.
     * This does not modify the MyBigInt.
     * @public
     * @returns {MyBigInt} The squared MyBigInt.
     */
    square() {
        let tmp,
            aspart = this.spart,
            c = new MyBigInt(2 * aspart + 1, 0, true);

        for (let i = 0; i < aspart; i++) {
            for (let j = i + 1; j < aspart; j++) {
                tmp = this.value[i] * this.value[j];
                c._addCell2(i + j, tmp);
                c._addCell2(i + j, tmp);
            }

            tmp = this.value[i] * this.value[i];
            c._addCell2(2 * i, tmp);
        }
        return c.reduce();
    }

    /**
     * Faster than multiplication method.
     * If the exponent is a number, it will be
     * converted into a MyBigInt first.
     * @public
     * @param {number | MyBigInt} exp The exponent.
     * @returns {MyBigInt} The new MyBigInt.
     */
    pow(exp) {

        let n;

        if (Number.isSafeInteger(exp) && exp >= 0) {
            n = MyBigInt.fromString(`${exp}`);
        } else {
            n = exp.copy();
        }

        // 0^n is always 0, except for n=0, which is 1
        if (this.eqz()) {
            return n.eqz() ? MyBigInt.ONE() : MyBigInt.ZERO();
        }
        // 1^n is always 1
        if (this.eqo()) return MyBigInt.ONE();

        let c = MyBigInt.ONE(),
            t = this.copy(),
            bit;

        if (!n.sign) throw new RangeError('Exponent must not be negative!');

        while (n.neqz()) {
            bit = n._shiftRight();

            if (bit) {
                c = c.mul(t);
            }
            t = t.square();
        }
        return c.reduce();
    }

    /**
     * Shifts MyBigInt one bit right.
     * The MyBigInt is modfied, because instead of
     * the division result, the shifted bit is returned.
     * This is equivalent to Division with 2.
     * @private
     * @returns {0 | 1} The shifted bit.
     */
    _shiftRight() {
        let low,
            aspart = this.spart,
            nvalues = new Uint16Array(aspart),
            lowest = (this.value[0] & 0x1);

        for (let i = 0; i < aspart - 1; i++) {
            low = (this.value[i + 1] & 0x1);
            nvalues[i] = (((this.value[i] >> 1) & ~HIGH_BIT) | (low << HIGH_SHIFT));
        }

        nvalues[aspart - 1] = (this.value[aspart - 1] >> 1);
        this.value = nvalues;
        this._safeZero();
        return lowest;
    }

    /**
     * Shifts MyBigInt `k` bit right.
     * The MyBigInt is not modfied.
     * This is equivalent to Division with 2^k.
     * @public
     * @param {number} k Number of bits to shift right
     * @returns {MyBigInt} The result of the right-shift.
     */
    shiftRight(k) {

        if (!(Number.isSafeInteger(k) && k > 0)) {
            throw new RangeError(`k must be a positive integer!`);
        }

        let r = this.copy();

        for (let i = 0; i < k; i++) {
            r._shiftRight();
        }
        return r._safeZero();
    }

    /**
     * Power with modulo
     * @public
     * @param {MyBigInt} exp The exponent.
     * @param {MyBigInt} m The modulo.
     * @returns {MyBigInt} The result.
     */
    powMod(exp, m) {

        if (!exp.sign) throw new RangeError('Exponent must not be negative!');
        if (!m.sign || m.eqz()) throw new RangeError('Modulo must not be negative or zero!');

        // 0^exp (mod m) is always 0, except for exp=0, which is 1 (mod m)
        // 1 (mod m) is always 1, except for m = 1, which is 0
        if (this.eqz()) {
            return exp.eqz() ? (m.eqo() ? MyBigInt.ZERO() : MyBigInt.ONE()) : MyBigInt.ZERO();
        }
        // 1^n (mod m) is always 1 (mod m)
        // 1 (mod m) is always 1, except for m = 1, which is 0
        if (this.eqo()) return m.eqo() ? MyBigInt.ZERO() : MyBigInt.ONE();

        // n^exp (mod n) is 0 for all positive exp
        if (this.eq(m)) return exp.eqz() ? MyBigInt.ONE() : MyBigInt.ZERO();

        let bit, res = MyBigInt.ONE(),
            n = exp.copy(),
            t = this.copy();

        while (n.neqz()) {
            bit = n._shiftRight();

            if (bit) {
                res = res.mul(t).divmod(m).r;
            }
            t = t.square().divmod(m).r;
        }
        return res.reduce();
    }

    /**
     * Power with prime modulo.
     * @public
     * @param {MyBigInt} n The exponent.
     * @param {MyBigInt} p The modulo (prime).
     * @returns {MyBigInt} The result.
     */
    powModPrim(n, p) {

        if (!n.sign) throw new RangeError('Exponent must not be negative!');
        if (!p.sign || p.eqz()) throw new RangeError('Modulo must not be negative or zero!');

        const one = MyBigInt.ONE();

        if (n.lt(p.sub(one))) {
            return this.powMod(n, p);
        }

        if (this.lt(p)) {
            return this.powMod(n.divmod(p.sub(one)).r, p);
        }

        if (MyBigInt.gcd(this, p).eqo()) {
            n = n.divmod(p.sub(one)).r;
        }
        return this.powMod(n, p);
    }

    /**
     * Returns the greatest common divisor (gcd) of
     * A and B. This does not modify the MyBigInts.
     * @public
     * @static
     * @param {MyBigInt} A The first value.
     * @param {MyBigInt} B The second value.
     * @returns {MyBigInt} The greatest common divisor of A and B.
     */
    static gcd(A, B) {

        if (!(A instanceof MyBigInt && B instanceof MyBigInt)) {
            throw new TypeError('Only works for MyBigInts');
        }

        // gcd(0, 0) is not defined
        if (A.eqz() && B.eqz()) throw new RangeError('gcd(0,0) is not defined!');

        // gcd(0, x) = gcd(x, 0) = |x| for x =/= 0
        if (A.eqz()) return B.abs();
        if (B.eqz()) return A.abs();

        // gcd(a, b) = gcd(|a|, |b|)
        let k, a = A.abs(),
            b = B.abs();

        for (k = 0; a.even() && b.even(); k++) {
            a._shiftRight();
            b._shiftRight();
        }

        while (a.neqz()) {

            while (a.even()) a._shiftRight();
            while (b.even()) b._shiftRight();

            if (a.lt(b)) {
                [a, b] = [b, a];
            }

            a = a.sub(b);
        }
        return b.shiftLeft(k);
    }

    /**
     * Returns the greatest common divisor (gcd) of
     * A and B and its linear combination. This is the binary version,
     * which is slightly faster than {@link egcdSlow()}.
     * Used for {@link mulInvers()}.
     * This does not modify the MyBigInts.
     * @public
     * @static
     * @param {MyBigInt} A The first value.
     * @param {MyBigInt} B The second value.
     * @returns {Egcd} The greatest common divisor of A and B and its linear combination.
     */
    static egcd(A, B) {

        if (!(A instanceof MyBigInt && B instanceof MyBigInt)) {
            throw new TypeError('Only works for MyBigInts');
        }

        if (!A.sign || !B.sign) {
            throw new RangeError('Only works for non-negative values');
        }

        // egcd(0, 0) is not defined
        if (A.eqz() && B.eqz()) throw new RangeError('egcd(0,0) is not defined!');

        // gcd(0, x) = gcd(x, 0) = |x| for x =/= 0
        if (A.eqz()) {
            return {
                gcd: B.abs(),
                u: MyBigInt.ZERO(),
                v: MyBigInt.ONE()
            };
        }
        if (B.eqz()) {
            return {
                gcd: A.abs(),
                u: MyBigInt.ONE(),
                v: MyBigInt.ZERO()
            };
        };

        let k, a = A.copy(),
            b = B.copy();

        for (k = 0; a.even() && b.even(); k++) {
            a._shiftRight();
            b._shiftRight();
        }

        let au, av, bu, bv, x, y;

        au = bv = MyBigInt.ONE();
        av = bu = MyBigInt.ZERO();

        x = a.copy(); // x = a * au + b * av
        y = b.copy(); // y = a * bu + b * bv

        while (x.neqz()) {

            // (1) while x is even...
            while (x.even()) {

                // (1.1) divide x by 2
                x._shiftRight();

                // (1.2) divide linear combination of x by two as well
                if (au.even() && av.even()) {
                    au._shiftRight();
                    av._shiftRight();
                } else {
                    au = au.add(b);
                    au._shiftRight();
                    av = av.sub(a);
                    av._shiftRight();
                }
            }

            // (2) x is now odd

            // (3) while y is even...
            while (y.even()) {

                // (3.1) divide y by 2
                y._shiftRight();

                // (3.2) divide linear combination of y by two as well
                if (bu.even() && bv.even()) {
                    bu._shiftRight();
                    bv._shiftRight();
                } else {
                    bu = bu.add(b);
                    bu._shiftRight();
                    bv = bv.sub(a);
                    bv._shiftRight();
                }
            }

            // (4) Both x and y are now odd

            if (x.lt(y)) {
                y = y.sub(x);
                bu = bu.sub(au);
                bv = bv.sub(av);
            } else {
                x = x.sub(y);
                au = au.sub(bu);
                av = av.sub(bv);
            }

            // (5) Either x or y is now even again
        }

        return {
            gcd: y.shiftLeft(k),
            u: bu,
            v: bv
        };
    }

    /**
     * Returns the greatest common divisor (gcd) of
     * A and B and its linear combination.
     * This is the 'classic' variant used for testing.
     * This does not modify the MyBigInts.
     * @public
     * @static
     * @param {MyBigInt} A The first value.
     * @param {MyBigInt} B The second value.
     * @returns {Egcd} The greatest common divisor of A and B and its linear combination.
     */
    static egcdSlow(A, B) {

        if (!(A instanceof MyBigInt && B instanceof MyBigInt)) {
            throw new TypeError('Only works for MyBigInts');
        }

        if (!A.sign || !B.sign) {
            throw new RangeError('Only works for non-negative values');
        }

        // egcd(0, 0) is not defined
        if (A.eqz() && B.eqz()) throw new RangeError('egcd(0,0) is not defined!');

        // gcd(0, x) = gcd(x, 0) = |x| for x =/= 0
        if (A.eqz()) {
            return {
                gcd: B.abs(),
                u: MyBigInt.ZERO(),
                v: MyBigInt.ONE()
            };
        }
        if (B.eqz()) {
            return {
                gcd: A.abs(),
                u: MyBigInt.ONE(),
                v: MyBigInt.ZERO()
            };
        };

        let x0, x1, y0, y1, a, b, q;

        x1 = y0 = MyBigInt.ONE();
        x0 = y1 = MyBigInt.ZERO();

        a = A.copy();
        b = B.copy();
        
        while (a.neqz()) {
            const { q: div, r: mod } = b.divmod(a);
            [q, b, a] = [div, a, mod];
            [y0, y1] = [y1, y0.sub(q.mul(y1))];
            [x0, x1] = [x1, x0.sub(q.mul(x1))];
        }

        return {
            gcd: b,
            u: x0,
            v: y0
        };
    }

    /**
     * Returns the multiplicative inverse (mod `M`) for `this` MyBigInt.
     * The Inverse element satisfies 0 <= `inv` < `|M|`.
     * @public
     * @param {MyBigInt} M The module
     * @returns {MyBigInt | null} The multiplicative inverse for `this`, if it exists, else `null`.
     */
    mulInvers(M) {

        if (this.eqz()) {
            throw new TypeError(`0 has no inverse element for multiplication modulo ${M.toString()}!`);
        }

        if (M.eqz()) {
            throw new TypeError('Modulo 0 is not allowed!');
        }

        let {
            gcd: gcd,
            u: invA
        } = MyBigInt.egcd(this, M);

        if (!gcd.eqo()) {
            console.warn(`${this.toString()} has no inverse element for multiplication modulo ${M.toString()}!`);
            return null;
        }

        const absM = M.abs();

        // if negative, add modul to satisfy 0 <= inv
        while (!invA.sign) {
            invA = invA.add(absM);
        }

        // if >= |M|, subtract modul to satisfy inv < |M|
        while (invA.ge(absM)) {
            invA = invA._sub(absM, true);
        }
        return invA;
    }

    /**
     * Sets `spart` to the number of non-zero cells
     * and returns the MyBigInt.
     * This modifies the MyBigInt.
     * @private
     * @returns {MyBigInt} The reduced MyBigInt.
     */
    reduce() {

        let i = this.value.length;
        while (this.value[--i] === 0);

        this.spart = ++i > 0 ? i : 1;
        return this;
    }

    /**
     * Expands the cell array to a bigger size,
     * if necessary. New cells are zero.
     * This modifies the MyBigInt.
     * @private
     * @param {number} sz The new size of the cell array.
     * @returns {MyBigInt} The expanded MyBigInt.
     */
    expand(sz) {

        if (!Number.isSafeInteger(sz) || sz < 1) {
            throw new RangeError('sz must be a non-negative number!');
        }

        if (sz > this.value.length) {

            const i = this.value.length;
            const oldvalues = this.value.slice();

            this.value = new Uint16Array(sz + i);
            this.value.set(oldvalues, 0);
        }

        this.spart = sz;
        return this;
    }

    /**
     * Tries to resizes the MyBigInt to the given size
     * and returns it.
     * This modifies the MyBigInt.
     * @private
     * @param {number} nsize The new size for `spart`.
     * @returns {MyBigInt} The reiszed MyBigInt.
     */
    resize(nsize) {

        if (!Number.isSafeInteger(nsize) || nsize < 1) {
            throw new TypeError('Size must be a number!');
        }

        if (this.spart > nsize) {
            return this.reduce();

        } else if (this.spart < nsize) {
            return this.expand(nsize);

        } else {
            return this;
        }
    }

    /**
     * Modifies two MyBigInts to have the 
     * same `spart`. This modifies the MyBigInts.
     * @private
     * @static
     * @param {MyBigInt} a The first MyBigInt.
     * @param {MyBigInt} b The second MyBigInt.
     */
    static sameSize(a, b) {

        if (a.spart > b.spart) {
            b.resize(a.spart);

        } else if (a.spart < b.spart) {
            a.resize(b.spart);
        }
    }

    /**
     * Returns the sign combination of two
     * MyBigInts. Can be PP, NN, NP or PN.
     * Used for doing arithmetic without sign bits.
     * @private
     * @static
     * @param {MyBigInt} a The first MyBigInt.
     * @param {MyBigInt} b The second MyBigInt.
     * @returns {SIGN} The sign combination.
     */
    static lookAtSign(a, b) {

        a._safeZero();
        b._safeZero();

        if (a.sign && b.sign) return SIGN.PP;
        else if (a.sign && !b.sign) return SIGN.PN;
        else if (!a.sign && b.sign) return SIGN.NP;
        else return SIGN.NN;
    }

    /**
     * Helper method for addition.
     * @private
     * @param {MyBigInt} bigval The summand.
     * @param {boolean} sign The sign of the result.
     * @returns {MyBigInt} The resulting sum.
     */
    _add(bigval, sign) {

        let a = this.copy(),
            b = bigval.copy();

        MyBigInt.sameSize(a, b);

        let tmp, over = 0,
            aspart = a.spart;

        let c = new MyBigInt(aspart + 1, undefined, sign);

        for (let i = 0; i < aspart; i++) {
            tmp = a.value[i] + b.value[i] + over;
            c.value[i] = (tmp & MASK);
            over = (tmp >> BASE) & MASK;
        }

        c.value[aspart] = over;
        return c._safeZero();
    }

    /**
     * Basic addition for MyBigInts.
     * Assumes that `bigval` is a valid MyBigInt.
     * The actual addition happens in {@link _add()}.
     * @public
     * @param {MyBigInt} bigval The summand.
     * @returns {MyBigInt} The resulting sum.
     */
    add(bigval) {

        switch (MyBigInt.lookAtSign(this, bigval)) {

            case SIGN.PP:
                return this._add(bigval, true);

            case SIGN.PN:
                if (this.le(bigval.abs())) {
                    return bigval._sub(this, false);
                } else {
                    return this._sub(bigval, true);
                }

            case SIGN.NP:
                if (this.abs().le(bigval)) {
                    return bigval._sub(this, true);
                } else {
                    return this._sub(bigval, false);
                }

            case SIGN.NN:
                return this._add(bigval, false);

            default:
                throw new TypeError('Invalid sign combination!');
        }
    }

    /**
     * Helper method for subtraction.
     * @private
     * @param {MyBigInt} bigval The subtrahend.
     * @param {boolean} sign The sign of the result.
     * @returns {MyBigInt} The resulting difference.
     */
    _sub(bigval, sign) {

        let a = this.copy(),
            b = bigval.copy();

        MyBigInt.sameSize(a, b);

        let tmp, over = 0,
            aspart = a.spart;

        let c = new MyBigInt(aspart + 1, undefined, sign);

        for (let i = 0; i < aspart; i++) {
            tmp = a.value[i] - b.value[i] + over;
            c.value[i] = (tmp & MASK);
            over = (tmp >> BASE);
        }

        return c._safeZero();
    }

    /**
     * Basic subtraction for MyBigInts.
     * Assumes that `bigval` is a valid MyBigInt.
     * The actual subtraction happens in {@link _sub()}.
     * @public
     * @param {MyBigInt} bigval The subtrahend.
     * @returns {MyBigInt} The resulting difference.
     */
    sub(bigval) {

        switch (MyBigInt.lookAtSign(this, bigval)) {

            case SIGN.PP:
                if (this.le(bigval)) {
                    return bigval._sub(this, false);
                } else {
                    return this._sub(bigval, true);
                }

            case SIGN.PN:
                return this._add(bigval, true);

            case SIGN.NP:
                return this._add(bigval, false);

            case SIGN.NN:
                if (this.abs().le(bigval.abs())) {
                    return bigval._sub(this, true);
                } else {
                    return this._sub(bigval, false);
                }

            default:
                throw new TypeError('Invalid sign combination!');
        }
    }

    /**
     * Helper method for multiplication.
     * This uses the school method to multipy numbers
     * with two for-loops.
     * @private
     * @param {MyBigInt} bigval The factor.
     * @param {boolean} sign The sign of the result.
     * @returns {MyBigInt} The product.
     */
    _mulSchool(bigval, sign) {

        let a = this.copy(),
            b = bigval.copy();

        MyBigInt.sameSize(a, b);

        let tmp, aspart = a.spart;

        let c = new MyBigInt(2 * aspart + 1, undefined, sign);

        for (let i = 0; i < b.spart; i++) {
            for (let j = 0; j < aspart; j++) {
                tmp = a.value[j] * b.value[i];
                c._addCell2(i + j, tmp);
            }
        }
        return c._safeZero();
    }

    /**
     * Basic (school) multiplication for MyBigInts.
     * Assumes that `bigval` is a valid MyBigInt.
     * The actual multiplication happens in {@link _mulSchool()}.
     * @public
     * @param {MyBigInt} bigval The factor.
     * @returns {MyBigInt} The product.
     */
    mulSchool(bigval) {

        switch (MyBigInt.lookAtSign(this, bigval)) {

            case SIGN.PP:
            case SIGN.NN:
                return this._mulSchool(bigval, true);

            case SIGN.PN:
            case SIGN.NP:
                return this._mulSchool(bigval, false);

            default:
                throw new TypeError('Invalid sign combination!');
        }
    }

    /**
     * Splits `this` MyBigInt into two parts `f` and `s`, so that
     * `f` * `2^(BASE*part)` + `s` = `this`.
     * Helper method used in {@link mul()}.
     * @private
     * @param {number} part Length of the parts.
     * @returns {Split} The MyBigInt split into two parts.
     */
    split(part) {

        let a = new MyBigInt(part, undefined, this.sign),
            b = new MyBigInt(part, undefined, this.sign);

        a.value = this.value.slice(part, this.spart);
        b.value = this.value.slice(0, part);

        return {
            first: a.reduce(),
            second: b.reduce()
        };
    }

    /**
     * Helper method for Karatsuba multiplication.
     * For smaller MyBigInts, the school method {@link mulSchool()} is used.
     * The cutoff is defined in `KARATSUBA_LIMIT`.
     * @private
     * @param {MyBigInt} bigval The factor.
     * @param {boolean} sign The sign of the result.
     * @returns {MyBigInt} The product.
     */
    _mul(bigval, sign) {

        if (this.spart <= KARATSUBA_LIMIT) {
            return this._mulSchool(bigval, sign);
        }

        MyBigInt.sameSize(this, bigval);

        let aspart = this.spart,
            part = (aspart >> 1);

        const { first: D, second: E } = this.split(part);
        const { first: F, second: G } = bigval.split(part);
        
        const K = D.add(E);
        const L = F.add(G);

        const z0 = E._mul(G, sign);
        const z1 = K._mul(L, sign);
        const z2 = D._mul(F, sign);

        const zDiff = z1.sub(z2).sub(z0);

        const x = z2.shiftLeft(2 * BASE * part);

        const y = zDiff.shiftLeft(BASE * part);

        const c = x.add(y).add(z0);
        return c._safeZero();
    }

    /**
     * Karatsuba multiplication for MyBigInts.
     * Assumes that `bigval` is a valid MyBigInt.
     * The actual multiplication happens in {@link _mul()}.
     * @public
     * @param {MyBigInt} bigval The factor.
     * @returns {MyBigInt} The product.
     */
    mul(bigval) {

        switch (MyBigInt.lookAtSign(this, bigval)) {

            case SIGN.PP:
            case SIGN.NN:
                return this._mul(bigval, true);

            case SIGN.PN:
            case SIGN.NP:
                return this._mul(bigval, false);

            default:
                throw new TypeError('Invalid sign combination!');
        }

    }

    /**
     * Faster multiplication with 10.
     * Instead of using the slow 'loop-multiplication',
     * this function uses shifting and addition.
     * 0. Save original number
     * 1. Shift number two bits left (equals multiplication with `2^2=4`)
     * 2. Add original number
     * 3. Shift one bit left (equals multiplication with `2^1=2`)
     * @public
     * @returns {MyBigInt} The MyBigInt multiplied by 10.
     */
    mul10() {

        let that = this;
        return this.shiftLeft(2).add(that).shiftLeft(1);
    }

    /**
     * Helper method for division
     * Divides `this` MyBigInt by `bigval` and returns `q` and `r`
     * with `this = q * bigval + r`.
     * By default, the mathematical constraint for `r`: `0 <= r < |bigval|`
     * is enforced. 
     * @private
     * @param {MyBigInt} bigval The divisor.
     * @param {boolean} sign The sign of the result.
     * @param {boolean} [math=true] Whether the mathematical definition of Modulo should be enforced, default TRUE.
     * @returns {Divmod} The quotient `q` and the remainder `r`.
     */
    _divmod(bigval, sign, math = true) {

        if (bigval.eqz()) {
            throw new RangeError('Division by Zero!');
        }

        let aspart = this.spart,
            bspart = bigval.spart,
            l = aspart - bspart,
            e,
            tmp;

        let q = new MyBigInt(aspart, 0, sign);

        let a = this.copy(),
            b = bigval.abs(); // (a MOD -b) is the same as (a MOD b)

        // this is smaller than bigval, return it as remainder.
        if (aspart < bspart || (aspart === bspart && this.abs().lt(b))) {

            if (math) {
                const one = MyBigInt.ONE();

                // normalize rest
                while (!a.sign && a.neqz()) {
                    a = a.add(b);
                    q = bigval.sign ? q.sub(one) : q.add(one);
                }
            }

            return {
                q: q._safeZero(),
                r: a
            };
        }

        let r = new MyBigInt(aspart, 0, true);

        for (let i = 0; i < bspart; i++) {
            r.value[i] = a.value[l + i];
        }

        for (let i = l; i >= 0; i--) {

            // estimate
            e = r._estimate(b);
            tmp = b._mulCell(e);

            // correct estimation if necessary
            if (tmp.neq(r)) {

                while (tmp.gt(r)) {
                    e--;
                    tmp = tmp.sub(b);
                }

                while (r.sub(tmp).gt(b)) {
                    e++;
                    tmp = tmp.add(b);
                }
            }

            q.value[i] = e;
            r = r.sub(tmp);

            if (i !== 0) {
                r = r._mulCell(2 ** BASE);
                r._addCell2(0, a.value[i - 1]);
            }
        }

        r.sign = this.sign;

        if (math) {
            const one = MyBigInt.ONE();

            // normalize rest
            while (!r.sign && r.neqz()) {
                r = r.add(b);
                q = bigval.sign ? q.sub(one) : q.add(one);
            }
        }

        return {
            q: q._safeZero(),
            r: r._safeZero()
        };
    }

    /**
     * Basic division for MyBigInts.
     * Divides `this` MyBigInt by `bigval` and returns `q` and `r`
     * with `this = q * bigval + r`.
     * By default, the mathematical constraint for `r`: `0 <= r < |bigval|`
     * is enforced. Assumes that `bigval` is a valid MyBigInt.
     * The actual division happens in {@link _divmod()}.
     * @public
     * @param {MyBigInt} bigval The divisor.
     * @param {boolean} [math=true] Whether the mathematical definition of Modulo should be enforced, default TRUE.
     * @returns {Divmod} The quotient and the modulo.
     */
    divmod(bigval, math = true) {

        switch (MyBigInt.lookAtSign(this, bigval)) {

            case SIGN.PP:
            case SIGN.NN:
                return this._divmod(bigval, true, math);

            case SIGN.PN:
            case SIGN.NP:
                return this._divmod(bigval, false, math);

            default:
                throw new TypeError('Invalid sign combination!');
        }
    }

    /**
     * 'Unsafe' method to multiply MyBigInt with one Cell.
     * Helper method used in {@link divmod()}.
     * @private
     * @param {Cell} cell An 8bit unsigned int.
     * @returns {MyBigInt} A new MyBigInt.
     */
    _mulCell(cell) {

        let tmp, aspart = this.spart,
            c = new MyBigInt(aspart + 1, 0, this.sign);

        for (let i = 0; i < aspart; i++) {
            tmp = this.value[i] * cell;
            c._addCell2(i, tmp);
        }
        return c._safeZero();
    }

    /**
     * Calculates estimate for division
     * from the first two cells of the dividend
     * and the first cell of the divisor.
     * @private
     * @param {MyBigInt} bigval The divisor.
     * @returns {Cell} The estimated value as an 8bit unsigned int.
     */
    _estimate(bigval) {

        this.reduce();
        bigval.reduce();

        let cell1 = (this.value[this.spart - 1] & MASK),
            cell2 = (this.value[this.spart - 2] & MASK),
            divCell = (bigval.value[bigval.spart - 1] & MASK),
            dividend = cell1;

        if (dividend < divCell) {
            dividend = cell1 * (2 ** BASE) + cell2;
        }

        // perform integer division
        return Math.floor(dividend / divCell);
    }

    /**
     * Shifts `cnt` bits left.
     * This equals multiplication with `2^cnt`.
     * @public
     * @param {number} cnt Number of bits to shift.
     * @returns {MyBigInt} The MyBigInt multiplied by `2^cnt`.
     */
    shiftLeft(cnt) {

        if (!(Number.isSafeInteger(cnt) && cnt >= 0 && cnt < MAX_BIT_LENGTH)) {
            throw new RangeError(`cnt must be a positive integer <${MAX_BIT_LENGTH}!`);
        }

        if (cnt < BASE) return this._shiftLeft(cnt);

        let q = Math.floor(cnt / (BASE - 1)),
            r = cnt % (BASE - 1),
            tmp = this;

        for (let i = 0; i < q; i++) {
            tmp = tmp._shiftLeft(BASE - 1);
        }
        return tmp._shiftLeft(r);
    }

    /**
     * Helper method for Left-Shifting.
     * `cnt` has to be in [0, BASE - 1].
     * Internally used in {@link shiftLeft()}.
     * This equals multiplication with `2^cnt`.
     * @private
     * @param {number} cnt Number of bits to shift.
     * @returns {MyBigInt} The MyBigInt multiplied by `2^cnt`.
     */
    _shiftLeft(cnt) {

        let tmp, over = 0,
            aspart = this.spart,
            c = this.copy();

        for (let i = 0; i < aspart; i++) {
            tmp = (this.value[i] << cnt) + over;
            c.value[i] = (tmp & MASK);
            over = (tmp >> BASE) & MASK;
        }

        c.value[aspart] = over;
        return c.reduce();
    }

    /**
     * 'Unsafe' version of {@link addCell2()}.
     * Here, the calling MyBigInt is modified
     * instead of creating a new one.
     * This method is only intended for {@link _mul()} to be faster.
     * @private
     * @param {number} idx - Where to add `cell2`.
     * @param {Cell2} cell2 - A 16bit unsigned int.
     * @returns {MyBigInt} The result.
     */
    _addCell2(idx, cell2) {

        this.spart++;
        let tmp = 0,
            over = cell2;

        while (over !== 0) {

            tmp = this.value[idx] + (over & MASK);
            this.value[idx++] = (tmp & MASK);
            over = ((tmp >> BASE) & MASK) + ((over >> BASE) & MASK);
        }
        return this.reduce();
    }

    /**
     * Adds `cell2` to the MyBigInt at index `idx`.
     * Here, the calling MyBigInt is not modified
     * Instead, a new one is created and returned.
     * @private
     * @param {number} idx - Where to add `cell2`.
     * @param {Cell2} cell2 - A 16bit unsigned int.
     * @returns {MyBigInt} The result.
     */
    addCell2(idx, cell2) {

        let c = new MyBigInt(INIT_SIZE, this, this.sign);

        c.spart++;
        let tmp = 0,
            over = cell2;

        while (over !== 0) {

            tmp = c.value[idx] + (over & MASK); // <- those parentheses are important!
            c.value[idx++] = (tmp & MASK);
            over = ((tmp >> BASE) & MASK) + ((over >> BASE) & MASK);
        }
        return c.reduce();
    }

    /**
     * Returns a new copy of the MyBigInt.
     * Mainly used for understanding of the structure.
     * @returns {MyBigInt} The copy.
     */
    copy() {
        return new MyBigInt(INIT_SIZE, this, this.sign);
    }

    /**
     * Returns a random MyBigInt with `size` bits.
     * If `odd` is true, the first and the last bit is set to 1.
     * @public
     * @static
     * @param {number} size The number of bits.
     * @param {boolean} [odd=true] Whether the random value should be odd, Optional.
     * @returns {MyBigInt} A random MyBigInt.
     */
    static getRandom(size, odd = true) {

        if (!Number.isSafeInteger(size) || size < 1 || size > MAX_BIT_LENGTH) {
            throw new RangeError(`Size must be a number in range [1,${MAX_BIT_LENGTH}]!`);
        }

        // determine the length of the value array
        const len = Math.ceil(size / BASE);

        // calculate mask for the last bit
        const m = size % BASE;

        // get array of random 8bit unsigned ints
        let c = new Uint8Array(len);

        // crypto API is different for Node / Browser
        getRandValues(c);

        if (odd) {
            // set first bit to 1 (so the resulting number is odd)
            c[0] |= 0x1;

            // set last bit to 1
            const SET_LAST = m === 0 ? HIGH_BIT : (0x1 << (m - 1))
            c[len - 1] |= SET_LAST;
        }

        // fix here für normale?

        if (m > 0) {
            // set all bits after the last one to zero
            for (let i = m + 1; i <= BASE; i++) {
                c[len - 1] &= (~(0x1 << (i - 1)));
            }
        }
        return new MyBigInt(len, c, true);
    }

    /**
     * Creates a random MyBigInt between
     * the given bounds. If `odd` is true, the first and the last bit is set to 1.
     * @public
     * @static
     * @param {MyBigInt} lower Lower bound.
     * @param {MyBigInt} upper Upper bound.
     * @param {boolean} [odd=true] Whether the random value should be odd, Optional.
     * @returns {MyBigInt} A random MyBigInt.
     */
    static getRandomBetween(lower, upper, odd = true) {

        if (lower.gt(upper)) {
            throw new RangeError(`Lower bound must be less than or equal to upper bound!`);
        }

        const l = lower.spart;
        const h = upper.spart;

        // get position of most-significant bit for both bounds
        const ol = Math.floor(Math.log2(lower.value[l - 1])) + 1;
        const oh = Math.floor(Math.log2(upper.value[h - 1])) + 1;

        // get bit length of both bounds
        const loBits = (l - 1) * BASE + ol;
        const hiBits = (h - 1) * BASE + oh;

        // get random bit length from [loBits, hiBits] inclusive
        let r = getRandValues(new Uint32Array(1))[0] / 0x100000000;
        const len = Math.floor(r * (hiBits - loBits + 1)) + loBits;

        // create random MyBigInt with this bit length
        let res = MyBigInt.getRandom(len, odd);

        // rejection sampling
        while (!(res.ge(lower) && res.le(upper))) {
            res = MyBigInt.getRandom(len, odd);
        }
        return res;
    }

    /**
     * Helper method to generate primes.
     * Finds the smallest prime greater than or equal to `this`.
     * The MyBigInt is modified (so the resulting prime
     * is stored in `this` at the end.)
     * @public
     */
    _nextPrime() {

        if (this.even()) this._addCell2(0, 1);

        // `this` is odd now
        // loop until we find a prime
        while (!this.isPrime()) {
            this._addCell2(0, 2);
        }
    }

    /**
     * Helper method to generate blum primes.
     * Finds the smallest prime greater than `this`, that satisties
     * `p = 3 (mod 4)`. The MyBigInt is modified (so the resulting prime
     * is stored in `this` at the end.)
     * If `this` is already a blum prime, the next one is found.
     * Because this is only used internally for `MyBBS`, no input checking is done.
     * @public
     */
    _nextBlumPrime() {

        const four = MyBigInt.FOUR();

        // guarantee a greater number than `this`
        if (this.even()) {
            this._addCell2(0, 1);
        } else {
            this._addCell2(0, 2);
        }

        // `this` is odd now

        // n mod 4 can only be 1 or 3 if n is odd
        if (this._divmod(four, true).r.eqo()) this._addCell2(0, 2);

        // `this` is now an odd number congruent 3 (mod 4)

        // loop until we find a prime
        while (!this.isPrime()) {
            this._addCell2(0, 4);
        }
    }

    /**
     * Witness method for Fermat test.
     * Returns TRUE if `a` is witness against `this`, meaning
     * `this` is definitely NOT PRIME.
     * @private
     * @param {MyBigInt} a The possible witness.
     * @returns {boolean} Whether `a` is a witness against `this`.
     */
    witnessFermat(a) {

        // check if coprime
        // for the pseudo test, this needs to be commented
        if (MyBigInt.gcd(a, this).neqo()) return true;

        const n = this._sub(MyBigInt.ONE(), true);

        // check fermat a^(p-1) == 1 (mod p)
        return a.powMod(n, this).neqo();
    }

    /**
     * Convenience method to perform the fermat primality test
     * with one or multiple base values. Passing this test does NOT mean
     * that `this` is really prime (fermat pseudoprimes).
     * The parameter `bs` can be four things:
     *  - (1) Array of MyBigInt: Every element in `bs` is used as base value (probe)
     *  - (2) Array of Number: Every element in `bs` is converted into a MyBigInt first. Then (1).
     *  - (3) Number: A new array with length `bs` is filled with random MyBigInt's from 
     * [2,`this` - 2] inclusive. Then (1).
     *  - (4) Undefined: `bs` is optional and can be omitted. In this case, (3) happens with a
     * fixed array length of `DEFAULT_ROUNDS`.
     * @public
     * @param {number | number[] | MyBigInt[]} [bs] Array of bases or Number of random bases, Optional
     * @returns {boolean} Whether the MyBigInt passed the fermat test.
     */
    isPrimeFermat(bs) {

        // negatives cant be prime
        if (!this.sign) {
            throw new RangeError('Number must be not negative!');
        }

        // 2 and 3 are prime
        if (this.eq2() || this.eq3()) return true;

        // 1 and even numbers are not prime
        if (this.eqo() || this.even()) return false;

        // at this point, this is 5 or greater,
        // so the intervall is atleast [2,3]
        const lo = MyBigInt.TWO();
        const hi = this.sub(lo);
        const hiNum = hi.toNumber();

        if ('undefined' === typeof bs) {

            bs = Array.from(Array(DEFAULT_ROUNDS), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Number.isSafeInteger(bs) && bs > 0 && bs <= MAX_ROUNDS) {

            bs = Array.from(Array(bs), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Array.isArray(bs) && bs.every(b => Number.isSafeInteger(b) && b >= 2 && b <= hiNum)) {

            bs = bs.map(b => MyBigInt.fromString(`${b}`));

        } else if (!(Array.isArray(bs) && bs.every(b => b instanceof MyBigInt && b.ge(lo) && b.le(hi)))) {

            throw new TypeError(`Base must be of type Number, Array of Numbers or Array of MyBigInt!`);
        }

        // remove duplicates if existing
        const set = new Set(bs.map(b => b.toString()));
        if (set.length !== bs.length) {
            bs = [...set].map(b => MyBigInt.fromString(`${b}`));
        }

        // start will smallest bases first
        bs.sort((a, b) => a._compare(b) !== 1 ? -1 : 1);

        for (let i = 0; i < bs.length; i++) {
            if (this.witnessFermat(bs[i])) {
                //console.debug(`${bs[i].toString()} is witness against ${this.toString()}, no prime!`);
                return false;
            }
        }
        return true;
    }

    /**
     * Witness method for Euler test.
     * Returns TRUE if `a` is witness against `this`, meaning
     * `this` is definitely NOT PRIME.
     * @private
     * @param {MyBigInt} a The possible witness.
     * @returns {boolean} Whether `a` is a witness against `this`.
     */
    witnessEuler(a) {

        // check if coprime
        // for the pseudo test, this needs to be commented
        if (MyBigInt.gcd(a, this).neqo()) return true;

        const n = this._sub(MyBigInt.ONE(), true);

        // check euler a^((p-1)/2) == ±1 (mod p)
        const exp = n.shiftRight(1);
        const tmp = a.powMod(exp, this);

        // -1 == m-1 (mod m)
        return (tmp.neqo() && tmp.neq(n));
    }

    /**
     * Convenience method to perform the euler primality test
     * with one or multiple base values. Passing this test does NOT mean
     * that `this` is really prime (euler pseudoprimes).
     * The parameter `bs` can be four things:
     *  - (1) Array of MyBigInt: Every element in `bs` is used as base value (probe)
     *  - (2) Array of Number: Every element in `bs` is converted into a MyBigInt first. Then (1).
     *  - (3) Number: A new array with length `bs` is filled with random MyBigInt's from 
     * [2,`this` - 2] inclusive. Then (1).
     *  - (4) Undefined: `bs` is optional and can be omitted. In this case, (3) happens with a
     * fixed array length of `DEFAULT_ROUNDS`.
     * @public
     * @param {number | number[] | MyBigInt[]} [bs] Array of bases or Number of random bases, Optional
     * @returns {boolean} Whether the MyBigInt passed the euler test.
     */
    isPrimeEuler(bs) {

        // negatives cant be prime
        if (!this.sign) {
            throw new RangeError('Number must be not negative!');
        }

        // 2 and 3 are prime
        if (this.eq2() || this.eq3()) return true;

        // 1 and even numbers are not prime
        if (this.eqo() || this.even()) return false;

        // at this point, this is 5 or greater,
        // so the intervall is atleast [2,3]
        const lo = MyBigInt.TWO();
        const hi = this._sub(lo, true);
        const hiNum = hi.toNumber();

        if ('undefined' === typeof bs) {

            bs = Array.from(Array(DEFAULT_ROUNDS), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Number.isSafeInteger(bs) && bs > 0 && bs <= MAX_ROUNDS) {

            bs = Array.from(Array(bs), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Array.isArray(bs) && bs.every(b => Number.isSafeInteger(b) && b >= 3 && b <= hiNum)) {

            bs = bs.map(b => MyBigInt.fromString(`${b}`));

        } else if (!(Array.isArray(bs) && bs.every(b => b instanceof MyBigInt && b.ge(lo) && b.le(hi)))) {

            throw new TypeError(`Base must be of type Number, Array of Numbers or Array of MyBigInt!`);
        }

        // remove duplicates if existing
        const set = new Set(bs.map(b => b.toString()));
        if (set.length !== bs.length) {
            bs = [...set].map(b => MyBigInt.fromString(`${b}`));
        }

        // start will smallest bases first
        bs.sort((a, b) => a._compare(b) !== 1 ? -1 : 1);

        for (let i = 0; i < bs.length; i++) {
            if (this.witnessEuler(bs[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Witness method for Miller-Rabin test.
     * Returns TRUE if `a` is witness against `this`, meaning
     * `this` is definitely NOT PRIME.
     * @private
     * @param {MyBigInt} a The possible witness.
     * @returns {boolean} Whether `a` is a witness against `this`.
     */
    witnessMR(a) {

        // check if coprime
        if (MyBigInt.gcd(a, this).neqo()) return true;

        const n = this._sub(MyBigInt.ONE(), true);

        // calculate d with: `this` - 1 = d * 2^s
        let d = n.copy(),
            s = 0;

        // this runs at least once, since (`this` - 1) is even
        while (d.even()) {
            d._shiftRight();
            s++;
        }

        let val = a.powMod(d, this);

        // we found 1 or -1, possible prime
        if (val.eqo() || val.eq(n)) {
            return false;

        } else {
            for (let i = 0; i < s; i++) {

                val = val.square().divmod(this).r;

                // -1 found, all values after this will be 1, possible prime
                if (val.eq(n)) {
                    return false;
                }

                // 1 found, but no -1 before it -> definitely (!) not prime
                if (val.eqo()) {
                    return true;
                }
            }
            // A is witness against `this` -> `this` is definitely (!) not prime
            return true;
        }
    }

    /**
     * Convenience method to perform the miller-rabin primality test
     * with one or multiple base values. Passing this test does NOT mean
     * that `this` is really prime (strong pseudoprimes for base a).
     * The parameter `bs` can be four things:
     *  - (1) Array of MyBigInt: Every element in `bs` is used as base value (probe)
     *  - (2) Array of Number: Every element in `bs` is converted into a MyBigInt first. Then (1).
     *  - (3) Number: A new array with length `bs` is filled with random MyBigInt's from 
     * [2,`this` - 2] inclusive. Then (1).
     *  - (4) Undefined: `bs` is optional and can be omitted. In this case, (3) happens with a
     * fixed array length of `DEFAULT_ROUNDS`.
     * @public
     * @param {number | number[] | MyBigInt[]} [bs] Array of bases or Number of random bases, Optional.
     * @returns {boolean} Whether the MyBigInt passed the miller-rabin test.
     */
    isPrimeMR(bs) {

        // negatives cant be prime
        if (!this.sign) {
            throw new RangeError('Number must be not negative!');
        }
        // 2 and 3 are prime
        if (this.eq2() || this.eq3()) return true;

        // 1 and even numbers are not prime
        if (this.eqo() || this.even()) return false;

        // at this point, this is 5 or greater,
        // so the intervall is atleast [2,3]
        const lo = MyBigInt.TWO();
        const hi = this._sub(lo, true);
        const hiNum = hi.toNumber();

        // test with small primes first
        const primbases = MyBigInt.PRIMES_TO_38().filter(b => b.le(hi));

        for (let i = 0; i < primbases.length; i++) {
            if (this.witnessMR(primbases[i])) {
                return false;
            }
        }

        if ('undefined' === typeof bs) {

            bs = Array.from(Array(DEFAULT_ROUNDS), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Number.isSafeInteger(bs) && bs > 0 && bs <= MAX_ROUNDS) {

            bs = Array.from(Array(bs), () => MyBigInt.getRandomBetween(lo, hi, true));

        } else if (Array.isArray(bs) && bs.every(b => Number.isSafeInteger(b) && b >= 2 && b <= hiNum)) {

            bs = bs.map(b => MyBigInt.fromString(`${b}`));

        } else if (!(Array.isArray(bs) && bs.every(b => b instanceof MyBigInt && b.ge(lo) && b.le(hi)))) {

            throw new TypeError(`Base must be of type Number, Array of Numbers or Array of MyBigInt!`);
        }

        // remove duplicates if existing
        const set = new Set(bs.map(b => b.toString()));
        if (set.length !== bs.length) {
            bs = [...set].map(b => MyBigInt.fromString(`${b}`));
        }

        // start will smallest bases first
        bs.sort((a, b) => a._compare(b) !== 1 ? -1 : 1);

        for (let i = 0; i < bs.length; i++) {
            if (this.witnessMR(bs[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * Performs a basic primality test
     * by division with prime numbers
     * @public
     * @param {MyBigInt[]} bases Array of primes
     * @returns {boolean} Whether this MyBigInt is a composite of the primes in *bases*
     */
    isPrimeDiv(bs) {

        const lo = MyBigInt.TWO();

        if (!(Array.isArray(bs) && bs.every(b => b instanceof MyBigInt && b.ge(lo) && b.lt(this)))) {
            throw new TypeError('Bases must be a non-empty array!');
        }

        for (let i = 0; i < bs.length; i++) {
            if (this.divmod(bs[i]).r.eqz()) {
                return false;
            }
        }
        return true;
    }

    /**
     * Convenience method.
     * Performs a basic primality test by division with 
     * the prime numbers to 100.
     * @private
     * @returns {boolean} Whether this MyBigInt is a composite of the primes to 100.
     */
    isPrimeDiv100() {

        const bases = MyBigInt.PRIMES_TO_100().filter(b => b.lt(this));

        for (let i = 0; i < bases.length; i++) {
            if (this.divmod(bases[i]).r.eqz()) {
                return false;
            }
        }
        return true;
    }

    /**
     * Checks if this MyBigInt is (likely) prime in two stages.
     * First stage is basic divison with the primes <100.
     * Second stage is performing the Miller-Rabin test with 10 rounds.
     * @public
     * @returns {boolean} Whether this MyBigInt is (likely) prime
     */
    isPrime() {

        // (1) perform basic division with the primes <100
        if (!this.isPrimeDiv100()) return false;

        // (2) perform Miller-Rabin with 10 rounds
        return this.isPrimeMR();
    }

    /**
     * Gets the bit at the given position
     * starting at 0.
     * @private
     * @param {number} y The position of the bit to get.
     * @returns {0 | 1} The bit at position `y`.
     */
    bit(y) {

        if (!(Number.isSafeInteger(y) && y >= 0 && y < this.spart * BASE)) {
            throw new RangeError('Y must be a non-negative number!');
        }

        y++;

        let q = Math.floor(y / BASE),
            r = y % BASE;

        const val = r === 0 ? this.value[q - 1] : this.value[q];

        if (r === 0) r = BASE;

        return (val >> (r - 1)) & 0x1;
    }

    /**
     * Convenience method used in MyRSA.
     * Converts the octet string `os` into a MyBigInt.
     * https://tools.ietf.org/html/rfc8017#section-4.2
     * @public
     * @static
     * @param {Uint8Array} os The octet string as an Uint8Array.
     * @returns {MyBigInt} The created MyBigInt.
     */
    static fromOctetString(os) {

        if (!(os instanceof Uint8Array)) {
            throw new TypeError(`os must be an Uint8Array!`);
        }

        return new MyBigInt(os.length, os.slice().reverse(), true);
    }

    /**
     * Convenience method used in MyRSA.
     * Converts a MyBigInt into an octet string with length `x`.
     * https://tools.ietf.org/html/rfc8017#section-4.1
     * @public
     * @param {number} x Length of the octet string.
     * @returns {Uint8Array} The created octet string as an Uint8Array.
     */
    toOctetString(x) {

        if (!this.sign) {
            throw new TypeError(`Value must be a positive number!`);
        }

        if (!(Number.isSafeInteger(x) && x > 0)) {
            throw new RangeError('x must be a non-negative number!');
        }

        if (x < this.spart) throw new RangeError(`Integer too large`);

        this.reduce();

        const os = new Uint8Array(x);
        const v = this.value.slice(0, this.spart);
        os.set(v.reverse(), x - this.spart);

        return os;
    }
}

if ('undefined' !== typeof module && module.exports) {
    module.exports = MyBigInt;
} else {
    window.MyBigInt = MyBigInt;
}
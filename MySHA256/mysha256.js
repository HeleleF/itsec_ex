/**
 * 512 bit data
 * @typedef {Uint8Array} Block
 */

/**
 * 8 values represeting the final hash value
 * @typedef {Uint32Array} Hash
 */

/**
* @typedef {Object} Hashdebug
* @property {string} HASH The sha256 hash value as string.
* @property {Array<string>} DEBUGINFO Debug information for each hash round.
*/

/**
 * The main MySHA256 class
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
class MySHA256 {

    /**
     * Creates a new MySHA256 context.
     * This is basically the `hashInit()` function.
     */
    constructor() {

        /**
         * array of the actual hash values (as 32bit unsigned ints)
         */
        this.H = Uint32Array.from([
            0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
        ]);

        /**
         * array of 64 constants (as 32bit unsigned ints)
         */
        this.K = Uint32Array.from([
            0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
            0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
            0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
            0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
            0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
            0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
            0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
            0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
        ]);

        /**
         * array of 64 words (as 32bit unsigned ints)
         */
        this.W = new Uint32Array(64);

        /**
         * length of the message (in bits) as 64bit unsigned int (stored as two 32bit unsigned ints).
         * Maximum value is 2^64 - 1 (since sha-256 stores the msg length as 64bit unsigned int).
         */
        this.msgLen = new Uint32Array(2);
    }

    /**
     * Right-Rotate shift. `x` is shifted `n` bits right and the shifted bits
     * are appended to `x` from the left.
     * @private
     * @param {number} n Integer between 0 and 31 inclusive
     * @param {number} x 32bit unsigned int
     * @returns {number} 32bit unsigned int
     */
    rotr(n, x) {
        return ((x >>> n) | (x << (32 - n)));
    }

    /**
     * 'Choose'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @param {number} y 32bit unsigned int.
     * @param {number} z 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    ch(x, y, z) {
        return ((x & y) ^ ((~x) & z));
    }

    /**
     * 'Majority'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @param {number} y 32bit unsigned int.
     * @param {number} z 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    maj(x, y, z) {
        return ((x & y) ^ (x & z) ^ (y & z));
    }

    /**
     * 'Big Sigma 0'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    BSIG0(x) {
        return (this.rotr(2, x) ^ this.rotr(13, x) ^ this.rotr(22, x));
    }

    /**
     * 'Big Sigma 1'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    BSIG1(x) {
        return (this.rotr(6, x) ^ this.rotr(11, x) ^ this.rotr(25, x));
    }

    /**
     * 'Small Sigma 0'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    SSIG0(x) {
        return (this.rotr(7, x) ^ this.rotr(18, x) ^ (x >>> 3));
    }

    /**
     * 'Small Sigma 1'.
     * SHA256 method used to scramble bits.
     * @private
     * @param {number} x 32bit unsigned int.
     * @returns {number} 32bit unsigned int.
     */
    SSIG1(x) {
        return (this.rotr(17, x) ^ this.rotr(19, x) ^ (x >>> 10));
    }

    /**
     * Formats a hex string as an array of bytes.
     * Helper function for testing.
     * @public
     * @static
     * @param {string} hexstr A hexstring.
     * @returns {Uint8Array} An Array of bytes.
     */
    static h2b(hexstr) {
        const bytes = hexstr.match(/.{1,2}/g).map(h => parseInt(h, 16));
        return new Uint8Array(bytes);
    }

    /**
     * Formats an array of bytes as a hex string.
     * Helper function for testing.
     * @public
     * @static
     * @param {Uint8Array | Array} a An Array of bytes.
     * @returns {string} A hexstring.
     */
    static b2h(a) {
        return a.reduce((m, i) => {
            return m + ('0' + i.toString(16)).slice(-2);
        }, '');
    }

    /**
     * Helper method for testing only.
     * Adds the current working variables `a-b` as hex strings
     * to the debug info array.
     * @private
     */
    logHexLine() {

        // for each variable, convert it from big endian 32bit to 4 bytes
        const _a = MySHA256.b2h([(this.a >> 24) & 0xFF, (this.a >> 16) & 0xFF, (this.a >> 8) & 0xFF, this.a & 0xFF]);
        const _b = MySHA256.b2h([(this.b >> 24) & 0xFF, (this.b >> 16) & 0xFF, (this.b >> 8) & 0xFF, this.b & 0xFF]);
        const _c = MySHA256.b2h([(this.c >> 24) & 0xFF, (this.c >> 16) & 0xFF, (this.c >> 8) & 0xFF, this.c & 0xFF]);
        const _d = MySHA256.b2h([(this.d >> 24) & 0xFF, (this.d >> 16) & 0xFF, (this.d >> 8) & 0xFF, this.d & 0xFF]);
        const _e = MySHA256.b2h([(this.e >> 24) & 0xFF, (this.e >> 16) & 0xFF, (this.e >> 8) & 0xFF, this.e & 0xFF]);
        const _f = MySHA256.b2h([(this.f >> 24) & 0xFF, (this.f >> 16) & 0xFF, (this.f >> 8) & 0xFF, this.f & 0xFF]);
        const _g = MySHA256.b2h([(this.g >> 24) & 0xFF, (this.g >> 16) & 0xFF, (this.g >> 8) & 0xFF, this.g & 0xFF]);
        const _h = MySHA256.b2h([(this.h >> 24) & 0xFF, (this.h >> 16) & 0xFF, (this.h >> 8) & 0xFF, this.h & 0xFF]);

        this.debugInfo.push(`${_a} ${_b} ${_c} ${_d} ${_e} ${_f} ${_g} ${_h}`);
    }

    /**
     * Helper method to pad the last data block to
     * a multiple of 512 bits.
     * @private
     * @param {Block} b A data block with 0 to 512 bits.
     */
    padding_Block(b) {

        const nBytes = b.length; // maximum 64
        const nBits = nBytes * 8; // maximum 512

        const kBits = (((448 - (nBits + 1)) % 512) + 512) % 512;
        const kBytes = Math.floor(kBits / 8); // maximum 55

        // total has to be 64 (1 block) or 128 (2 blocks)
        const total = nBytes + 1 + kBytes + 8;
        const res = new Uint8Array(total);

        const l = new Uint8Array(this.msgLen.buffer);
        const k = l.slice().reverse();

        res.set(b, 0);
        res.set([0x80], nBytes);
        res.set(new Uint8Array(kBytes), nBytes + 1); // unnecessay since its already 0
        res.set(k, nBytes + 1 + kBytes);

        // Length of M is 16 (for 64 bytes aka 512bits aka 1 block)
        // or 32 (for 128 Bytes aka 1024 bits aka 2 blocks together)
        const M = new Uint32Array(total / 4);

        // store 4 bytes together as one 32bit Uint in big endian
        for (let i = 0; i < total; i += 4) {
            M[i / 4] = ((res[i] << 24) | (res[i + 1] << 16) | (res[i + 2] << 8) | res[i + 3]);
        }

        // block was padded to 512, process it
        if (M.length === 16) {
            this.M = M.slice();
        } else {
            // padding created 2 blocks, process the first block
            this.M = M.slice(0, 16);

            this.MSG_Scheduling();
            this.Initial_Register();
            this.MSG_Compression();
            this.Compute_Hash_Value();

            // process the second block
            this.M = M.slice(16);
        }
    }

    /**
     * Sets the `W` array by expanding the block `M`. (1)
     * @private
     */
    MSG_Scheduling() {

        for (let i = 0; i < 16; i++) {
            this.W[i] = this.M[i];
        }

        for (let j = 16; j < 64; j++) {
            this.W[j] = this.SSIG1(this.W[j - 2]) + this.W[j - 7] + this.SSIG0(this.W[j - 15]) + this.W[j - 16];
        }
    }

    /**
     * Initializes the working variables `a-h*` with the 
     * current `H` array values. (2)
     * @private
     */
    Initial_Register() {

        this.a = this.H[0];
        this.b = this.H[1];
        this.c = this.H[2];
        this.d = this.H[3];
        this.e = this.H[4];
        this.f = this.H[5];
        this.g = this.H[6];
        this.h = this.H[7];
    }

    /**
     * Performs 64 rounds of compression with the values
     * from `K` and `W`. (3)
     * @private
     */
    MSG_Compression() {

        for (let i = 0; i < 64; i++) {
            const T0 = this.h + this.BSIG1(this.e) + this.ch(this.e, this.f, this.g) + this.K[i] + this.W[i];
            const T1 = this.BSIG0(this.a) + this.maj(this.a, this.b, this.c);
            this.h = this.g;
            this.g = this.f;
            this.f = this.e;
            this.e = ((this.d + T0) >>> 0); // force modulo 2^32
            this.d = this.c;
            this.c = this.b;
            this.b = this.a;
            this.a = ((T0 + T1) >>> 0); // force modulo 2^32

            if (this.debugInfo) this.logHexLine();
        }
    }

    /**
     * Updates the `H` array by adding the working variables `a-h`. (4)
     * @private
     */
    Compute_Hash_Value() {

        // H is an Uint32Array, so addition is internally done
        // with modulo 0xFFFFFFFF
        this.H[0] += this.a;
        this.H[1] += this.b;
        this.H[2] += this.c
        this.H[3] += this.d
        this.H[4] += this.e
        this.H[5] += this.f
        this.H[6] += this.g
        this.H[7] += this.h
    }

    /**
     * Adds a block of 512 bits to the MySHA256 context.
     * Does not return anything.
     * @public
     * @param {Block} b One 512-bit block of data.
     */
    hashUpdate(b) {

        if (!this.H || !this.K || !this.msgLen) {
            throw new TypeError(`MySHA256 context is not initialized!`);
        }

        if (!(b instanceof Uint8Array) || b.length !== 64) {
            throw new TypeError(`hashUpdate() expects a data block of 512bit as an array of 64 8bit unsigned integers!`);
        }

        // block is full 512bit, no padding
        const M = new Uint32Array(16);

        // store 4 bytes together as one 32bit Uint in big endian
        for (let i = 0; i < 64; i += 4) {
            M[i / 4] = ((b[i] << 24) | (b[i + 1] << 16) | (b[i + 2] << 8) | b[i + 3]);
        }

        this.M = M.slice();

        // handle overflow of 32bit unsigned int
        if (this.msgLen[0] === 0xFFFFFE00) {
            this.msgLen[0] = 0;
            this.msgLen[1]++;

            if (this.msgLen[1] === 0) {
                throw new RangeError(`Maximum message length of 2^64 bits exceeded!`);
            }

        } else {
            this.msgLen[0] += 512;
        }

        // process the added block
        this.MSG_Scheduling();
        this.Initial_Register();
        this.MSG_Compression();
        this.Compute_Hash_Value();

        // no return
    }

    /**
     * Processes the last block and returns the actual hash value.
     * @public
     * @param {Block} b The last block of data, length between 0 and 512 bit inclusive
     * @returns {string | Hashdebug} The sha256 hash as a hexstring, together with debug info if wanted.
     */
    hashFinal(b) {

        if (!this.H || !this.K || !this.msgLen) {
            throw new TypeError(`MySHA256 context is not initialized!`);
        }

        if (!(b instanceof Uint8Array) || b.length > 64) {
            throw new TypeError(`hashFinal() expects a data block of 0 to 512 bit (inclusive) as an array of 8bit unsigned integers!`);
        }

        const lastLen = b.length * 8;

        // handle overflow of 32bit unsigned int
        if (lastLen === 0x200 && this.msgLen[0] === 0xFFFFFE00) {
            this.msgLen[1]++;
            this.msgLen[0] = 0;

            if (this.msgLen[1] === 0) {
                throw new RangeError(`Maximum message length of 2^64 bits exceeded!`);
            }

        } else {
            this.msgLen[0] += lastLen;
        }

        this.padding_Block(b);

        this.MSG_Scheduling();
        this.Initial_Register();
        this.MSG_Compression();
        this.Compute_Hash_Value();

        const d = new DataView(this.H.buffer);
        const hash = new Uint32Array(8);

        // read values as big endian
        for (let i = 0; i < 32; i += 4) {
            hash[i / 4] = d.getUint32(i, false);
        }

        // destroy context
        this.H = null;
        this.K = null;
        this.W = null;
        this.M = null;
        this.msgLen = null;

        const hashStr = MySHA256.b2h(new Uint8Array(hash.buffer));

        if (this.debugInfo) {
            return {
                HASH: hashStr,
                DEBUGINFO: this.debugInfo
            };
        } else {
            return hashStr;
        }
    }

    /**
     * Convenience method to get the sha256 hash for a given string.
     * @public
     * @static 
     * @param {string} str The string to hash.
     * @param {boolean} [isHexStr=false] Whether to process `str` as hexstring, Optional.
     * @param {boolean} [debug=false] Whether to produce debug infos, Optional.
     * @returns {string | Hashdebug} The sha256 hash as a hexstring, together with debug info if wanted.
     */
    static sha256(str, isHexStr = false, debug = false) {

        let arr;

        if ('string' === typeof str) {

            if (isHexStr) {

                // only used for testcases
                arr = MySHA256.h2b(str);

            } else {

                // encode input string as array of bytes
                const enc = new TextEncoder();
                arr = enc.encode(str);
            }

        } else if (str instanceof Uint8Array) {

            // just copy the array
            arr = str.slice();

        } else {

            throw new TypeError(`sha256() expects a string or an Uint8Array to hash!`);
        }

        // calculate number of blocks
        const fullBlocks = Math.floor(arr.length / 64);
        const lastBlock = arr.length % 64;

        // create a new context
        const ctx = new MySHA256();

        if (debug) {
            ctx.debugInfo = [];
        }

        // update the context with each full block
        for (let i = 0; i < fullBlocks; i++) {
            ctx.hashUpdate(arr.slice(i * 64, (i + 1) * 64));
        }

        // handle the last block
        return ctx.hashFinal(lastBlock === 0 ? new Uint8Array() : arr.slice(-lastBlock));
    }
}

if ('undefined' !== typeof module && module.exports) {
    module.exports = MySHA256;
} else {
    window.MySHA256 = MySHA256;
}
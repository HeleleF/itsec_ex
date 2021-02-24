/**
 * @typedef {Uint8Array} Block A data block of 16 bytes (128bit)
 */

/**
 * @typedef {Uint8Array} Key A key of 16 bytes (128bit)
 */

/**
 * The main MyAES128 class
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
class MyAES128 {

    /**
     * Formats a hex string as an array of bytes.
     * Helper function for testing.
     * @public
     * @static
     * @param {string} hexstr Hexstring
     * @returns {Uint8Array} Array of bytes
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
     * @param {Uint8Array} a Array of bytes
     * @returns {string} Hexstring
     */
    static b2h(a) {
        return a.reduce((m, i) => {
            return m + i.toString(16).padStart(2, '0');
        }, '');
    }

    /**
     * Returns debug information if they exist.
     * @private
     * @param {boolean} [keysOnly=false] Whether to only return the keys, optional
     * @returns {Array} The debug info or null.
     */
    getDebug(keysOnly = false) {

        if (this.DEBUGROUNDS) {

            let ret = this.DEBUGROUNDS.slice();
            this.DEBUGROUNDS = [];

            if (keysOnly) {
                const keyIdc = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46, 50, 53, 57, 62, 67, 72, 77, 82, 87, 92, 97, 102];
                
                ret = ret.filter((_, idx) => keyIdc.includes(idx));
            }

            return ret;

        } else {
            console.debug(`No debug information!`);
            return null;
        }
    }

    /**
     * Helper method to generate the debug info for testing.
     * @private
     * @param {string} [phaseName] Name of the phase, optional
     * @param {string} [withKey] If key schedule is measured as well, the phase name, optional
     */
    saveState(phaseName, withKey = null) {

        if (withKey) {

            const nextKeySchedule = this.w.slice(this.wIndex, this.wIndex + 16);

            //console.debug(`${withKey}: ${MyAES128.b2h(nextKeySchedule)}`);

            this.DEBUGROUNDS.push(MyAES128.b2h(nextKeySchedule)); 
        }

        if (phaseName) {

            const stateFlat = new Uint8Array(16);

            for (let col = 0; col < 4; col++) {
                for (let row = 0; row < 4; row++) {
                    stateFlat[col * 4 + row] = this.state[row][col];
                }
            }

            //console.debug(`${phaseName}: ${MyAES128.b2h(stateFlat)}`);

            this.DEBUGROUNDS.push(MyAES128.b2h(stateFlat));
        }
    }

    /**
     * Multiplies two bytes in GF256
     * and returns the product. This uses lookup-tables
     * and is faster than {@link gf_mulSlow()} .
     * @private
     * @param {number} a The first factor
     * @param {number} b The second factor
     * @returns {number} The product
     */
    gf_mul(a, b) {

        if (a === 0 || b === 0) {
            return 0;
        }

        let t = this.logs[a] + this.logs[b];

        if (t > 255) {
            t = t - 255;
        }

        return this.exps[t];
    }

    /**
     * Returns the bit from byte `b` at position `nr`, starting at 0.
     * @private
     * @param {number} nr The position of the bit to get
     * @param {number} b The byte
     * @returns {0 | 1} The bit
     */
    bit(nr, b) {
        return ((b >> nr) & 0x1);
    }

    /**
     * Multiplies two bytes in GF256
     * and returns the product.
     * @private
     * @param {number} a The first factor
     * @param {number} b The second factor
     * @returns {number} The product
     */
    gf_mulSlow(a, b) {

        let result = 0;

        for (let c = 0; c < 8; c++) {

            if ((b & 0x1) == 1) {
                result ^= a;
            }

            const hi_bit_set = (a & 0x80);

            a <<= 1;
            if (hi_bit_set === 0x80) {
                a ^= 0x1b;
            }
            b >>= 1;
        }
        return result;
    }

    /**
     * @private
     * @param {number} a 
     * @returns {number} The inverse.
     */
    gf_mulInvers(a) {
        const t = 0xFF - this.logs[a];
        return this.exps[t];
    }

    /**
     * Substitutes a byte by performing some math.
     * @private
     * @param {number} b The byte to substitute.
     * @returns {number} The new value
     */
    subByte(b) {

        let t, res = 0;
        const c = 0x63;

        if (b !== 0) {
            b = this.gf_mulInvers(b);
        }

        for (let i = 0; i < 8; i++) {
            t = this.bit(i, b) ^ this.bit((i + 4) % 8, b) ^ this.bit((i + 5) % 8, b) ^ this.bit((i + 6) % 8, b) ^ this.bit((i + 7) % 8, b) ^ this.bit(i, c);
            res = res ^ (t << i);
        }

        return res;
    }

    /**
     * Generates the exponent box for multiplication.
     * For MyAES128, only `0x03` is used as generator.
     * @private
     * @param {number} val The value of the generator.
     */
    generateExp(val) {

        let elem = 1;
        this.exps[0] = 1;

        for (let i = 1; i < 256; i++) {

            elem = this.gf_mulSlow(elem, val);
            this.exps[i] = elem;

            if (elem === 1) {
                return;
            }
        }
    }

    /**
     * Generates the logarithm box for multiplication.
     * `this.exps` has to be populated before.
     * @private
     */
    generateLog() {

        this.logs[0] = 0;

        for (let i = 0; i < 255; i++) {
            this.logs[this.exps[i]] = i;
        }
    }

    /**
     * Generates the substitution box.
     * @private
     */
    generateSBox() {
        for (let i = 0; i < 256; i++) {
            this.Sbox[i] = this.subByte(i);
        }
    }

    /**
     * Generates the inverse substitution box.
     * `this.Sbox` has to be populated before.
     * @private
     */
    generateInvSBox() {
        for (let i = 0; i < 256; i++) {
            this.invSbox[this.Sbox[i]] = i;
        }
    }

    /**
     * Generates the rcon box.
     * @private
     */
    generateRCON() {

        let val = 1;
        this.rcon[0] = 1;

        for (let i = 1; i < 10; i++) {
            val = this.gf_mul(val, 2);
            this.rcon[i] = val;
        }
    }

    /**
     * Conveniences method to generate all
     * necessary boxes and tables.
     * @private
     */
    generateTables() {

        // populate tables for multiplication
        // (3 as generator was chosen arbitrary)
        this.generateExp(0x03);
        this.generateLog();

        // populate substitutions boxes
        this.generateSBox();
        this.generateInvSBox();

        // populate round constants box
        this.generateRCON();
    }

    /**
     * Reads the 16 input bytes into the `state` array.
     * @param {Block} input A data block to en- or decrypt.
     * @private
     */
    readState(input) {

        if (this.DEBUGROUNDS) {
            //console.debug(`input: ${MyAES128.b2h(nextKeySchedule)}`);
            this.DEBUGROUNDS.push(MyAES128.b2h(input));
        }

        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 4; row++) {
                this.state[row][col] = input[col * 4 + row];
            }
        }
    }

    /**
     * Writes the `state` array into a 16 byte output array and returns it.
     * @private
     */
    writeState() {
        const output = new Uint8Array(16);

        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 4; row++) {
                output[col * 4 + row] = this.state[row][col];
            }
        }

        if (this.DEBUGROUNDS) {
            //console.debug(`output: ${MyAES128.b2h(nextKeySchedule)}`);
            this.DEBUGROUNDS.push(MyAES128.b2h(output));
        }

        return output;
    }

    /**
     * Expands the 16byte `key` into the `w`-Array.
     * @private
     * @param {Key} key The 128bit AES key
     */
    KeyExpansion(key) {

        const temp = new Uint8Array(4);
        let j = 0;

        while (j < 4 * this.Nk) {
            this.w[j] = key[j++];
        }

        while (j < 16 * (this.Nr + 1)) {

            let i = j / 4;

            for (let k = 0; k < 4; k++) {
                temp[k] = this.w[j - 4 + k];
            }

            if (i % this.Nk === 0) {

                const oldtemp0 = temp[0];

                for (let k = 0; k < 4; k++) {

                    const ttemp = k === 3 ? oldtemp0 : temp[k + 1];
                    const tRcon = k === 0 ? this.rcon[i / this.Nk - 1] : 0;

                    temp[k] = this.Sbox[ttemp] ^ tRcon;
                }
            } else {

                if (this.Nk > 6 && (i % this.Nk === 4)) {

                    for (let k = 0; k < 4; k++) {
                        temp[k] = this.Sbox[temp[k]];
                    }
                }
            }

            for (let k = 0; k < 4; k++) {
                this.w[j + k] = this.w[j - 4 * this.Nk + k] ^ temp[k];
            }
            j += 4;
        }
    }

    /**
     * Add round key (Encryption)
     * @private
     */
    AddRoundKey() {

        if (this.DEBUGROUNDS) this.saveState(null, 'k_sch');

        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 4; row++) {

                this.state[row][col] = this.state[row][col] ^ this.w[this.wIndex];
                this.wIndex++;
            }
        }
    }

    /**
     * Inverse Add round key (Decryption)
     * @private
     */
    invAddRoundKey() {

        for (let col = 3; col >= 0; col--) {
            for (let row = 3; row >= 0; row--) {

                this.wIndex--;
                this.state[row][col] = this.state[row][col] ^ this.w[this.wIndex];
            }
        }

        if (this.DEBUGROUNDS) this.saveState(null, 'ik_sch');
    }

    /**
     * Substitute Bytes (Encryption)
     * @private
     */
    SubBytes() {

        if (this.DEBUGROUNDS) this.saveState('start');

        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                this.state[row][col] = this.Sbox[this.state[row][col]];
            }
        }

        if (this.DEBUGROUNDS) this.saveState('s_box');
    }

    /**
     * Inverse Substitute Bytes (Decryption)
     * @private
     */
    invSubBytes() {
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 4; col++) {
                this.state[row][col] = this.invSbox[this.state[row][col]];
            }
        }

        if (this.DEBUGROUNDS) this.saveState('is_box');
    }

    /**
     * Shift Rows (Encryption)
     * @private
     */
    ShiftRows() {
        const t = new Uint8Array(4);

        for (let row = 1; row < 4; row++) {

            for (let col = 0; col < 4; col++) {
                t[col] = this.state[row][(col + row) % 4];
            }
            for (let col = 0; col < 4; col++) {
                this.state[row][col] = t[col];
            }
        }

        if (this.DEBUGROUNDS) this.saveState('s_row');
    }

    /**
     * Inverse Shift Rows (Decryption)
     * @private
     */
    invShiftRows() {

        if (this.DEBUGROUNDS) this.saveState('istart');

        const t = new Uint8Array(4);

        for (let row = 1; row < 4; row++) {

            for (let col = 0; col < 4; col++) {
                t[(col + row) % 4] = this.state[row][col];
            }
            for (let col = 0; col < 4; col++) {
                this.state[row][col] = t[col];
            }
        }

        if (this.DEBUGROUNDS) this.saveState('is_row');
    }

    /**
     * Mix Columns (Encryption)
     * @private
     */
    MixColumns() {

        const sp = new Uint8Array(4);

        for (let col = 0; col < 4; col++) {

            sp[0] = this.gf_mul(2, this.state[0][col]) ^ this.gf_mul(3, this.state[1][col]) ^ this.state[2][col] ^ this.state[3][col];
            sp[1] = this.state[0][col] ^ this.gf_mul(2, this.state[1][col]) ^ this.gf_mul(3, this.state[2][col]) ^ this.state[3][col];
            sp[2] = this.state[0][col] ^ this.state[1][col] ^ this.gf_mul(2, this.state[2][col]) ^ this.gf_mul(3, this.state[3][col]);
            sp[3] = this.gf_mul(3, this.state[0][col]) ^ this.state[1][col] ^ this.state[2][col] ^ this.gf_mul(2, this.state[3][col]);

            for (let i = 0; i < 4; i++) {
                this.state[i][col] = sp[i];
            }
        }

        if (this.DEBUGROUNDS) this.saveState('m_col');
    }

    /**
     * Inverse Mix Columns (Decryption)
     * @private
     */
    invMixColumns() {

        if (this.DEBUGROUNDS) this.saveState('ik_add');

        const sp = new Uint8Array(4);

        for (let col = 0; col < 4; col++) {

            sp[0] = this.gf_mul(0x0e, this.state[0][col]) ^ this.gf_mul(0x0b, this.state[1][col]) ^ this.gf_mul(0x0d, this.state[2][col]) ^ this.gf_mul(0x09, this.state[3][col]);
            sp[1] = this.gf_mul(0x09, this.state[0][col]) ^ this.gf_mul(0x0e, this.state[1][col]) ^ this.gf_mul(0x0b, this.state[2][col]) ^ this.gf_mul(0x0d, this.state[3][col]);
            sp[2] = this.gf_mul(0x0d, this.state[0][col]) ^ this.gf_mul(0x09, this.state[1][col]) ^ this.gf_mul(0x0e, this.state[2][col]) ^ this.gf_mul(0x0b, this.state[3][col]);
            sp[3] = this.gf_mul(0x0b, this.state[0][col]) ^ this.gf_mul(0x0d, this.state[1][col]) ^ this.gf_mul(0x09, this.state[2][col]) ^ this.gf_mul(0x0e, this.state[3][col]);

            for (let i = 0; i < 4; i++) {
                this.state[i][col] = sp[i];
            }
        }
    }

    /**
     * Initializes all global variables and generates the tables.
     * This creates the main AES Object.
     * @param {Object} [opts] Init options, optional.
     */
    constructor(opts) {

        /**
         * Number of key words, for AES128 always 4
         */
        this.Nk = 4;

        /**
         * Number of rounds, for AES128 always 10
         */
        this.Nr = 10;

        /**
         * The w box ad an array of bytes, for AES128 always 176
         */
        this.w = new Uint8Array(16 * (this.Nr + 1));

        /**
         * The state as a 4x4 table.
         */
        this.state = Array.from(Array(4), () => new Uint8Array(4));

        /**
         * The substitution box as an array of 256 bytes
         */
        this.Sbox = new Uint8Array(256);

        /**
         * The inverse substitution box as an array of 256 bytes
         */
        this.invSbox = new Uint8Array(256);

        /**
         * The lookup table for exponentiation as an array of 256 bytes
         */
        this.exps = new Uint8Array(256);

        /**
         * The lookup table for logarithm as an array of 256 bytes
         */
        this.logs = new Uint8Array(256);

        /**
         * The rcon table as an array of 10bytes
         */
        this.rcon = new Uint8Array(10);

        this.generateTables();

        /**
         * Is-Initialized flag
         */
        this.ready = true;

        // only used for test cases
        if (opts && opts.debug) {
            this.DEBUGROUNDS = [];
        }
    }

    /**
     * Encrypts a 16byte block with a 16byte key and returns it.
     * @param {Block} plain The data block to encrypt
     * @param {Key} key The 128bit AES key
     * @returns {Block} The encrypted block
     */
    encrypt(plain, key) {

        if (!(plain instanceof Uint8Array) || plain.length !== 16) {
            throw new TypeError(`Block to encrypt must be an array of 16 bytes!`);
        }

        if (!(key instanceof Uint8Array) || key.length !== 16) {
            throw new TypeError(`Key must be an array of 16 bytes!`);
        }

        if (!this.ready) {
            throw new ReferenceError(`Not initialized!`);
        }

        // iterating through w forwards
        this.wIndex = 0;

        this.KeyExpansion(key);
        this.readState(plain);
        this.AddRoundKey();

        for (let i = 1; i < this.Nr; i++) {

            this.SubBytes();
            this.ShiftRows();
            this.MixColumns();
            this.AddRoundKey();
        }

        // last round has no MixColumns()
        this.SubBytes();
        this.ShiftRows();
        this.AddRoundKey();

        return this.writeState();
    }

    /**
     * Decrypts an encrypted 16byte block with a 16byte key and returns it.
     * @param {Block} cipher The data block to decrypt
     * @param {Key} key The 128bit AES key
     * @returns {Block} The decrypted block
     */
    decrypt(cipher, key) {

        if (!(cipher instanceof Uint8Array) || cipher.length !== 16) {
            throw new TypeError(`Block to decrypt must be an array of 16 bytes!`);
        }

        if (!(key instanceof Uint8Array) || key.length !== 16) {
            throw new TypeError(`Key must be an array of 16 bytes!`);
        }

        if (!this.ready) {
            throw new ReferenceError(`Not initialized!`);
        }

        // iterating through w backwards
        this.wIndex = 16 * (this.Nr + 1);

        this.KeyExpansion(key);
        this.readState(cipher);
        this.invAddRoundKey();

        for (let i = 1; i < this.Nr; i++) {
            this.invShiftRows();
            this.invSubBytes();
            this.invAddRoundKey();
            this.invMixColumns();
        }

        // last round has no MixColumns()
        this.invShiftRows();
        this.invSubBytes();
        this.invAddRoundKey();

        return this.writeState();
    }
}

if ('undefined' !== typeof module && module.exports) {
    module.exports = MyAES128;
} else {
    window.MyAES128 = MyAES128;
}
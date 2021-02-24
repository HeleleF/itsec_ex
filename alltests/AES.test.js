/**
 * Tests for @see MyAES128
 * 
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
(([MyAES128, expect, getRand]) => {

    describe('[TASK6] Wrong parameters', () => {

        const aes = new MyAES128();
        const inp = new Uint8Array(1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7);

        describe('encryption', () => {

            it('should throw for wrong input encryption: number', () => {

                expect(() => {
                    aes.encrypt(5, 6)
                }).to.throw();
            });

            it('should throw for wrong input encryption: string', () => {

                expect(() => {
                    aes.encrypt("5131", 6)
                }).to.throw();
            });

            it('should throw for wrong input encryption: array', () => {

                expect(() => {
                    aes.encrypt([5, 1, 3, 5, 4], 6)
                }).to.throw();
            });

            it('should throw for wrong key encryption: number', () => {

                expect(() => {
                    aes.encrypt(inp, 6)
                }).to.throw();
            });

            it('should throw for wrong key encryption: string', () => {

                expect(() => {
                    aes.encrypt(inp, "010101010")
                }).to.throw();
            });

            it('should throw for wrong key encryption: array', () => {

                expect(() => {
                    aes.encrypt(inp, [9, 0, 9, 0, 0, 9])
                }).to.throw();
            });
        });

        describe('decryption', () => {

            it('should throw for wrong input decryption: number', () => {

                expect(() => {
                    aes.decrypt(5, 6)
                }).to.throw();
            });

            it('should throw for wrong input decryption: string', () => {

                expect(() => {
                    aes.decrypt("5131", 6)
                }).to.throw();
            });

            it('should throw for wrong input decryption: array', () => {

                expect(() => {
                    aes.decrypt([5, 1, 3, 5, 4], 6)
                }).to.throw();
            });

            it('should throw for wrong key decryption: number', () => {

                expect(() => {
                    aes.decrypt(inp, 6)
                }).to.throw();
            });

            it('should throw for wrong key decryption: string', () => {

                expect(() => {
                    aes.decrypt(inp, "010101010")
                }).to.throw();
            });

            it('should throw for wrong key decryption: array', () => {

                expect(() => {
                    aes.decrypt(inp, [9, 0, 9, 0, 0, 9])
                }).to.throw();
            });
        });

    });

    describe('[TASK6] Bytes to hexstring', () => {

        it('should convert bytes to hex #1', () => {

            const b = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
            expect(MyAES128.b2h(b)).to.be.equal('000102030405060708090a0b0c0d0e0f');
        });

        it('should convert bytes to hex #2', () => {

            const b = new Uint8Array(16);
            expect(MyAES128.b2h(b)).to.be.equal('0'.repeat(32));
        });

        it('should convert bytes to hex #3', () => {

            const b = Uint8Array.from(Array(16), () => 1);
            expect(MyAES128.b2h(b)).to.be.equal('01'.repeat(16));
        });

        it('should convert bytes to hex #4', () => {

            const b = Uint8Array.from(Array(16), () => 16);
            expect(MyAES128.b2h(b)).to.be.equal('10'.repeat(16));
        });

        it('should convert bytes to hex #5', () => {

            const b = Uint8Array.from(Array(16), () => 255);
            expect(MyAES128.b2h(b)).to.be.equal('ff'.repeat(16));
        });
    });

    describe('[TASK6] Hexstring to bytes', () => {

        it('should convert hex to bytes #1', () => {

            const h = '000102030405060708090a0b0c0d0e0f';
            expect(MyAES128.h2b(h)).to.deep.equal(Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]));
        });

        it('should convert hex to bytes #2', () => {

            const h = '0'.repeat(32)
            expect(MyAES128.h2b(h)).to.deep.equal(new Uint8Array(16));
        });

        it('should convert hex to bytes #3', () => {

            const h = '01'.repeat(16)
            expect(MyAES128.h2b(h)).to.deep.equal(Uint8Array.from(Array(16), () => 1));
        });

        it('should convert hex to bytes #4', () => {

            const h = '10'.repeat(16)
            expect(MyAES128.h2b(h)).to.deep.equal(Uint8Array.from(Array(16), () => 16));
        });

        it('should convert hex to bytes #5', () => {

            const h = 'ff'.repeat(16)
            expect(MyAES128.h2b(h)).to.deep.equal(Uint8Array.from(Array(16), () => 255));
        });
    });

    describe('[TASK6] Table generation', () => {

        const aes = new MyAES128();

        // values copied from http://www.codeplanet.eu/tutorials/cpp/51-advanced-encryption-standard.html
        const SBOX = Uint8Array.from([
            0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
            0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
            0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
            0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
            0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
            0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
            0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
            0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
            0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
            0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
            0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
            0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
            0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
            0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
            0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
            0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16
        ]);
        const INVSBOX = Uint8Array.from([
            0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
            0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,
            0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
            0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
            0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
            0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84,
            0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
            0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
            0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
            0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
            0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
            0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,
            0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
            0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
            0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61,
            0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d
        ]);
        const RCON = Uint8Array.from([0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1B, 0x36]);
        const EXP = Uint8Array.from([
            0x01, 0x03, 0x05, 0x0f, 0x11, 0x33, 0x55, 0xff, 0x1a, 0x2e, 0x72, 0x96, 0xa1, 0xf8, 0x13, 0x35,
            0x5f, 0xe1, 0x38, 0x48, 0xd8, 0x73, 0x95, 0xa4, 0xf7, 0x02, 0x06, 0x0a, 0x1e, 0x22, 0x66, 0xaa,
            0xe5, 0x34, 0x5c, 0xe4, 0x37, 0x59, 0xeb, 0x26, 0x6a, 0xbe, 0xd9, 0x70, 0x90, 0xab, 0xe6, 0x31,
            0x53, 0xf5, 0x04, 0x0c, 0x14, 0x3c, 0x44, 0xcc, 0x4f, 0xd1, 0x68, 0xb8, 0xd3, 0x6e, 0xb2, 0xcd,
            0x4c, 0xd4, 0x67, 0xa9, 0xe0, 0x3b, 0x4d, 0xd7, 0x62, 0xa6, 0xf1, 0x08, 0x18, 0x28, 0x78, 0x88,
            0x83, 0x9e, 0xb9, 0xd0, 0x6b, 0xbd, 0xdc, 0x7f, 0x81, 0x98, 0xb3, 0xce, 0x49, 0xdb, 0x76, 0x9a,
            0xb5, 0xc4, 0x57, 0xf9, 0x10, 0x30, 0x50, 0xf0, 0x0b, 0x1d, 0x27, 0x69, 0xbb, 0xd6, 0x61, 0xa3,
            0xfe, 0x19, 0x2b, 0x7d, 0x87, 0x92, 0xad, 0xec, 0x2f, 0x71, 0x93, 0xae, 0xe9, 0x20, 0x60, 0xa0,
            0xfb, 0x16, 0x3a, 0x4e, 0xd2, 0x6d, 0xb7, 0xc2, 0x5d, 0xe7, 0x32, 0x56, 0xfa, 0x15, 0x3f, 0x41,
            0xc3, 0x5e, 0xe2, 0x3d, 0x47, 0xc9, 0x40, 0xc0, 0x5b, 0xed, 0x2c, 0x74, 0x9c, 0xbf, 0xda, 0x75,
            0x9f, 0xba, 0xd5, 0x64, 0xac, 0xef, 0x2a, 0x7e, 0x82, 0x9d, 0xbc, 0xdf, 0x7a, 0x8e, 0x89, 0x80,
            0x9b, 0xb6, 0xc1, 0x58, 0xe8, 0x23, 0x65, 0xaf, 0xea, 0x25, 0x6f, 0xb1, 0xc8, 0x43, 0xc5, 0x54,
            0xfc, 0x1f, 0x21, 0x63, 0xa5, 0xf4, 0x07, 0x09, 0x1b, 0x2d, 0x77, 0x99, 0xb0, 0xcb, 0x46, 0xca,
            0x45, 0xcf, 0x4a, 0xde, 0x79, 0x8b, 0x86, 0x91, 0xa8, 0xe3, 0x3e, 0x42, 0xc6, 0x51, 0xf3, 0x0e,
            0x12, 0x36, 0x5a, 0xee, 0x29, 0x7b, 0x8d, 0x8c, 0x8f, 0x8a, 0x85, 0x94, 0xa7, 0xf2, 0x0d, 0x17,
            0x39, 0x4b, 0xdd, 0x7c, 0x84, 0x97, 0xa2, 0xfd, 0x1c, 0x24, 0x6c, 0xb4, 0xc7, 0x52, 0xf6, 0x01,
        ]);
        const LOG = Uint8Array.from([
            0x00, 0x00, 0x19, 0x01, 0x32, 0x02, 0x1a, 0xc6, 0x4b, 0xc7, 0x1b, 0x68, 0x33, 0xee, 0xdf, 0x03,
            0x64, 0x04, 0xe0, 0x0e, 0x34, 0x8d, 0x81, 0xef, 0x4c, 0x71, 0x08, 0xc8, 0xf8, 0x69, 0x1c, 0xc1,
            0x7d, 0xc2, 0x1d, 0xb5, 0xf9, 0xb9, 0x27, 0x6a, 0x4d, 0xe4, 0xa6, 0x72, 0x9a, 0xc9, 0x09, 0x78,
            0x65, 0x2f, 0x8a, 0x05, 0x21, 0x0f, 0xe1, 0x24, 0x12, 0xf0, 0x82, 0x45, 0x35, 0x93, 0xda, 0x8e,
            0x96, 0x8f, 0xdb, 0xbd, 0x36, 0xd0, 0xce, 0x94, 0x13, 0x5c, 0xd2, 0xf1, 0x40, 0x46, 0x83, 0x38,
            0x66, 0xdd, 0xfd, 0x30, 0xbf, 0x06, 0x8b, 0x62, 0xb3, 0x25, 0xe2, 0x98, 0x22, 0x88, 0x91, 0x10,
            0x7e, 0x6e, 0x48, 0xc3, 0xa3, 0xb6, 0x1e, 0x42, 0x3a, 0x6b, 0x28, 0x54, 0xfa, 0x85, 0x3d, 0xba,
            0x2b, 0x79, 0x0a, 0x15, 0x9b, 0x9f, 0x5e, 0xca, 0x4e, 0xd4, 0xac, 0xe5, 0xf3, 0x73, 0xa7, 0x57,
            0xaf, 0x58, 0xa8, 0x50, 0xf4, 0xea, 0xd6, 0x74, 0x4f, 0xae, 0xe9, 0xd5, 0xe7, 0xe6, 0xad, 0xe8,
            0x2c, 0xd7, 0x75, 0x7a, 0xeb, 0x16, 0x0b, 0xf5, 0x59, 0xcb, 0x5f, 0xb0, 0x9c, 0xa9, 0x51, 0xa0,
            0x7f, 0x0c, 0xf6, 0x6f, 0x17, 0xc4, 0x49, 0xec, 0xd8, 0x43, 0x1f, 0x2d, 0xa4, 0x76, 0x7b, 0xb7,
            0xcc, 0xbb, 0x3e, 0x5a, 0xfb, 0x60, 0xb1, 0x86, 0x3b, 0x52, 0xa1, 0x6c, 0xaa, 0x55, 0x29, 0x9d,
            0x97, 0xb2, 0x87, 0x90, 0x61, 0xbe, 0xdc, 0xfc, 0xbc, 0x95, 0xcf, 0xcd, 0x37, 0x3f, 0x5b, 0xd1,
            0x53, 0x39, 0x84, 0x3c, 0x41, 0xa2, 0x6d, 0x47, 0x14, 0x2a, 0x9e, 0x5d, 0x56, 0xf2, 0xd3, 0xab,
            0x44, 0x11, 0x92, 0xd9, 0x23, 0x20, 0x2e, 0x89, 0xb4, 0x7c, 0xb8, 0x26, 0x77, 0x99, 0xe3, 0xa5,
            0x67, 0x4a, 0xed, 0xde, 0xc5, 0x31, 0xfe, 0x18, 0x0d, 0x63, 0x8c, 0x80, 0xc0, 0xf7, 0x70, 0x07
        ]);

        it('should match the correct Sbox', () => {
            expect(aes.Sbox).to.deep.equal(SBOX);
        });

        it('should match the correct invSbox', () => {
            expect(aes.invSbox).to.deep.equal(INVSBOX);
        });

        it('should match the correct exp table', () => {
            expect(aes.exps).to.deep.equal(EXP);
        });

        it('should match the correct log table', () => {
            expect(aes.logs).to.deep.equal(LOG);
        });

        it('should match the correct rcon table', () => {
            expect(aes.rcon).to.deep.equal(RCON);
        });

    });
    
    describe('[TASK6] AES128 test vectors', () => {

        const aes = new MyAES128();

        // from https://www.hanewin.net/encrypt/aes/aes-test.htm

        describe(`Key: ${'0'.repeat(32)}, Plain: ${'0'.repeat(32)}`, () => {

            const k = MyAES128.h2b('00000000000000000000000000000000');
            const p = MyAES128.h2b('00000000000000000000000000000000');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('66e94bd4ef8a2c3b884cfa59ca342b2e');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('00000000000000000000000000000000');
            });
        });

        describe(`Key: ${'0'.repeat(32)}, Plain: ${'0'.repeat(31)}1`, () => {

            const k = MyAES128.h2b('00000000000000000000000000000000');
            const p = MyAES128.h2b('00000000000000000000000000000001');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('58e2fccefa7e3061367f1d57a4e7455a');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('00000000000000000000000000000001');
            });
        });

        describe(`Key: ${'0'.repeat(31)}1, Plain: ${'0'.repeat(31)}1`, () => {

            const k = MyAES128.h2b('00000000000000000000000000000001');
            const p = MyAES128.h2b('00000000000000000000000000000001');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('a17e9f69e4f25a8b8620b4af78eefd6f');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('00000000000000000000000000000001');
            });
        });

        describe(`Key: ${'0'.repeat(32)}, Plain: ${'1'.repeat(32)}`, () => {

            const k = MyAES128.h2b('00000000000000000000000000000000');
            const p = MyAES128.h2b('11111111111111111111111111111111');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('ffa3c7ed04710b98067dae6815e2751f');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('11111111111111111111111111111111');
            });
        });

        describe(`Key: ${'1'.repeat(32)}, Plain: ${'0'.repeat(32)}`, () => {

            const k = MyAES128.h2b('11111111111111111111111111111111');
            const p = MyAES128.h2b('00000000000000000000000000000000');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('e0d541314e00102d6dfca8bc007b6c8a');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('00000000000000000000000000000000');
            });
        });

        describe(`Key: ${'1'.repeat(32)}, Plain: ${'1'.repeat(32)}`, () => {

            const k = MyAES128.h2b('11111111111111111111111111111111');
            const p = MyAES128.h2b('11111111111111111111111111111111');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('e56e26f5608b8d268f2556e198a0e01b');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('11111111111111111111111111111111');
            });
        });

        describe(`Key: ${'a'.repeat(32)}, Plain: ${'b'.repeat(32)}`, () => {

            const k = MyAES128.h2b('a'.repeat(32));
            const p = MyAES128.h2b('b'.repeat(32));

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('f2fdac83238d6d32e4f6da0930d58216');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('b'.repeat(32));
            });
        });

        describe(`Key: ${'f'.repeat(32)}, Plain: ${'a'.repeat(32)}`, () => {

            const k = MyAES128.h2b('f'.repeat(32));
            const p = MyAES128.h2b('a'.repeat(32));

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('354e3663d6d79fd6830f107bc0514df6');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('a'.repeat(32));
            });
        });

        describe(`Key: ${'0'.repeat(32)}, Plain: ${'f'.repeat(32)}`, () => {

            const k = MyAES128.h2b('0'.repeat(32));
            const p = MyAES128.h2b('f'.repeat(32));

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('3f5b8cc9ea855a0afa7347d23e8d664e');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('f'.repeat(32));
            });
        });

        describe(`Key: ${'f'.repeat(32)}, Plain: ${'0'.repeat(32)}`, () => {

            const k = MyAES128.h2b('f'.repeat(32));
            const p = MyAES128.h2b('0'.repeat(32));

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('a1f6258c877d5fcd8964484538bfc92c');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('0'.repeat(32));
            });

            it('should match encrypted after 16 encryptions and 15 decryptions', () => {

                let temp = p.slice();

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 15; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.equal('a1f6258c877d5fcd8964484538bfc92c');
            });
        });

        describe(`Key: ${'f'.repeat(32)}, Plain: ${'f'.repeat(32)}`, () => {

            const k = MyAES128.h2b('f'.repeat(32));
            const p = MyAES128.h2b('f'.repeat(32));

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('bcbf217cb280cf30b2517052193ab979');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('f'.repeat(32));
            });

            it('should match encrypted after 16 encryptions and 15 decryptions', () => {

                let temp = p.slice();

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 15; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.equal('bcbf217cb280cf30b2517052193ab979');
            });
        });

        describe(`Key: e8e9eaebedeeeff0f2f3f4f5f7f8f9fa, Plain: 014baf2278a69d331d5180103643e99a`, () => {

            const k = MyAES128.h2b('e8e9eaebedeeeff0f2f3f4f5f7f8f9fa');
            const p = MyAES128.h2b('014baf2278a69d331d5180103643e99a');

            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('should match encrypted', () => {
                expect(MyAES128.b2h(enc)).to.equal('6743c3d1519ab4f2cd9a78ab09a511bd');
            });

            it('should match plain', () => {
                expect(MyAES128.b2h(dec)).to.equal('014baf2278a69d331d5180103643e99a');
            });

            it('should match encrypted after 16 encryptions and 15 decryptions', () => {

                let temp = p.slice();

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 15; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.equal('6743c3d1519ab4f2cd9a78ab09a511bd');
            });
        });

    });

    describe('[TASK6] Random values AES128', () => {

        const aes = new MyAES128();

        describe('Random plain #1', () => {

            const k = Uint8Array.from([1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7]);
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });
        });

        describe('Random plain #2', () => {

            const k = Uint8Array.from([1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15]);
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain #3', () => {

            const k = Uint8Array.from([147, 15, 147, 15, 147, 15, 147, 15, 147, 15, 147, 15, 147, 15, 147, 15]);
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain #4', () => {

            const k = Uint8Array.from([201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216]);
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random key #1', () => {

            const plain = Uint8Array.from([1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7, 1, 3, 3, 7]);
            const k = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random key #2', () => {

            const plain = Uint8Array.from([12, 32, 32, 7, 1, 3, 3, 72, 1, 30, 3, 7, 1, 3, 30, 70]);
            const k = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random key #3', () => {

            const plain = Uint8Array.from([12, 32, 32, 79, 100, 30, 30, 72, 1, 30, 39, 7, 199, 3, 30, 70]);
            const k = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random key #4', () => {

            const plain = Uint8Array.from([12, 32, 32, 7, 15, 36, 35, 72, 1, 30, 37, 78, 17, 38, 30, 70]);
            const k = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain and key #1', () => {

            const k = getRand(new Uint8Array(16));
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain and key #2', () => {

            const k = getRand(new Uint8Array(16));
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain and key #3', () => {

            const k = getRand(new Uint8Array(16));
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

        describe('Random plain and key #4', () => {

            const k = getRand(new Uint8Array(16));
            const plain = getRand(new Uint8Array(16));

            let temp = plain.slice();

            it(`Key: ${MyAES128.b2h(k)}, Plain: ${MyAES128.b2h(plain)} should match after 16 encryptions and 16 decryptions`, () => {

                for (let i = 0; i < 16; i++) {
                    temp = aes.encrypt(temp, k);
                }

                for (let i = 0; i < 16; i++) {
                    temp = aes.decrypt(temp, k);
                }

                expect(MyAES128.b2h(temp)).to.be.equal(MyAES128.b2h(plain));
            });

        });

    });

})('function' === typeof require
    ? [require('../MyAES128/myaes128.js'), require('chai').expect, require('crypto').randomFillSync]
    : [MyAES128, chai.expect, crypto.getRandomValues.bind(crypto)]
);
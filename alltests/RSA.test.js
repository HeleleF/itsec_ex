/**
 * Own Tests for @see MyRSA
 * 
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
(([MyBigInt, MyRSA, expect]) => {

    describe('[TASK3] Wrong parameter', () => {

        it('should throw for wrong input constructor()', () => {

            expect(() => new MyRSA({
                size: '-37'
            })).to.throw();
            expect(() => new MyRSA({
                size: [1, 2, 3]
            })).to.throw();
            expect(() => new MyRSA({
                size: -37
            })).to.throw();
            expect(() => new MyRSA({
                size: 12345
            })).to.throw();

            expect(() => new MyRSA({
                e: '156'
            })).to.throw();
            expect(() => new MyRSA({
                e: [1, 2, 3]
            })).to.throw();
            expect(() => new MyRSA({
                e: 56
            })).to.throw();

            const wrongE = MyBigInt.fromString('65534');
            expect(() => new MyRSA({
                e: wrongE
            })).to.throw();
        });

        it('should throw for wrong input generatePrimePair()', () => {

            expect(() => MyRSA.generatePrimePair('64')).to.throw();
            expect(() => MyRSA.generatePrimePair([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => MyRSA.generatePrimePair(val)).to.throw();

            expect(() => MyRSA.generatePrimePair(-177)).to.throw();
            expect(() => MyRSA.generatePrimePair(0)).to.throw();
            expect(() => MyRSA.generatePrimePair(1)).to.throw();
            expect(() => MyRSA.generatePrimePair(987654321)).to.throw();

        });

        it('should throw for wrong input getPrimeWithBits()', () => {

            expect(() => MyRSA.getPrimeWithBits('64')).to.throw();
            expect(() => MyRSA.getPrimeWithBits([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => MyRSA.getPrimeWithBits(val)).to.throw();

            expect(() => MyRSA.getPrimeWithBits(-177)).to.throw();
            expect(() => MyRSA.getPrimeWithBits(0)).to.throw();
            expect(() => MyRSA.getPrimeWithBits(1)).to.throw();
            expect(() => MyRSA.getPrimeWithBits(987654)).to.throw();

        });

        it('should throw for wrong input encryptRSA()', () => {

            expect(() => MyRSA.encryptRSA('64')).to.throw();
            expect(() => MyRSA.encryptRSA([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => MyRSA.encryptRSA(val)).to.throw();

            expect(() => MyRSA.encryptRSA(-177)).to.throw();

            const pk = {
                e: MyBigInt.ZERO(),
                n: MyBigInt.ZERO()
            };

            expect(() => MyRSA.encryptRSA(pk, '64')).to.throw();
            expect(() => MyRSA.encryptRSA(pk, [45, 56])).to.throw();

            expect(() => MyRSA.encryptRSA(pk, val)).to.throw();

            expect(() => MyRSA.encryptRSA(pk, -177)).to.throw();

        });

        it('should throw for wrong input decryptRSA()', () => {

            expect(() => MyRSA.decryptRSA('64')).to.throw();
            expect(() => MyRSA.decryptRSA([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => MyRSA.decryptRSA(val)).to.throw();

            expect(() => MyRSA.decryptRSA(-177)).to.throw();

            const sk = {
                d: MyBigInt.ZERO(),
                n: MyBigInt.ZERO(),
                p: MyBigInt.ZERO(),
                q: MyBigInt.ZERO()
            };

            expect(() => MyRSA.decryptRSA(sk, '64')).to.throw();
            expect(() => MyRSA.decryptRSA(sk, [45, 56])).to.throw();

            expect(() => MyRSA.decryptRSA(sk, val)).to.throw();

            expect(() => MyRSA.decryptRSA(sk, -177)).to.throw();

        });

        it('should throw for wrong input encryptText()', () => {

            const rsa = new MyRSA({
                size: 24
            });

            expect(() => rsa.encryptText([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => rsa.encryptText(val)).to.throw();

            expect(() => rsa.encryptText(-177)).to.throw();
            expect(() => rsa.encryptText(0)).to.throw();
            expect(() => rsa.encryptText(1)).to.throw();
            expect(() => rsa.encryptText(987654)).to.throw();

        });

        it('should throw for wrong input decryptText()', () => {

            const rsa = new MyRSA({
                size: 24
            });

            expect(() => rsa.decryptText([45, 56])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => rsa.decryptText(val)).to.throw();

            const notAblock1 = {
                octets: [1, 2, 3],
                mLen: 17
            };
            expect(() => rsa.decryptText(notAblock1)).to.throw();

            const notAblock2 = {
                octets: new Uint8Array(3),
                mLen: 'abc'
            };
            expect(() => rsa.decryptText(notAblock2)).to.throw();

            const notAblock3 = {
                octets: new Uint8Array(3),
                mLen: -8
            };
            expect(() => rsa.decryptText(notAblock3)).to.throw();

            expect(() => rsa.decryptText(-177)).to.throw();

        });
    });

    describe('[TASK3] BigInt<->OctetString conversion', () => {

        const result = a => {
            const l = BigInt(a.length - 1);
            const B = 256n;
            return a.reduce((acc, cur, i, ) => {
                return acc + cur * B ** (l - BigInt(i));
            }, 0n);
        };

        it('should not convert octet string to BigInt wrong input array', () => {

            const O = [1, 2, 3];
            expect(() => MyBigInt.fromOctetString(O)).to.throw();
        });

        it('should not convert octet string to BigInt wrong input number', () => {

            const O = 65763;
            expect(() => MyBigInt.fromOctetString(O)).to.throw();
        });

        it('should not convert octet string to BigInt wrong input string', () => {

            const O = '65763';
            expect(() => MyBigInt.fromOctetString(O)).to.throw();
        });

        it('should convert octet string to BigInt 1', () => {

            const V = [0, 0, 0];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 2', () => {

            const V = [0, 0, 1];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 3', () => {

            const V = [0, 1, 0];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 4', () => {

            const V = [0, 1, 1];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 5', () => {

            const V = [1, 0, 1];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 6', () => {

            const V = [1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 1];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should convert octet string to BigInt 7', () => {

            const V = [1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 241, 0, 17, 45, 23, 78, 56];
            const OS = Uint8Array.from(V);
            const BIG = result(V.map(v => BigInt(v)));

            expect(MyBigInt.fromOctetString(OS).toString()).to.equal(BIG.toString());
        });

        it('should not convert BigInt to octet string wrong input string', () => {

            const B = MyBigInt.fromString('123456789');
            expect(() => B.toOctetString('37')).to.throw();
        });

        it('should not convert BigInt to octet string wrong input negative bigint', () => {

            const B = MyBigInt.fromString('-123456789');
            expect(() => B.toOctetString(10)).to.throw();
        });

        it('should not convert BigInt to octet string wrong input too small', () => {

            const B = MyBigInt.fromString('1234567890987654321');
            expect(() => B.toOctetString(4)).to.throw();
        });

        it('should not convert BigInt to octet string wrong input negative number', () => {

            const B = MyBigInt.fromString('123456789');
            expect(() => B.toOctetString(-5)).to.throw();
        });

        it('should convert BigInt to octet string 1', () => {

            const B = MyBigInt.fromString('0');
            expect(B.toOctetString(3)).to.deep.equal(Uint8Array.from([0, 0, 0]));
        });

        it('should convert BigInt to octet string 2', () => {

            const B = MyBigInt.fromString('1');
            expect(B.toOctetString(10)).to.deep.equal(Uint8Array.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 1]));
        });

        it('should convert BigInt to octet string 3', () => {

            const B = MyBigInt.fromString('256');
            expect(B.toOctetString(4)).to.deep.equal(Uint8Array.from([0, 0, 1, 0]));
        });

        it('should convert BigInt to octet string 4', () => {

            const B = MyBigInt.fromString('257');
            expect(B.toOctetString(5)).to.deep.equal(Uint8Array.from([0, 0, 0, 1, 1]));
        });

        it('should convert BigInt to octet string 5', () => {

            const B = MyBigInt.fromString('255');
            expect(B.toOctetString(3)).to.deep.equal(Uint8Array.from([0, 0, 255]));
        });

        it('should convert BigInt to octet string 6', () => {

            const B = MyBigInt.fromString('187072209578355573530071658587684226515959365500927');
            expect(B.toOctetString(22)).to.deep.equal(Uint8Array.from([0, 127, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]));
        });
    });

    describe('[TASK3] Generation of P', () => {

        it('should generate a prime p with 6bit', () => {

            const P = MyRSA.getPrimeWithBits(6);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(6)
        });

        it('should generate a prime p with 12bit', () => {

            const P = MyRSA.getPrimeWithBits(12);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(12)
        });

        it('should generate a prime p with 25bit', () => {

            const P = MyRSA.getPrimeWithBits(25);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(25)
        });

        it('should generate a prime p with 32bit', () => {

            const P = MyRSA.getPrimeWithBits(32);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(32)
        });

        it('should generate a prime p with 50bit', () => {

            const P = MyRSA.getPrimeWithBits(50);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(50)
        });

        it('should generate a prime p with 64bit', () => {

            const P = MyRSA.getPrimeWithBits(64);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(64)
        });

        it('should generate a prime p with 96bit', () => {

            const P = MyRSA.getPrimeWithBits(96);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(96)
        });

        it('should generate a prime p with 128bit', () => {

            const P = MyRSA.getPrimeWithBits(128);
            const BIG = BigInt(P.toString());

            expect(BIG.toString(2)).to.have.lengthOf(128)
        });
    });

    describe('[TASK3] Generation of P and Q', () => {

        it('should generate p and q with p*q=n (25 bit)', () => {

            const {
                P: P,
                Q: Q,
                N: N
            } = MyRSA.generatePrimePair(25);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());

            const BIG = BigInt(N.toString());
            expect(BIG.toString(2)).to.have.lengthOf.within(25, 26)
        });

        it('should generate p and q with p*q=n (50 bit)', () => {

            const {
                P: P,
                Q: Q,
                N: N
            } = MyRSA.generatePrimePair(50);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());

            const BIG = BigInt(N.toString());
            expect(BIG.toString(2)).to.have.lengthOf.within(50, 51)
        });

        it('should generate p and q with p*q=n (64 bit)', () => {

            const {
                P: P,
                Q: Q,
                N: N
            } = MyRSA.generatePrimePair(64);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());

            const BIG = BigInt(N.toString());
            expect(BIG.toString(2)).to.have.lengthOf.within(64, 65)
        });

        it('should generate p and q with p*q=n (128 bit)', () => {

            const {
                P: P,
                Q: Q,
                N: N
            } = MyRSA.generatePrimePair(128);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());

            const BIG = BigInt(N.toString());
            expect(BIG.toString(2)).to.have.lengthOf.within(128, 129)
        });

        it('should generate p and q with p*q=n (256 bit)', () => {

            const {
                P: P,
                Q: Q,
                N: N
            } = MyRSA.generatePrimePair(256);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());

            const BIG = BigInt(N.toString());
            expect(BIG.toString(2)).to.have.lengthOf.within(256, 257)
        });
    });

    describe('[TASK3] RSA encrypt decrypt 128bit', () => {

        const rsa = new MyRSA({
            size: 128
        });

        it('should decrypt encrypted string "abc"', () => {

            const cipher = rsa.encryptText('abc');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('abc');
        });

        it('should decrypt encrypted string "xyxy"', () => {

            const cipher = rsa.encryptText('xyxy');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('xyxy');
        });

        it('should decrypt encrypted string "000"', () => {

            const cipher = rsa.encryptText('000');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('000');
        });

        it('should decrypt encrypted string "111"', () => {

            const cipher = rsa.encryptText('111');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('111');
        });
    });

    describe('[TASK3] RSA encrypt decrypt 256bit', () => {

        const rsa = new MyRSA({
            size: 256
        });

        it('should decrypt encrypted string "abcabc"', () => {

            const cipher = rsa.encryptText('abcabc');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('abcabc');
        });

        it('should decrypt encrypted string "abcdefg"', () => {

            const cipher = rsa.encryptText('abcdefg');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('abcdefg');
        });

        it('should decrypt encrypted string "gfedcba"', () => {

            const cipher = rsa.encryptText('gfedcba');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('gfedcba');
        });

        it('should decrypt encrypted string "xyxyxyxy"', () => {

            const cipher = rsa.encryptText('xyxyxyxy');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('xyxyxyxy');
        });

        it('should decrypt encrypted string "0001000"', () => {

            const cipher = rsa.encryptText('0001000');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('0001000');
        });

        it('should decrypt encrypted string "111000111"', () => {

            const cipher = rsa.encryptText('111000111');
            const plain = rsa.decryptText(cipher);

            expect(plain).to.be.equal('111000111');
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyRSA/myrsa.js'), require('chai').expect] : [MyBigInt, MyRSA, chai.expect]);
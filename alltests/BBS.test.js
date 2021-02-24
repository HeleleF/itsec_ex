/**
 * Own Tests for @see MyBBS
 * 
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
(([MyBigInt, MyBBS, expect]) => {

    const big4 = BigInt(4);
    const big3 = BigInt(3);

    describe('[TASK4] Wrong parameter', () => {

        it('should throw for wrong input getBlumPrimeWithBits()', () => {

            expect(() => MyBBS.getBlumPrimeWithBits('64')).to.throw();
            expect(() => MyBBS.getBlumPrimeWithBits([64, 65])).to.throw();

            const val = MyBigInt.fromString('65534');
            expect(() => MyBBS.getBlumPrimeWithBits(val)).to.throw();

            expect(() => MyBBS.getBlumPrimeWithBits(-543)).to.throw();
            expect(() => MyBBS.getBlumPrimeWithBits(0)).to.throw();
            expect(() => MyBBS.getBlumPrimeWithBits(1)).to.throw();
            expect(() => MyBBS.getBlumPrimeWithBits(3000000)).to.throw();

        });

        it('should throw for wrong input createBlumprimes()', () => {

            expect(() => MyBBS.createBlumPrimes('64')).to.throw();
            expect(() => MyBBS.createBlumPrimes([64, 65])).to.throw();

            const neg = MyBigInt.fromString('-65534');
            expect(() => MyBBS.createBlumPrimes(neg)).to.throw();

        });

        it('should throw for wrong input randomBitStream()', () => {

            const bbs = new MyBBS({
                module: MyBigInt.fromString('209'),
                seed: MyBigInt.fromString('148')
            });

            expect(() => {
                const stream = bbs.randomBitStream('64');
                stream.next();
            }).to.throw();

            expect(() => {
                const stream = bbs.randomBitStream([64,65]);
                stream.next();
            }).to.throw();

            expect(() => {
                const neg = MyBigInt.fromString('-65534');
                const stream = bbs.randomBitStream(neg);
                stream.next();
            }).to.throw();

            expect(() => {
                const stream = bbs.randomBitStream(-5);
                stream.next();
            }).to.throw();

            expect(() => {
                const stream = bbs.randomBitStream(0);
                stream.next();
            }).to.throw();
            
            expect(() => {
                const stream = bbs.randomBitStream(50000);
                stream.next();
            }).to.throw();

        });

    });

    describe('[TASK4] Generation of P', () => {

        it('should generate a blum prime p with 6bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(6);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(6);
        });

        it('should generate a blum prime p with 12bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(12);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(12);
        });

        it('should generate a blum prime p with 25bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(25);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(25);
        });

        it('should generate a blum prime p with 32bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(32);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(32);
        });

        it('should generate a blum prime p with 50bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(50);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(50);
        });

        it('should generate a blum prime p with 64bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(64);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(64);
        });

        it('should generate a blum prime p with 96bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(96);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(96);
        });

        it('should generate a blum prime p with 128bit', () => {

            const P = MyBBS.getBlumPrimeWithBits(128);        
            const BIG = BigInt(P.toString());

            expect(BIG % big4).to.equal(big3);
            expect(BIG.toString(2)).to.have.lengthOf(128);
        });
    });

    describe('[TASK4] Generation of P and Q', () => {

        it('should generate p and q with p*q=n (25 bit) and p,q%4=3', () => {

            const { P: P, Q: Q, N: N } = MyBBS.createBlumPrimes(25);
            const PQ = P.mul(Q);

            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());
            
            const BIGP = BigInt(P.toString());
            const BIGQ = BigInt(Q.toString());

            expect(BIGP % big4).to.equal(big3);
            expect(BIGQ % big4).to.equal(big3);

            const BIG = BigInt(N.toString());

            expect(BIG.toString(2)).to.have.lengthOf.within(25, 26);
        });

        it('should generate p and q with p*q=n (50 bit) and p,q%4=3', () => {

            const { P: P, Q: Q, N: N } = MyBBS.createBlumPrimes(50);
            const PQ = P.mul(Q);
    
            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());
            
            const BIGP = BigInt(P.toString());
            const BIGQ = BigInt(Q.toString());
    
            expect(BIGP % big4).to.equal(big3);
            expect(BIGQ % big4).to.equal(big3);
    
            const BIG = BigInt(N.toString());
    
            expect(BIG.toString(2)).to.have.lengthOf.within(50, 51);
        });

        it('should generate p and q with p*q=n (64 bit) and p,q%4=3', () => {

            const { P: P, Q: Q, N: N } = MyBBS.createBlumPrimes(64);
            const PQ = P.mul(Q);
    
            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());
            
            const BIGP = BigInt(P.toString());
            const BIGQ = BigInt(Q.toString());
    
            expect(BIGP % big4).to.equal(big3);
            expect(BIGQ % big4).to.equal(big3);
    
            const BIG = BigInt(N.toString());
    
            expect(BIG.toString(2)).to.have.lengthOf.within(64, 65);
        });

        it('should generate p and q with p*q=n (96 bit) and p,q%4=3', () => {

            const { P: P, Q: Q, N: N } = MyBBS.createBlumPrimes(96);
            const PQ = P.mul(Q);
    
            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());
            
            const BIGP = BigInt(P.toString());
            const BIGQ = BigInt(Q.toString());
    
            expect(BIGP % big4).to.equal(big3);
            expect(BIGQ % big4).to.equal(big3);
    
            const BIG = BigInt(N.toString());
    
            expect(BIG.toString(2)).to.have.lengthOf.within(96, 97);
        });

        it('should generate p and q with p*q=n (128 bit) and p,q%4=3', () => {

            const { P: P, Q: Q, N: N } = MyBBS.createBlumPrimes(128);
            const PQ = P.mul(Q);
    
            expect(P.neq(Q)).to.be.true;
            expect(N.toString()).to.be.equal(PQ.toString());
            
            const BIGP = BigInt(P.toString());
            const BIGQ = BigInt(Q.toString());
    
            expect(BIGP % big4).to.equal(big3);
            expect(BIGQ % big4).to.equal(big3);
    
            const BIG = BigInt(N.toString());
    
            expect(BIG.toString(2)).to.have.lengthOf.within(128, 129);
        });
    });

    describe('[TASK4] Produce Bytes as string or number', () => { 

        const bbs = new MyBBS({
            module: MyBigInt.fromString('1303301'),
            seed: MyBigInt.fromString('2674166')
        });

        it(`should generate bytes as numbers by default`, () => {

            const VALS = Array.from({ length: 50 }, () => bbs.randomByte());
            expect(VALS.filter(v => v >= 0 && v < 256)).to.have.lengthOf(50);
        });

        it(`should generate bytes as numbers explicit`, () => {

            const VALS = Array.from({ length: 50 }, () => bbs.randomByte(false));
            expect(VALS.filter(v => v >= 0 && v < 256)).to.have.lengthOf(50);
        });

        it(`should generate bytes as bitstrings explicit`, () => {

            const VALS = Array.from({ length: 50 }, () => bbs.randomByte(true));
            expect(VALS.filter(v => /^(0|1){8}$/.test(v))).to.have.lengthOf(50);
        });
    });

    describe('[TASK4] Bitstream in range', () => { 

        const bbs = new MyBBS({
            module: MyBigInt.fromString('27974329'),
            seed: MyBigInt.fromString('20387271')
        });

        const bits = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        
        bits.forEach(b => {
            it(`should generate only ${b}bit values`, () => {

                const GEN = bbs.randomBitStream(b);
                const VALS = Array.from({ length: 50 }, () => GEN.next().value);
    
                expect(VALS.filter(v => v >= 0 && v < 2 ** b)).to.have.lengthOf(50);
            });
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyBBS/mybbs.js'), require('chai').expect] : [MyBigInt, MyBBS, chai.expect]);
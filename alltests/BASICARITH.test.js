(([MyBigInt, expect]) => {

    /**
     * Creates a (huge) string of random digits.
     * If `l` is not passed, it will be randomly chosen from 1 to 100.
     * This is not secure (in terms of crypto-randomness), since here we just
     * want to generate large numbers to test the arithmetic methods with.
     * @param {number} [l] How many digits on the string, Optional.
     * @returns {string} The number as a string.
     */
    const numString = (l = Math.floor(Math.random() * 100) + 1) => {

        let r = '';
        // chose random sign too
        const sign = Math.round(Math.random()) ? '' : '-';

        for (let i = 0; i < 10; i++) {
            r += Math.random().toString(10).substring(2);
        }
        return `${sign}${r.slice(0, l)}`;
    };

    // this test uses the fact that Javascript can now handle BigIntegers natively (with BigInt),
    // so we can check the correct result by calculation and dont have to hardcore the correct answers.
    const ZERO = BigInt(0);

    describe('[TASK1] Basic arithmetic positive', () => {

        const NUMS = ["0", "1", "2", "255", "256", "257", "65535", "65536", "65537", "10000000000000000000000001"];
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul ${BIGA} and ${BIGB}`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod ${BIGA} and ${BIGB}`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic negative', () => {

        const NUMS = ["0", "-1", "-2", "-255", "-256", "-257", "-65535", "-65536", "-65537", "-10000000000000000000000001"];
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul ${BIGA} and ${BIGB}`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod ${BIGA} and ${BIGB}`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic 3-digit numbers', () => {

        const NUMS = Array.from({ length: 8 }, () => numString(3));
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul ${BIGA} and ${BIGB}`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod ${BIGA} and ${BIGB}`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic 10-digit numbers', () => {

        const NUMS = Array.from({ length: 5 }, () => numString(10));
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul ${BIGA} and ${BIGB}`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod ${BIGA} and ${BIGB}`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic 20-digit numbers', () => {

        const NUMS = Array.from({ length: 5 }, () => numString(20));
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul two 20-digit numbers`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod two 20-digit numbers`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic 50-digit numbers', () => {

        const NUMS = Array.from({ length: 5 }, () => numString(50));
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul two 50-digit numbers`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod two 50-digit numbers`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

    describe('[TASK1] Basic arithmetic numbers with 1 to 100 digits', () => {

        const NUMS = Array.from({ length: 5 }, () => numString());
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            MYBIGS.forEach((B, j) => {
                const BIGB = BIGS[j];

                const ADD = BIGA + BIGB;
                const SUB = BIGA - BIGB;
                const MUL = BIGA * BIGB;

                it(`should add, sub and mul two numbers with 1 to 100 digits`, () => {
                    expect(A.add(B).toString()).to.equal(ADD.toString());
                    expect(A.sub(B).toString()).to.equal(SUB.toString());
                    expect(A.mul(B).toString()).to.equal(MUL.toString());
                });

                if (BIGB !== ZERO) {
                    it(`should divmod two numbers with 1 to 100 digits`, () => {

                        const DIV = BIGA / BIGB;
                        const MOD = BIGA % BIGB;
    
                        const { q: Q, r: R } = A.divmod(B, false);
                        expect(Q.toString()).to.equal(DIV.toString());
                        expect(R.toString()).to.equal(MOD.toString());
                    });
                }
            });
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
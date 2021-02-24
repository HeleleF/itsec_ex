(([MyBigInt, expect]) => {

    describe('[TASK2] Random generation', () => {

        const bits = [5, 10, 15, 20, 25, 30, 32, 40, 50, 60, 64, 70, 80, 90, 99, 100, 128, 150, 199, 256, 512, 1000, 1024, 2000, 2048];

        describe('Random generation normal', () => {

            bits.forEach(b => {

                it(`should generate random number with ${b}bit`, () => {

                    const A = MyBigInt.getRandom(b, false);
                    const BIG = BigInt(A.toString());
    
                    expect(BIG.toString(2)).to.have.lengthOf.at.most(b)
                });
            });
        });

        describe('Random generation odd', () => {

            bits.forEach(b => {

                it(`should generate random odd number with ${b}bit`, () => {

                    const A = MyBigInt.getRandom(b, true);
                    const BIG = BigInt(A.toString());

                    const ABITS = BIG.toString(2);

                    expect(ABITS).to.have.lengthOf(b)
    
                    expect(ABITS[0]).to.equal('1');
                    expect(ABITS[b - 1]).to.equal('1');
                });
            });

        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
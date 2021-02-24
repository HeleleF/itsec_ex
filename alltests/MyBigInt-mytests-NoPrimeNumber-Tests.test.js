
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-NoPrimeNumber-Tests', () => {
    
            describe('NoPrimeNumber-1', () => {
                const p = MyBigInt.fromString('1');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-1 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-1 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-2', () => {
                const p = MyBigInt.fromString('48');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-2 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-2 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-3', () => {
                const p = MyBigInt.fromString('75361');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-3 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-3 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-4', () => {
                const p = MyBigInt.fromString('449065');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-4 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.true;
                });

                it('NoPrimeNumber-4 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.true;
                });
            });
            describe('NoPrimeNumber-5', () => {
                const p = MyBigInt.fromString('4324213413251351');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-5 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-5 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-6', () => {
                const p = MyBigInt.fromString('457568756845876866786');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-6 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-6 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-7', () => {
                const p = MyBigInt.fromString('7665795679597579578956967957');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-7 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-7 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-8', () => {
                const p = MyBigInt.fromString('21346587698797674564778007867511111');

                const as = [2,3,11,13,879192541,1662803].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-8 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-8 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
            describe('NoPrimeNumber-9', () => {
                const p = MyBigInt.fromString('449065');

                const as = [2,3,5,7,11,13,17,19,23,29,31,37].map(a => MyBigInt.fromString(`${a}`));

                it('NoPrimeNumber-9 fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.false;
                });

                it('NoPrimeNumber-9 euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.false;
                });
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
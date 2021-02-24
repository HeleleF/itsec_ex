
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-primeNumber-Tests', () => {
    
                it('PrimeNumber-1', () => {
                    const p = MyBigInt.fromString('2');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-2', () => {
                    const p = MyBigInt.fromString('181');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-3', () => {
                    const p = MyBigInt.fromString('191');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-4', () => {
                    const p = MyBigInt.fromString('3801247');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-5', () => {
                    const p = MyBigInt.fromString('3801253');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-6', () => {
                    const p = MyBigInt.fromString('8005343');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-7', () => {
                    const p = MyBigInt.fromString('8005367');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-8', () => {
                    const p = MyBigInt.fromString('14612209');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-9', () => {
                    const p = MyBigInt.fromString('14612219');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-10', () => {
                    const p = MyBigInt.fromString('309490229');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-11', () => {
                    const p = MyBigInt.fromString('309490283');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-12', () => {
                    const p = MyBigInt.fromString('314606797');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-13', () => {
                    const p = MyBigInt.fromString('314606827');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-14', () => {
                    const p = MyBigInt.fromString('885847591');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-15', () => {
                    const p = MyBigInt.fromString('899809333');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-16', () => {
                    const p = MyBigInt.fromString('899809343');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-17', () => {
                    const p = MyBigInt.fromString('974978309');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-18', () => {
                    const p = MyBigInt.fromString('974978317');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-19', () => {
                    const p = MyBigInt.fromString('979657639');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-20', () => {
                    const p = MyBigInt.fromString('979657669');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-21', () => {
                    const p = MyBigInt.fromString('982451629');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
                it('PrimeNumber-22', () => {
                    const p = MyBigInt.fromString('982451653');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
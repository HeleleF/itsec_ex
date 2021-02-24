(([MyBigInt, expect]) => {


    describe('[TASK2] MyBigInt-mytests-EulerPseudoPrime-Tests', () => {

        it('Euler-PseudoPrime-1', () => {
            const a = MyBigInt.fromString('128');
            const p = MyBigInt.fromString('341');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-2', () => {
            const a = MyBigInt.fromString('1172');
            const p = MyBigInt.fromString('1681');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-3', () => {
            const a = MyBigInt.fromString('315');
            const p = MyBigInt.fromString('2449');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-4', () => {
            const a = MyBigInt.fromString('2');
            const p = MyBigInt.fromString('1729');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-5', () => {
            const a = MyBigInt.fromString('3');
            const p = MyBigInt.fromString('2465');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-6', () => {
            const a = MyBigInt.fromString('5');
            const p = MyBigInt.fromString('75361');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-7', () => {
            const a = MyBigInt.fromString('2');
            const p = MyBigInt.fromString('162401');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-8', () => {
            const a = MyBigInt.fromString('3');
            const p = MyBigInt.fromString('488881');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-9', () => {
            const a = MyBigInt.fromString('5');
            const p = MyBigInt.fromString('997633');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-10', () => {
            const a = MyBigInt.fromString('2');
            const p = MyBigInt.fromString('3057601');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-11', () => {
            const a = MyBigInt.fromString('3');
            const p = MyBigInt.fromString('4903921');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-12', () => {
            const a = MyBigInt.fromString('5');
            const p = MyBigInt.fromString('173032371289');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
        it('Euler-PseudoPrime-13', () => {
            const a = MyBigInt.fromString('891354881');
            const p = MyBigInt.fromString('973694665856161');
            const c = p.witnessEuler(a);

            expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
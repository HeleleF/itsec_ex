(([MyBigInt, expect]) => {


    describe('[TASK2] MyBigInt-mytests-FermatPseudoPrime-Tests', () => {

        it('Fermat-PseudoPrime-1', () => {
            const a = MyBigInt.fromString('64');
            const p = MyBigInt.fromString('105');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-2', () => {
            const a = MyBigInt.fromString('40');
            const p = MyBigInt.fromString('123');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-3', () => {
            const a = MyBigInt.fromString('121');
            const p = MyBigInt.fromString('183');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-4', () => {
            const a = MyBigInt.fromString('146');
            const p = MyBigInt.fromString('203');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-5', () => {
            const a = MyBigInt.fromString('3');
            const p = MyBigInt.fromString('286');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-6', () => {
            const a = MyBigInt.fromString('144');
            const p = MyBigInt.fromString('319');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-7', () => {
            const a = MyBigInt.fromString('213');
            const p = MyBigInt.fromString('341');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-8', () => {
            const a = MyBigInt.fromString('86');
            const p = MyBigInt.fromString('377');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-9', () => {
            const a = MyBigInt.fromString('76');
            const p = MyBigInt.fromString('385');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-10', () => {
            const a = MyBigInt.fromString('233');
            const p = MyBigInt.fromString('406');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-11', () => {
            const a = MyBigInt.fromString('177');
            const p = MyBigInt.fromString('2572');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-12', () => {
            const a = MyBigInt.fromString('753');
            const p = MyBigInt.fromString('2632');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-13', () => {
            const a = MyBigInt.fromString('546');
            const p = MyBigInt.fromString('2735');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-14', () => {
            const a = MyBigInt.fromString('177');
            const p = MyBigInt.fromString('2572');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-15', () => {
            const a = MyBigInt.fromString('753');
            const p = MyBigInt.fromString('2632');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-16', () => {
            const a = MyBigInt.fromString('546');
            const p = MyBigInt.fromString('561');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-17', () => {
            const a = MyBigInt.fromString('177');
            const p = MyBigInt.fromString('10585');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-18', () => {
            const a = MyBigInt.fromString('753');
            const p = MyBigInt.fromString('334153');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-19', () => {
            const a = MyBigInt.fromString('233');
            const p = MyBigInt.fromString('449065');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-20', () => {
            const a = MyBigInt.fromString('546');
            const p = MyBigInt.fromString('512461');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
        it('Fermat-PseudoPrime-21', () => {
            const a = MyBigInt.fromString('753');
            const p = MyBigInt.fromString('334153');
            const c = p.witnessFermat(a);

            expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
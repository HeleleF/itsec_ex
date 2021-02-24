(([MyBigInt, expect]) => {

describe('[TASK1] Equality', () => {

    it('should be +1 == +1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('1');

        expect(a.eq(b)).to.equal(true);
        expect(a.neq(b)).to.equal(false);

        expect(a.eqo()).to.equal(true);
        expect(b.eqo()).to.equal(true);

        expect(a.eqz()).to.equal(false);
        expect(b.eqz()).to.equal(false);
    });

    it('should be -1 == -1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-1');

        expect(a.eq(b)).to.equal(true);
        expect(a.neq(b)).to.equal(false);

        expect(a.eqo()).to.equal(false);
        expect(b.eqo()).to.equal(false);

        expect(a.eqz()).to.equal(false);
        expect(b.eqz()).to.equal(false);
    });

    it('should be 0 == 0', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('0');

        expect(a.eq(b)).to.equal(true);
        expect(a.neq(b)).to.equal(false);

        expect(a.eqo()).to.equal(false);
        expect(b.eqo()).to.equal(false);

        expect(a.eqz()).to.equal(true);
        expect(b.eqz()).to.equal(true);
    });

    it('should be -1 != +1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('1');

        expect(a.eq(b)).to.equal(false);
        expect(a.neq(b)).to.equal(true);
    });

    it('should be +1 != -1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('-1');

        expect(a.eq(b)).to.equal(false);
        expect(a.neq(b)).to.equal(true);
    });

    it('should be +1234567890987654321245234623463456346346346346346346534786786578 == +1234567890987654321245234623463456346346346346346346534786786578', () => {
        const a = MyBigInt.fromString('1234567890987654321245234623463456346346346346346346534786786578');
        const b = MyBigInt.fromString('1234567890987654321245234623463456346346346346346346534786786578');

        expect(a.eq(b)).to.equal(true);
        expect(a.neq(b)).to.equal(false);
    });

    it('should be +123456789098765432124523462346345634634634634634634653478678657899999 != +1234567890987654321245234623463456346346346346346346534786786578', () => {
        const a = MyBigInt.fromString('123456789098765432124523462346345634634634634634634653478678657899999');
        const b = MyBigInt.fromString('1234567890987654321245234623463456346346346346346346534786786578');

        expect(a.eq(b)).to.equal(false);
        expect(a.neq(b)).to.equal(true);
    });
});

describe('[TASK1] Unequality', () => {

    it('should be +1 > 0', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('0');

        expect(a.gt(b)).to.equal(true);
        expect(a.ge(b)).to.equal(true);

        expect(a.lt(b)).to.equal(false);
    });

    it('should be -1 > -2', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-2');

        expect(a.gt(b)).to.equal(true);
        expect(a.ge(b)).to.equal(true);

        expect(a.lt(b)).to.equal(false);
    });

    it('should be +1 > -1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('-1');

        expect(a.gt(b)).to.equal(true);
        expect(a.ge(b)).to.equal(true);

        expect(a.lt(b)).to.equal(false);
    });

    it('should not be 0 > +1', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('1');

        expect(a.gt(b)).to.equal(false);

        expect(a.lt(b)).to.equal(true);
        expect(a.le(b)).to.equal(true);
    });

    it('should not be -1 > +1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('1');

        expect(a.gt(b)).to.equal(false);

        expect(a.lt(b)).to.equal(true);
        expect(a.le(b)).to.equal(true);
    });

    it('should be +1234567890987654321245234623463456346346346346346346534786786578 == +1234567890987654321245234623463456346346346346346346534786786578', () => {
        const a = MyBigInt.fromString('1234567890987654321245234623463456346346346346346346534786786578');
        const b = MyBigInt.fromString('1234567890987654321245234623463456346346346346346346534786786578');

        expect(a.gt(b)).to.equal(false);
        expect(a.lt(b)).to.equal(false);

        expect(a.ge(b)).to.equal(true);
        expect(a.le(b)).to.equal(true);
    });

});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
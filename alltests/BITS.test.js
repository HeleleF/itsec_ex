(([MyBigInt, expect]) => {

describe('Even Odd', () => {

    it('should be even 0', () => {
        const a = MyBigInt.fromString('0');
        expect(a.even()).to.equal(true);
        expect(a.odd()).to.equal(false);
    });

    it('should be even 2', () => {
        const a = MyBigInt.fromString('2');
        expect(a.even()).to.equal(true);
        expect(a.odd()).to.equal(false);
    });

    it('should be even 256', () => {
        const a = MyBigInt.fromString('256');
        expect(a.even()).to.equal(true);
        expect(a.odd()).to.equal(false);
    });

    it('should be even 100000000000000000000000000000000000000000000000000000000092', () => {
        const a = MyBigInt.fromString('100000000000000000000000000000000000000000000000000000000092');
        expect(a.even()).to.equal(true);
        expect(a.odd()).to.equal(false);
    });

    it('should be odd 1', () => {
        const a = MyBigInt.fromString('1');
        expect(a.even()).to.equal(false);
        expect(a.odd()).to.equal(true);
    });

    it('should be odd 1000000000000000000000000000000000000000000000000000000000921', () => {
        const a = MyBigInt.fromString('1000000000000000000000000000000000000000000000000000000000921');
        expect(a.even()).to.equal(false);
        expect(a.odd()).to.equal(true);
    });

    it('should be odd 255', () => {
        const a = MyBigInt.fromString('255');
        expect(a.even()).to.equal(false);
        expect(a.odd()).to.equal(true);
    });

    it('should be odd 257', () => {
        const a = MyBigInt.fromString('257');
        expect(a.even()).to.equal(false);
        expect(a.odd()).to.equal(true);
    });
});

describe('Bit at Index', () => {

    it('should have bits <1111111> for 255', () => {
        const a = MyBigInt.fromString('255');
        expect(a.bit(0)).to.equal(1);
        expect(a.bit(1)).to.equal(1);
        expect(a.bit(2)).to.equal(1);
        expect(a.bit(3)).to.equal(1);
        expect(a.bit(4)).to.equal(1);
        expect(a.bit(5)).to.equal(1);
        expect(a.bit(6)).to.equal(1);
        expect(a.bit(7)).to.equal(1);
    });

    it('should have bits <10000000> for 256', () => {
        const a = MyBigInt.fromString('256');
        expect(a.bit(0)).to.equal(0);
        expect(a.bit(1)).to.equal(0);
        expect(a.bit(2)).to.equal(0);
        expect(a.bit(3)).to.equal(0);
        expect(a.bit(4)).to.equal(0);
        expect(a.bit(5)).to.equal(0);
        expect(a.bit(6)).to.equal(0);
        expect(a.bit(7)).to.equal(0);
        expect(a.bit(8)).to.equal(1);
    });

    it('should have bits <100000001> for 257', () => {
        const a = MyBigInt.fromString('257');
        expect(a.bit(0)).to.equal(1);
        expect(a.bit(1)).to.equal(0);
        expect(a.bit(2)).to.equal(0);
        expect(a.bit(3)).to.equal(0);
        expect(a.bit(4)).to.equal(0);
        expect(a.bit(5)).to.equal(0);
        expect(a.bit(6)).to.equal(0);
        expect(a.bit(7)).to.equal(0);
        expect(a.bit(8)).to.equal(1);
    });

    it('should have bits <1010101010101> for 5461', () => {
        const a = MyBigInt.fromString('5461');
        expect(a.bit(0)).to.equal(1);
        expect(a.bit(1)).to.equal(0);
        expect(a.bit(2)).to.equal(1);
        expect(a.bit(3)).to.equal(0);
        expect(a.bit(4)).to.equal(1);
        expect(a.bit(5)).to.equal(0);
        expect(a.bit(6)).to.equal(1);
        expect(a.bit(7)).to.equal(0);
        expect(a.bit(8)).to.equal(1);
        expect(a.bit(9)).to.equal(0);
        expect(a.bit(10)).to.equal(1);
        expect(a.bit(11)).to.equal(0);
        expect(a.bit(12)).to.equal(1);
    });

    it('should have bits <11100000000100001> for 114721', () => {
        const a = MyBigInt.fromString('114721');
        expect(a.bit(0)).to.equal(1);
        expect(a.bit(1)).to.equal(0);
        expect(a.bit(2)).to.equal(0);
        expect(a.bit(3)).to.equal(0);
        expect(a.bit(4)).to.equal(0);
        expect(a.bit(5)).to.equal(1);
        expect(a.bit(6)).to.equal(0);
        expect(a.bit(7)).to.equal(0);
        expect(a.bit(8)).to.equal(0);
        expect(a.bit(9)).to.equal(0);
        expect(a.bit(10)).to.equal(0);
        expect(a.bit(11)).to.equal(0);
        expect(a.bit(12)).to.equal(0);
        expect(a.bit(13)).to.equal(0);
        expect(a.bit(14)).to.equal(1);
        expect(a.bit(15)).to.equal(1);
        expect(a.bit(16)).to.equal(1);
    });
});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
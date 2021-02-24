(([MyBigInt, expect]) => {
describe('[TASK1] Basic multiplication', () => {

    it('should mul -5 and +4', () => {
        const a = MyBigInt.fromString('-5');
        const b = MyBigInt.fromString('4');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-20');
    });

    it('should mul +4 and -5', () => {
        const a = MyBigInt.fromString('4');
        const b = MyBigInt.fromString('-5');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-20');
    });

    it('should mul -5 and -5', () => {
        const a = MyBigInt.fromString('-5');
        const b = MyBigInt.fromString('-5');
        const c = a.mul(b);

        expect(c.toString()).to.equal('25');
    });

    it('should mul +4 and +4', () => {
        const a = MyBigInt.fromString('4');
        const b = MyBigInt.fromString('4');
        const c = a.mul(b);

        expect(c.toString()).to.equal('16');
    });

    it('should mul -256 and +256', () => {
        const a = MyBigInt.fromString('-256');
        const b = MyBigInt.fromString('256');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-65536');
    });

    it('should mul +256 and -256', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('-256');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-65536');
    });

    it('should mul +256 and +4', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('4');
        const c = a.mul(b);

        expect(c.toString()).to.equal('1024');
    });

    it('should mul -256 and -5', () => {
        const a = MyBigInt.fromString('-256');
        const b = MyBigInt.fromString('-5');
        const c = a.mul(b);

        expect(c.toString()).to.equal('1280');
    });
});

describe('[TASK1] Multiplication edge cases', () => {

    it('should mul 0 and 0', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('0');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul 1 and 0', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('0');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul 0 and 1', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul -1 and 0', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('0');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul 0 and -1', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('-1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul 1 and 1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('1');
    });

    it('should mul -1 and -1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('1');
    });

    it('should mul -1 and -256', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-256');
        const c = a.mul(b);

        expect(c.toString()).to.equal('256');
    });

    it('should mul -1 and +256', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('256');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-256');
    });
});

describe('[TASK1] Multiplication Large Values', () => {

    it('should mul -12345678901234567890123456789 and -98765432101234567890123456789', () => {
        const a = MyBigInt.fromString('-12345678901234567890123456789');
        const b = MyBigInt.fromString('-98765432101234567890123456789');
        const c = a.mul(b);

        expect(c.toString()).to.equal('1219326311263526899878067368861606462675019051998750190521');
    });

    it('should mul -12345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123 and -1', () => {
        const a = MyBigInt.fromString('-12345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123');
        const b = MyBigInt.fromString('-1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('12345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123');
    });

    it('should mul 9012345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123 and 1', () => {
        const a = MyBigInt.fromString('9012345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123');
        const b = MyBigInt.fromString('1');
        const c = a.mul(b);

        expect(c.toString()).to.equal('9012345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123');
    });

    it('should mul 79012345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123 and 0', () => {
        const a = MyBigInt.fromString('79012345678901234567890341543541235415234512436514235416534165345612435614236142351234651243651436541563415634123');
        const b = MyBigInt.fromString('0');
        const c = a.mul(b);

        expect(c.toString()).to.equal('0');
    });

    it('should mul -1111111111111111111111111111111111111111111111111111111111111111111111111111111191 and 6766456234236452673425462465236456724567246276452675476254675267456254672564626742341234', () => {
        const a = MyBigInt.fromString('-1111111111111111111111111111111111111111111111111111111111111111111111111111111191');
        const b = MyBigInt.fromString('6766456234236452673425462465236456724567246276452675476254675267456254672564626742341234');
        const c = a.mul(b);

        expect(c.toString()).to.equal('-7518284704707169637139402739151618582852495862725194973616305852729171858405141365388263601778830243656390278334709440427785863274851936345724144560789952662958638149694');
    });
});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
(([MyBigInt, expect]) => {

describe('[TASK1] Basic division', () => {

    it('should calc 17 divmod 4', () => {
        const a = MyBigInt.fromString('17');
        const b = MyBigInt.fromString('4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('4');
        expect(c.r.toString()).to.equal('1');

    });
    it('should calc -17 divmod -4', () => {
        const a = MyBigInt.fromString('-17');
        const b = MyBigInt.fromString('-4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('5');
        expect(c.r.toString()).to.equal('3');

    });
    it('should calc -17 divmod 4', () => {
        const a = MyBigInt.fromString('-17');
        const b = MyBigInt.fromString('4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('-5');
        expect(c.r.toString()).to.equal('3');

    });
    it('should calc 17 divmod -4', () => {
        const a = MyBigInt.fromString('17');
        const b = MyBigInt.fromString('-4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('-4');
        expect(c.r.toString()).to.equal('1');

    });

    it('should calc 256 divmod 4', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('64');
        expect(c.r.toString()).to.equal('0');

    });
    it('should calc -256 divmod -4', () => {
        const a = MyBigInt.fromString('-256');
        const b = MyBigInt.fromString('-4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('64');
        expect(c.r.toString()).to.equal('0');

    });
    it('should calc -256 divmod 4', () => {
        const a = MyBigInt.fromString('-256');
        const b = MyBigInt.fromString('4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('-64');
        expect(c.r.toString()).to.equal('0');

    });
    it('should calc 256 divmod -4', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('-4');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('-64');
        expect(c.r.toString()).to.equal('0');

    });
});

describe('[TASK1] Division Edgecases', () => {

    it('should calc 1 divmod 1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('1');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('0');
    });

    it('should calc -1 divmod -1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-1');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('0');
    });

    it('should calc 1 divmod 0', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('0');

        expect(() => a.divmod(b)).to.throw();
    });

    it('should calc -1 divmod 0', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('0');

        expect(() => a.divmod(b)).to.throw();

    });

    it('should calc 0 divmod 0', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('0');

        expect(() => a.divmod(b)).to.throw();

    });

    it('should calc 255 divmod 255', () => {
        const a = MyBigInt.fromString('255');
        const b = MyBigInt.fromString('255');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('0');

    });

    it('should calc 256 divmod 255', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('255');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('1');

    });

    it('should calc 257 divmod 255', () => {
        const a = MyBigInt.fromString('257');
        const b = MyBigInt.fromString('255');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('2');

    });

    it('should calc 255 divmod 256', () => {
        const a = MyBigInt.fromString('255');
        const b = MyBigInt.fromString('256');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('0');
        expect(c.r.toString()).to.equal('255');

    });

    it('should calc 256 divmod 256', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('256');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('0');

    });

    it('should calc 257 divmod 256', () => {
        const a = MyBigInt.fromString('257');
        const b = MyBigInt.fromString('256');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('1');

    });

    it('should calc 255 divmod 257', () => {
        const a = MyBigInt.fromString('255');
        const b = MyBigInt.fromString('257');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('0');
        expect(c.r.toString()).to.equal('255');

    });

    it('should calc 256 divmod 257', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('257');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('0');
        expect(c.r.toString()).to.equal('256');

    });

    it('should calc 257 divmod 257', () => {
        const a = MyBigInt.fromString('257');
        const b = MyBigInt.fromString('257');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('0');

    });
});

describe('[TASK1] Division Large Values', () => {

    it('should calc 12345678909876543210 divmod 9876543210123456789', () => {
        const a = MyBigInt.fromString('12345678909876543210');
        const b = MyBigInt.fromString('9876543210123456789');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('1');
        expect(c.r.toString()).to.equal('2469135699753086421');

    });

    it('should calc 11111111111111111111111111111111111111111111111111111111111111111111111111111111111 divmod 333333333333333333333333333333333333333333333333333333333', () => {
        const a = MyBigInt.fromString('11111111111111111111111111111111111111111111111111111111111111111111111111111111111');
        const b = MyBigInt.fromString('333333333333333333333333333333333333333333333333333333333');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('33333333333333333333333333');
        expect(c.r.toString()).to.equal('111111111111111111111111111111122222222222222222222222222');

    });

    it('should calc 11111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999911111111111222222222222222222555555555555555555 divmod 999990999999919999999999999999999999999999992999999999993333333333333333353333333333333333333333733333333339333333330011', () => {
        const a = MyBigInt.fromString('11111111111111111111111111111111111111111111111111111111111111111111111111111111111999999999999999999999999999999999999999999911111111111222222222222222222555555555555555555');
        const b = MyBigInt.fromString('999990999999919999999999999999999999999999992999999999993333333333333333353333333333333333333333733333333339333333330011');
        const c = a.divmod(b);

        expect(c.q.toString()).to.equal('11111211112012008116073116729810965259136828297564997');
        expect(c.r.toString()).to.equal('926506047864129674940339464481916297689027757742903102470013417036311773068094202041925363123411082683104496102832330588');

    });
});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
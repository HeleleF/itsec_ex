(([MyBigInt, expect]) => {

describe('[TASK1] Basic subtraction', () => {

    it('should sub +5 and +5', () => {
        const a = MyBigInt.fromString('5');
        const b = MyBigInt.fromString('5');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

    it('should sub +51 and +56', () => {
        const a = MyBigInt.fromString('51');
        const b = MyBigInt.fromString('56');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-5');
    });

    it('should sub +10 and -10', () => {
        const a = MyBigInt.fromString('10');
        const b = MyBigInt.fromString('-10');
        const c = a.sub(b);

        expect(c.toString()).to.equal('20');
    });

    it('should sub -10 and +10', () => {
        const a = MyBigInt.fromString('-10');
        const b = MyBigInt.fromString('10');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-20');
    });

    it('should sub -10 and -19', () => {
        const a = MyBigInt.fromString('-10');
        const b = MyBigInt.fromString('-19');
        const c = a.sub(b);

        expect(c.toString()).to.equal('9');
    });
});

describe('[TASK1] Subtraction Edge cases', () => {

    it('should sub 0 and 0', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('0');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

    it('should sub +1 and 0', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('0');
        const c = a.sub(b);

        expect(c.toString()).to.equal('1');
    });

    it('should sub +1 and +1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

    it('should sub +1 and -1', () => {
        const a = MyBigInt.fromString('1');
        const b = MyBigInt.fromString('-1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('2');
    });

    it('should sub -1 and 0', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('0');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-1');
    });

    it('should sub -1 and +1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-2');
    });

    it('should sub -1 and -1', () => {
        const a = MyBigInt.fromString('-1');
        const b = MyBigInt.fromString('-1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

    it('should sub +257 and +1', () => {
        const a = MyBigInt.fromString('257');
        const b = MyBigInt.fromString('1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('256');
    });

    it('should sub +257 and +2', () => {
        const a = MyBigInt.fromString('257');
        const b = MyBigInt.fromString('2');
        const c = a.sub(b);

        expect(c.toString()).to.equal('255');
    });

    it('should sub -257 and -1', () => {
        const a = MyBigInt.fromString('-257');
        const b = MyBigInt.fromString('-1');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-256');
    });

    it('should sub -257 and -2', () => {
        const a = MyBigInt.fromString('-257');
        const b = MyBigInt.fromString('-2');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-255');
    });

    it('should sub -256 and -256', () => {
        const a = MyBigInt.fromString('-256');
        const b = MyBigInt.fromString('-256');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

    it('should sub +256 and +256', () => {
        const a = MyBigInt.fromString('256');
        const b = MyBigInt.fromString('256');
        const c = a.sub(b);

        expect(c.toString()).to.equal('0');
    });

});

describe('[TASK1] Subtraction Large Values', () => {

    it('should sub +123456789098765432101234567890 and 0', () => {
        const a = MyBigInt.fromString('123456789098765432101234567890');
        const b = MyBigInt.fromString('0');
        const c = a.sub(b);

        expect(c.toString()).to.equal('123456789098765432101234567890');
    });

    it('should sub +123456789098765432101234567899 and +9', () => {
        const a = MyBigInt.fromString('123456789098765432101234567899');
        const b = MyBigInt.fromString('9');
        const c = a.sub(b);

        expect(c.toString()).to.equal('123456789098765432101234567890');
    });

    it('should sub 0 and +1723456789098765432101234567890', () => {
        const a = MyBigInt.fromString('0');
        const b = MyBigInt.fromString('1723456789098765432101234567890');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-1723456789098765432101234567890');
    });

    it('should sub +9 and +1823456789098765432101234567899', () => {
        const a = MyBigInt.fromString('9');
        const b = MyBigInt.fromString('1823456789098765432101234567899');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-1823456789098765432101234567890');
    });

    it('should sub +123456789098765432101234567890 and +766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
        const a = MyBigInt.fromString('123456789098765432101234567890');
        const b = MyBigInt.fromString('766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462031410336368761441044452555656');
    });

    it('should sub +123456789098765432101234567890 and -766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
        const a = MyBigInt.fromString('123456789098765432101234567890');
        const b = MyBigInt.fromString('-766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
        const c = a.sub(b);

        expect(c.toString()).to.equal('766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462278323914566292305246921691436');
    });

    it('should sub -47657365783798567356783657637562376563576375635123456789098765432101234567890 and +111222333766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
        const a = MyBigInt.fromString('-47657365783798567356783657637562376563576375635123456789098765432101234567890');
        const b = MyBigInt.fromString('111222333766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-111222333766562634623462873467626467626745672534675276503912038318563834813059119794507596198137651097278323914566292305246921691436');
    });

    it('should sub +111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 and +222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222', () => {
        const a = MyBigInt.fromString('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
        const b = MyBigInt.fromString('222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
    });

    it('should sub +999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 and +10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001', () => {
        const a = MyBigInt.fromString('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
        const b = MyBigInt.fromString('10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001');
        const c = a.sub(b);

        expect(c.toString()).to.equal('-9999999999999999999999999999999999999999999999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002');
    });

});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);

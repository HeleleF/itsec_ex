(([MyBigInt, expect]) => {

    describe('[TASK1] Basic addition', () => {

        it('should add +5 and +5', () => {
            const a = MyBigInt.fromString('5');
            const b = MyBigInt.fromString('5');
            const c = a.add(b);

            expect(c.toString()).to.equal('10');
        });

        it('should add +51 and +56', () => {
            const a = MyBigInt.fromString('51');
            const b = MyBigInt.fromString('56');
            const c = a.add(b);

            expect(c.toString()).to.equal('107');
        });

        it('should add +10 and -10', () => {
            const a = MyBigInt.fromString('10');
            const b = MyBigInt.fromString('-10');
            const c = a.add(b);

            expect(c.toString()).to.equal('0');
        });

        it('should add -10 and +10', () => {
            const a = MyBigInt.fromString('-10');
            const b = MyBigInt.fromString('10');
            const c = a.add(b);

            expect(c.toString()).to.equal('0');
        });

        it('should add -10 and -19', () => {
            const a = MyBigInt.fromString('-10');
            const b = MyBigInt.fromString('-19');
            const c = a.add(b);

            expect(c.toString()).to.equal('-29');
        });
    });

    describe('[TASK1] Addition Edge cases', () => {

        it('should add 0 and 0', () => {
            const a = MyBigInt.fromString('0');
            const b = MyBigInt.fromString('0');
            const c = a.add(b);

            expect(c.toString()).to.equal('0');
        });

        it('should add +1 and 0', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('0');
            const c = a.add(b);

            expect(c.toString()).to.equal('1');
        });

        it('should add +1 and +1', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('1');
            const c = a.add(b);

            expect(c.toString()).to.equal('2');
        });

        it('should add +1 and -1', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('-1');
            const c = a.add(b);

            expect(c.toString()).to.equal('0');
        });

        it('should add -1 and 0', () => {
            const a = MyBigInt.fromString('-1');
            const b = MyBigInt.fromString('0');
            const c = a.add(b);

            expect(c.toString()).to.equal('-1');
        });

        it('should add -1 and +1', () => {
            const a = MyBigInt.fromString('-1');
            const b = MyBigInt.fromString('1');
            const c = a.add(b);

            expect(c.toString()).to.equal('0');
        });

        it('should add -1 and -1', () => {
            const a = MyBigInt.fromString('-1');
            const b = MyBigInt.fromString('-1');
            const c = a.add(b);

            expect(c.toString()).to.equal('-2');
        });

        it('should add +255 and +1', () => {
            const a = MyBigInt.fromString('255');
            const b = MyBigInt.fromString('1');
            const c = a.add(b);

            expect(c.toString()).to.equal('256');
        });

        it('should add +255 and +2', () => {
            const a = MyBigInt.fromString('255');
            const b = MyBigInt.fromString('2');
            const c = a.add(b);

            expect(c.toString()).to.equal('257');
        });

        it('should add -255 and -1', () => {
            const a = MyBigInt.fromString('-255');
            const b = MyBigInt.fromString('-1');
            const c = a.add(b);

            expect(c.toString()).to.equal('-256');
        });

        it('should add -255 and -2', () => {
            const a = MyBigInt.fromString('-255');
            const b = MyBigInt.fromString('-2');
            const c = a.add(b);

            expect(c.toString()).to.equal('-257');
        });

        it('should add -256 and -256', () => {
            const a = MyBigInt.fromString('-256');
            const b = MyBigInt.fromString('-256');
            const c = a.add(b);

            expect(c.toString()).to.equal('-512');
        });

        it('should add +256 and +256', () => {
            const a = MyBigInt.fromString('256');
            const b = MyBigInt.fromString('256');
            const c = a.add(b);

            expect(c.toString()).to.equal('512');
        });

    });

    describe('[TASK1] Addition Large Values', () => {

        it('should add +123456789098765432101234567890 and 0', () => {
            const a = MyBigInt.fromString('123456789098765432101234567890');
            const b = MyBigInt.fromString('0');
            const c = a.add(b);

            expect(c.toString()).to.equal('123456789098765432101234567890');
        });

        it('should add +123456789098765432101234567890 and +9', () => {
            const a = MyBigInt.fromString('123456789098765432101234567890');
            const b = MyBigInt.fromString('9');
            const c = a.add(b);

            expect(c.toString()).to.equal('123456789098765432101234567899');
        });

        it('should add 0 and +1723456789098765432101234567890', () => {
            const a = MyBigInt.fromString('0');
            const b = MyBigInt.fromString('1723456789098765432101234567890');
            const c = a.add(b);

            expect(c.toString()).to.equal('1723456789098765432101234567890');
        });

        it('should add +9 and +1823456789098765432101234567890', () => {
            const a = MyBigInt.fromString('9');
            const b = MyBigInt.fromString('1823456789098765432101234567890');
            const c = a.add(b);

            expect(c.toString()).to.equal('1823456789098765432101234567899');
        });

        it('should add +123456789098765432101234567890 and +766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
            const a = MyBigInt.fromString('123456789098765432101234567890');
            const b = MyBigInt.fromString('766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
            const c = a.add(b);

            expect(c.toString()).to.equal('766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462278323914566292305246921691436');
        });

        it('should add +123456789098765432101234567890 and -766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
            const a = MyBigInt.fromString('123456789098765432101234567890');
            const b = MyBigInt.fromString('-766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
            const c = a.add(b);

            expect(c.toString()).to.equal('-766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462031410336368761441044452555656');
        });

        it('should add -47657365783798567356783657637562376563576375635123456789098765432101234567890 and +111222333766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546', () => {
            const a = MyBigInt.fromString('-47657365783798567356783657637562376563576375635123456789098765432101234567890');
            const b = MyBigInt.fromString('111222333766562634623462873467626467626745672534675276456254672534765267456275462156945219634561275462154867125467526873145687123546');
            const c = a.add(b);

            expect(c.toString()).to.equal('111222333766562634623462873467626467626745672534675276408597306750966700099491804519382843070984899827031410336368761441044452555656');
        });

        it('should add +111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111 and +222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222', () => {
            const a = MyBigInt.fromString('111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
            const b = MyBigInt.fromString('222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
            const c = a.add(b);

            expect(c.toString()).to.equal('333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333');
        });

        it('should add +999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999 and +10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001', () => {
            const a = MyBigInt.fromString('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
            const b = MyBigInt.fromString('10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001');
            const c = a.add(b);

            expect(c.toString()).to.equal('10000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
        });

    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
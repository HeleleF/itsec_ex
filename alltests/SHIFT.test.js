(([MyBigInt, expect]) => {

    describe('[TASK1] Shift wrong parameters', () => {

        const a = MyBigInt.ZERO();

        it('should throw for shift left not a number', () => {      
            expect(() => a.shiftLeft('5')).to.throw();
        });

        it('should throw for shift left negative value', () => {      
            expect(() => a.shiftLeft(-1)).to.throw();
        });

        it('should throw for shift left value too large', () => {      
            expect(() => a.shiftLeft(123456789)).to.throw();
        });

        it('should throw for shift right not a number', () => {      
            expect(() => a.shiftRight('5')).to.throw();
        });

        it('should throw for shift right negative value', () => {      
            expect(() => a.shiftRight(-1)).to.throw();
        });

        it('should throw for shift right 0', () => {      
            expect(() => a.shiftRight(0)).to.throw();
        });

    });

    describe('[TASK1] Shift Left 1', () => {

        it('should shift 0 left 1', () => {
            const a = MyBigInt.fromString('0');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('0');
        });

        it('should shift 1 left 1', () => {
            const a = MyBigInt.fromString('1');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('2');
        });

        it('should shift 17 left 1', () => {
            const a = MyBigInt.fromString('17');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('34');
        });

        it('should shift 255 left 1', () => {
            const a = MyBigInt.fromString('255');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('510');
        });

        it('should shift 256 left 1', () => {
            const a = MyBigInt.fromString('256');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('512');
        });

        it('should shift 257 left 1', () => {
            const a = MyBigInt.fromString('257');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('514');
        });

        it('should shift 1234567890987654321 left 1', () => {
            const a = MyBigInt.fromString('1234567890987654321');
            const b = a.shiftLeft(1);

            expect(b.toString()).to.equal('2469135781975308642');
        });

    });

    describe('[TASK1] Shift Left 2', () => {

        it('should shift 0 left 2', () => {
            const a = MyBigInt.fromString('0');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('0');
        });

        it('should shift 1 left 2', () => {
            const a = MyBigInt.fromString('1');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('4');
        });

        it('should shift 17 left 2', () => {
            const a = MyBigInt.fromString('17');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('68');
        });

        it('should shift 255 left 2', () => {
            const a = MyBigInt.fromString('255');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('1020');
        });

        it('should shift 256 left 2', () => {
            const a = MyBigInt.fromString('256');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('1024');
        });

        it('should shift 257 left 2', () => {
            const a = MyBigInt.fromString('257');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('1028');
        });

        it('should shift 1234567890987654321 left 2', () => {
            const a = MyBigInt.fromString('1234567890987654321');
            const b = a.shiftLeft(2);

            expect(b.toString()).to.equal('4938271563950617284');
        });

    });

    describe('[TASK1] Shift Left Other', () => {

        it('should shift 3 left 17', () => {
            const a = MyBigInt.fromString('3');
            const b = a.shiftLeft(17);

            expect(b.toString()).to.equal('393216');
        });

        it('should shift 3 left 177', () => {
            const a = MyBigInt.fromString('3');
            const b = a.shiftLeft(177);

            expect(b.toString()).to.equal('574685827824708321884380135181365943857027170818850816');
        });

        it('should shift 255 left 17', () => {
            const a = MyBigInt.fromString('255');
            const b = a.shiftLeft(17);

            expect(b.toString()).to.equal('33423360');
        });

        it('should shift 255 left 177', () => {
            const a = MyBigInt.fromString('255');
            const b = a.shiftLeft(177);

            expect(b.toString()).to.equal('48848295365100207360172311490416105227847309519602319360');
        });

        it('should shift 1 left 300', () => {
            const a = MyBigInt.fromString('1');
            const b = a.shiftLeft(300);

            expect(b.toString()).to.equal('2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376');
        });
    });

    describe('[TASK1] Shift Right', () => {

        it('should shift 0 right 1', () => {
            let a = MyBigInt.fromString('0');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('0');
            expect(b).to.equal(0);
        });

        it('should shift 1 right 1', () => {
            let a = MyBigInt.fromString('1');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('0');
            expect(b).to.equal(1);
        });

        it('should shift 2 right 1', () => {
            let a = MyBigInt.fromString('2');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('1');
            expect(b).to.equal(0);
        });

        it('should shift 255 right 1', () => {
            let a = MyBigInt.fromString('255');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('127');
            expect(b).to.equal(1);
        });

        it('should shift 256 right 1', () => {
            let a = MyBigInt.fromString('256');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('128');
            expect(b).to.equal(0);
        });

        it('should shift 257 right 1', () => {
            let a = MyBigInt.fromString('257');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('128');
            expect(b).to.equal(1);
        });

        it('should shift 1000 right 1', () => {
            let a = MyBigInt.fromString('1000');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('500');
            expect(b).to.equal(0);
        });

        it('should shift 20000 right 1', () => {
            let a = MyBigInt.fromString('20000');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('10000');
            expect(b).to.equal(0);
        });

        it('should shift 20001 right 1', () => {
            let a = MyBigInt.fromString('20001');
            const b = a._shiftRight();

            expect(a.toString()).to.equal('10000');
            expect(b).to.equal(1);
        });
    });

    describe('[TASK1] Shift Right Other', () => {

        it('should shift 65536 right 15', () => {
            const a = MyBigInt.fromString('65536');
            const b = a.shiftRight(15);

            expect(b.toString()).to.equal('2');
        });

        it('should shift 65536 right 16', () => {
            const a = MyBigInt.fromString('65536');
            const b = a.shiftRight(16);

            expect(b.toString()).to.equal('1');
        });

        it('should shift 65536 right 17', () => {
            const a = MyBigInt.fromString('65536');
            const b = a.shiftRight(17);

            expect(b.toString()).to.equal('0');
        });

        it('should shift 30000001 right 17', () => {
            const a = MyBigInt.fromString('30000001');
            const b = a.shiftRight(17);

            expect(b.toString()).to.equal('228');
        });

        it('should shift 1230000001 right 15', () => {
            const a = MyBigInt.fromString('1230000001');
            const b = a.shiftRight(15);

            expect(b.toString()).to.equal('37536');
        });

        it('should shift 1230000001999981 right 21', () => {
            const a = MyBigInt.fromString('1230000001999981');
            const b = a.shiftRight(21);

            expect(b.toString()).to.equal('586509705');
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
(([MyBigInt, expect]) => {

    describe('[TASK3] Wrong inputs', () => {

        it('should throw No MyBigInt Error Numbers', () => {

            expect(() => MyBigInt.gcd(1, 2)).to.throw();
            expect(() => MyBigInt.egcd(1, 2)).to.throw();
            expect(() => MyBigInt.egcdSlow(1, 2)).to.throw();
        });

        it('should throw No MyBigInt Error Strings', () => {

            expect(() => MyBigInt.gcd('1', '2')).to.throw();
            expect(() => MyBigInt.egcd('1', '2')).to.throw();
            expect(() => MyBigInt.egcdSlow('1', '2')).to.throw();
        });

        it('should throw No Zero Error', () => {

            const a = MyBigInt.fromString('0');
            const b = MyBigInt.fromString('0');

            expect(() => MyBigInt.gcd(a, b)).to.throw();
            expect(() => MyBigInt.egcd(a, b)).to.throw();
            expect(() => MyBigInt.egcdSlow(a, b)).to.throw();
        });
    });

    describe('[TASK3] GCD small', () => {

        it('should calc gcd 1 and 1 = 1', () => {

            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('1');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('1');
            expect(d.toString()).to.equal('1');
            expect(e.toString()).to.equal('1');
        });

        it('should calc gcd 16 and 4 = 4', () => {

            const a = MyBigInt.fromString('16');
            const b = MyBigInt.fromString('4');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('4');
            expect(d.toString()).to.equal('4');
            expect(e.toString()).to.equal('4');
        });

        it('should calc gcd 17 and 4 = 1', () => {

            const a = MyBigInt.fromString('17');
            const b = MyBigInt.fromString('4');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('1');
            expect(d.toString()).to.equal('1');
            expect(e.toString()).to.equal('1');
        });

        it('should calc gcd 11 and 3 = 1', () => {

            const a = MyBigInt.fromString('11');
            const b = MyBigInt.fromString('3');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('1');
            expect(d.toString()).to.equal('1');
            expect(e.toString()).to.equal('1');
        });

        it('should calc gcd 11 and 7 = 1', () => {

            const a = MyBigInt.fromString('11');
            const b = MyBigInt.fromString('7');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('1');
            expect(d.toString()).to.equal('1');
            expect(e.toString()).to.equal('1');
        });

        it('should calc gcd 256 and 68 = 4', () => {

            const a = MyBigInt.fromString('256');
            const b = MyBigInt.fromString('68');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('4');
            expect(d.toString()).to.equal('4');
            expect(e.toString()).to.equal('4');
        });

        it('should calc gcd 256 and 65536 = 256', () => {

            const a = MyBigInt.fromString('256');
            const b = MyBigInt.fromString('65536');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('256');
            expect(d.toString()).to.equal('256');
            expect(e.toString()).to.equal('256');
        });

        it('should calc gcd 123456 and 432 = 48', () => {

            const a = MyBigInt.fromString('123456');
            const b = MyBigInt.fromString('432');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('48');
            expect(d.toString()).to.equal('48');
            expect(e.toString()).to.equal('48');
        });

    });

    describe('[TASK3] GCD big', () => {

        it('should calc gcd 111111111111222222222222222233333333333333344444444444444444 and 66666666666666666666666688888888888 = 4', () => {

            const a = MyBigInt.fromString('111111111111222222222222222233333333333333344444444444444444');
            const b = MyBigInt.fromString('66666666666666666666666688888888888');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('4');
            expect(d.toString()).to.equal('4');
            expect(e.toString()).to.equal('4');
        });

        it('should calc gcd 123456802901 and 125231 = 1', () => {

            const a = MyBigInt.fromString('123456802901');
            const b = MyBigInt.fromString('125231');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('1');
            expect(d.toString()).to.equal('1');
            expect(e.toString()).to.equal('1');
        });

        it('should calc gcd 237462137462173846726471264612734126354612400 and 213561542367512436542657346512341234770012 = 4', () => {

            const a = MyBigInt.fromString('237462137462173846726471264612734126354612400');
            const b = MyBigInt.fromString('213561542367512436542657346512341234770012');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('4');
            expect(d.toString()).to.equal('4');
            expect(e.toString()).to.equal('4');
        });

        it('should calc gcd 999999999999999999999999999999999999999999999999 and 3333333333333333113333333333333333 = 11', () => {

            const a = MyBigInt.fromString('999999999999999999999999999999999999999999999999');
            const b = MyBigInt.fromString('3333333333333333113333333333333333');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('11');
            expect(d.toString()).to.equal('11');
            expect(e.toString()).to.equal('11');
        });

        it('should calc gcd 21267647932558653966460912964485513216 and 361550014853497117429835520396253724672 = 21267647932558653966460912964485513216', () => {

            const a = MyBigInt.fromString('21267647932558653966460912964485513216');
            const b = MyBigInt.fromString('361550014853497117429835520396253724672');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('21267647932558653966460912964485513216');
            expect(d.toString()).to.equal('21267647932558653966460912964485513216');
            expect(e.toString()).to.equal('21267647932558653966460912964485513216');
        });

        it('should calc gcd 125778080808020567 and 24493626262626262626262626214301 = 65537', () => {

            const a = MyBigInt.fromString('125778080808020567');
            const b = MyBigInt.fromString('24493626262626262626262626214301');

            const c = MyBigInt.gcd(a, b);
            const {
                gcd: d
            } = MyBigInt.egcd(a, b);
            const {
                gcd: e
            } = MyBigInt.egcdSlow(a, b);

            expect(c.toString()).to.equal('65537');
            expect(d.toString()).to.equal('65537');
            expect(e.toString()).to.equal('65537');
        });

    });

    describe('[TASK3] mulInvers small', () => {

        it('should calc inverse of 4 mod 11 = 3', () => {
            const a = MyBigInt.fromString('4');
            const b = MyBigInt.fromString('11');
            const c = a.mulInvers(b);

            expect(c.toString()).to.equal('3');
        });

        it('should calc inverse of 4 mod 12 = not existing', () => {
            const a = MyBigInt.fromString('4');
            const b = MyBigInt.fromString('12');
            const c = a.mulInvers(b);

            expect(c).to.be.null;
        });

        it('should calc inverse of 4444444442 mod 120004 = not existing', () => {
            const a = MyBigInt.fromString('4444444442');
            const b = MyBigInt.fromString('120004');
            const c = a.mulInvers(b);

            expect(c).to.be.null;
        });
    });

    describe('[TASK3] mulInvers big', () => {

        it('should calc inverse of 909090909090909090901920128727636576354653645635467558346585655545285354825348235413482345253462547625410000001 mod 43653453253865236852387645273654672345735487357385375387523874537458 = ', () => {
            const a = MyBigInt.fromString('909090909090909090901920128727636576354653645635467558346585655545285354825348235413482345253462547625410000001');
            const b = MyBigInt.fromString('43653453253865236852387645273654672345735487357385375387523874537458');
            const c = a.mulInvers(b);

            expect(c.toString()).to.equal('35695630513478003761914548227931402301631488007314318777969103481585');
        });

        it('should calc inverse of 47672364726347521645216784562135467125467125487612546712548125476125745128643581725437612 mod 12000000000000000000000000000000000000000092 = not existing', () => {
            const a = MyBigInt.fromString('47672364726347521645216784562135467125467125487612546712548125476125745128643581725437612');
            const b = MyBigInt.fromString('12000000000000000000000000000000000000000092');
            const c = a.mulInvers(b);

            expect(c).to.be.null;
        });

        it('should calc inverse of 9191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919195 mod 757575757575757575757575757575757575757575757530 = not existing', () => {
            const a = MyBigInt.fromString('9191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919195');
            const b = MyBigInt.fromString('757575757575757575757575757575757575757575757530');
            const c = a.mulInvers(b);

            expect(c).to.be.null;
        });

    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
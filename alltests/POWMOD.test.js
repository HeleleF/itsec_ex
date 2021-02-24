(([MyBigInt, expect]) => {

describe('Pow Mod small', () => { 

    it('should pow 0 and 0 mod 1', () => {
        const a = MyBigInt.fromString('0');
        const exp = MyBigInt.fromString('0');
        const modulo = MyBigInt.fromString('1');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('0');
    });

    it('should pow 17 and 4 mod 12', () => {
        const a = MyBigInt.fromString('17');
        const exp = MyBigInt.fromString('4');
        const modulo = MyBigInt.fromString('12');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1');
    });

    it('should pow 17 and 1 mod 12', () => {
        const a = MyBigInt.fromString('17');
        const exp = MyBigInt.fromString('1');
        const modulo = MyBigInt.fromString('12');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('5');
    });

    it('should pow 18 and 24 mod 4', () => {
        const a = MyBigInt.fromString('18');
        const exp = MyBigInt.fromString('24');
        const modulo = MyBigInt.fromString('4');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('0');
    });

    it('should pow 3 and 11 mod 7', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('11');
        const modulo = MyBigInt.fromString('7');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('5');
    });

});

describe('Pow Mod big', () => { 

    it('should pow 2 and 1200 mod 7', () => {
        const a = MyBigInt.fromString('2');
        const exp = MyBigInt.fromString('1200');
        const modulo = MyBigInt.fromString('7');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1');
    });

    it('should pow 3 and 2049 mod 2049', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('2049');
        const modulo = MyBigInt.fromString('2049');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('27');
    });


    it('should pow 45 and 123 mod 17159', () => {
        const a = MyBigInt.fromString('45');
        const exp = MyBigInt.fromString('123');
        const modulo = MyBigInt.fromString('17159');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('844');
    });

    it('should pow 89 and 234 mod 345876901234546546326235234523452346523562456345634563457347345734573576356734563456', () => {
        const a = MyBigInt.fromString('89');
        const exp = MyBigInt.fromString('234');
        const modulo = MyBigInt.fromString('345876901234546546326235234523452346523562456345634563457347345734573576356734563456');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('172088712998638813595850902389450242493840566261399685100445180361961786388483405361');
    });

});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
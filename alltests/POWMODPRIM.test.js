(([MyBigInt, expect]) => {

//primes from https://primes.utm.edu/lists/small/small.html

describe('Pow Mod Prim small', () => { 

    it('should pow 0 and 0 mod 3', () => {
        const a = MyBigInt.fromString('0');
        const exp = MyBigInt.fromString('0');
        const modulo = MyBigInt.fromString('3');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1');
    });

    it('should pow 17 and 4 mod 11', () => {
        const a = MyBigInt.fromString('17');
        const exp = MyBigInt.fromString('4');
        const modulo = MyBigInt.fromString('11');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('9');
    });

    it('should pow 17 and 1 mod 11', () => {
        const a = MyBigInt.fromString('17');
        const exp = MyBigInt.fromString('1');
        const modulo = MyBigInt.fromString('11');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('6');
    });

    it('should pow 18 and 24 mod 5', () => {
        const a = MyBigInt.fromString('18');
        const exp = MyBigInt.fromString('24');
        const modulo = MyBigInt.fromString('5');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1');
    });

    it('should pow 3 and 11 mod 7', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('11');
        const modulo = MyBigInt.fromString('7');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('5');
    });

});

describe('Pow Mod Prim big', () => { 

    it('should pow 2 and 1200 mod 257', () => {
        const a = MyBigInt.fromString('2');
        const exp = MyBigInt.fromString('1200');
        const modulo = MyBigInt.fromString('257');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1');
    });

    it('should pow 3 and 2049 mod 179426549', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('2049');
        const modulo = MyBigInt.fromString('179426549');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('170276856');
    });

    it('should pow 3 and 2001 mod 282755483533707287054752184321121345766861480697448703443857012153264407439766013042402571', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('2001');
        const modulo = MyBigInt.fromString('282755483533707287054752184321121345766861480697448703443857012153264407439766013042402571');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('223680814039205146720443115332444451672858170178805403055527964698098180641632995154300199');
    });

    it('should pow 3 and 1997 mod 56181069873486948735852120493417527485226565150317825065106074926567306630125961', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('1997');
        const modulo = MyBigInt.fromString('56181069873486948735852120493417527485226565150317825065106074926567306630125961');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('44619616094815224937074014784942300296320666464557983175687559626402429167291777');
    });

    it('should pow 3 and 1995 mod 6513516734600035718300327211250928237178281758494417357560086828416863929270451437126021949850746381', () => {
        const a = MyBigInt.fromString('3');
        const exp = MyBigInt.fromString('1995');
        const modulo = MyBigInt.fromString('6513516734600035718300327211250928237178281758494417357560086828416863929270451437126021949850746381');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('2494265356586839600664685861443384637335381593959930500162234090695663372004679009557612779924064663');
    });

    it('should pow 997 and 34 mod 7212610147295474909544523785043492409969382148186765460082500085393519556525921455588705423020751421', () => {
        const a = MyBigInt.fromString('997');
        const exp = MyBigInt.fromString('34');
        const modulo = MyBigInt.fromString('7212610147295474909544523785043492409969382148186765460082500085393519556525921455588705423020751421');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('1314853396645530263900802783602696611678473137125297046903053256668117943825675684777271076018956944');
    });


    it('should pow 45 and 123 mod 32416190039', () => {
        const a = MyBigInt.fromString('45');
        const exp = MyBigInt.fromString('123');
        const modulo = MyBigInt.fromString('32416190039');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('3541249505');
    });

    it('should pow 89 and 234 mod 32416189019', () => {
        const a = MyBigInt.fromString('89');
        const exp = MyBigInt.fromString('234');
        const modulo = MyBigInt.fromString('32416189019');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('24613592643');
    });

    it('should pow 189 and 89 mod 32416189019', () => {
        const a = MyBigInt.fromString('189');
        const exp = MyBigInt.fromString('89');
        const modulo = MyBigInt.fromString('32416189019');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('31797798051');
    });

    it('should pow 176 and 99 mod 32416189019', () => {
        const a = MyBigInt.fromString('176');
        const exp = MyBigInt.fromString('99');
        const modulo = MyBigInt.fromString('32416189019');
        const d = a.powMod(exp, modulo);

        expect(d.toString()).to.equal('25887238772');
    });

});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
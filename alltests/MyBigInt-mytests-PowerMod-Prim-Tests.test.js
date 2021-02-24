
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-PowerMod-Prim-Tests', () => {
    
            it('Power-ModPrim-HexDec-1', () => {
                const a = MyBigInt.fromString('1');
                const b = MyBigInt.fromString('2343');
                const m = MyBigInt.fromString('5');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('1');
            });
            it('Power-ModPrim-HexDec-2', () => {
                const a = MyBigInt.fromString('2');
                const b = MyBigInt.fromString('2046');
                const m = MyBigInt.fromString('29');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('4');
            });
            it('Power-ModPrim-HexDec-3', () => {
                const a = MyBigInt.fromString('3');
                const b = MyBigInt.fromString('636');
                const m = MyBigInt.fromString('5659');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('1006');
            });
            it('Power-ModPrim-HexDec-4', () => {
                const a = MyBigInt.fromString('5');
                const b = MyBigInt.fromString('430');
                const m = MyBigInt.fromString('4441');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('2276');
            });
            it('Power-ModPrim-HexDec-5', () => {
                const a = MyBigInt.fromString('7');
                const b = MyBigInt.fromString('310');
                const m = MyBigInt.fromString('34237');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('28546');
            });
            it('Power-ModPrim-HexDec-6', () => {
                const a = MyBigInt.fromString('10');
                const b = MyBigInt.fromString('303');
                const m = MyBigInt.fromString('234235241');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('92533009');
            });
            it('Power-ModPrim-HexDec-7', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('255');
                const m = MyBigInt.fromString('257');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('178');
            });
            it('Power-ModPrim-HexDec-8', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('256');
                const m = MyBigInt.fromString('263');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('149');
            });
            it('Power-ModPrim-HexDec-9', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('65536');
                const m = MyBigInt.fromString('53');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('24');
            });
            it('Power-ModPrim-HexDec-10', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('53');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('47');
            });
            it('Power-ModPrim-HexDec-11', () => {
                const a = MyBigInt.fromString('5234545');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('86');
            });
            it('Power-ModPrim-HexDec-12', () => {
                const a = MyBigInt.fromString('5454765756745');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('9');
            });
            it('Power-ModPrim-HexDec-13', () => {
                const a = MyBigInt.fromString('4654765756846548545665');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('18');
            });
            it('Power-ModPrim-HexDec-14', () => {
                const a = MyBigInt.fromString('53457435737645876878980877087987795695');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('48');
            });
            it('Power-ModPrim-HexDec-15', () => {
                const a = MyBigInt.fromString('1235423454365546546657658767879860980980870870870707675432');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('100');
            });
            it('Power-ModPrim-HexDec-16', () => {
                const a = MyBigInt.fromString('4654765756846548545665');
                const b = MyBigInt.fromString('4352342345243');
                const m = MyBigInt.fromString('3454353517');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('403157166');
            });
            it('Power-ModPrim-HexDec-17', () => {
                const a = MyBigInt.fromString('53457435737645876878980877087987795695');
                const b = MyBigInt.fromString('234523452345234');
                const m = MyBigInt.fromString('4546576807');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('2009059890');
            });
            it('Power-ModPrim-HexDec-18', () => {
                const a = MyBigInt.fromString('1235423454365546546657658767879860980980870870870707675432');
                const b = MyBigInt.fromString('3452345234523434');
                const m = MyBigInt.fromString('3424365689');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('3070416400');
            });
            it('Power-ModPrim-HexDec-19', () => {
                const a = MyBigInt.fromString('56576587685679768679679679768678654231343456658679898798797687865');
                const b = MyBigInt.fromString('23465465463546354654654645');
                const m = MyBigInt.fromString('6467568678691');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('2567419158218');
            });
            it('Power-ModPrim-HexDec-20', () => {
                const a = MyBigInt.fromString('1623546129913');
                const b = MyBigInt.fromString('4352342345243');
                const m = MyBigInt.fromString('34543534679');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('0');
            });
            it('Power-ModPrim-HexDec-21', () => {
                const a = MyBigInt.fromString('30397572789799619');
                const b = MyBigInt.fromString('23465465463546354654654645');
                const m = MyBigInt.fromString('646756867868077');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('0');
            });
            it('Power-ModPrim-HexDec-22', () => {
                const a = MyBigInt.fromString('4747');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('101');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('0');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
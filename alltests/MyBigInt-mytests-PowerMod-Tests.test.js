
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-PowerMod-Tests', () => {
    
            it('Power-Mod-HexDec-1', () => {
                const a = MyBigInt.fromString('1');
                const b = MyBigInt.fromString('2343');
                const m = MyBigInt.fromString('1');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('0');
            });
            it('Power-Mod-HexDec-2', () => {
                const a = MyBigInt.fromString('2');
                const b = MyBigInt.fromString('2048');
                const m = MyBigInt.fromString('23');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('4');
            });
            it('Power-Mod-HexDec-3', () => {
                const a = MyBigInt.fromString('3');
                const b = MyBigInt.fromString('636');
                const m = MyBigInt.fromString('5656');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('1849');
            });
            it('Power-Mod-HexDec-4', () => {
                const a = MyBigInt.fromString('5');
                const b = MyBigInt.fromString('430');
                const m = MyBigInt.fromString('4439');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('4181');
            });
            it('Power-Mod-HexDec-5', () => {
                const a = MyBigInt.fromString('7');
                const b = MyBigInt.fromString('310');
                const m = MyBigInt.fromString('34234');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('15905');
            });
            it('Power-Mod-HexDec-6', () => {
                const a = MyBigInt.fromString('10');
                const b = MyBigInt.fromString('303');
                const m = MyBigInt.fromString('234235234');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('113074036');
            });
            it('Power-Mod-HexDec-7', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('255');
                const m = MyBigInt.fromString('255');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('157');
            });
            it('Power-Mod-HexDec-8', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('256');
                const m = MyBigInt.fromString('256');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('1');
            });
            it('Power-Mod-HexDec-9', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('65536');
                const m = MyBigInt.fromString('47');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('36');
            });
            it('Power-Mod-HexDec-10', () => {
                const a = MyBigInt.fromString('13');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('47');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('45');
            });
            it('Power-Mod-HexDec-11', () => {
                const a = MyBigInt.fromString('5234545');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('97');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('26');
            });
            it('Power-Mod-HexDec-12', () => {
                const a = MyBigInt.fromString('5454765756745');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('97');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('5');
            });
            it('Power-Mod-HexDec-13', () => {
                const a = MyBigInt.fromString('4654765756846548545665');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('97');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('29');
            });
            it('Power-Mod-HexDec-14', () => {
                const a = MyBigInt.fromString('53457435737645876878980877087987795695');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('97');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('27');
            });
            it('Power-Mod-HexDec-15', () => {
                const a = MyBigInt.fromString('1235423454365546546657658767879860980980870870870707675432');
                const b = MyBigInt.fromString('65537');
                const m = MyBigInt.fromString('97');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('96');
            });
            it('Power-Mod-HexDec-16', () => {
                const a = MyBigInt.fromString('4654765756846548545665');
                const b = MyBigInt.fromString('4352342345243');
                const m = MyBigInt.fromString('346');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('249');
            });
            it('Power-Mod-HexDec-17', () => {
                const a = MyBigInt.fromString('53457435737645876878980877087987795695');
                const b = MyBigInt.fromString('234523452345234');
                const m = MyBigInt.fromString('346');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('263');
            });
            it('Power-Mod-HexDec-18', () => {
                const a = MyBigInt.fromString('1235423454365546546657658767879860980980870870870707675432');
                const b = MyBigInt.fromString('3452345234523434');
                const m = MyBigInt.fromString('346');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('124');
            });
            it('Power-Mod-HexDec-19', () => {
                const a = MyBigInt.fromString('56576587685679768679679679768678654231343456658679898798797687865');
                const b = MyBigInt.fromString('23465465463546354654654645');
                const m = MyBigInt.fromString('2354352434');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('2161868043');
            });
            it('Power-Mod-HexDec-20', () => {
                const a = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const b = MyBigInt.fromString('5645654645635464564564563456345');
                const m = MyBigInt.fromString('4523452435234');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('1718297928423');
            });
            it('Power-Mod-HexDec-21', () => {
                const a = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const b = MyBigInt.fromString('23412354123451234513454354235134514353');
                const m = MyBigInt.fromString('3453453452345134513');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('2985318623638209081');
            });
            it('Power-Mod-HexDec-22', () => {
                const a = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const b = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const m = MyBigInt.fromString('346');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('285');
            });
            it('Power-Mod-HexDec-23', () => {
                const a = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const b = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const m = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('0');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
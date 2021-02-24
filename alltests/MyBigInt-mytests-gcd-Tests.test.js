
(([MyBigInt, expect]) => {
    

    describe('[TASK3] MyBigInt-mytests-gcd-Tests', () => {
    
            it('gcd-1', () => {
                const a = MyBigInt.fromString('75');
                const b = MyBigInt.fromString('20');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('5');
            });
            it('gcd-2', () => {
                const a = MyBigInt.fromString('123');
                const b = MyBigInt.fromString('15');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('3');
            });
            it('gcd-3', () => {
                const a = MyBigInt.fromString('7456');
                const b = MyBigInt.fromString('958');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('2');
            });
            it('gcd-4', () => {
                const a = MyBigInt.fromString('76979890');
                const b = MyBigInt.fromString('945430');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('10');
            });
            it('gcd-5', () => {
                const a = MyBigInt.fromString('11103345185975');
                const b = MyBigInt.fromString('2270275');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('2270275');
            });
            it('gcd-6', () => {
                const a = MyBigInt.fromString('730367087');
                const b = MyBigInt.fromString('166688028430575');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('730367087');
            });
            it('gcd-7', () => {
                const a = MyBigInt.fromString('54015938673278400');
                const b = MyBigInt.fromString('196369218978279110400');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('1592122459200');
            });
            it('gcd-8', () => {
                const a = MyBigInt.fromString('245096536056936046682799600');
                const b = MyBigInt.fromString('543506203945812017181853335600');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('4176646315657200');
            });
            it('gcd-9', () => {
                const a = MyBigInt.fromString('166583189154164405471255668927050');
                const b = MyBigInt.fromString('237943671504660342319369169038140');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('57036510893438937630');
            });
            it('gcd-10', () => {
                const a = MyBigInt.fromString('-75');
                const b = MyBigInt.fromString('20');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('5');
            });
            it('gcd-11', () => {
                const a = MyBigInt.fromString('75');
                const b = MyBigInt.fromString('-20');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('5');
            });
            it('gcd-12', () => {
                const a = MyBigInt.fromString('16658318915416440547125466455668927050');
                const b = MyBigInt.fromString('23794367150456456745645645324324660342319369169038140');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('10');
            });
            it('gcd-13', () => {
                const a = MyBigInt.fromString('23523452345546');
                const b = MyBigInt.fromString('23794367150456458456958348237237427347234234723645324324660342319369169038140');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('2');
            });
            it('gcd-14', () => {
                const a = MyBigInt.fromString('23');
                const b = MyBigInt.fromString('23794367150456458456983482372375427347234234723645324324660342319369169038140');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('1');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
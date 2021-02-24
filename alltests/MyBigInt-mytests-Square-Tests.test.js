
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-Square-Tests', () => {
    
            it('square-1', () => {
                const a = MyBigInt.fromString('0');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('0');
                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');
                expect(e.toString()).to.equal('0');
                expect(f.toString()).to.equal('0');
                expect(g.toString()).to.equal('0');
                expect(h.toString()).to.equal('0');
            });
            it('square-2', () => {
                const a = MyBigInt.fromString('1');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('1');
                expect(d.toString()).to.equal('1');
                expect(e.toString()).to.equal('1');
                expect(f.toString()).to.equal('1');
                expect(g.toString()).to.equal('1');
                expect(h.toString()).to.equal('1');
            });
            it('square-3', () => {
                const a = MyBigInt.fromString('2');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('4');
                expect(c.toString()).to.equal('16');
                expect(d.toString()).to.equal('256');
                expect(e.toString()).to.equal('65536');
                expect(f.toString()).to.equal('4294967296');
                expect(g.toString()).to.equal('18446744073709551616');
                expect(h.toString()).to.equal('340282366920938463463374607431768211456');
            });
            it('square-4', () => {
                const a = MyBigInt.fromString('-2');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('4');
                expect(c.toString()).to.equal('16');
                expect(d.toString()).to.equal('256');
                expect(e.toString()).to.equal('65536');
                expect(f.toString()).to.equal('4294967296');
                expect(g.toString()).to.equal('18446744073709551616');
                expect(h.toString()).to.equal('340282366920938463463374607431768211456');
            });
            it('square-5', () => {
                const a = MyBigInt.fromString('5');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('25');
                expect(c.toString()).to.equal('625');
                expect(d.toString()).to.equal('390625');
                expect(e.toString()).to.equal('152587890625');
                expect(f.toString()).to.equal('23283064365386962890625');
                expect(g.toString()).to.equal('542101086242752217003726400434970855712890625');
                expect(h.toString()).to.equal('293873587705571876992184134305561419454666389193021880377187926569604314863681793212890625');
            });
            it('square-6', () => {
                const a = MyBigInt.fromString('7');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('49');
                expect(c.toString()).to.equal('2401');
                expect(d.toString()).to.equal('5764801');
                expect(e.toString()).to.equal('33232930569601');
                expect(f.toString()).to.equal('1104427674243920646305299201');
                expect(g.toString()).to.equal('1219760487635835700138573862562971820755615294131238401');
                expect(h.toString()).to.equal('1487815647197611695910312681741273570332356717154798949898498305086387315423300999654757561928633305897036801');
            });
            it('square-7', () => {
                const a = MyBigInt.fromString('11');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('121');
                expect(c.toString()).to.equal('14641');
                expect(d.toString()).to.equal('214358881');
                expect(e.toString()).to.equal('45949729863572161');
                expect(f.toString()).to.equal('2111377674535255285545615254209921');
                expect(g.toString()).to.equal('4457915684525902395869512133369841539490161434991526715513934826241');
                expect(h.toString()).to.equal('19873012250342044933876323243536725795573361572335445760471484541737760392533800435569122898705703960201510224425798062253366862190081');
            });
            it('square-8', () => {
                const a = MyBigInt.fromString('13');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('169');
                expect(c.toString()).to.equal('28561');
                expect(d.toString()).to.equal('815730721');
                expect(e.toString()).to.equal('665416609183179841');
                expect(f.toString()).to.equal('442779263776840698304313192148785281');
                expect(g.toString()).to.equal('196053476430761073330659760423566015424403280004115787589590963842248961');
                expect(h.toString()).to.equal('38436965620586987689488589105716734784140096285687477673605804756844311336293015125554652183988019630827184246200461293326735712862198305579521');
            });
            it('square-9', () => {
                const a = MyBigInt.fromString('15');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('225');
                expect(c.toString()).to.equal('50625');
                expect(d.toString()).to.equal('2562890625');
                expect(e.toString()).to.equal('6568408355712890625');
                expect(f.toString()).to.equal('43143988327398919500410556793212890625');
                expect(g.toString()).to.equal('1861403728794734215467410604755702820123364205073812627233564853668212890625');
                expect(h.toString()).to.equal('3464823841570940447511989197632600142600357270938450628136751668972148475371287127017463688665854485527890158948205456823643544339574873447418212890625');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
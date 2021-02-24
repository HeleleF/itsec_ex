
(([MyBigInt, MyBBS, expect]) => {

    describe('[TASK4] MyBBS-mytests-BBS-Tests-2', () => {
    
            it('BBS-pq-1', () => {
                const s = MyBigInt.fromString('10');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('11');
                expect(q.toString()).to.equal('19');
                expect(n.toString()).to.equal('209');
            });
            it('BBS-pq-2', () => {
                const s = MyBigInt.fromString('1000');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('1019');
                expect(q.toString()).to.equal('1279');
                expect(n.toString()).to.equal('1303301');
            });
            it('BBS-pq-3', () => {
                const s = MyBigInt.fromString('4711');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('4723');
                expect(q.toString()).to.equal('5923');
                expect(n.toString()).to.equal('27974329');
            });
            it('BBS-pq-4', () => {
                const s = MyBigInt.fromString('25454325');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('25454327');
                expect(q.toString()).to.equal('31817923');
                expect(n.toString()).to.equal('809903816502821');
            });
            it('BBS-pq-5', () => {
                const s = MyBigInt.fromString('235324534543');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('235324534559');
                expect(q.toString()).to.equal('294155668267');
                expect(n.toString()).to.equal('69222045722823381139253');
            });
            it('BBS-pq-6', () => {
                const s = MyBigInt.fromString('3534346454764568');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('3534346454764579');
                expect(q.toString()).to.equal('4417933068455759');
                expect(n.toString()).to.equal('15614506077883809925075421760461');
            });
            it('BBS-pq-7', () => {
                const s = MyBigInt.fromString('9650608768068965975976598');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('9650608768068965975976647');
                expect(q.toString()).to.equal('12063260960086207469971463');
                expect(n.toString()).to.equal('116417811992912006411147026546691763434896644424561');
            });
            it('BBS-pq-8', () => {
                const s = MyBigInt.fromString('1045065947568056805087680568056665');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('1045065947568056805087680568057023');
                expect(q.toString()).to.equal('1306332434460071006359600710071359');
                expect(n.toString()).to.equal('1365203543457900569050238944483139484918998547055898588942311104257');
            });
            it('BBS-pq-9', () => {
                const s = MyBigInt.fromString('346303950348394894385958928534593852985298529');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('346303950348394894385958928534593852985298599');
                expect(q.toString()).to.equal('432879937935493617982448660668242316231623307');
                expect(n.toString()).to.equal('149908032533629445365949756765998252510434382084246611577613215119046081877641967882846893');
            });
            it('BBS-pq-10', () => {
                const s = MyBigInt.fromString('436045695945694506456459643843593469457065796945843823');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('436045695945694506456459643843593469457065796945844043');
                expect(q.toString()).to.equal('545057119932118133070574554804491836821332246182305151');
                expect(n.toString()).to.equal('237669811190956328181644956025488952961620746704788714668118441605398057922463868130027244332058015081565493');
            });
            it('BBS-pq-11', () => {
                const s = MyBigInt.fromString('952439565436545698821381328518435943692456576030730499513281285185845823');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('952439565436545698821381328518435943692456576030730499513281285185845943');
                expect(q.toString()).to.equal('1190549456795682123526726660648044929615570720038413124391601606482307463');
                expect(n.toString()).to.equal('1133926407261195020208358797032363281025973508457414832385296935508901238223155930974266509748652708698349933981943630118850643210749298277172609');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyBBS/mybbs.js'), require('chai').expect] : [MyBigInt, MyBBS, chai.expect]);
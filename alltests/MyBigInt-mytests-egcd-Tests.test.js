
(([MyBigInt, expect]) => {
    

    describe('[TASK3] MyBigInt-mytests-egcd-Tests', () => {
    
            it('egcd-1', () => {
                const a = MyBigInt.fromString('12');
                const b = MyBigInt.fromString('25');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('-2');
                expect(v.toString()).to.equal('1');
            });
            it('egcd-2', () => {
                const a = MyBigInt.fromString('123');
                const b = MyBigInt.fromString('257');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('-117');
                expect(v.toString()).to.equal('56');
            });
            it('egcd-3', () => {
                const a = MyBigInt.fromString('123701');
                const b = MyBigInt.fromString('97987886');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('12085603');
                expect(v.toString()).to.equal('-15257');
            });
            it('egcd-4', () => {
                const a = MyBigInt.fromString('9659658865765');
                const b = MyBigInt.fromString('253254353464566');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('78054515421037');
                expect(v.toString()).to.equal('-2977164978944');
            });
            it('egcd-5', () => {
                const a = MyBigInt.fromString('38684564568864386436');
                const b = MyBigInt.fromString('25325435346475661');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('124906052573443');
                expect(v.toString()).to.equal('-190793808268798327');
            });
            it('egcd-6', () => {
                const a = MyBigInt.fromString('386845645688864386436');
                const b = MyBigInt.fromString('253254353464736775661');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('-99549651194408933737');
                expect(v.toString()).to.equal('152061943131668803353');
            });
            it('egcd-7', () => {
                const a = MyBigInt.fromString('373464563457356765765');
                const b = MyBigInt.fromString('6585684354564575676587687687697657');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('-568931575791208729935848069175400');
                expect(v.toString()).to.equal('32263280647925627793');
            });
            it('egcd-8', () => {
                const a = MyBigInt.fromString('3734645634573567657653245436457457456865131');
                const b = MyBigInt.fromString('6585684354564575676587687687697657686757546464545343431');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('-898404493543403350987229695886807999528328550372311725');
                expect(v.toString()).to.equal('509472097241894736768214105866071836443696');
            });
            it('egcd-9', () => {
                const a = MyBigInt.fromString('37346456345735676576532454364574574568651311243324325132543464656451');
                const b = MyBigInt.fromString('843843856945931838738388543854388483737554886486859795645995964384388437532737173737735858832853853228383287327373271');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('1');
                expect(u.toString()).to.equal('286422626281851984584144037425111097861290685744530351682868848312949003301879404669212646659808417376222701190299513');
                expect(v.toString()).to.equal('-12676361889485837430252314661643787671980085174372220702747469528422');
            });
            it('egcd-10', () => {
                const a = MyBigInt.fromString('449065');
                const b = MyBigInt.fromString('25');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('5');
                expect(u.toString()).to.equal('2');
                expect(v.toString()).to.equal('-35925');
            });
            it('egcd-11', () => {
                const a = MyBigInt.fromString('457568756845876866786');
                const b = MyBigInt.fromString('256');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('2');
                expect(u.toString()).to.equal('17');
                expect(v.toString()).to.equal('-30385425259296510685');
            });
            it('egcd-12', () => {
                const a = MyBigInt.fromString('7665795679597579578956967950');
                const b = MyBigInt.fromString('110');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('10');
                expect(u.toString()).to.equal('2');
                expect(v.toString()).to.equal('-139378103265410537799217599');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
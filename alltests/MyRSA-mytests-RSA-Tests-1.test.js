
(([MyBigInt, MyRSA, expect]) => {

    describe('[TASK3] MyRSA-mytests-RSA-Tests-1', () => {
    
                describe('RSA-1', () => {

                    it('RSA-1 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('397');
                        const q = MyBigInt.fromString('569');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('224928');
                    });

                    it('RSA-1 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('5');
                        const f = MyBigInt.fromString('224928');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('134957');
                    });
                });
                describe('RSA-2', () => {

                    it('RSA-2 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('9862529');
                        const q = MyBigInt.fromString('1258001');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('12407060224000');
                    });

                    it('RSA-2 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('3');
                        const f = MyBigInt.fromString('12407060224000');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('8271373482667');
                    });
                });
                describe('RSA-3', () => {

                    it('RSA-3 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('9862529');
                        const q = MyBigInt.fromString('1258001');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('12407060224000');
                    });

                    it('RSA-3 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('65537');
                        const f = MyBigInt.fromString('12407060224000');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('5464732905473');
                    });
                });
                describe('RSA-4', () => {

                    it('RSA-4 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('295077413');
                        const q = MyBigInt.fromString('295082621');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('87072215835779440');
                    });

                    it('RSA-4 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('3');
                        const f = MyBigInt.fromString('87072215835779440');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('58048143890519627');
                    });
                });
                describe('RSA-5', () => {

                    it('RSA-5 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('295077413');
                        const q = MyBigInt.fromString('295082621');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('87072215835779440');
                    });

                    it('RSA-5 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('65537');
                        const f = MyBigInt.fromString('87072215835779440');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('83229915330765873');
                    });
                });
                describe('RSA-6', () => {

                    it('RSA-6 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('309529943');
                        const q = MyBigInt.fromString('313245011');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('96958709777089420');
                    });

                    it('RSA-6 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('65537');
                        const f = MyBigInt.fromString('96958709777089420');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('1800490559511693');
                    });
                });
                describe('RSA-7', () => {

                    it('RSA-7 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('314606869');
                        const q = MyBigInt.fromString('879193391');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('276600278794202520');
                    });

                    it('RSA-7 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('7');
                        const f = MyBigInt.fromString('276600278794202520');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('79028651084057863');
                    });
                });
                describe('RSA-8', () => {

                    it('RSA-8 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('894539561');
                        const q = MyBigInt.fromString('899809241');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('804914961633534400');
                    });

                    it('RSA-8 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('3');
                        const f = MyBigInt.fromString('804914961633534400');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('536609974422356267');
                    });
                });
                describe('RSA-9', () => {

                    it('RSA-9 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('961750241');
                        const q = MyBigInt.fromString('978914129');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('941470897543390720');
                    });

                    it('RSA-9 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('65537');
                        const f = MyBigInt.fromString('941470897543390720');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('291360799914171393');
                    });
                });
                describe('RSA-10', () => {

                    it('RSA-10 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('982451629');
                        const q = MyBigInt.fromString('982451653');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('965211224938689456');
                    });

                    it('RSA-10 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('5');
                        const f = MyBigInt.fromString('965211224938689456');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('772168979950951565');
                    });
                });
                describe('RSA-11', () => {

                    it('RSA-11 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('982451629');
                        const q = MyBigInt.fromString('982451653');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('965211224938689456');
                    });

                    it('RSA-11 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('1258001');
                        const f = MyBigInt.fromString('965211224938689456');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('826172581783982417');
                    });
                });
                describe('RSA-12', () => {

                    it('RSA-12 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('32416188793');
                        const q = MyBigInt.fromString('32416187567');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('1050809256056338960272');
                    });

                    it('RSA-12 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('5');
                        const f = MyBigInt.fromString('1050809256056338960272');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('420323702422535584109');
                    });
                });
                describe('RSA-13', () => {

                    it('RSA-13 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('32416188793');
                        const q = MyBigInt.fromString('32416187567');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('1050809256056338960272');
                    });

                    it('RSA-13 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('295082621');
                        const f = MyBigInt.fromString('1050809256056338960272');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('375052674231379323173');
                    });
                });
                describe('RSA-14', () => {

                    it('RSA-14 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('179424697');
                        const q = MyBigInt.fromString('179430413');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('32194247126254752');
                    });

                    it('RSA-14 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('179428943');
                        const f = MyBigInt.fromString('32194247126254752');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('8286013874856719');
                    });
                });
                describe('RSA-15', () => {

                    it('RSA-15 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('167988556341760475137');
                        const q = MyBigInt.fromString('3560841906445833920513');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('598180691225077754353737922393926776389632');
                    });

                    it('RSA-15 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('5');
                        const f = MyBigInt.fromString('598180691225077754353737922393926776389632');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('239272276490031101741495168957570710555853');
                    });
                });
                describe('RSA-16', () => {

                    it('RSA-16 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('7455602825647884208337395736200454918783366342657');
                        const q = MyBigInt.fromString('4659775785220018543264560743076778192897');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('34741437511171958643352682099698961413263372712036566151842030383739565268100676400971776');
                    });

                    it('RSA-16 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('65537');
                        const f = MyBigInt.fromString('34741437511171958643352682099698961413263372712036566151842030383739565268100676400971776');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('11262063260827444975785094392604245467823982685616016111446723766766056794189524545503233');
                    });
                });
                describe('RSA-17', () => {

                    it('RSA-17 calculate f from p and q', () => {
                        const p = MyBigInt.fromString('59649589127497217');
                        const q = MyBigInt.fromString('5704689200685129054721');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('340282366920938457758625757157511659520');
                    });

                    it('RSA-17 calculate d from e and f', () => {
                        const e = MyBigInt.fromString('7');
                        const f = MyBigInt.fromString('340282366920938457758625757157511659520');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('194447066811964833004929004090006662583');
                    });
                });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyRSA/myrsa.js'), require('chai').expect] : [MyBigInt, MyRSA, chai.expect]);
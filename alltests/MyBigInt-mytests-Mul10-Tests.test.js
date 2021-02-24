
(([MyBigInt, expect]) => {
    
const pad = (str, len) => {
    const sign = str.startsWith('-') ? (str = str.substring(1), '-') : '';
    return sign + str.padStart(len, '0').slice(-len);
};

    describe('[TASK1] MyBigInt-mytests-Mul10-Tests', () => {
    
            it('Mul10-1', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000000');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('Mul10-2', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000001');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000000000000000000A');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000064');
                expect(pad(d.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000000000000003E8');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000002710');
                expect(pad(f.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000000000000186A0');
                expect(pad(g.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000000000000F4240');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000989680');
            });
            it('Mul10-3', () => {
                const a = MyBigInt.fromString16('000000000000000000000000000000000000000029D80188DB8067259FD9FC5D');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000001A2700F58930407783E83DBA2');
                expect(pad(c.toString16(), 64)).to.equal('000000000000000000000000000000000000001058609975BE284AB271269454');
                expect(pad(d.toString16(), 64)).to.equal('00000000000000000000000000000000000000A373C5FE996D92EAF86B81CB48');
                expect(pad(e.toString16(), 64)).to.equal('000000000000000000000000000000000000066285BBF1FE47BD2DB43311F0D0');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000003FD9395773EECD63C909FEB36820');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000027E7C3D6A875405E5DA63F3021140');
                expect(pad(h.toString16(), 64)).to.equal('000000000000000000000000000000000018F0DA662949483AFA87E77E14AC80');
            });
            it('Mul10-4', () => {
                const a = MyBigInt.fromString16('000000000000000000000000000000188DB80672A7BACCB172978F642EF5BF72');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('000000000000000000000000000000F58930407A8D4BFEEE79EB99E9D5997A74');
                expect(pad(c.toString16(), 64)).to.equal('000000000000000000000000000009975BE284C984F7F550C334032257FEC888');
                expect(pad(d.toString16(), 64)).to.equal('00000000000000000000000000005FE996D92FDF31AF9527A0081F576FF3D550');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000003BF1FE47BDEB7F0DBD38C4051396A5F865520');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000025773EECD6B32F6896437A832C3E27BB3F5340');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000176A8754062FFDA15DEA2C91FBA6D8D50794080');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000EA2949483DDFE84DAB25BDB3D48478524BC8500');
            });
            it('Mul10-5', () => {
                const a = MyBigInt.fromString16('000000000008067259FA562578EADB7230167A56129D80188DB80672A604E676');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('000000000050407783C75D76B92C9275E0E0C75CBA2700F58930407A7C31009C');
                expect(pad(c.toString16(), 64)).to.equal('00000000032284AB25C9A6A33BBDB89AC8C7C99F458609975BE284C8D9EA0618');
                expect(pad(d.toString16(), 64)).to.equal('000000001F592EAF79E082605569360BD7CDE038B73C5FE996D92FD883243CF0');
                expect(pad(e.toString16(), 64)).to.equal('00000001397BD2DAC2C517C3561C1C766E0AC237285BBF1FE47BDE751F6A6160');
                expect(pad(f.toString16(), 64)).to.equal('0000000C3ED63C8B9BB2EDA15D191CA04C6B96279395773EECD6B0933A27CDC0');
                expect(pad(g.toString16(), 64)).to.equal('0000007A745E5D7414FD484DA2FB1E42FC33DD8BC3D6A8754062E5C0458E0980');
                expect(pad(h.toString16(), 64)).to.equal('000004C88BAFA688D1E4D3085DCF2E9DDA06A775A662949483DCF982B78C5F00');
            });
            it('Mul10-6', () => {
                const a = MyBigInt.fromString16('000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('000009FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF6');
                expect(pad(c.toString16(), 64)).to.equal('000063FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9C');
                expect(pad(d.toString16(), 64)).to.equal('0003E7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC18');
                expect(pad(e.toString16(), 64)).to.equal('00270FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD8F0');
                expect(pad(f.toString16(), 64)).to.equal('01869FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE7960');
                expect(pad(g.toString16(), 64)).to.equal('0F423FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0BDC0');
                expect(pad(h.toString16(), 64)).to.equal('98967FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF676980');
            });
            it('Mul10-7', () => {
                const a = MyBigInt.fromString16('-0000000000000000000000000000000000000000000000000000000000000001');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('-000000000000000000000000000000000000000000000000000000000000000A');
                expect(pad(c.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000000000000000000000000064');
                expect(pad(d.toString16(), 64)).to.equal('-00000000000000000000000000000000000000000000000000000000000003E8');
                expect(pad(e.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000000000000000000000002710');
                expect(pad(f.toString16(), 64)).to.equal('-00000000000000000000000000000000000000000000000000000000000186A0');
                expect(pad(g.toString16(), 64)).to.equal('-00000000000000000000000000000000000000000000000000000000000F4240');
                expect(pad(h.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000000000000000000000989680');
            });
            it('Mul10-8', () => {
                const a = MyBigInt.fromString16('-000000000000000000000000000000000000000029D80188DB8067259FD9FC5D');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('-0000000000000000000000000000000000000001A2700F58930407783E83DBA2');
                expect(pad(c.toString16(), 64)).to.equal('-000000000000000000000000000000000000001058609975BE284AB271269454');
                expect(pad(d.toString16(), 64)).to.equal('-00000000000000000000000000000000000000A373C5FE996D92EAF86B81CB48');
                expect(pad(e.toString16(), 64)).to.equal('-000000000000000000000000000000000000066285BBF1FE47BD2DB43311F0D0');
                expect(pad(f.toString16(), 64)).to.equal('-0000000000000000000000000000000000003FD9395773EECD63C909FEB36820');
                expect(pad(g.toString16(), 64)).to.equal('-0000000000000000000000000000000000027E7C3D6A875405E5DA63F3021140');
                expect(pad(h.toString16(), 64)).to.equal('-000000000000000000000000000000000018F0DA662949483AFA87E77E14AC80');
            });
            it('Mul10-9', () => {
                const a = MyBigInt.fromString16('-000000000000000000000000000000188DB80672A7BACCB172978F642EF5BF72');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('-000000000000000000000000000000F58930407A8D4BFEEE79EB99E9D5997A74');
                expect(pad(c.toString16(), 64)).to.equal('-000000000000000000000000000009975BE284C984F7F550C334032257FEC888');
                expect(pad(d.toString16(), 64)).to.equal('-00000000000000000000000000005FE996D92FDF31AF9527A0081F576FF3D550');
                expect(pad(e.toString16(), 64)).to.equal('-0000000000000000000000000003BF1FE47BDEB7F0DBD38C4051396A5F865520');
                expect(pad(f.toString16(), 64)).to.equal('-0000000000000000000000000025773EECD6B32F6896437A832C3E27BB3F5340');
                expect(pad(g.toString16(), 64)).to.equal('-0000000000000000000000000176A8754062FFDA15DEA2C91FBA6D8D50794080');
                expect(pad(h.toString16(), 64)).to.equal('-0000000000000000000000000EA2949483DDFE84DAB25BDB3D48478524BC8500');
            });
            it('Mul10-10', () => {
                const a = MyBigInt.fromString16('-000000000008067259FA562578EADB7230167A56129D80188DB80672A604E676');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), 64)).to.equal('-000000000050407783C75D76B92C9275E0E0C75CBA2700F58930407A7C31009C');
                expect(pad(c.toString16(), 64)).to.equal('-00000000032284AB25C9A6A33BBDB89AC8C7C99F458609975BE284C8D9EA0618');
                expect(pad(d.toString16(), 64)).to.equal('-000000001F592EAF79E082605569360BD7CDE038B73C5FE996D92FD883243CF0');
                expect(pad(e.toString16(), 64)).to.equal('-00000001397BD2DAC2C517C3561C1C766E0AC237285BBF1FE47BDE751F6A6160');
                expect(pad(f.toString16(), 64)).to.equal('-0000000C3ED63C8B9BB2EDA15D191CA04C6B96279395773EECD6B0933A27CDC0');
                expect(pad(g.toString16(), 64)).to.equal('-0000007A745E5D7414FD484DA2FB1E42FC33DD8BC3D6A8754062E5C0458E0980');
                expect(pad(h.toString16(), 64)).to.equal('-000004C88BAFA688D1E4D3085DCF2E9DDA06A775A662949483DCF982B78C5F00');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
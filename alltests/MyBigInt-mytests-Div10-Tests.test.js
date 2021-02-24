
(([MyBigInt, expect]) => {
    
const pad = (str, len) => {
    const sign = str.startsWith('-') ? (str = str.substring(1), '-') : '';
    return sign + str.padStart(len, '0').slice(-len);
};

    describe('[TASK1] MyBigInt-mytests-Div10-Tests', () => {
    
            it('Div10-1', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000000');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('Div10-2', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000001');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('Div10-3', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000001000');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000199');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000028');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000004');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('Div10-4', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('000000000000000000000000000000000000000029D80188DB8067259FD9FC5D');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000042F335A7C59A3EA2995CC6F');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000006B1EBC3FA29064375BC7A4');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000AB646065D0E706BEF93F6');
                expect(pad(e.toString16(), 64)).to.equal('00000000000000000000000000000000000000000001123A33D61B0B3DFE5B98');
                expect(pad(f.toString16(), 64)).to.equal('000000000000000000000000000000000000000000001B6C386235E786330928');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000002BE05A36BCA5A384DB7');
                expect(pad(h.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000004633C38AC76F6C07C5');
            });
            it('Div10-5', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('000000000000000000000000000000188DB80672A7BACCB172978F642EF5BF72');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('000000000000000000000000000000027492670B772C47AB58425B239E4BC658');
                expect(pad(c.toString16(), 64)).to.equal('000000000000000000000000000000003EDB70B458B7A0C455A03C505CA12D6F');
                expect(pad(d.toString16(), 64)).to.equal('00000000000000000000000000000000064924DED5ABF67A0890060809435157');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000A0EA164891323F67419A3400ED21BB');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000101768A0DB51D323ECF5D20017B692');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000019BF0DCE2BB61E9FE189500025F0E');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000002931AFB045F030FFCF421999D64E');
            });
            it('Div10-6', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('000000000008067259FA562578EADB7230167A56129D80188DB80672A604E676');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('000000000000CD71D5CC3BD08C177C5838023F6F01DC8CCF415F33D843CD4A3F');
                expect(pad(c.toString16(), 64)).to.equal('000000000000148B622E05FB41358C6F38CD0657E6960E14B9BCB8626D2E2106');
                expect(pad(d.toString16(), 64)).to.equal('000000000000020DF037CD65ECEBC13E527AE708CA42349BAC2C78D6A4849CE7');
                expect(pad(e.toString16(), 64)).to.equal('00000000000000349805948A314AC6863B72B0B41439D20F9137A5AF1073A94A');
                expect(pad(f.toString16(), 64)).to.equal('00000000000000054266F54104EDE0A705F1DE78686C2E9B281F2A2B1B3EC421');
                expect(pad(g.toString16(), 64)).to.equal('000000000000000086A3E5534D4AFCDD80982FD8D73E04A91D9CB76AB5ECAD36');
                expect(pad(h.toString16(), 64)).to.equal('00000000000000000D76CA21EE21194959A8D195AF1FCD441C8FABF112314485');
            });
            it('Div10-7', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('000000FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000001999999999999999999999999999999999999999999999999999999999');
                expect(pad(c.toString16(), 64)).to.equal('000000028F5C28F5C28F5C28F5C28F5C28F5C28F5C28F5C28F5C28F5C28F5C28');
                expect(pad(d.toString16(), 64)).to.equal('000000004189374BC6A7EF9DB22D0E5604189374BC6A7EF9DB22D0E560418937');
                expect(pad(e.toString16(), 64)).to.equal('00000000068DB8BAC710CB295E9E1B089A027525460AA64C2F837B4A2339C0EB');
                expect(pad(f.toString16(), 64)).to.equal('0000000000A7C5AC471B4784230FCF80DC33721D53CDDD6E04C059210385C67D');
                expect(pad(g.toString16(), 64)).to.equal('000000000010C6F7A0B5ED8D36B4C7F34938583621FAFC8B0079A2834D26FA3F');
                expect(pad(h.toString16(), 64)).to.equal('000000000001AD7F29ABCAF485787A6520EC08D23699194119A5C37387B71906');
            });
            it('Div10-8', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('-0000000000000000000000000000000000000000000000000000000000000001');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('Div10-9', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('-000000000000000000000000000000000000000029D80188DB8067259FD9FC5D');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000042F335A7C59A3EA2995CC6F');
                expect(pad(c.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000006B1EBC3FA29064375BC7A4');
                expect(pad(d.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000000AB646065D0E706BEF93F6');
                expect(pad(e.toString16(), 64)).to.equal('-00000000000000000000000000000000000000000001123A33D61B0B3DFE5B98');
                expect(pad(f.toString16(), 64)).to.equal('-000000000000000000000000000000000000000000001B6C386235E786330928');
                expect(pad(g.toString16(), 64)).to.equal('-0000000000000000000000000000000000000000000002BE05A36BCA5A384DB7');
                expect(pad(h.toString16(), 64)).to.equal('-00000000000000000000000000000000000000000000004633C38AC76F6C07C5');
            });
            it('Div10-10', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('-000000000000000000000000000000188DB80672A7BACCB172978F642EF5BF72');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('-000000000000000000000000000000027492670B772C47AB58425B239E4BC658');
                expect(pad(c.toString16(), 64)).to.equal('-000000000000000000000000000000003EDB70B458B7A0C455A03C505CA12D6F');
                expect(pad(d.toString16(), 64)).to.equal('-00000000000000000000000000000000064924DED5ABF67A0890060809435157');
                expect(pad(e.toString16(), 64)).to.equal('-0000000000000000000000000000000000A0EA164891323F67419A3400ED21BB');
                expect(pad(f.toString16(), 64)).to.equal('-0000000000000000000000000000000000101768A0DB51D323ECF5D20017B692');
                expect(pad(g.toString16(), 64)).to.equal('-0000000000000000000000000000000000019BF0DCE2BB61E9FE189500025F0E');
                expect(pad(h.toString16(), 64)).to.equal('-0000000000000000000000000000000000002931AFB045F030FFCF421999D64E');
            });
            it('Div10-11', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('-000000000008067259FA562578EADB7230167A56129D80188DB80672A604E676');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), 64)).to.equal('-000000000000CD71D5CC3BD08C177C5838023F6F01DC8CCF415F33D843CD4A3F');
                expect(pad(c.toString16(), 64)).to.equal('-000000000000148B622E05FB41358C6F38CD0657E6960E14B9BCB8626D2E2106');
                expect(pad(d.toString16(), 64)).to.equal('-000000000000020DF037CD65ECEBC13E527AE708CA42349BAC2C78D6A4849CE7');
                expect(pad(e.toString16(), 64)).to.equal('-00000000000000349805948A314AC6863B72B0B41439D20F9137A5AF1073A94A');
                expect(pad(f.toString16(), 64)).to.equal('-00000000000000054266F54104EDE0A705F1DE78686C2E9B281F2A2B1B3EC421');
                expect(pad(g.toString16(), 64)).to.equal('-000000000000000086A3E5534D4AFCDD80982FD8D73E04A91D9CB76AB5ECAD36');
                expect(pad(h.toString16(), 64)).to.equal('-00000000000000000D76CA21EE21194959A8D195AF1FCD441C8FABF112314485');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
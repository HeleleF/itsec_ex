
(([MyBigInt, expect]) => {
    
const pad = (str, len) => {
    const sign = str.startsWith('-') ? (str = str.substring(1), '-') : '';
    return sign + str.padStart(len, '0').slice(-len);
};

    describe('[TASK1] MyBigInt-mytests-Shift-Left-Tests', () => {
    
            it('ShiftLeft-1', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000000');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('ShiftLeft-2', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000001');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000002');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000004');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000008');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000010');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000020');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000040');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000080');
            });
            it('ShiftLeft-3', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000400');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000800');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000001000');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000002000');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000004000');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000008000');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000010000');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000020000');
            });
            it('ShiftLeft-4', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000D6DDF994599FC5D');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000001ADBBF328B33F8BA');
                expect(pad(c.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000035B77E651667F174');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000006B6EFCCA2CCFE2E8');
                expect(pad(e.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000D6DDF994599FC5D0');
                expect(pad(f.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000001ADBBF328B33F8BA0');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000035B77E651667F1740');
                expect(pad(h.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000006B6EFCCA2CCFE2E80');
            });
            it('ShiftLeft-5', () => {
                const a = MyBigInt.fromString16('000000000000000000000000000000000000000187BACCB172978F642EF5BF72');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('00000000000000000000000000000000000000030F759962E52F1EC85DEB7EE4');
                expect(pad(c.toString16(), 64)).to.equal('00000000000000000000000000000000000000061EEB32C5CA5E3D90BBD6FDC8');
                expect(pad(d.toString16(), 64)).to.equal('000000000000000000000000000000000000000C3DD6658B94BC7B2177ADFB90');
                expect(pad(e.toString16(), 64)).to.equal('00000000000000000000000000000000000000187BACCB172978F642EF5BF720');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000030F759962E52F1EC85DEB7EE40');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000061EEB32C5CA5E3D90BBD6FDC80');
                expect(pad(h.toString16(), 64)).to.equal('00000000000000000000000000000000000000C3DD6658B94BC7B2177ADFB900');
            });
            it('ShiftLeft-6', () => {
                const a = MyBigInt.fromString16('00000000000000000000002578EADB7230167A56129D80188DB80672A604E676');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('00000000000000000000004AF1D5B6E4602CF4AC253B00311B700CE54C09CCEC');
                expect(pad(c.toString16(), 64)).to.equal('000000000000000000000095E3AB6DC8C059E9584A76006236E019CA981399D8');
                expect(pad(d.toString16(), 64)).to.equal('00000000000000000000012BC756DB9180B3D2B094EC00C46DC03395302733B0');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000002578EADB7230167A56129D80188DB80672A604E6760');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000004AF1D5B6E4602CF4AC253B00311B700CE54C09CCEC0');
                expect(pad(g.toString16(), 64)).to.equal('00000000000000000000095E3AB6DC8C059E9584A76006236E019CA981399D80');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000012BC756DB9180B3D2B094EC00C46DC03395302733B00');
            });
            it('ShiftLeft-7', () => {
                const a = MyBigInt.fromString16('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF80');
            });
            it('ShiftLeft-8', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF80');
            });
            it('ShiftLeft-9', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEAE28265');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD5C504CA');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAB8A0994');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF57141328');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEAE282650');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD5C504CA0');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAB8A09940');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF571413280');
            });
            it('ShiftLeft-10', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF2922066BA6603A3');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE52440CD74CC0746');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCA48819AE9980E8C');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF94910335D3301D18');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF2922066BA6603A30');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE52440CD74CC07460');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCA48819AE9980E8C0');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF94910335D3301D180');
            });
            it('ShiftLeft-11', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE7845334E8D68709BD10A408E');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCF08A669D1AD0E137A214811C');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9E114CD3A35A1C26F44290238');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3C2299A746B4384DE88520470');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE7845334E8D68709BD10A408E0');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCF08A669D1AD0E137A214811C0');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9E114CD3A35A1C26F442902380');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3C2299A746B4384DE885204700');
            });
            it('ShiftLeft-12', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFDA8715248DCFE985A9ED627FE77247F98D59FB198A');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F63314');
                expect(pad(c.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFF6A1C5492373FA616A7B589FF9DC91FE63567EC6628');
                expect(pad(d.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC50');
                expect(pad(e.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFDA8715248DCFE985A9ED627FE77247F98D59FB198A0');
                expect(pad(f.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F633140');
                expect(pad(g.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFF6A1C5492373FA616A7B589FF9DC91FE63567EC66280');
                expect(pad(h.toString16(), 64)).to.equal('FFFFFFFFFFFFFFFFFFFFED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC500');
            });
            it('ShiftLeft-13', () => {
                const a = MyBigInt.fromString16('8000000000000000000000000000000000000000000000000000000000000001');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000002');
                expect(pad(c.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000004');
                expect(pad(d.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000008');
                expect(pad(e.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000010');
                expect(pad(f.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000020');
                expect(pad(g.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000040');
                expect(pad(h.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000080');
            });
            it('ShiftLeft-14', () => {
                const a = MyBigInt.fromString16('6DDFBACCB172978F642EFDA8715248DCFE985A9ED627FE77247F98D59FB198AA');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), 64)).to.equal('DBBF759962E52F1EC85DFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F633154');
                expect(pad(c.toString16(), 64)).to.equal('B77EEB32C5CA5E3D90BBF6A1C5492373FA616A7B589FF9DC91FE63567EC662A8');
                expect(pad(d.toString16(), 64)).to.equal('6EFDD6658B94BC7B2177ED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC550');
                expect(pad(e.toString16(), 64)).to.equal('DDFBACCB172978F642EFDA8715248DCFE985A9ED627FE77247F98D59FB198AA0');
                expect(pad(f.toString16(), 64)).to.equal('BBF759962E52F1EC85DFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F6331540');
                expect(pad(g.toString16(), 64)).to.equal('77EEB32C5CA5E3D90BBF6A1C5492373FA616A7B589FF9DC91FE63567EC662A80');
                expect(pad(h.toString16(), 64)).to.equal('EFDD6658B94BC7B2177ED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC5500');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
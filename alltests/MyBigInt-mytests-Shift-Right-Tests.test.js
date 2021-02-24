
(([MyBigInt, expect]) => {
    
const pad = (str, len) => {
    const sign = str.startsWith('-') ? (str = str.substring(1), '-') : '';
    return sign + str.padStart(len, '0').slice(-len);
};

    describe('[TASK1] MyBigInt-mytests-Shift-Right-Tests', () => {
    
            it('ShiftRight-1', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000000');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('ShiftRight-2', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000001');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('ShiftRight-3', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000010');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000008');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000004');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000002');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000001');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000000');
            });
            it('ShiftRight-4', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000000000000000400');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000200');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000100');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000080');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000040');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000020');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000010');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000000008');
            });
            it('ShiftRight-5', () => {
                const a = MyBigInt.fromString16('00000000000000000000000000000000000000000000000000000000151D7D9B');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000000000000A8EBECD');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000005475F66');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000002A3AFB3');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000000000000151D7D9');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000000000000A8EBEC');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000000000005475F6');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000000000002A3AFB');
            });
            it('ShiftRight-6', () => {
                const a = MyBigInt.fromString16('0000000000000000000000000000000000000000000000000D6DDF994599FC5D');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000006B6EFCCA2CCFE2E');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000035B77E651667F17');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000001ADBBF328B33F8B');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000000000000D6DDF994599FC5');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000006B6EFCCA2CCFE2');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000000000000035B77E651667F1');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000000000000001ADBBF328B33F8');
            });
            it('ShiftRight-7', () => {
                const a = MyBigInt.fromString16('000000000000000000000000000000000000000187BACCB172978F642EF5BF72');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000C3DD6658B94BC7B2177ADFB9');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000061EEB32C5CA5E3D90BBD6FDC');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000000000000000000000030F759962E52F1EC85DEB7EE');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000187BACCB172978F642EF5BF7');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000000000000000000000C3DD6658B94BC7B2177ADFB');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000061EEB32C5CA5E3D90BBD6FD');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000000000000000000000030F759962E52F1EC85DEB7E');
            });
            it('ShiftRight-8', () => {
                const a = MyBigInt.fromString16('00000000000000000000002578EADB7230167A56129D80188DB80672A604E676');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000012BC756DB9180B3D2B094EC00C46DC03395302733B');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000095E3AB6DC8C059E9584A76006236E019CA981399D');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000004AF1D5B6E4602CF4AC253B00311B700CE54C09CCE');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('000000000000000000000002578EADB7230167A56129D80188DB80672A604E67');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000012BC756DB9180B3D2B094EC00C46DC03395302733');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00000000000000000000000095E3AB6DC8C059E9584A76006236E019CA981399');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0000000000000000000000004AF1D5B6E4602CF4AC253B00311B700CE54C09CC');
            });
            it('ShiftRight-9', () => {
                const a = MyBigInt.fromString16('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
            });
            it('ShiftRight-10', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
            });
            it('ShiftRight-11', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');
            });
            it('ShiftRight-12', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC00');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE00');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF80');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC0');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE0');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF0');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF8');
            });
            it('ShiftRight-13', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEAE28265');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5714132');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAB8A099');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD5C504C');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEAE2826');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF571413');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFAB8A09');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFD5C504');
            });
            it('ShiftRight-14', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF2922066BA6603A3');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF94910335D3301D1');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCA48819AE9980E8');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE52440CD74CC074');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF2922066BA6603A');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF94910335D3301D');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCA48819AE9980E');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE52440CD74CC07');
            });
            it('ShiftRight-15', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE7845334E8D68709BD10A408E');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3C2299A746B4384DE8852047');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9E114CD3A35A1C26F4429023');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCF08A669D1AD0E137A214811');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE7845334E8D68709BD10A408');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF3C2299A746B4384DE885204');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF9E114CD3A35A1C26F442902');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFCF08A669D1AD0E137A21481');
            });
            it('ShiftRight-16', () => {
                const a = MyBigInt.fromString16('FFFFFFFFFFFFFFFFFFFFFFDA8715248DCFE985A9ED627FE77247F98D59FB198A');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('7FFFFFFFFFFFFFFFFFFFFFED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC5');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('3FFFFFFFFFFFFFFFFFFFFFF6A1C5492373FA616A7B589FF9DC91FE63567EC662');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1FFFFFFFFFFFFFFFFFFFFFFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F6331');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0FFFFFFFFFFFFFFFFFFFFFFDA8715248DCFE985A9ED627FE77247F98D59FB198');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('07FFFFFFFFFFFFFFFFFFFFFED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('03FFFFFFFFFFFFFFFFFFFFFF6A1C5492373FA616A7B589FF9DC91FE63567EC66');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01FFFFFFFFFFFFFFFFFFFFFFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F633');
            });
            it('ShiftRight-17', () => {
                const a = MyBigInt.fromString16('8000000000000000000000000000000000000000000000000000000000000001');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('4000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('2000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1000000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0800000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0400000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0200000000000000000000000000000000000000000000000000000000000000');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0100000000000000000000000000000000000000000000000000000000000000');
            });
            it('ShiftRight-18', () => {
                const a = MyBigInt.fromString16('6DDFBACCB172978F642EFDA8715248DCFE985A9ED627FE77247F98D59FB198AA');

                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('36EFDD6658B94BC7B2177ED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC55');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('1B77EEB32C5CA5E3D90BBF6A1C5492373FA616A7B589FF9DC91FE63567EC662A');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('0DBBF759962E52F1EC85DFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F63315');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('06DDFBACCB172978F642EFDA8715248DCFE985A9ED627FE77247F98D59FB198A');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('036EFDD6658B94BC7B2177ED438A9246E7F4C2D4F6B13FF3B923FCC6ACFD8CC5');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('01B77EEB32C5CA5E3D90BBF6A1C5492373FA616A7B589FF9DC91FE63567EC662');
                a._shiftRight();
                expect(pad(a.toString16(), 64)).to.equal('00DBBF759962E52F1EC85DFB50E2A491B9FD30B53DAC4FFCEE48FF31AB3F6331');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
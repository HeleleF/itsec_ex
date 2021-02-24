(([MyBigInt, expect]) => {

    const numString = (base = 10, l = Math.floor(Math.random() * 100) + 1) => {

        let r = '';
        for (let i = 0; i < 10; i++) {
            r += Math.random().toString(base).substring(2);
        }
        return `${r.slice(0, l)}`;
    };

    describe('[TASK1] String<->BigInt conversion: basic', () => {

        const NUMS = ["0", "1", "2", "255", "256", "257", "65535", "65536", "65537", "10000000000000000000000001",
        "-1", "-2", "-255", "-256", "-257", "-65535", "-65536", "-65537", "-10000000000000000000000001"];
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            it(`should convert ${BIGA} to decimal`, () => {
                expect(A.toString()).to.equal(BIGA.toString(10));
            });

            it(`should convert ${BIGA} to hexadecimal`, () => {
                expect(A.toString16()).to.equal(BIGA.toString(16).toUpperCase());
            });
        });
    });

    describe('[TASK1] String<->BigInt conversion: fromString random decimals', () => {

        const NUMS = Array.from({ length: 50 }, () => numString());
        const BIGS = NUMS.map(n => BigInt(n));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            it(`should convert ${BIGA} to decimal`, () => {
                expect(A.toString()).to.equal(BIGA.toString(10));
            });

            it(`should convert ${BIGA} to hexadecimal`, () => {
                expect(A.toString16()).to.equal(BIGA.toString(16).toUpperCase());
            });
        });
    });

    describe('[TASK1] String<->BigInt conversion: fromString random hexadecimals', () => {

        const NUMS = Array.from({ length: 50 }, () => numString(16));
        const BIGS = NUMS.map(n => BigInt(`0x${n}`));
        const MYBIGS = NUMS.map(n => MyBigInt.fromString16(n));
        
        MYBIGS.forEach((A, i) => {
            const BIGA = BIGS[i];

            it(`should convert ${BIGA} to decimal`, () => {
                expect(A.toString()).to.equal(BIGA.toString(10));
            });

            it(`should convert ${BIGA} to hexadecimal`, () => {
                expect(A.toString16()).to.equal(BIGA.toString(16).toUpperCase());
            });
        });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
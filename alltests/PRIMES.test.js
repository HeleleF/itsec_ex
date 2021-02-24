(([MyBigInt, expect]) => {

describe('[TASK2] Primes wrong', () => {

    const ps = [-1, -17, -8, -18999, -28223421341234].map(z => MyBigInt.fromString(`${z}`));
    ps.forEach(p => {
        it(`${p.toString()} cant be prime -> error`, () => {
            expect(() => p.isPrime()).to.throw();
        });
    });
});

describe('[TASK2] Primes small', () => {

    const ps = MyBigInt.PRIMES50();

    ps.forEach(p => {
        it(`${p.toString()} should be prime`, () => {
            const c = p.isPrime();
            expect(c).to.be.true;
        });
    });
});

describe('[TASK2] Not Primes small', () => {

    const ps = [0, 1, 8, 18, 28, 38, 44, 98, 112, 240, 500, 1000, 65536].map(z => MyBigInt.fromString(`${z}`));

    ps.forEach(p => {
        it(`${p.toString()} should not be prime`, () => {
            const c = p.isPrime();
            expect(c).to.be.false;
        });
    });
});

describe('[TASK2] Primes big', () => {

    const ps = [
            '671998030559713968361666935769',
            '282174488599599500573849980909',
            '521419622856657689423872613771',
            '362736035870515331128527330659',
            '115756986668303657898962467957',
            '590872612825179551336102196593',
            '564819669946735512444543556507',
            '513821217024129243948411056803',
            '416064700201658306196320137931',
            '280829369862134719390036617067',
            '2425967623052370772757633156976982469681',
            '1451730470513778492236629598992166035067',
            '6075380529345458860144577398704761614649',
            '3615415881585117908550243505309785526231',
            '5992830235524142758386850633773258681119',
            '4384165182867240584805930970951575013697',
            '5991810554633396517767024967580894321153',
            '6847944682037444681162770672798288913849',
            '4146162919458530168953357282201621124057',
            '5570373270183181665098052481109678989411'
        ]
        .map(z => MyBigInt.fromString(z));

    ps.forEach(p => {
        it(`${p.toString()} should be prime`, () => {
            const c = p.isPrime();
            expect(c).to.be.true;
        });
    });
});

describe('[TASK2] Not Primes big', () => {

    const ps = [
            '671998030559713968361666935770',
            '282174488599599500573849980908',
            '521419622856657689423872613772',
            '362736035870515331128527330661',
            '115756986668303657898962467956',
            '590872612825179551336102196594',
            '564819669946735512444543556509',
            '513821217024129243948411056805',
            '416064700201658306196320137933',
            '280829369862134719390036617069',
            '2425967623052370772757633156976982469683',
            '1451730470513778492236629598992166035069',
            '6075380529345458860144577398704761614651',
            '3615415881585117908550243505309785526233',
            '5992830235524142758386850633773258681121',
            '4384165182867240584805930970951575013699',
            '5991810554633396517767024967580894321155',
            '6847944682037444681162770672798288913851',
            '4146162919458530168953357282201621124059',
            '5570373270183181665098052481109678989413'
        ]
        .map(z => MyBigInt.fromString(z));

    ps.forEach((p, i) => {
        it(`${ps[i]} should not be prime`, () => {
            const c = p.isPrime();
            expect(c).to.be.false;
        });
    });
});

describe('[TASK2] Euler pseudoprimes base 9', () => {

    const nine = MyBigInt.fromString('9');

    const ps = [91, 121, 671, 703, 949, 1105, 1541, 1729, 1891, 2465, 2665, 2701, 2821, 3281, 3367, 3751, 4961, 5551, 6601, 7381, 8401, 8911, 10585]
        .map(z => MyBigInt.fromString(`${z}`));

    ps.forEach((p, i) => {
        it(`${ps[i]} should be falsely prime with euler`, () => {
            const c = p.isPrimeEuler([nine]);
            expect(c).to.be.true;
        });
        it(`${ps[i]} should be falsely prime with fermat`, () => {
            const c = p.isPrimeFermat([nine]);
            expect(c).to.be.true;
        });
        it(`${ps[i]} should be not prime with MR`, () => {
            const c = p.isPrimeMR();
            expect(c).to.be.false;
        });
    });
});

describe('[TASK2] Fermat pseudoprimes base 11', () => {

    const eleven = MyBigInt.fromString('11');

    const ps = [15, 133, 259, 305, 481, 645, 703, 793, 1105, 1729, 2047, 2257, 2465, 2821, 4577, 4921, 5041, 5185, 6601, 7869, 8113, 8695, 8911, 10585]
        .map(z => MyBigInt.fromString(`${z}`));

    ps.forEach((p, i) => {
        it(`${ps[i]} should be falsely prime with fermat`, () => {
            const c = p.isPrimeFermat([eleven]);
            expect(c).to.be.true;
        });
        it(`${ps[i]} should be not prime with MR`, () => {
            const c = p.isPrimeMR();
            expect(c).to.be.false;
        });
    });
});

describe('[TASK2] Carmichael numbers', () => {

    const cm = [561,
            1105,
            1729,
            2465,
            2821,
            6601,
            8911,
            10585,
            15841,
            29341,
            41041,
            46657,
            52633,
            62745,
            63973,
            75361,
            101101,
            115921,
            126217,
            48321001,
            49333201,
            50201089,
            55462177,
            56052361,
            58489201,
            60112885,
            60957361,
            62756641,
            70561921,
            72108421,
            72286501,
            74165065,
            75151441,
            75681541,
            841340521,
            843704401,
            847491361,
            962500561,
            963168193,
            990893569,
            993420289,
            993905641,
            1001152801
        ]
        .map(z => MyBigInt.fromString(`${z}`));

    cm.forEach((p, i) => {
        it(`carmichael ${cm[i]} should be not prime`, () => {
            const c = p.isPrime();
            expect(c).to.be.false;
        });
    });
});
})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
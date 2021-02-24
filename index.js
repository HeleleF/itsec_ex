// jquery, run on document ready
$(() => {
    let type = '';

    // setup mocha for in-browser use
    mocha.setup({
        ui: 'bdd',
        timeout: '120000'
    });

    $('#testInput').on('change', ({ currentTarget }) => {
        type = $(currentTarget).val();
    });

    $('#resetTests').click(() => {

        $('#mocha').empty();

        // change url without having to reload the page
        history.pushState({}, 'Test', `/?grep=zzzz`);
        mocha.run();
    });

    $('#runTests').click(() => {

        $('#mocha').empty();

        history.pushState({}, 'Test', `/?grep=${type}`);
        mocha.run();
    });

    const loadScript = src => {
        return new Promise((resolve, reject) => {
            const s = document.createElement('script');
            s.onload = resolve;
            s.onerror = reject;
            s.src = src;
            document.head.appendChild(s);
        });
    };

    // load all test files async
    loadScript('MySHA256/mysha256.js');
    loadScript('MyAES128/myaes128.js');

    // all other files depend on MyBigInt, so load them async, but in order
    loadScript('MyBigInt/mybigint.js')
        .then(() => Promise.all([loadScript('MyBBS/mybbs.js'), loadScript('MyRSA/myrsa.js')]))
        .then(() => Promise.all([
            loadScript('alltests/ADD.test.js'),
            loadScript('alltests/SUB.test.js'),
            loadScript('alltests/MUL.test.js'),
            loadScript('alltests/DIV.test.js'),
            loadScript('alltests/BASICARITH.test.js'),
            loadScript('alltests/CMP.test.js'),
            loadScript('alltests/GCD.test.js'),
            loadScript('alltests/POW.test.js'),
            loadScript('alltests/POWMOD.test.js'),
            loadScript('alltests/POWMODPRIM.test.js'),
            loadScript('alltests/PRIMES.test.js'),
            loadScript('alltests/SHIFT.test.js'),
            loadScript('alltests/STRING.test.js'),
            loadScript('alltests/BITS.test.js'),
            loadScript('alltests/RANDOM.test.js'),

            loadScript('alltests/MyBigInt-mytests-Arithmetic-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Compare-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Convert-Hex-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Div10-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-egcd-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-gcd-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Mul10-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Power-Small-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Power-Big-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-PowerMod-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-PowerMod-Prim-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Shift-Left-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Shift-Right-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-Square-Tests.test.js'),

            loadScript('alltests/MyBigInt-mytests-primeNumber-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-NoPrimeNumber-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-EulerPseudoPrime-Tests.test.js'),
            loadScript('alltests/MyBigInt-mytests-FermatPseudoPrime-Tests.test.js'),

            loadScript('alltests/MyBBS-mytests-BBS-Tests-1.test.js'),
            loadScript('alltests/MyBBS-mytests-BBS-Tests-2.test.js'),
            loadScript('alltests/MyBBS-mytests-BBS-Tests-3.test.js'),
            loadScript('alltests/BBS.test.js'),

            loadScript('alltests/MyRSA-mytests-RSA-Tests-1.test.js'),
            loadScript('alltests/MyRSA-mytests-RSA-Tests-2.test.js'),
            loadScript('alltests/MyRSA-mytests-RSA-Tests-3.test.js'),
            //loadScript('alltests/RSA.test.js'),

            loadScript('alltests/AES.test.js'),
            loadScript('alltests/MyAES128-mytests-AES128-Tests.test.js'),
            loadScript('alltests/MyAES128-mytests-AES128-Key-Tests.test.js'),

            loadScript('alltests/SHA256.test.js'),
            loadScript('alltests/MySHA256-mytests-sha256-tests.test.js')
        ]))
        .then(() => {
            console.log('loading fin');
        });
});
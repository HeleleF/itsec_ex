const readline = require('readline');
const fs = require('fs');

const writeRSATestFile = (t) => {

    let testContent = ``;
    const PATTERN = /^(.*)-(\d{1,2})$/;

    // for each test, match the template and fill it
    t.tests.forEach(test => {

        const match = PATTERN.exec(test.title);
        const [, testCase,, ] = match || [];

        switch (testCase) {

            case 'RSA':
                testContent += `
                describe('${test.title}', () => {

                    it('${test.title} calculate f from p and q', () => {
                        const p = MyBigInt.fromString('${test.P}');
                        const q = MyBigInt.fromString('${test.Q}');

                        const myF = p.sub(MyBigInt.ONE()).mul(q.sub(MyBigInt.ONE()));
                        expect(myF.toString()).to.equal('${test.F}');
                    });

                    it('${test.title} calculate d from e and f', () => {
                        const e = MyBigInt.fromString('${test.E}');
                        const f = MyBigInt.fromString('${test.F}');
        
                        const d = e.mulInvers(f);
                        expect(d.toString()).to.equal('${test.D}');
                    });
                });`;
                break;
            
            case 'RSACipher':
                testContent += `
            describe('${test.title} All', () => {

                it('${test.title} calculate n from p and q', () => {
                    const p = MyBigInt.fromString('${test.P}');
                    const q = MyBigInt.fromString('${test.Q}');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('${test.N}');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('${test.P}'),
                    testQ: MyBigInt.fromString('${test.Q}'),
                    testN: MyBigInt.fromString('${test.N}'),
                    testE: MyBigInt.fromString('${test.E}'),
                    testD: MyBigInt.fromString('${test.D}')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('${test.G}');
                const I = rsa.encrypt('${test.I}');
                const K = rsa.encrypt('${test.K}');

                it('${test.title} should encrypt correct', () => {
                    expect(G.toString()).to.equal('${test.H}');
                    expect(I.toString()).to.equal('${test.J}');
                    expect(K.toString()).to.equal('${test.L}');
                });
            });
                `;
                break;

            case 'RSAWrong':
                testContent += `
            describe('${test.title} All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('${test.P}'),
                    testQ: MyBigInt.fromString('${test.Q}'),
                    testE: MyBigInt.fromString('${test.E}'),
                    testD: MyBigInt.fromString('${test.D}')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('${test.G}');
                const I = rsa.encrypt('${test.I}');
                const K = rsa.encrypt('${test.K}');

                it('${test.title} should encrypt', () => {
                    expect(G.toString()).to.equal('${test.H}');
                    expect(I.toString()).to.equal('${test.J}');
                    expect(K.toString()).to.equal('${test.L}');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('${test.title} should decrypt wrong', () => {
                    
                    expect(H.toString()).to.${test.failH ? 'not.' : ''}equal('${test.G}');
                    expect(J.toString()).to.${test.failJ ? 'not.' : ''}equal('${test.I}');
                    expect(L.toString()).to.${test.failL ? 'not.' : ''}equal('${test.K}');
                });
            });
                `;

                break;

            default:
                console.debug(`No template (yet) for ${testCase}`);
                break;
        }
    });

    // create the actual file
    let fileTemplate = `
(([MyBigInt, MyRSA, expect]) => {

    describe('[TASK3] ${t.name}', () => {
    ${testContent}
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyRSA/myrsa.js'), require('chai').expect] : [MyBigInt, MyRSA, chai.expect]);`;

    // and write it to the testdir
    fs.writeFileSync(`${__dirname}/../alltests/${t.name}.test.js`, fileTemplate);
};

const createRSATests = (path) => {

    if ('string' !== typeof path || !path.endsWith('.txt')) {
        console.debug('No txt file!');
        return;
    }

    let test, nextFail = false,
        newTest = false;

    const testAll = {};

    // remove the directory and the extension
    testAll.name = path.slice(path.indexOf('/') + 1).slice(0, -4).replace(/\//g, '-');
    testAll.tests = [];

    // create the file reader as stream
    const rl = readline.createInterface({
        input: fs.createReadStream(path)
    });

    // for every line of the file...
    rl.on('line', line => {

        line = line.trim();
        const firstChar = line.charAt(0);

        switch (firstChar) {

            case 'H':
            case 'J':
            case 'L':
                
                let [k, v] = line.split('=');

                if (v.startsWith('+')) v = v.substring(1);
                
                if (nextFail) {
                    test['fail' + k] = true;
                    test[k] = v;
                    nextFail = false;
                } else {
                    test[k] = v;
                }

                break;

            case '#':
                if (line.includes('decrypt error')) {
                    nextFail = true;
                }
                break;
            case 't':

                if (newTest) {
                    testAll.tests.push(test);
                }

                newTest = true;
                test = {};
                test.title = line.split('=')[1];
                //pmcnt = 0;
                break;
            default:
                if (!newTest) {
                    throw new Error(`Unexpected parameter outside of a test in ${test.title}, Line ${line}, Char ${firstChar}`);
                }
                let [key, val] = line.split('=');

                if (val.startsWith('+')) val = val.substring(1);

                test[key] = val;
        }
    });

    // file reading is done, write parsed test to file
    rl.on('close', () => {
        if (newTest) {
            testAll.tests.push(test);
        }
        writeRSATestFile(testAll);
    });
};

const TEST_DIR = './MyRSA/mytests/';
const files = fs.readdirSync(TEST_DIR);

files.forEach(f => {
    createRSATests(TEST_DIR + f);
});
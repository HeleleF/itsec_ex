const readline = require('readline');
const fs = require('fs');

const writeBBSTestFile = (t) => {

    let testContent = ``;
    const PATTERN = /^(.*)-(\d{1,2})$/;

    // for each test, match the template and fill it
    t.tests.forEach(test => {

        const match = PATTERN.exec(test.title);
        const [, testCase,, ] = match || [];

        switch (testCase) {

            case 'BBS-p':
                testContent += `
            describe('${test.title}', () => {
                const s = MyBigInt.fromString('${test.A}');
                const ps = [${test.P.map(e => "'" + e + "'")}];

                ps.forEach((p, i) => {
                    it(\`${test.title} p\$\{i\}\`, () => {
                        s._nextBlumPrime();
                        expect(s.toString()).to.equal(p);
                    });
                });
            });`;
                break;
            
            case 'BBS-pq':
                testContent += `
            it('${test.title}', () => {
                const s = MyBigInt.fromString('${test.A}');
                const { N: n, P: p, Q: q } = MyBBS.createBlumPrimes(s);

                expect(p.toString()).to.equal('${test.P}');
                expect(q.toString()).to.equal('${test.Q}');
                expect(n.toString()).to.equal('${test.N}');
            });`;
                break;

            case 'BBS-Test':
                testContent += `
            describe('${test.title} All', () => {

                const zs = [${test.Z.map(e => "'" + e + "'")}];
                const opts = {
                    module: MyBigInt.fromString('${test.N}'),
                    seed: MyBigInt.fromString('${test.R}')
                };
                const c = new MyBBS(opts);

                it('${test.title} bits should match', () => {
                    const bitstring = c.randomByte(true) + c.randomByte(true);
                    expect(parseInt(bitstring, 2)).to.equal(${parseInt(test.B, 2)});
                });

                it('${test.title} random values should match', () => {
                    const h = c.history.map(v => v.toString());
                    expect(h).to.deep.equal(zs);
                });
            });`;
                break;

            default:
                console.debug(`No template (yet) for ${testCase}`);
                break;
        }
    });

    // create the actual file
    let fileTemplate = `
(([MyBigInt, MyBBS, expect]) => {

    describe('[TASK4] ${t.name}', () => {
    ${testContent}
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyBBS/mybbs.js'), require('chai').expect] : [MyBigInt, MyBBS, chai.expect]);`;

    // and write it to the testdir
    fs.writeFileSync(`${__dirname}/../alltests/${t.name}.test.js`, fileTemplate);
};

const createBBSTests = (path) => {

    if ('string' !== typeof path || !path.endsWith('.txt')) {
        console.debug('No txt file!');
        return;
    }

    let test,
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

            case '#':
                if (newTest) {
                    testAll.tests.push(test);
                    newTest = false;
                }
                break;
            case 't':

                if (newTest) {
                    throw new Error(`Unexpected title while parsing test ${test.title}`);
                }

                newTest = true;
                test = {};
                test.title = line.split('=')[1];
                break;
            default:
                if (!newTest) {
                    throw new Error(`Unexpected parameter outside of a test in ${test.title}, Line ${line}, Char ${firstChar}`);
                }
                let [key, val] = line.split('=');

                if (val.startsWith('+')) val = val.substring(1);

                if (test[key]) {
                    if (Array.isArray(test[key])) {
                        test[key].push(val);
                    } else {
                        const tmp = test[key];
                        test[key] = [tmp];
                        test[key].push(val);
                    }
                } else {
                    test[key] = val;
                }
        }
    });

    // file reading is done, write parsed test to file
    rl.on('close', () => {
        if (newTest) {
            testAll.tests.push(test);
            newTest = false;
        }
        writeBBSTestFile(testAll);
    });
};

const TEST_DIR = './MyBBS/mytests/';
const files = fs.readdirSync(TEST_DIR);

files.forEach(f => {
    createBBSTests(TEST_DIR + f);
});
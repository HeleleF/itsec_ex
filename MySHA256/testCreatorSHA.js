const readline = require('readline');
const fs = require('fs');

const writeSHATestFile = (t) => {

    let testContent = ``;

    // for each test, match the template and fill it
    t.tests.forEach(test => {

        testContent += `
        describe('${test.title} all', () => {

            const { HASH: h, DEBUGINFO: d1 } = MySHA256.sha256('${test.val}', true, true);
            const { HASH: hh, DEBUGINFO: d2 } = MySHA256.sha256(h, true, true);

            const rounds1 = [${test.rounds1.map(e => "'" + e + "'")}];
            const rounds2 = [${test.rounds2.map(e => "'" + e + "'")}];
            
            it('${test.title} hashed', () => {
                expect(h).to.equal('${test.hash}');
            });

            it('${test.title} Hash hashed', () => {
                expect(hh).to.equal('${test.hashhash}');
            });

            it('${test.title} rounds1 should match', () => {
                expect(d1).to.deep.equal(rounds1);
            });

            it('${test.title} rounds2 should match', () => {
                expect(d2).to.deep.equal(rounds2);
            });          
        });`;

    });

    // create the actual file
    let fileTemplate = `
(([MySHA256, expect]) => {

    describe('[TASK5] ${t.name}', () => {
    ${testContent}
    });

})('function' === typeof require ? [require('../MySHA256/mysha256.js'), require('chai').expect] : [MySHA256, chai.expect]);`;

    // and write it to the testdir
    fs.writeFileSync(`${__dirname}/../alltests/${t.name}.test.js`, fileTemplate);
};

const createSHATests = (path) => {

    if ('string' !== typeof path || !path.endsWith('.txt')) {
        console.debug('No file!');
        return;
    }

    let flag = false,
        test, newTest = false;

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
            case 'l':
            case 'k':
            case 'H':
            case 'W':
                // ignore
                break;

            case 'R':
                if (flag) {
                    test.rounds2.push(line.split('=')[1]);
                } else {
                    test.rounds1.push(line.split('=')[1]);
                }
                break;

            case '#':
                if (line === '# sha256(sha256(...))') flag = true;
                break;
            case 't':
                if (newTest) {
                    testAll.tests.push(test);
                }

                newTest = true;
                test = {};
                test.title = line.split('=')[1];
                test.rounds1 = [];
                test.rounds2 = [];
                flag = false;
                break;
            case 'p':
                test.val = line.split('=')[1];
                break;

            case 'd':
                test.hashhash = line.split('=')[1];
                break;
            case 'h':
                test.hash = line.split('=')[1];
                break;
            default:
                throw new Error(`Unexpected parameter outside of test in ${test.title}, Line ${line}, Char ${firstChar}`);
        }
    });

    // file reading is done, write parsed test to file
    rl.on('close', () => {
        writeSHATestFile(testAll);
    });
};

const SHA256TEST = './MySHA256/mytests/sha256-tests.txt';
createSHATests(SHA256TEST);
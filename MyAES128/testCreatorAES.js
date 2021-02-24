const readline = require('readline');
const fs = require('fs');

const writeAESTestFile = (t) => {

    let testContent = ``, extra = ``;

    // for each test, match the template and fill it
    t.tests.forEach(test => {

        if (test.keys.length) {
            extra = `
            const debug = aes.getDebug(true);
            const keys = [${test.keys.map(e => "'" + e + "'")}];
        
            it('${test.title} keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            `;
        } else {
            extra = `
            const debug = aes.getDebug();
            const rounds = [${test.rounds.map(e => "'" + e + "'")}];
        
            it('${test.title} rounds should match', () => {
                expect(debug).to.deep.equal(rounds);
            });  
            `;
        }

        testContent += `
        describe('${test.title} all', () => {

            const k = MyAES128.h2b('${test.KEY}');
            const p = MyAES128.h2b('${test.PLAIN}');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('${test.title} should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('${test.PLAIN}');
            });

            ${extra}
        });`;

    });

    // create the actual file
    let fileTemplate = `
(([MyAES128, expect]) => {

    const aes = new MyAES128({debug: true});

    describe('[TASK6] ${t.name}', () => {
    ${testContent}
    });

})('function' === typeof require ? [require('../MyAES128/myaes128.js'), require('chai').expect] : [MyAES128, chai.expect]);`;

    // and write it to the testdir
    fs.writeFileSync(`${__dirname}/../alltests/${t.name}.test.js`, fileTemplate);
};

const createAESTests = (path) => {

    if ('string' !== typeof path || !path.endsWith('.txt')) {
        console.debug('Not a textfile!');
        return;
    }

    let test, newTest = false;

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

        const val = line.split('=')[1];

        switch (firstChar) {

            case 'r':
                test.rounds.push(val);
            break;

            case 'k':
                             
                if (line.startsWith('key[')) {
                    test.keys.push(val);
                } else {
                    test.KEY = val;
                }
                break;

            case 'p':
                test.PLAIN = val;
                break;

            case '#':
                break;
            
            case 't':
                if (newTest) {
                    testAll.tests.push(test);
                }

                newTest = true;
                test = {};
                test.title = val;
                test.rounds = [];
                test.keys = [];
                break;
            default:
                throw new Error(`Unexpected parameter outside of test in ${test.title}, Line ${line}, Char ${firstChar}`);
        }
    });

    // file reading is done, write parsed test to file
    rl.on('close', () => {

        if (newTest) {
            testAll.tests.push(test);
            newTest = false;       
        }
        writeAESTestFile(testAll);
    });
};

const TEST_DIR = './MyAES128/mytests/';
const files = fs.readdirSync(TEST_DIR);

files.forEach(f => {
    createAESTests(TEST_DIR + f);
});
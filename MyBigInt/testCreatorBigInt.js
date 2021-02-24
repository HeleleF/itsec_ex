const readline = require('readline');
const fs = require('fs');

/**
 * Creates a js test file with test cases from a parsed
 * test and writes it to file.
 * Used only in {@link readAndParseTestFile()}.
 * @param {Object} t Object containing parsed data for test cases
 */
const writeTestFile = (t, force = false) => {

    const path = `mytests/${t.name}.test.js`

    if (fs.existsSync(path)) {
        if (force) {
            console.debug(`Overwriting ${path}...`);
        } else {
            console.debug(`${path} exists.`);
            return;
        }
    }
    

    let testContent = ``, padflag = false;
    const PATTERN = /^(.*)-(\d{1,2})$/;

    // for each test, match the template and fill it
    t.tests.forEach(test => {

        const match = PATTERN.exec(test.title);
        const [, testCase,, ] = match || [];

        let l;

        switch (testCase) {

            case 'Compare-HexDec':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('${test.c}');
                expect(d.toString()).to.equal('${test.d}');  
            });`;
                break;

            case 'dec-Hex':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.d}');
                expect(a.toString16().padStart(2, "0")).to.equal('${test.h}');
            });`;
                break;

            case 'Arith-HexDec':

                let division = ``;

                if (test.F === '' && test.G === '') {
                    division += `
                    expect(() => a.divmod(b)).to.throw();
                    `;
                } else {
                    division += `
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('${test.F}');
                    expect(g.toString()).to.equal('${test.G}');        
                    `;
                }

                testContent += `
                it('${test.title}', () => {
                    const a = MyBigInt.fromString('${test.A}');
                    const b = MyBigInt.fromString('${test.B}');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('${test.C}');
                    expect(d.toString()).to.equal('${test.D}');
                    expect(e.toString()).to.equal('${test.E}');

                    ${division}
                });`;


                break;

            case 'Mul10':
                l = parseInt(test.s, 10) / 4;
                padflag = true;
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString16('${test.a}');
                const b = a.mul10();
                const c = b.mul10();
                const d = c.mul10();
                const e = d.mul10();
                const f = e.mul10();
                const g = f.mul10();
                const h = g.mul10();

                expect(pad(b.toString16(), ${l})).to.equal('${test.b}');
                expect(pad(c.toString16(), ${l})).to.equal('${test.c}');
                expect(pad(d.toString16(), ${l})).to.equal('${test.d}');
                expect(pad(e.toString16(), ${l})).to.equal('${test.e}');
                expect(pad(f.toString16(), ${l})).to.equal('${test.f}');
                expect(pad(g.toString16(), ${l})).to.equal('${test.g}');
                expect(pad(h.toString16(), ${l})).to.equal('${test.h}');
            });`;
                break;

            case 'Div10':
                l = parseInt(test.s, 10) / 4;
                padflag = true;
                testContent += `
            it('${test.title}', () => {
                const TEN = MyBigInt.TEN();
                const a = MyBigInt.fromString16('${test.a}');

                const { q: b } = a._divmod(TEN, a.sign, false);
                const { q: c } = b._divmod(TEN, b.sign, false);
                const { q: d } = c._divmod(TEN, c.sign, false);
                const { q: e } = d._divmod(TEN, d.sign, false);
                const { q: f } = e._divmod(TEN, e.sign, false);
                const { q: g } = f._divmod(TEN, f.sign, false);
                const { q: h } = g._divmod(TEN, g.sign, false);

                expect(pad(b.toString16(), ${l})).to.equal('${test.b}');
                expect(pad(c.toString16(), ${l})).to.equal('${test.c}');
                expect(pad(d.toString16(), ${l})).to.equal('${test.d}');
                expect(pad(e.toString16(), ${l})).to.equal('${test.e}');
                expect(pad(f.toString16(), ${l})).to.equal('${test.f}');
                expect(pad(g.toString16(), ${l})).to.equal('${test.g}');
                expect(pad(h.toString16(), ${l})).to.equal('${test.h}');
            });`;
                break;

            case 'gcd':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const g = MyBigInt.gcd(a, b);

                expect(g.toString()).to.equal('${test.G}');
            });`;
                break;

            case 'egcd':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const { gcd: g, u: u, v: v } = MyBigInt.egcdSlow(a, b);

                expect(g.toString()).to.equal('${test.G}');
                expect(u.toString()).to.equal('${test.U}');
                expect(v.toString()).to.equal('${test.V}');
            });`;
                break;

            case 'Power-Mod-HexDec':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const m = MyBigInt.fromString('${test.M}');
                const c = a.powMod(b, m);

                expect(c.toString()).to.equal('${test.C}');
            });`;
                break;

            case 'ShiftRight':
                l = parseInt(test.s, 10) / 4;
                padflag = true;
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString16('${test.a}');

                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.b}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.c}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.d}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.e}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.f}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.g}');
                a._shiftRight();
                expect(pad(a.toString16(), ${l})).to.equal('${test.h}');
            });`;
                break;

            case 'ShiftLeft':
                l = parseInt(test.s, 10) / 4;
                padflag = true;
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString16('${test.a}');
                const b = a.shiftLeft(1);
                const c = a.shiftLeft(2);
                const d = a.shiftLeft(3);
                const e = a.shiftLeft(4);
                const f = a.shiftLeft(5);
                const g = a.shiftLeft(6);
                const h = a.shiftLeft(7);

                expect(pad(b.toString16(), ${l})).to.equal('${test.b}');
                expect(pad(c.toString16(), ${l})).to.equal('${test.c}');
                expect(pad(d.toString16(), ${l})).to.equal('${test.d}');
                expect(pad(e.toString16(), ${l})).to.equal('${test.e}');
                expect(pad(f.toString16(), ${l})).to.equal('${test.f}');
                expect(pad(g.toString16(), ${l})).to.equal('${test.g}');
                expect(pad(h.toString16(), ${l})).to.equal('${test.h}');
            });`;
                break;

            case 'Power-Big-HexDec':

                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const c = a.pow(b);

                expect(c.toString()).to.equal('${test.C}');
            });`;
                break;

            case 'Power-ModPrim-HexDec':
                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = MyBigInt.fromString('${test.B}');
                const m = MyBigInt.fromString('${test.M}');
                const c = a.powModPrim(b, m);

                expect(c.toString()).to.equal('${test.C}');
            });`;
                break;

            case 'Power-Small-HexDec':

                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('${test.B}');
                expect(c.toString()).to.equal('${test.C}');
                expect(d.toString()).to.equal('${test.D}');
                expect(e.toString()).to.equal('${test.E}');
                expect(f.toString()).to.equal('${test.F}');
                expect(g.toString()).to.equal('${test.G}');
                expect(h.toString()).to.equal('${test.H}');
                expect(i.toString()).to.equal('${test.I}');
            });`;

                break;

            case 'square':

                testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const b = a.square();
                const c = b.square();
                const d = c.square();
                const e = d.square();
                const f = e.square();
                const g = f.square();
                const h = g.square();

                expect(b.toString()).to.equal('${test.B}');
                expect(c.toString()).to.equal('${test.C}');
                expect(d.toString()).to.equal('${test.D}');
                expect(e.toString()).to.equal('${test.E}');
                expect(f.toString()).to.equal('${test.F}');
                expect(g.toString()).to.equal('${test.G}');
                expect(h.toString()).to.equal('${test.H}');
            });`;
                break;
            
            case 'Fermat-PseudoPrime':
                
            testContent += `
            it('${test.title}', () => {
                const a = MyBigInt.fromString('${test.A}');
                const p = MyBigInt.fromString('${test.P}');
                const c = p.witnessFermat(a);

                expect(c, 'Comment the gcd-Check in witnessFermat if this fails!').to.be.false;
            });`;     
                break;
            
            case 'Euler-PseudoPrime':
                
                    testContent += `
                    it('${test.title}', () => {
                        const a = MyBigInt.fromString('${test.A}');
                        const p = MyBigInt.fromString('${test.P}');
                        const c = p.witnessEuler(a);
    
                        expect(c, 'Comment the gcd-Check in witnessEuler if this fails!').to.be.false;
                    });`; 
                
                break;
            
            case 'NoPrimeNumber':
                
            testContent += `
            describe('${test.title}', () => {
                const p = MyBigInt.fromString('${test.P}');

                const as = [${test.A}].map(a => MyBigInt.fromString(\`\$\{a\}\`));

                it('${test.title} fermat', () => {

                    let c = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessFermat(as[i])) {
                            c = false;
                            break;
                        }
                    }
                    expect(c).to.be.${test.f.toLowerCase()};
                });

                it('${test.title} euler', () => {

                    let d = true;

                    for (let i = 0; i < as.length; i++) {
                        if (p.witnessEuler(as[i])) {
                            d = false;
                            break;
                        }
                    }
                    expect(d).to.be.${test.e.toLowerCase()};
                });
            });`;     
                break;
            
            case 'PrimeNumber':
                
                testContent += `
                it('${test.title}', () => {
                    const p = MyBigInt.fromString('${test.P}');
                    const as = MyBigInt.PRIMES_TO_100().slice(0, 12);
    
                    const c = p.isPrimeFermat(as);
                    const d = p.isPrimeEuler(as);
                    const e = p.isPrimeMR(as);
    
                    expect(c).to.be.true;
                    expect(d).to.be.true;
                    expect(e).to.be.true;
                });`;     
                break;
            
            default:
                console.debug(`No template (yet) for ${testCase}`);
                break;
        }
    });

    // no template found, skip
    if (testContent === '') {
        return;
    }

    const padFunc = `
const pad = (str, len) => {
    const sign = str.startsWith('-') ? (str = str.substring(1), '-') : '';
    return sign + str.padStart(len, '0').slice(-len);
};`;

    // create the actual file
    let fileTemplate = `
(([MyBigInt, expect]) => {
    ${padflag ? padFunc : ''}

    describe('[TASK${t.tasknr}] ${t.name}', () => {
    ${testContent}
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);`;

    // and write it to the testdir
    fs.writeFileSync(`${__dirname}/../alltests/${t.name}.test.js`, fileTemplate);
};

/**
 * Reads and parses text files containing various tests.
 * @param {string} path The path to a text file
 */
const readAndParseTestFile = path => {

    if ('string' !== typeof path || !path.endsWith('.txt')) {
        console.debug('No file!', path);
        return;
    }
    let test, newTest = false;

    const testAll = {};

    // remove the directory and the extension
    testAll.name = path.slice(path.indexOf('/') + 1).slice(0, -4).replace(/\//g, '-');
    testAll.tests = [];
    testAll.tasknr = 1;

    // some functions of MyBigInt belong to other tasks
    if (/(prime|square|pow|random)/.test(path.toLowerCase())) testAll.tasknr = 2;
    if (/gcd/.test(path.toLowerCase())) testAll.tasknr = 3;

    // create the file reader as stream
    const rl = readline.createInterface({
        input: fs.createReadStream(path)
    });

    // for every line of the file...
    rl.on('line', line => {

        line = line.trim();
        const firstChar = line.charAt(0);

        // fix for the new pseudo prime tests
        if (line.startsWith('# Euler: ') || line.startsWith('# Real: ') || line.startsWith('ggT should')) return;

        // handle data based on the first char of a new line
        switch (firstChar) {

            // # means a comment, so just ignore it
            // if a test is currently being parsed, # means
            // its the end of this test, so save it and set the flag
            // to false
            case '#':

                if (newTest) {
                    testAll.tests.push(test);
                    newTest = false;      
                }

                break;
            
            // t means title, so a new test is starting
            // if a test is currently being parsed, t has to be
            // an error because of malformed data.
            case 't':

                if (newTest) {
                    throw new Error(`Unexpected title while parsing test ${test.title}`);
                }

                newTest = true;
                test = {};
                test.title = line.split('=')[1];
                //console.debug('Started Parsing of testcase');
                break;
            
            // a test can have various parameters, so just save them
            // if no test is being parsed, this has to be an error
            // because of malformed data.
            default:
                if (!newTest) {
                    throw new Error(`Unexpected parameter outside of a test in ${test.title}, Line ${line}, Char ${firstChar}`);
                }
                let [key, val] = line.split('=');

                // strip plus sign f existing
                // necessary for MyBigInt <-> String conversion to work properly
                if (val.startsWith('+')) val = val.substring(1);

                val = val.toUpperCase();

                // if key exists, convert from simple property to array and push val
                // this fixes the prime tests with repeating A's etc.
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
                break;
        }
    });

    // file reading is done, write parsed test to file
    rl.on('close', () => {
        if (newTest) {
            testAll.tests.push(test);
            newTest = false;      
        }
        writeTestFile(testAll);
    });
};

const TEST_DIR = './MyBigInt/mytests/';
/*
const files = fs.readdirSync(TEST_DIR);

files.forEach(f => {
    readAndParseTestFile(TEST_DIR + f);
});*/

readAndParseTestFile(TEST_DIR + 'Arithmetic-Tests.txt');
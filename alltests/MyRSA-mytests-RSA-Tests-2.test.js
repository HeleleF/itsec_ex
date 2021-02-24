
(([MyBigInt, MyRSA, expect]) => {

    describe('[TASK3] MyRSA-mytests-RSA-Tests-2', () => {
    
            describe('RSACipher-1 All', () => {

                it('RSACipher-1 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('397');
                    const q = MyBigInt.fromString('569');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('225893');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('397'),
                    testQ: MyBigInt.fromString('569'),
                    testN: MyBigInt.fromString('225893'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('134957')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('0');
                const I = rsa.encrypt('1');
                const K = rsa.encrypt('225892');

                it('RSACipher-1 should encrypt correct', () => {
                    expect(G.toString()).to.equal('0');
                    expect(I.toString()).to.equal('1');
                    expect(K.toString()).to.equal('225892');
                });
            });
                
            describe('RSACipher-2 All', () => {

                it('RSACipher-2 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('9862529');
                    const q = MyBigInt.fromString('1258001');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('12407071344529');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('9862529'),
                    testQ: MyBigInt.fromString('1258001'),
                    testN: MyBigInt.fromString('12407071344529'),
                    testE: MyBigInt.fromString('3'),
                    testD: MyBigInt.fromString('8271373482667')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('32423345345');
                const I = rsa.encrypt('4576576');
                const K = rsa.encrypt('4576576235235');

                it('RSACipher-2 should encrypt correct', () => {
                    expect(G.toString()).to.equal('11926242792334');
                    expect(I.toString()).to.equal('4503406035491');
                    expect(K.toString()).to.equal('5382290575066');
                });
            });
                
            describe('RSACipher-3 All', () => {

                it('RSACipher-3 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('9862529');
                    const q = MyBigInt.fromString('1258001');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('12407071344529');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('9862529'),
                    testQ: MyBigInt.fromString('1258001'),
                    testN: MyBigInt.fromString('12407071344529'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('5464732905473')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('4576576235235');
                const I = rsa.encrypt('457457457');
                const K = rsa.encrypt('12407071344528');

                it('RSACipher-3 should encrypt correct', () => {
                    expect(G.toString()).to.equal('2815269835636');
                    expect(I.toString()).to.equal('6650135124775');
                    expect(K.toString()).to.equal('12407071344528');
                });
            });
                
            describe('RSACipher-4 All', () => {

                it('RSACipher-4 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('295077413');
                    const q = MyBigInt.fromString('295082621');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('87072216425939473');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('295077413'),
                    testQ: MyBigInt.fromString('295082621'),
                    testN: MyBigInt.fromString('87072216425939473'),
                    testE: MyBigInt.fromString('3'),
                    testD: MyBigInt.fromString('58048143890519627')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('44444444');
                const I = rsa.encrypt('10101010101');
                const K = rsa.encrypt('11011011011011');

                it('RSACipher-4 should encrypt correct', () => {
                    expect(G.toString()).to.equal('59631540043633404');
                    expect(I.toString()).to.equal('24108405142535509');
                    expect(K.toString()).to.equal('41583971218789960');
                });
            });
                
            describe('RSACipher-5 All', () => {

                it('RSACipher-5 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('295077413');
                    const q = MyBigInt.fromString('295082621');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('87072216425939473');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('295077413'),
                    testQ: MyBigInt.fromString('295082621'),
                    testN: MyBigInt.fromString('87072216425939473'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('83229915330765873')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('87072216425939471');
                const I = rsa.encrypt('44444444');
                const K = rsa.encrypt('87072216425939472');

                it('RSACipher-5 should encrypt correct', () => {
                    expect(G.toString()).to.equal('3012219781481559');
                    expect(I.toString()).to.equal('34818546142647184');
                    expect(K.toString()).to.equal('87072216425939472');
                });
            });
                
            describe('RSACipher-6 All', () => {

                it('RSACipher-6 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('309529943');
                    const q = MyBigInt.fromString('313245011');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('96958710399864373');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('309529943'),
                    testQ: MyBigInt.fromString('313245011'),
                    testN: MyBigInt.fromString('96958710399864373'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('1800490559511693')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('212141432432235');
                const I = rsa.encrypt('2');
                const K = rsa.encrypt('3');

                it('RSACipher-6 should encrypt correct', () => {
                    expect(G.toString()).to.equal('48286125190387166');
                    expect(I.toString()).to.equal('42804735263391722');
                    expect(K.toString()).to.equal('31404450217824319');
                });
            });
                
            describe('RSACipher-7 All', () => {

                it('RSACipher-7 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('314606869');
                    const q = MyBigInt.fromString('879193391');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('276600279988002779');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('314606869'),
                    testQ: MyBigInt.fromString('879193391'),
                    testN: MyBigInt.fromString('276600279988002779'),
                    testE: MyBigInt.fromString('7'),
                    testD: MyBigInt.fromString('79028651084057863')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('3');
                const I = rsa.encrypt('2187');
                const K = rsa.encrypt('256600676853354907');

                it('RSACipher-7 should encrypt correct', () => {
                    expect(G.toString()).to.equal('2187');
                    expect(I.toString()).to.equal('256600676853354907');
                    expect(K.toString()).to.equal('180578500039013560');
                });
            });
                
            describe('RSACipher-8 All', () => {

                it('RSACipher-8 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('894539561');
                    const q = MyBigInt.fromString('899809241');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('804914963427883201');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('894539561'),
                    testQ: MyBigInt.fromString('899809241'),
                    testN: MyBigInt.fromString('804914963427883201'),
                    testE: MyBigInt.fromString('3'),
                    testD: MyBigInt.fromString('536609974422356267')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('536609974422356267');
                const I = rsa.encrypt('638752760040602340');
                const K = rsa.encrypt('437788043493662339');

                it('RSACipher-8 should encrypt correct', () => {
                    expect(G.toString()).to.equal('638752760040602340');
                    expect(I.toString()).to.equal('437788043493662339');
                    expect(K.toString()).to.equal('618473326270068001');
                });
            });
                
            describe('RSACipher-9 All', () => {

                it('RSACipher-9 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('961750241');
                    const q = MyBigInt.fromString('978914129');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('941470899484055089');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('961750241'),
                    testQ: MyBigInt.fromString('978914129'),
                    testN: MyBigInt.fromString('941470899484055089'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('291360799914171393')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('638752760040602340');
                const I = rsa.encrypt('658687686868866856');
                const K = rsa.encrypt('99999999999999999');

                it('RSACipher-9 should encrypt correct', () => {
                    expect(G.toString()).to.equal('359684654530427377');
                    expect(I.toString()).to.equal('198910966259532922');
                    expect(K.toString()).to.equal('42790798595705909');
                });
            });
                
            describe('RSACipher-10 All', () => {

                it('RSACipher-10 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('982451629');
                    const q = MyBigInt.fromString('982451653');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('965211226903592737');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('982451629'),
                    testQ: MyBigInt.fromString('982451653'),
                    testN: MyBigInt.fromString('965211226903592737'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('772168979950951565')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('99999999999999999');
                const I = rsa.encrypt('111111111111111111');
                const K = rsa.encrypt('100000000000000000');

                it('RSACipher-10 should encrypt correct', () => {
                    expect(G.toString()).to.equal('86074327821322225');
                    expect(I.toString()).to.equal('556812274142610378');
                    expect(K.toString()).to.equal('845394947482364653');
                });
            });
                
            describe('RSACipher-11 All', () => {

                it('RSACipher-11 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('982451629');
                    const q = MyBigInt.fromString('982451653');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('965211226903592737');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('982451629'),
                    testQ: MyBigInt.fromString('982451653'),
                    testN: MyBigInt.fromString('965211226903592737'),
                    testE: MyBigInt.fromString('1258001'),
                    testD: MyBigInt.fromString('826172581783982417')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('100000000000000000');
                const I = rsa.encrypt('888888888888888888');
                const K = rsa.encrypt('617054646642407189');

                it('RSACipher-11 should encrypt correct', () => {
                    expect(G.toString()).to.equal('535002063208591886');
                    expect(I.toString()).to.equal('617056634002407189');
                    expect(K.toString()).to.equal('48794540239621103');
                });
            });
                
            describe('RSACipher-12 All', () => {

                it('RSACipher-12 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('32416188793');
                    const q = MyBigInt.fromString('32416187567');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('1050809256121171336631');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('32416188793'),
                    testQ: MyBigInt.fromString('32416187567'),
                    testN: MyBigInt.fromString('1050809256121171336631'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('420323702422535584109')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('617054646642407189');
                const I = rsa.encrypt('979797979797979797979');
                const K = rsa.encrypt('11111111111111111111');

                it('RSACipher-12 should encrypt correct', () => {
                    expect(G.toString()).to.equal('615369611213216794056');
                    expect(I.toString()).to.equal('477832235098289529734');
                    expect(K.toString()).to.equal('775815424865160307728');
                });
            });
                
            describe('RSACipher-13 All', () => {

                it('RSACipher-13 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('32416188793');
                    const q = MyBigInt.fromString('32416187567');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('1050809256121171336631');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('32416188793'),
                    testQ: MyBigInt.fromString('32416187567'),
                    testN: MyBigInt.fromString('1050809256121171336631'),
                    testE: MyBigInt.fromString('295082621'),
                    testD: MyBigInt.fromString('375052674231379323173')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('11111111111111111111');
                const I = rsa.encrypt('746351012199283012270');
                const K = rsa.encrypt('746351012199283012275');

                it('RSACipher-13 should encrypt correct', () => {
                    expect(G.toString()).to.equal('746351012199283012270');
                    expect(I.toString()).to.equal('814841641964617701290');
                    expect(K.toString()).to.equal('423793569556831054098');
                });
            });
                
            describe('RSACipher-14 All', () => {

                it('RSACipher-14 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('179424697');
                    const q = MyBigInt.fromString('179430413');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('32194247485109861');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('179424697'),
                    testQ: MyBigInt.fromString('179430413'),
                    testN: MyBigInt.fromString('32194247485109861'),
                    testE: MyBigInt.fromString('179428943'),
                    testD: MyBigInt.fromString('8286013874856719')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('6797696796567566');
                const I = rsa.encrypt('10000000000000001');
                const K = rsa.encrypt('9999999999999999');

                it('RSACipher-14 should encrypt correct', () => {
                    expect(G.toString()).to.equal('3202662427800246');
                    expect(I.toString()).to.equal('28665933461899842');
                    expect(K.toString()).to.equal('8415492443894601');
                });
            });
                
            describe('RSACipher-15 All', () => {

                it('RSACipher-15 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('167988556341760475137');
                    const q = MyBigInt.fromString('3560841906445833920513');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('598180691225077754357466752856714370785281');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('167988556341760475137'),
                    testQ: MyBigInt.fromString('3560841906445833920513'),
                    testN: MyBigInt.fromString('598180691225077754357466752856714370785281'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('239272276490031101741495168957570710555853')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('9999999999999999');
                const I = rsa.encrypt('99999999999999999999999999999999999999999');
                const K = rsa.encrypt('101010101010101010101010101010101010101010');

                it('RSACipher-15 should encrypt correct', () => {
                    expect(G.toString()).to.equal('12224338883742997042704720712597186518930');
                    expect(I.toString()).to.equal('82330858952101937430704180007979568105111');
                    expect(K.toString()).to.equal('355876984919102599359304006246672502129884');
                });
            });
                
            describe('RSACipher-16 All', () => {

                it('RSACipher-16 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('7455602825647884208337395736200454918783366342657');
                    const q = MyBigInt.fromString('4659775785220018543264560743076778192897');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('34741437511171958643352682099698961413270828314866873811835587798019030283762536545507329');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('7455602825647884208337395736200454918783366342657'),
                    testQ: MyBigInt.fromString('4659775785220018543264560743076778192897'),
                    testN: MyBigInt.fromString('34741437511171958643352682099698961413270828314866873811835587798019030283762536545507329'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('11262063260827444975785094392604245467823982685616016111446723766766056794189524545503233')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('101010101010101010101010101010101010101010101010101');
                const I = rsa.encrypt('9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
                const K = rsa.encrypt('2831267467544874195494525350944364672963714969630414453534543206924203883368676685674938');

                it('RSACipher-16 should encrypt correct', () => {
                    expect(G.toString()).to.equal('27111590498907479264063099212422881113911020038393673903317634717063990382938277785075436');
                    expect(I.toString()).to.equal('28312674675448741954945253509443646729637149696304140849333467206924203883368676685674938');
                    expect(K.toString()).to.equal('2813100659035262240598776931593725185995578130992815931492584234554126077338982191626214');
                });
            });
                
            describe('RSACipher-17 All', () => {

                it('RSACipher-17 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('59649589127497217');
                    const q = MyBigInt.fromString('5704689200685129054721');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('340282366920938463463374607431768211457');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('59649589127497217'),
                    testQ: MyBigInt.fromString('5704689200685129054721'),
                    testN: MyBigInt.fromString('340282366920938463463374607431768211457'),
                    testE: MyBigInt.fromString('7'),
                    testD: MyBigInt.fromString('194447066811964833004929004090006662583')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('454642564563457345737375');
                const I = rsa.encrypt('456457568678697897608760998098708708');
                const K = rsa.encrypt('67967967977976769979766700769076097690');

                it('RSACipher-17 should encrypt correct', () => {
                    expect(G.toString()).to.equal('76729941210390567985279646827008296331');
                    expect(I.toString()).to.equal('76568339722030499975653832909201672492');
                    expect(K.toString()).to.equal('194687418555145409706398195232240181983');
                });
            });
                
            describe('RSACipher-18 All', () => {

                it('RSACipher-18 calculate n from p and q', () => {
                    const p = MyBigInt.fromString('7455602825647884208337395736200454918783366342657');
                    const q = MyBigInt.fromString('4659775785220018543264560743076778192897');

                    const n = p.mul(q);
                    expect(n.toString()).to.equal('34741437511171958643352682099698961413270828314866873811835587798019030283762536545507329');
                });

                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('7455602825647884208337395736200454918783366342657'),
                    testQ: MyBigInt.fromString('4659775785220018543264560743076778192897'),
                    testN: MyBigInt.fromString('34741437511171958643352682099698961413270828314866873811835587798019030283762536545507329'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('11262063260827444975785094392604245467823982685616016111446723766766056794189524545503233')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('9999999999999999');
                const I = rsa.encrypt('99999999999999999999999999999999999999999');
                const K = rsa.encrypt('101010101010101010101010101010101010101010');

                it('RSACipher-18 should encrypt correct', () => {
                    expect(G.toString()).to.equal('5572839024450404436956937394637146729935921529202595453003644851349752150398162312206976');
                    expect(I.toString()).to.equal('19096069544554511458967918670263739227117517463617260117552750482841346832033936599427186');
                    expect(K.toString()).to.equal('25576925649763793795742515588855856582116763372667343111145445745517738792620300490058036');
                });
            });
                
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyRSA/myrsa.js'), require('chai').expect] : [MyBigInt, MyRSA, chai.expect]);
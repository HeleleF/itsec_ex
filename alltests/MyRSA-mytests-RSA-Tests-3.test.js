
(([MyBigInt, MyRSA, expect]) => {

    describe('[TASK3] MyRSA-mytests-RSA-Tests-3', () => {
    
            describe('RSAWrong-1 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('79'),
                    testQ: MyBigInt.fromString('569'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('8861')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('456');
                const I = rsa.encrypt('23456');
                const K = rsa.encrypt('13457');

                it('RSAWrong-1 should encrypt', () => {
                    expect(G.toString()).to.equal('21837');
                    expect(I.toString()).to.equal('6893');
                    expect(K.toString()).to.equal('26444');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-1 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.equal('456');
                    expect(J.toString()).to.equal('23456');
                    expect(L.toString()).to.equal('13457');
                });
            });
                
            describe('RSAWrong-2 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('158'),
                    testQ: MyBigInt.fromString('569'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('71341')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('456');
                const I = rsa.encrypt('23456');
                const K = rsa.encrypt('13457');

                it('RSAWrong-2 should encrypt', () => {
                    expect(G.toString()).to.equal('66788');
                    expect(I.toString()).to.equal('51844');
                    expect(K.toString()).to.equal('71395');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-2 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('456');
                    expect(J.toString()).to.not.equal('23456');
                    expect(L.toString()).to.not.equal('13457');
                });
            });
                
            describe('RSAWrong-3 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('113418980'),
                    testQ: MyBigInt.fromString('1258001'),
                    testE: MyBigInt.fromString('3'),
                    testD: MyBigInt.fromString('95120717054667')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('0');
                const I = rsa.encrypt('1');
                const K = rsa.encrypt('688777');

                it('RSAWrong-3 should encrypt', () => {
                    expect(G.toString()).to.equal('0');
                    expect(I.toString()).to.equal('1');
                    expect(K.toString()).to.equal('25357736689233');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-3 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.equal('0');
                    expect(J.toString()).to.equal('1');
                    expect(L.toString()).to.not.equal('688777');
                });
            });
                
            describe('RSAWrong-4 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('1167064985'),
                    testQ: MyBigInt.fromString('1258001'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('55669268633473')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('656865846');
                const I = rsa.encrypt('5445');
                const K = rsa.encrypt('234353434636');

                it('RSAWrong-4 should encrypt', () => {
                    expect(G.toString()).to.equal('87835843971541');
                    expect(I.toString()).to.equal('1206085660429490');
                    expect(K.toString()).to.equal('283799343519276');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-4 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('656865846');
                    expect(J.toString()).to.not.equal('5445');
                    expect(L.toString()).to.not.equal('234353434636');
                });
            });
                
            describe('RSAWrong-5 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('2935235411'),
                    testQ: MyBigInt.fromString('295082621'),
                    testE: MyBigInt.fromString('3'),
                    testD: MyBigInt.fromString('577424636733049467')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('5645454');
                const I = rsa.encrypt('45645645645645');
                const K = rsa.encrypt('56456456');

                it('RSAWrong-5 should encrypt', () => {
                    expect(G.toString()).to.equal('636765767430344847');
                    expect(I.toString()).to.equal('429181587998753305');
                    expect(K.toString()).to.equal('286386201156923180');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-5 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('5645454');
                    expect(J.toString()).to.not.equal('45645645645645');
                    expect(L.toString()).to.not.equal('56456456');
                });
            });
                
            describe('RSAWrong-6 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('3290443974202'),
                    testQ: MyBigInt.fromString('295082621'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('811732387717039208873')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('45645645');
                const I = rsa.encrypt('45645645');
                const K = rsa.encrypt('658768768');

                it('RSAWrong-6 should encrypt', () => {
                    expect(G.toString()).to.equal('695094347257585597103');
                    expect(I.toString()).to.equal('695094347257585597103');
                    expect(K.toString()).to.equal('948161952636360343336');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-6 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('45645645');
                    expect(J.toString()).to.not.equal('45645645');
                    expect(L.toString()).to.not.equal('658768768');
                });
            });
                
            describe('RSAWrong-7 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('3096271974762'),
                    testQ: MyBigInt.fromString('313245011'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('247648938347636698493')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('98879787807');
                const I = rsa.encrypt('87087078078078');
                const K = rsa.encrypt('780780780870780780');

                it('RSAWrong-7 should encrypt', () => {
                    expect(G.toString()).to.equal('616565083038679308519');
                    expect(I.toString()).to.equal('955279845982992876606');
                    expect(K.toString()).to.equal('606188958385226348178');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-7 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('98879787807');
                    expect(J.toString()).to.not.equal('87087078078078');
                    expect(L.toString()).to.not.equal('780780780870780780');
                });
            });
                
            describe('RSAWrong-8 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('31477251864170272'),
                    testQ: MyBigInt.fromString('879193391'),
                    testE: MyBigInt.fromString('7'),
                    testD: MyBigInt.fromString('19767565553102628641220493')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('80707807808708708700');
                const I = rsa.encrypt('878078087078078080780');
                const K = rsa.encrypt('34534656457658768679999');

                it('RSAWrong-8 should encrypt', () => {
                    expect(G.toString()).to.equal('24202226343169689812978784');
                    expect(I.toString()).to.equal('6748062315742681527312608');
                    expect(K.toString()).to.equal('4931483509821095015453471');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-8 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('80707807808708708700');
                    expect(J.toString()).to.not.equal('878078087078078080780');
                    expect(L.toString()).to.not.equal('34534656457658768679999');
                });
            });
                
            describe('RSAWrong-9 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('89973887639115772994464409864'),
                    testQ: MyBigInt.fromString('899809241'),
                    testE: MyBigInt.fromString('13'),
                    testD: MyBigInt.fromString('74731694267444453510918349088499569957')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('654564564574');
                const I = rsa.encrypt('45745747645745745');
                const K = rsa.encrypt('5745745745745745745745');

                it('RSAWrong-9 should encrypt', () => {
                    expect(G.toString()).to.equal('59158442503398227910309486783350732120');
                    expect(I.toString()).to.equal('38746920093792359428861468885336556913');
                    expect(K.toString()).to.equal('19169461367408502579164151947421793201');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-9 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('654564564574');
                    expect(J.toString()).to.not.equal('45745747645745745');
                    expect(L.toString()).to.not.equal('5745745745745745745745');
                });
            });
                
            describe('RSAWrong-10 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('96407488591174282672185340521585471690'),
                    testQ: MyBigInt.fromString('978914129'),
                    testE: MyBigInt.fromString('65537'),
                    testD: MyBigInt.fromString('18918995166275589129660726789827571886717650081')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('574745747457457');
                const I = rsa.encrypt('67658768679697769769');
                const K = rsa.encrypt('79697696767656457554557777');

                it('RSAWrong-10 should encrypt', () => {
                    expect(G.toString()).to.equal('1785722684621549599937063624034828011770955017');
                    expect(I.toString()).to.equal('29848239594777250457699581617290325151781780379');
                    expect(K.toString()).to.equal('60435947272458139100752596929264883521776516097');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-10 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('574745747457457');
                    expect(J.toString()).to.not.equal('67658768679697769769');
                    expect(L.toString()).to.not.equal('79697696767656457554557777');
                });
            });
                
            describe('RSAWrong-11 All', () => {
                const opts = {
                    isTest: true,
                    testP: MyBigInt.fromString('984573856262500228157606280526546179028138533931283083353534120'),
                    testQ: MyBigInt.fromString('982451653'),
                    testE: MyBigInt.fromString('5'),
                    testD: MyBigInt.fromString('580377726960662336882290324001328434064289474287388271832199977149948753')
                };

                const rsa = new MyRSA(opts);

                const G = rsa.encrypt('457774575757');
                const I = rsa.encrypt('747459490606095984883');
                const K = rsa.encrypt('394932532574357853298523523952952592');

                it('RSAWrong-11 should encrypt', () => {
                    expect(G.toString()).to.equal('20102882956630884869866316511170020490613835674200336270557');
                    expect(I.toString()).to.equal('966783306793683400945743678981866576413637515250860718534832157643266123');
                    expect(K.toString()).to.equal('612637662207962620422101909053987535415087747872716593040386174169006032');
                });
                       
                const H = rsa.decrypt(G);
                const J = rsa.decrypt(I);
                const L = rsa.decrypt(K);

                it('RSAWrong-11 should decrypt wrong', () => {
                    
                    expect(H.toString()).to.not.equal('457774575757');
                    expect(J.toString()).to.not.equal('747459490606095984883');
                    expect(L.toString()).to.not.equal('394932532574357853298523523952952592');
                });
            });
                
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('../MyRSA/myrsa.js'), require('chai').expect] : [MyBigInt, MyRSA, chai.expect]);
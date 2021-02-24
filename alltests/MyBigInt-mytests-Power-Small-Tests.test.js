
(([MyBigInt, expect]) => {
    

    describe('[TASK2] MyBigInt-mytests-Power-Small-Tests', () => {
    
            it('Power-Small-HexDec-1', () => {
                const a = MyBigInt.fromString('0');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');
                expect(e.toString()).to.equal('0');
                expect(f.toString()).to.equal('0');
                expect(g.toString()).to.equal('0');
                expect(h.toString()).to.equal('0');
                expect(i.toString()).to.equal('0');
            });
            it('Power-Small-HexDec-2', () => {
                const a = MyBigInt.fromString('1');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('1');
                expect(d.toString()).to.equal('1');
                expect(e.toString()).to.equal('1');
                expect(f.toString()).to.equal('1');
                expect(g.toString()).to.equal('1');
                expect(h.toString()).to.equal('1');
                expect(i.toString()).to.equal('1');
            });
            it('Power-Small-HexDec-3', () => {
                const a = MyBigInt.fromString('2');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('2');
                expect(d.toString()).to.equal('4');
                expect(e.toString()).to.equal('8');
                expect(f.toString()).to.equal('16');
                expect(g.toString()).to.equal('32');
                expect(h.toString()).to.equal('64');
                expect(i.toString()).to.equal('128');
            });
            it('Power-Small-HexDec-4', () => {
                const a = MyBigInt.fromString('3');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('3');
                expect(d.toString()).to.equal('9');
                expect(e.toString()).to.equal('27');
                expect(f.toString()).to.equal('81');
                expect(g.toString()).to.equal('243');
                expect(h.toString()).to.equal('729');
                expect(i.toString()).to.equal('2187');
            });
            it('Power-Small-HexDec-5', () => {
                const a = MyBigInt.fromString('-1');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');
                expect(e.toString()).to.equal('-1');
                expect(f.toString()).to.equal('1');
                expect(g.toString()).to.equal('-1');
                expect(h.toString()).to.equal('1');
                expect(i.toString()).to.equal('-1');
            });
            it('Power-Small-HexDec-6', () => {
                const a = MyBigInt.fromString('-10');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('-10');
                expect(d.toString()).to.equal('100');
                expect(e.toString()).to.equal('-1000');
                expect(f.toString()).to.equal('10000');
                expect(g.toString()).to.equal('-100000');
                expect(h.toString()).to.equal('1000000');
                expect(i.toString()).to.equal('-10000000');
            });
            it('Power-Small-HexDec-7', () => {
                const a = MyBigInt.fromString('35');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('35');
                expect(d.toString()).to.equal('1225');
                expect(e.toString()).to.equal('42875');
                expect(f.toString()).to.equal('1500625');
                expect(g.toString()).to.equal('52521875');
                expect(h.toString()).to.equal('1838265625');
                expect(i.toString()).to.equal('64339296875');
            });
            it('Power-Small-HexDec-8', () => {
                const a = MyBigInt.fromString('567');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('567');
                expect(d.toString()).to.equal('321489');
                expect(e.toString()).to.equal('182284263');
                expect(f.toString()).to.equal('103355177121');
                expect(g.toString()).to.equal('58602385427607');
                expect(h.toString()).to.equal('33227552537453169');
                expect(i.toString()).to.equal('18840022288735946823');
            });
            it('Power-Small-HexDec-9', () => {
                const a = MyBigInt.fromString('436546');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('436546');
                expect(d.toString()).to.equal('190572410116');
                expect(e.toString()).to.equal('83193623346499336');
                expect(f.toString()).to.equal('36317843497420899133456');
                expect(g.toString()).to.equal('15854409307425103833113682976');
                expect(h.toString()).to.equal('6921178965519199377930445848440896');
                expect(i.toString()).to.equal('3021412992681544411638024413353479385216');
            });
            it('Power-Small-HexDec-10', () => {
                const a = MyBigInt.fromString('455476875');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('455476875');
                expect(d.toString()).to.equal('207459183659765625');
                expect(e.toString()).to.equal('94492860663401110107421875');
                expect(f.toString()).to.equal('43039312884776364503259429931640625');
                expect(g.toString()).to.equal('19603411734905173577805532459545135498046875');
                expect(h.toString()).to.equal('8928900716352936882551433282384682238101959228515625');
                expect(i.toString()).to.equal('4066907795469697088336768858231567613678686320781707763671875');
            });
            it('Power-Small-HexDec-11', () => {
                const a = MyBigInt.fromString('9456950540545064');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('9456950540545064');
                expect(d.toString()).to.equal('89433913526315578178566214764096');
                expect(e.toString()).to.equal('845772096865750617908511655443395655096017222144');
                expect(f.toString()).to.equal('7998424888632492535741266465341399476856532830153256288930697216');
                expect(g.toString()).to.equal('75640708574062143610921920111195516731678950215098894554896207545297418187341824');
                expect(h.toString()).to.equal('715330439836688646193078210538550847464718956475148462334371413451122439856858075588250243956736');
                expect(i.toString()).to.equal('6764844589681911075286644787663366109497916245508401320745373720470977441311754102195802452354220282809474351104');
            });
            it('Power-Small-HexDec-12', () => {
                const a = MyBigInt.fromString('385773829940956006988584');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('385773829940956006988584');
                expect(d.toString()).to.equal('148821447867313645358471825024172141448306325056');
                expect(e.toString()).to.equal('57411419921131904253372921432461384082978118925133326794763946385160704');
                expect(f.toString()).to.equal('22147823345323553162418180842657251646387201538305516104597693665932023001869490877215933403136');
                expect(g.toString()).to.equal('8544050636781183765855313678337354729251841580305711070084876477170787768601768680365149185095465191682474742221799424');
                expect(h.toString()).to.equal('3296071137360541267200534944671220592264536675763424859286222857912198407910632445921319236738199625443251530978672745757606058704735905775616');
                expect(i.toString()).to.equal('1271537986417418894321557958493747404676974443705234769970746380392097597926967618828123016821912945244435208835128981231123744670275409617089658275642604224977567744');
            });
            it('Power-Small-HexDec-13', () => {
                const a = MyBigInt.fromString('994900493827223943548649567546954645');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('994900493827223943548649567546954645');
                expect(d.toString()).to.equal('989826992617654068200210701253583320402169636127590817594936813687076025');
                expect(e.toString()).to.equal('984779363758819981219921090533613545638920438591882706446243994173038702239643397105938928339976983341886125');
                expect(f.toString()).to.equal('979757475314509401227851372340360546723004802146962027677762902424032369845978901248506957375543093365412803354525237021855460676490114129800625');
                expect(g.toString()).to.equal('974761196021319575785661282798625199275654878271856343083475326407393253112488543483942449591941803053869112836529485323744454714608613334095035610753450749081179922453959767653125');
                expect(h.toString()).to.equal('969790395285226285050659472790515951653732102236020062871400187414286466027078089871156502606067522828590138056651864935870948069273743455115179037086118525733965976164061521166285199744146363397115731007872467515625');
                expect(i.toString()).to.equal('964844943178170341816908217605682494024437561631457520723443538623749909458665317130038482554889933546476192782819668083217163969045635294547567303764834045079560807092221415316444649323696491886979382362060575101347284208807858180370599659657703828125');
            });
            it('Power-Small-HexDec-14', () => {
                const a = MyBigInt.fromString('68458458435872374273443858465468688558902631');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('68458458435872374273443858465468688558902631');
                expect(d.toString()).to.equal('4686560531416065445102400455001588896948644922960325389786679362725489055008406938722161');
                expect(e.toString()).to.equal('320834709347146662803327209186443445754685224580177252504521349671827200281531397296002088777296976412173464280141042365239560905591');
                expect(f.toString()).to.equal('21963849614626833747832824906142034740222054233175319917960822251178473540870537464996898182602058187321396281143852766575761564820528169808894730540601659514388170027552509921');
                expect(g.toString()).to.equal('1503611285934682563511258970008548100421806305881722103606519373170218572350903132994696022526897931598349500535233144813603654487510511064534787466360457763301891564154342460116444734782045515385036445709293933500502151');
                expect(h.toString()).to.equal('102934910721868078202164024277716382298357199539875591962542544698991533345533334849082878022905969100839664252298611054201279908014185488487264808100506231269750665697060829474094821623600647364769257132238802440113921965501219707785351277389582152917580015059281');
                expect(i.toString()).to.equal('7046765307253239445109173484508062664086999106124017689947853174003490231646534522869828273563624870129774045040634463429577282590207716656632773916512507528015416109438121967563530571730672138351442070063968606827599460349282057943115652738812255640371439987341069345208477323611514347041565862979771868311');
            });
            it('Power-Small-HexDec-15', () => {
                const a = MyBigInt.fromString('-6684358645634693459657695678568548624383483');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('-6684358645634693459657695678568548624383483');
                expect(d.toString()).to.equal('44680650503471273453378589487369893416833796968168102765778365905661298840101843211289');
                expect(e.toString()).to.equal('-298661492485460325865054723904831500499572416203589033010908596957205942534422364946045000280016308976742826949682877356530739587');
                expect(f.toString()).to.equal('1996360529413347761932723341524427662442930707463893493996225087185080382387402548385610505852038327898123153547216503768137062560072279350736180598074953249205655897041521');
                expect(g.toString()).to.equal('-13344389764587964862003827801163062958355288810315112863968498841203292520145396964828172436705467333307283770410314918295714847203941027213041129862744126742574895221996566204320067109742342398391812975782277597643');
                expect(h.toString()).to.equal('89198687093642674694998596995135204463171300326402183641593624480734968733459029570673337981172113815739817312248355091091923408027263619176205887390881867088423526967694755839256111327866051244690192916846575210056543278425416332311870954071868453208930569');
                expect(i.toString()).to.equal('-596236015253654160446824927234960415691394861974096845509906832896615538562181781228164361873033578677053482691546400764378085386869702926650339236264148002653851961214179569985362179477442698487153960955606703268868566156556372010971401668406387500646859366250334081756588252494668971558407377391827');
            });
            it('Power-Small-HexDec-16', () => {
                const a = MyBigInt.fromString('6684358645634693459657695678568548624383483');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('6684358645634693459657695678568548624383483');
                expect(d.toString()).to.equal('44680650503471273453378589487369893416833796968168102765778365905661298840101843211289');
                expect(e.toString()).to.equal('298661492485460325865054723904831500499572416203589033010908596957205942534422364946045000280016308976742826949682877356530739587');
                expect(f.toString()).to.equal('1996360529413347761932723341524427662442930707463893493996225087185080382387402548385610505852038327898123153547216503768137062560072279350736180598074953249205655897041521');
                expect(g.toString()).to.equal('13344389764587964862003827801163062958355288810315112863968498841203292520145396964828172436705467333307283770410314918295714847203941027213041129862744126742574895221996566204320067109742342398391812975782277597643');
                expect(h.toString()).to.equal('89198687093642674694998596995135204463171300326402183641593624480734968733459029570673337981172113815739817312248355091091923408027263619176205887390881867088423526967694755839256111327866051244690192916846575210056543278425416332311870954071868453208930569');
                expect(i.toString()).to.equal('596236015253654160446824927234960415691394861974096845509906832896615538562181781228164361873033578677053482691546400764378085386869702926650339236264148002653851961214179569985362179477442698487153960955606703268868566156556372010971401668406387500646859366250334081756588252494668971558407377391827');
            });
            it('Power-Small-HexDec-17', () => {
                const a = MyBigInt.fromString('66843586456346934596757695678568548624383483');
                const b = a.pow(0);
                const c = a.pow(1);
                const d = a.pow(2);
                const e = a.pow(3);
                const f = a.pow(4);
                const g = a.pow(5);
                const h = a.pow(6);
                const i = a.pow(7);

                expect(b.toString()).to.equal('1');
                expect(c.toString()).to.equal('66843586456346934596757695678568548624383483');
                expect(d.toString()).to.equal('4468065050347127345362021420361896157497678784509747628202535404505661298840101843211289');
                expect(e.toString()).to.equal('298661492485460325867477383296419233014334079008701966131146323753703670504261972125522566888187129487726908526949682877356530739587');
                expect(f.toString()).to.equal('19963605294133477619543152405238777240187115479825556405834352635470472436162961249859764937171623207351830777466112357152405908047099806721528931638108874953249205655897041521');
                expect(g.toString()).to.equal('1334438976458796486218423779710386934137602456792214784564582407981515133999960823270493685276557448966229442502145660461594690946531968484098623632026243058033648175301167868280683115984324509987898391812975782277597643');
                expect(h.toString()).to.equal('89198687093642674696445707134486223382088861767950973824551344450697045445464989094393468988167836205839142771569137004602944869278341961216997915985060589027858528433196470489412903500560994760124218601281467564731614855304538444055931443670954071868453208930569');
                expect(i.toString()).to.equal('5962360152536541604581100976013097932559983005263823856214142172586244403053841453456353288237312075681914596066693509939397497219688710137990862139612496748129440718784944088632344021152994816987092004882028913494855777498263752086405879805012181430011221076012990503829278133158321794668971558407377391827');
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
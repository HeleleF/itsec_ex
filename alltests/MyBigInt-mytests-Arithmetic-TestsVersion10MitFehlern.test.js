
(([MyBigInt, expect]) => {
    

    describe('[TASK1] MyBigInt-mytests-Arithmetic-TestsVersion10MitFehlern', () => {
    
                it('Arith-HexDec-1', () => {
                    const a = MyBigInt.fromString('0');
                    const b = MyBigInt.fromString('0');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('0');
                    expect(d.toString()).to.equal('0');
                    expect(e.toString()).to.equal('0');

                    
                    expect(() => a.divmod(b)).to.throw();
                    
                });
                it('Arith-HexDec-2', () => {
                    const a = MyBigInt.fromString('0');
                    const b = MyBigInt.fromString('1');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('1');
                    expect(d.toString()).to.equal('-1');
                    expect(e.toString()).to.equal('0');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-3', () => {
                    const a = MyBigInt.fromString('1');
                    const b = MyBigInt.fromString('0');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('1');
                    expect(d.toString()).to.equal('1');
                    expect(e.toString()).to.equal('0');

                    
                    expect(() => a.divmod(b)).to.throw();
                    
                });
                it('Arith-HexDec-4', () => {
                    const a = MyBigInt.fromString('23');
                    const b = MyBigInt.fromString('23');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('46');
                    expect(d.toString()).to.equal('0');
                    expect(e.toString()).to.equal('529');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('1');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-5', () => {
                    const a = MyBigInt.fromString('23');
                    const b = MyBigInt.fromString('-23');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('0');
                    expect(d.toString()).to.equal('46');
                    expect(e.toString()).to.equal('-529');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('-1');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-6', () => {
                    const a = MyBigInt.fromString('-23');
                    const b = MyBigInt.fromString('23');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('0');
                    expect(d.toString()).to.equal('-46');
                    expect(e.toString()).to.equal('-529');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('-1');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-7', () => {
                    const a = MyBigInt.fromString('-23');
                    const b = MyBigInt.fromString('-23');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-46');
                    expect(d.toString()).to.equal('0');
                    expect(e.toString()).to.equal('529');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('1');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-8', () => {
                    const a = MyBigInt.fromString('17');
                    const b = MyBigInt.fromString('8');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('25');
                    expect(d.toString()).to.equal('9');
                    expect(e.toString()).to.equal('136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('2');
                    expect(g.toString()).to.equal('1');        
                    
                });
                it('Arith-HexDec-9', () => {
                    const a = MyBigInt.fromString('8');
                    const b = MyBigInt.fromString('17');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('25');
                    expect(d.toString()).to.equal('-9');
                    expect(e.toString()).to.equal('136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('8');        
                    
                });
                it('Arith-HexDec-10', () => {
                    const a = MyBigInt.fromString('17');
                    const b = MyBigInt.fromString('-8');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('9');
                    expect(d.toString()).to.equal('25');
                    expect(e.toString()).to.equal('-136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('-2');
                    expect(g.toString()).to.equal('1');        
                    
                });
                it('Arith-HexDec-11', () => {
                    const a = MyBigInt.fromString('-8');
                    const b = MyBigInt.fromString('17');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('9');
                    expect(d.toString()).to.equal('-25');
                    expect(e.toString()).to.equal('-136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('9');        
                    
                });
                it('Arith-HexDec-12', () => {
                    const a = MyBigInt.fromString('-17');
                    const b = MyBigInt.fromString('-8');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-25');
                    expect(d.toString()).to.equal('-9');
                    expect(e.toString()).to.equal('136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('2');
                    expect(g.toString()).to.equal('7');        
                    
                });
                it('Arith-HexDec-13', () => {
                    const a = MyBigInt.fromString('-8');
                    const b = MyBigInt.fromString('-17');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-25');
                    expect(d.toString()).to.equal('9');
                    expect(e.toString()).to.equal('136');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('9');        
                    
                });
                it('Arith-HexDec-14', () => {
                    const a = MyBigInt.fromString('3561599');
                    const b = MyBigInt.fromString('3430399');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('6991998');
                    expect(d.toString()).to.equal('131200');
                    expect(e.toString()).to.equal('12217705648001');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('1');
                    expect(g.toString()).to.equal('131200');        
                    
                });
                it('Arith-HexDec-15', () => {
                    const a = MyBigInt.fromString('3561599');
                    const b = MyBigInt.fromString('-3430399');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('131200');
                    expect(d.toString()).to.equal('6991998');
                    expect(e.toString()).to.equal('-12217705648001');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('-1');
                    expect(g.toString()).to.equal('131200');        
                    
                });
                it('Arith-HexDec-16', () => {
                    const a = MyBigInt.fromString('-3561599');
                    const b = MyBigInt.fromString('3430399');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-131200');
                    expect(d.toString()).to.equal('-6991998');
                    expect(e.toString()).to.equal('-12217705648001');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('-1');
                    expect(g.toString()).to.equal('3299199');        
                    
                });
                it('Arith-HexDec-17', () => {
                    const a = MyBigInt.fromString('-3561599');
                    const b = MyBigInt.fromString('-3430399');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-6991998');
                    expect(d.toString()).to.equal('-131200');
                    expect(e.toString()).to.equal('12217705648001');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('1');
                    expect(g.toString()).to.equal('3299199');        
                    
                });
                it('Arith-HexDec-18', () => {
                    const a = MyBigInt.fromString('609258644980293364');
                    const b = MyBigInt.fromString('11907858797062763600287');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('11908468055707743893651');
                    expect(d.toString()).to.equal('-11907249538417783306923');
                    expect(e.toString()).to.equal('7254965915315125492213065479690094595468');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('609258644980293364');        
                    
                });
                it('Arith-HexDec-19', () => {
                    const a = MyBigInt.fromString('609258644980293364');
                    const b = MyBigInt.fromString('-11907858797062763600287');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-11907249538417783306923');
                    expect(d.toString()).to.equal('11908468055707743893651');
                    expect(e.toString()).to.equal('-7254965915315125492213065479690094595468');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('609258644980293364');        
                    
                });
                it('Arith-HexDec-20', () => {
                    const a = MyBigInt.fromString('-609258644980293364');
                    const b = MyBigInt.fromString('11907858797062763600287');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('11907249538417783306923');
                    expect(d.toString()).to.equal('-11908468055707743893651');
                    expect(e.toString()).to.equal('-7254965915315125492213065479690094595468');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('11907249538417783306923');        
                    
                });
                it('Arith-HexDec-21', () => {
                    const a = MyBigInt.fromString('-609258644980293364');
                    const b = MyBigInt.fromString('-11907858797062763600287');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('-11908468055707743893651');
                    expect(d.toString()).to.equal('11907249538417783306923');
                    expect(e.toString()).to.equal('7254965915315125492213065479690094595468');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('11907249538417783306923');        
                    
                });
                it('Arith-HexDec-22', () => {
                    const a = MyBigInt.fromString('275037643193238187969754635193967098168234');
                    const b = MyBigInt.fromString('2789096463851958435408110961618870154822');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('277826739657090146405162746155585968323056');
                    expect(d.toString()).to.equal('272248546729386229534346524232348228013412');
                    expect(e.toString()).to.equal('767106518056437295756217290247277073192355873708821128125451865456623048182324348');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('98');
                    expect(g.toString()).to.equal('1706189735746261299759760955317822995678');        
                    
                });
                it('Arith-HexDec-23', () => {
                    const a = MyBigInt.fromString('78047574151725182769714241091983435073053370965');
                    const b = MyBigInt.fromString('6081438698999606240186790021334933066970638428563610408662925699467423912567624');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('6081438698999606240186790021335011114544790153746380122904017682902496965938589');
                    expect(d.toString()).to.equal('-6081438698999606240186790021334855019396486703380840694421833716032350859196659');
                    expect(e.toString()).to.equal('474641537809342892110368715681177195496687683521433410575809741060619909390481279229924886065386351177919547326154361720637160');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('78047574151725182769714241091983435073053370965');        
                    
                });
                it('Arith-HexDec-24', () => {
                    const a = MyBigInt.fromString('6081438698999606240186790021334933066970638428563610408662925699467423912567624');
                    const b = MyBigInt.fromString('78047574151725182769714241091983435073053370965');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('6081438698999606240186790021335011114544790153746380122904017682902496965938589');
                    expect(d.toString()).to.equal('6081438698999606240186790021334855019396486703380840694421833716032350859196659');
                    expect(e.toString()).to.equal('474641537809342892110368715681177195496687683521433410575809741060619909390481279229924886065386351177919547326154361720637160');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('77919637670957395462552984727876');
                    expect(g.toString()).to.equal('39977248264123496066904338260006113918908047284');        
                    
                });
                it('Arith-HexDec-25', () => {
                    const a = MyBigInt.fromString('6081438698999606240186790021334933066970638428563610408662925699467423912567624');
                    const b = MyBigInt.fromString('6081438698999606240186790021334933066970638428563610408662925699467423912567624');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('12162877397999212480373580042669866133941276857127220817325851398934847825135248');
                    expect(d.toString()).to.equal('0');
                    expect(e.toString()).to.equal('36983896649690023348667667803713385687257287297987978677966840052396606459001173436543054704197671276453100157059374837266907029616083163978377805572373005376');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('1');
                    expect(g.toString()).to.equal('0');        
                    
                });
                it('Arith-HexDec-26', () => {
                    const a = MyBigInt.fromString('14912223718264696338397856927216645003797842400010184754757240303931468158450472964700379410986934684302727999568876470644700283834353922266629081467130884678');
                    const b = MyBigInt.fromString('6291236858798355625002240310849051763302244841609637222019848440367474974319646025221986149943002309351421662310425123115121755038535');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('14912223718264696338397863218453503802153467402250495603809003606176309768087694984548819778461909003948753221555026413647009635256016232691752196588885923213');
                    expect(d.toString()).to.equal('14912223718264696338397850635979786205442217397769873905705477001686626548813250944851939043511960364656702777582726527642390932412691611841505966345375846143');
                    expect(e.toString()).to.equal('93816331502993923091074681745972328389387234745632754071327312547773537319847305813663606090731352833926730120370563093374774457937232800827021163412895528374627877544826676795156373404654734474790459480180794112942934255829804307230786697468216690732505036908966356345599307169858531066730');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('2370316688587206372357436');
                    expect(g.toString()).to.equal('3457040023094282580770763389266812621577913653369650314671261615439556426083210990542516878204137624015102993230274321564288157088418');        
                    
                });
                it('Arith-HexDec-27', () => {
                    const a = MyBigInt.fromString('1161773002875530970475777318025858646972144071496504896369373542143925303581117880759012959257904240775262220379722624450259881493669369582103579798349025470539165815324808002121323272794820292319');
                    const b = MyBigInt.fromString('225461820030056738863111393842522918646434913785508706785223950926908750687391732247955346997611273062097910735906920001391888212823475570974758772091099074195005291818882084891523756343366089648730273588212737213447787531009284731961359');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('225461820030056738863111393842522918646436075558511582316194426704226776546038704392026843502507642435640054661210501119272647225782733475215534034311478796819455551700375754261105859923164438674200812754028062021449908854282079552253678');
                    expect(d.toString()).to.equal('-225461820030056738863111393842522918646433752012505831254253475149590724828744760103883850492714903688555766810603338883511129199864217666733983509870719351570555031937388415521941652763567740623259734422397412405445666207736489911669040');
                    expect(e.toString()).to.equal('261935455690101553835477616867817994532638410954790388135216273370964797534529434698867203365573514463519154693261215921734833778385249158204506983012447297807770027390554349437402400522684075354375364637327097895729354331681217995385212672256647156206152245528450577573707698166970321064030601231932418788031240573661839756846437852390064206259528820740283846599580492480243484529507512536112300154607427296516019207278922592501521');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('0');
                    expect(g.toString()).to.equal('1161773002875530970475777318025858646972144071496504896369373542143925303581117880759012959257904240775262220379722624450259881493669369582103579798349025470539165815324808002121323272794820292319');        
                    
                });
                it('Arith-HexDec-28', () => {
                    const a = MyBigInt.fromString('225461820030056738863111393842522918646434913785508706785223950926908750687391732247955346997611273062097910735906920001391888212823475570974758772091099074195005291818882084891523756343366089648730273588212737213447787531009284731961359');
                    const b = MyBigInt.fromString('1161773002875530970475777318025858646972144071496504896369373542143925303581117880759012959257904240775262220379722624450259881493669369582103579798349025470539165815324808002121323272794820292319');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('225461820030056738863111393842522918646436075558511582316194426704226776546038704392026843502507642435640054661210501119272647225782733475215534034311478796819455551700375754261105859923164438674200812754028062021449908854282079552253678');
                    expect(d.toString()).to.equal('225461820030056738863111393842522918646433752012505831254253475149590724828744760103883850492714903688555766810603338883511129199864217666733983509870719351570555031937388415521941652763567740623259734422397412405445666207736489911669040');
                    expect(e.toString()).to.equal('261935455690101553835477616867817994532638410954790388135216273370964797534529434698867203365573514463519154693261215921734833778385249158204506983012447297807770027390554349437402400522684075354375364637327097895729354331681217995385212672256647156206152245528450577573707698166970321064030601231932418788031240573661839756846437852390064206259528820740283846599580492480243484529507512536112300154607427296516019207278922592501521');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('194067016079742792936305387276325348880296');
                    expect(g.toString()).to.equal('1102680351272009554808480953608453103478478116802698355509615815316554232340349333573982690576835944405693766894294443883646164558817943912383717707740464918387563652160559333323457310758672714935');        
                    
                });
                it('Arith-HexDec-29', () => {
                    const a = MyBigInt.fromString('22546182003005673443423565768311139384252291864643491378599999922395099269087506873917322479553469976112730620979107359069200013918882128234755709747587720910990741950052918185882084984915237568343366089664873027358821273721568678697344778759931009284731961359');
                    const b = MyBigInt.fromString('1161774563002875530970475777345657575864697214407149699504896369373542143925303581117880759012959257904240775262220379722624450259881493669369582103579798349025470539165815324808002121323272794820292319');
                    const c = a.add(b);
                    const d = a.sub(b);
                    const e = a.mul(b);

                    expect(c.toString()).to.equal('22546182003005673443423565768311139384252291864643491378601161696958102144618477349694668137129334673327137770678612255438573556062807431815873590506600680168894982725315138565604709435175119062012735671768452825707846744260734494022152780881254282079552253678');
                    expect(d.toString()).to.equal('22546182003005673443423565768311139384252291864643491378598838147832096393556536398139976821977605278898323471279602462699826471774956824653637828988574761653086501174790697806159460534655356074673996507561293229009795803182402863372536776638607736489911669040');
                    expect(e.toString()).to.equal('26193580743925213195869744754081806858823502289751907433236411972962088355747472373054378222881078023146945962644464625964935500398075146906559291427373408845598552432070924128770474702463017477072627550957610578677467560227338587756268645817411615005489265753292414067366764098458795903901493542315178216258367444424579550901318656139992707433631762571427474493791746781209293373212432012964354802502814909512733198814005020077783340803037014807278922592501521');

                    
                    const { q: f, r: g } = a.divmod(b);

                    expect(f.toString()).to.equal('19406675547044034348386801182708283287829285622734957429310');
                    expect(g.toString()).to.equal('339159901723339440397654459212486483674877298746391235722350229989862273575648073106841814330308147573290402256476916716137756159826707005337435550525983434511897723872751562168423019212465089753491469');        
                    
                });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
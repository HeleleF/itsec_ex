(([MyBigInt, expect]) => {

    describe('[TASK1] Square', () => {

        it('should square +1', () => {
            const a = MyBigInt.fromString('1');
            const b = a.square();

            expect(b.toString()).to.equal('1');
        });

        it('should square -1', () => {
            const a = MyBigInt.fromString('-1');
            const b = a.square();

            expect(b.toString()).to.equal('1');
        });

        it('should square 0', () => {
            const a = MyBigInt.fromString('0');
            const b = a.square();

            expect(b.toString()).to.equal('0');
        });

        it('should square +7', () => {
            const a = MyBigInt.fromString('7');
            const b = a.square();

            expect(b.toString()).to.equal('49');
        });

        it('should square -11', () => {
            const a = MyBigInt.fromString('-11');
            const b = a.square();

            expect(b.toString()).to.equal('121');
        });

        it('should square 255', () => {
            const a = MyBigInt.fromString('255');
            const b = a.square();

            expect(b.toString()).to.equal('65025');
        });

        it('should square 256', () => {
            const a = MyBigInt.fromString('256');
            const b = a.square();

            expect(b.toString()).to.equal('65536');
        });

        it('should square -256', () => {
            const a = MyBigInt.fromString('-256');
            const b = a.square();

            expect(b.toString()).to.equal('65536');
        });

        it('should square 257', () => {
            const a = MyBigInt.fromString('257');
            const b = a.square();

            expect(b.toString()).to.equal('66049');
        });

        it('should square 65535', () => {
            const a = MyBigInt.fromString('65535');
            const b = a.square();

            expect(b.toString()).to.equal('4294836225');
        });

        it('should square 65536', () => {
            const a = MyBigInt.fromString('65536');
            const b = a.square();

            expect(b.toString()).to.equal('4294967296');
        });

        it('should square 65537', () => {
            const a = MyBigInt.fromString('65537');
            const b = a.square();

            expect(b.toString()).to.equal('4295098369');
        });

        it('should square 1111111111111111111111111111111111111111111111111111111111111111', () => {
            const a = MyBigInt.fromString('1111111111111111111111111111111111111111111111111111111111111111');
            const b = a.square();

            expect(b.toString()).to.equal('1234567901234567901234567901234567901234567901234567901234567900987654320987654320987654320987654320987654320987654320987654321');
        });

    });

    describe('[TASK1] Power small', () => {

        it('should pow 0 and 0', () => {
            const a = MyBigInt.fromString('0');
            const b = MyBigInt.fromString('0');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1');
        });

        it('should pow 1 and 1', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('1');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1');
        });

        it('should pow 1 and 0', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('0');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1');
        });

        it('should pow 0 and 173', () => {
            const a = MyBigInt.fromString('0');
            const b = MyBigInt.fromString('173');
            const c = a.pow(b);

            expect(c.toString()).to.equal('0');
        });

        it('should pow 1 and 999', () => {
            const a = MyBigInt.fromString('1');
            const b = MyBigInt.fromString('999');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1');
        });

        it('should pow 2 and 7', () => {
            const a = MyBigInt.fromString('2');
            const b = MyBigInt.fromString('7');
            const c = a.pow(b);

            expect(c.toString()).to.equal('128');
        });

        it('should pow 2 and 8', () => {
            const a = MyBigInt.fromString('2');
            const b = MyBigInt.fromString('8');
            const c = a.pow(b);

            expect(c.toString()).to.equal('256');
        });

        it('should pow 2 and 9', () => {
            const a = MyBigInt.fromString('2');
            const b = MyBigInt.fromString('9');
            const c = a.pow(b);

            expect(c.toString()).to.equal('512');
        });

        it('should pow 17 and 3', () => {
            const a = MyBigInt.fromString('17');
            const b = MyBigInt.fromString('3');
            const c = a.pow(b);

            expect(c.toString()).to.equal('4913');
        });

        it('should pow 17 and 4', () => {
            const a = MyBigInt.fromString('17');
            const b = MyBigInt.fromString('4');
            const c = a.pow(b);

            expect(c.toString()).to.equal('83521');
        });

        it('should pow 17 and 5', () => {
            const a = MyBigInt.fromString('17');
            const b = MyBigInt.fromString('5');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1419857');
        });

    });

    describe('[TASK1] Power big', () => {

        it('should pow 2 and 100', () => {
            const a = MyBigInt.fromString('2');
            const b = MyBigInt.fromString('100');
            const c = a.pow(b);

            expect(c.toString()).to.equal('1267650600228229401496703205376');
        });

        it('should pow 2 and 1000', () => {
            const a = MyBigInt.fromString('2');
            const b = MyBigInt.fromString('1000');
            const c = a.pow(b);

            expect(c.toString()).to.equal('10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376');
        });

        it('should pow 255 and 89', () => {
            const a = MyBigInt.fromString('255');
            const b = MyBigInt.fromString('89');
            const c = a.pow(b);

            expect(c.toString()).to.equal('15208138487447439436766104110553584073321974346976523255495677289018231803273374137128834122229227073315385035051619584555709574668180132800013617692002291868108764790745181770537097776241353130899369716644287109375');
        });

        it('should pow 255 and 189', () => {
            const a = MyBigInt.fromString('255');
            const b = MyBigInt.fromString('189');
            const c = a.pow(b);

            expect(c.toString()).to.equal('68563677269671209216284929814346613762952973109899649562769140425175672830476608661995715402157956166705403157206376578091582461756798027400329408423683931146693835278450202340092990643611237156217671309228321068138666323518416924088922877915242151698708301569360816908090423554127090186567350133958848235359716117914811641779651685879200591838194821722940082986685077353709601382462976074225528970652934534490432171016660589657476521097123622894287109375');
        });

        it('should pow 145 and 231', () => {
            const a = MyBigInt.fromString('145');
            const b = MyBigInt.fromString('231');
            const c = a.pow(b);

            expect(c.toString16()).to.equal('5E49AFC6E4E2E5E4DB56DCC94BF236CF1927B2D2503E6C740FCE8FCF5703AD5AAA427013EDD7B8483D5D02F897F510453F1A74C60C60672D8B7BB5E62F7FFDC96481EC7C9F1625678FAC2428F4D87462CB194A1B364B646BC7C50BF290914678552297651259F0238F0F6EFAFA2BC7EC13C336496FF967101ABA293A52697DFD1ED67DB7DE50236126B6DD479C7A2A6B472FC7F602FEC350289F7806B34EF7FB2F720CDC9F66C31CFF7E679BE0D31D3D00FD0F7BD1A54E06120A5E4693894F0FAC61404A6CAA297E58061751B3286F1');
        });

    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
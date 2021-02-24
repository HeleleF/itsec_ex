/**
 * Own Tests for @see MySHA256
 * hash values taken from https://de.wikipedia.org/wiki/SHA-2 
 * and https://www.di-mgt.com.au/sha_testvectors.html
 * 
 * @author Chris Rebbelin [s0548921@htw-berlin.de]
 */
(([MySHA256, expect]) => {

    describe('[TASK5] Wrong parameters', () => {

        const sha = new MySHA256();

        it('should throw for wrong input hash update: number', () => {

            expect(() => {
                sha.hashUpdate(56)
            }).to.throw();
        });

        it('should throw for wrong input hash update: array', () => {

            expect(() => {
                sha.hashUpdate([8,9,10])
            }).to.throw();
        });

        it('should throw for wrong input hash update: not 512bit', () => {

            const a = new Uint8Array(63);
            const b = new Uint8Array(65);

            expect(() => {
                sha.hashUpdate(a)
            }).to.throw();

            expect(() => {
                sha.hashUpdate(b)
            }).to.throw();
        });

        it('should throw for wrong input hash final: number', () => {

            expect(() => {
                sha.hashFinal(56)
            }).to.throw();
        });

        it('should throw for wrong input hash final: array', () => {

            expect(() => {
                sha.hashFinal([8,9,10])
            }).to.throw();
        });

        it('should throw for wrong input hash final: not 0-512bit', () => {

            const a = new Uint8Array(65);

            expect(() => {
                sha.hashFinal(a)
            }).to.throw();
        });

        it('should throw for wrong input hash: number', () => {

            expect(() => {
                MySHA256.sha256(5)
            }).to.throw();
        });

        it('should throw for wrong input hash: array', () => {

            expect(() => {
                MySHA256.sha256([1,2,3,4])
            }).to.throw();
        });
    });

    describe('[TASK5] Correct Hash values', () => {

        it('should hash ""', () => {
            const h = MySHA256.sha256('');
            expect(h).to.equal('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
        });

        it('should hash "qwertzuiopü"', () => {
            const h = MySHA256.sha256('qwertzuiopü');
            expect(h).to.equal('63837c298828c7d3e2d5a3fb1082972e071934dae825aec64b2f942c8231a49e');
        });

        it('should hash "fhjsdhfoshöofhuiwhfuihuifhushdfujhwuifhuwhfuhwzfhwuz8hr87z48rt78gfzwzuifgzgfzgfzghzfghzshfghhjsgfhjghfhgzhfguzhgfzgfhjgsfhjghjfghjfghjgfhjgfhjghjfghjgfhhjgzufg2uzr6723t764623746724t6723t4786rzgzfggzufg7683tr67trzgzufgzufgzugfzugszufgzugfzudgfzugdzuf"', () => {
            const h = MySHA256.sha256('fhjsdhfoshöofhuiwhfuihuifhushdfujhwuifhuwhfuhwzfhwuz8hr87z48rt78gfzwzuifgzgfzgfzghzfghzshfghhjsgfhjghfhgzhfguzhgfzgfhjgsfhjghjfghjfghjgfhjgfhjghjfghjgfhhjgzufg2uzr6723t764623746724t6723t4786rzgzfggzufg7683tr67trzgzufgzufgzugfzugszufgzugfzudgfzugdzuf');
            expect(h).to.equal('a2a1928590ecd7f042abd343e2ce28ddeb1d5f7f9a911736330447bc4fb6ae6d');
        });

        it('should hash "11111111111111111111111111111111111111111111111111111111"', () => {
            const h = MySHA256.sha256('11111111111111111111111111111111111111111111111111111111');
            expect(h).to.equal('9df2565d5163d54a49e6a8126bbd689614aeab8bc4aabfe69a8cb20975918ef2');
        });

        it('should hash "99999999999999999999999999999999999999999999999999999999"', () => {
            const h = MySHA256.sha256('99999999999999999999999999999999999999999999999999999999');
            expect(h).to.equal('133a280d31b5f2bb60d1893eb5e417b1ba6b5b5b0cd611bb3a830c6de7eb49a7');
        });

        it('should hash the string containing "." 55 times', () => {
            const points = '.'.repeat(55);
            const h = MySHA256.sha256(points);
            expect(h).to.equal('1c5abadef0e2ea467f081bf269ec2f0c2116c7dd47bffa07613e53a5e2e30035');
        });

        it('should hash the string containing " " 57 times', () => {
            const spaces = ' '.repeat(57);
            const h = MySHA256.sha256(spaces);
            expect(h).to.equal('615533f7ee17d3208d63783b36a767057514ed2243341d3d62c8a2140e73a637');
        });

        it('should hash "abc"', () => {
            const h = MySHA256.sha256('abc');
            expect(h).to.equal('ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
        });

        it('should hash "abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq"', () => {
            const h = MySHA256.sha256('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq');
            expect(h).to.equal('248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1');
        });

        it('should hash "abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu"', () => {
            const h = MySHA256.sha256('abcdefghbcdefghicdefghijdefghijkefghijklfghijklmghijklmnhijklmnoijklmnopjklmnopqklmnopqrlmnopqrsmnopqrstnopqrstu');
            expect(h).to.equal('cf5b16a778af8380036ce59e7b0492370b249b11e8f07a51afac45037afee9d1');
        });

        it('should hash "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern"', () => {
            const h = MySHA256.sha256('Franz jagt im komplett verwahrlosten Taxi quer durch Bayern');
            expect(h).to.equal('d32b568cd1b96d459e7291ebf4b25d007f275c9f13149beeb782fac0716613f8');
        });

        it('should hash "Frank jagt im komplett verwahrlosten Taxi quer durch Bayern"', () => {
            const h = MySHA256.sha256('Frank jagt im komplett verwahrlosten Taxi quer durch Bayern');
            expect(h).to.equal('78206a866dbb2bf017d8e34274aed01a8ce405b69d45db30bafa00f5eeed7d5e');
        });

        it('should hash the string containing "a" 1 million times', () => {
            const huge = 'a'.repeat(1000000);
            const h = MySHA256.sha256(huge);
            expect(h).to.equal('cdc76e5c9914fb9281a1c7e284d73e67f1809a48a497200e046d39ccc7112cd0');
        });
    });

})('function' === typeof require ? [require('../MySHA256/mysha256.js'), require('chai').expect] : [MySHA256, chai.expect]);
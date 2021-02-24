
(([MyAES128, expect]) => {

    const aes = new MyAES128({debug: true});

    describe('[TASK6] MyAES128-mytests-AES128-Key-Tests', () => {
    
        describe('AES128-1 all', () => {

            const k = MyAES128.h2b('000102030405060708090a0b0c0d0e0f');
            const p = MyAES128.h2b('00112233445566778899aabbccddeeff');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('AES128-1 should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('00112233445566778899aabbccddeeff');
            });

            
            const debug = aes.getDebug(true);
            const keys = ['000102030405060708090a0b0c0d0e0f','d6aa74fdd2af72fadaa678f1d6ab76fe','b692cf0b643dbdf1be9bc5006830b3fe','b6ff744ed2c2c9bf6c590cbf0469bf41','47f7f7bc95353e03f96c32bcfd058dfd','3caaa3e8a99f9deb50f3af57adf622aa','5e390f7df7a69296a7553dc10aa31f6b','14f9701ae35fe28c440adf4d4ea9c026','47438735a41c65b9e016baf4aebf7ad2','549932d1f08557681093ed9cbe2c974e','13111d7fe3944a17f307a78b4d2b30c5','13111d7fe3944a17f307a78b4d2b30c5','549932d1f08557681093ed9cbe2c974e','47438735a41c65b9e016baf4aebf7ad2','14f9701ae35fe28c440adf4d4ea9c026','5e390f7df7a69296a7553dc10aa31f6b','3caaa3e8a99f9deb50f3af57adf622aa','47f7f7bc95353e03f96c32bcfd058dfd','b6ff744ed2c2c9bf6c590cbf0469bf41','b692cf0b643dbdf1be9bc5006830b3fe','d6aa74fdd2af72fadaa678f1d6ab76fe','000102030405060708090a0b0c0d0e0f'];
        
            it('AES128-1 keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            
        });
        describe('AES128-2 all', () => {

            const k = MyAES128.h2b('2b7e151628aed2a6abf7158809cf4f3c');
            const p = MyAES128.h2b('6bc1bee22e409f96e93d7e117393172a');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('AES128-2 should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('6bc1bee22e409f96e93d7e117393172a');
            });

            
            const debug = aes.getDebug(true);
            const keys = ['2b7e151628aed2a6abf7158809cf4f3c','a0fafe1788542cb123a339392a6c7605','f2c295f27a96b9435935807a7359f67f','3d80477d4716fe3e1e237e446d7a883b','ef44a541a8525b7fb671253bdb0bad00','d4d1c6f87c839d87caf2b8bc11f915bc','6d88a37a110b3efddbf98641ca0093fd','4e54f70e5f5fc9f384a64fb24ea6dc4f','ead27321b58dbad2312bf5607f8d292f','ac7766f319fadc2128d12941575c006e','d014f9a8c9ee2589e13f0cc8b6630ca6','d014f9a8c9ee2589e13f0cc8b6630ca6','ac7766f319fadc2128d12941575c006e','ead27321b58dbad2312bf5607f8d292f','4e54f70e5f5fc9f384a64fb24ea6dc4f','6d88a37a110b3efddbf98641ca0093fd','d4d1c6f87c839d87caf2b8bc11f915bc','ef44a541a8525b7fb671253bdb0bad00','3d80477d4716fe3e1e237e446d7a883b','f2c295f27a96b9435935807a7359f67f','a0fafe1788542cb123a339392a6c7605','2b7e151628aed2a6abf7158809cf4f3c'];
        
            it('AES128-2 keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            
        });
        describe('AES128-3 all', () => {

            const k = MyAES128.h2b('2b7e151628aed2a6abf7158809cf4f3c');
            const p = MyAES128.h2b('ae2d8a571e03ac9c9eb76fac45af8e51');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('AES128-3 should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('ae2d8a571e03ac9c9eb76fac45af8e51');
            });

            
            const debug = aes.getDebug(true);
            const keys = ['2b7e151628aed2a6abf7158809cf4f3c','a0fafe1788542cb123a339392a6c7605','f2c295f27a96b9435935807a7359f67f','3d80477d4716fe3e1e237e446d7a883b','ef44a541a8525b7fb671253bdb0bad00','d4d1c6f87c839d87caf2b8bc11f915bc','6d88a37a110b3efddbf98641ca0093fd','4e54f70e5f5fc9f384a64fb24ea6dc4f','ead27321b58dbad2312bf5607f8d292f','ac7766f319fadc2128d12941575c006e','d014f9a8c9ee2589e13f0cc8b6630ca6','d014f9a8c9ee2589e13f0cc8b6630ca6','ac7766f319fadc2128d12941575c006e','ead27321b58dbad2312bf5607f8d292f','4e54f70e5f5fc9f384a64fb24ea6dc4f','6d88a37a110b3efddbf98641ca0093fd','d4d1c6f87c839d87caf2b8bc11f915bc','ef44a541a8525b7fb671253bdb0bad00','3d80477d4716fe3e1e237e446d7a883b','f2c295f27a96b9435935807a7359f67f','a0fafe1788542cb123a339392a6c7605','2b7e151628aed2a6abf7158809cf4f3c'];
        
            it('AES128-3 keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            
        });
        describe('AES128-4 all', () => {

            const k = MyAES128.h2b('2b7e151628aed2a6abf7158809cf4f3c');
            const p = MyAES128.h2b('30c81c46a35ce411e5fbc1191a0a52ef');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('AES128-4 should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('30c81c46a35ce411e5fbc1191a0a52ef');
            });

            
            const debug = aes.getDebug(true);
            const keys = ['2b7e151628aed2a6abf7158809cf4f3c','a0fafe1788542cb123a339392a6c7605','f2c295f27a96b9435935807a7359f67f','3d80477d4716fe3e1e237e446d7a883b','ef44a541a8525b7fb671253bdb0bad00','d4d1c6f87c839d87caf2b8bc11f915bc','6d88a37a110b3efddbf98641ca0093fd','4e54f70e5f5fc9f384a64fb24ea6dc4f','ead27321b58dbad2312bf5607f8d292f','ac7766f319fadc2128d12941575c006e','d014f9a8c9ee2589e13f0cc8b6630ca6','d014f9a8c9ee2589e13f0cc8b6630ca6','ac7766f319fadc2128d12941575c006e','ead27321b58dbad2312bf5607f8d292f','4e54f70e5f5fc9f384a64fb24ea6dc4f','6d88a37a110b3efddbf98641ca0093fd','d4d1c6f87c839d87caf2b8bc11f915bc','ef44a541a8525b7fb671253bdb0bad00','3d80477d4716fe3e1e237e446d7a883b','f2c295f27a96b9435935807a7359f67f','a0fafe1788542cb123a339392a6c7605','2b7e151628aed2a6abf7158809cf4f3c'];
        
            it('AES128-4 keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            
        });
        describe('AES128-5 all', () => {

            const k = MyAES128.h2b('2b7e151628aed2a6abf7158809cf4f3c');
            const p = MyAES128.h2b('f69f2445df4f9b17ad2b417be66c3710');
            
            const enc = aes.encrypt(p, k);
            const dec = aes.decrypt(enc, k);

            it('AES128-5 should match input', () => {
                expect(MyAES128.b2h(dec)).to.equal('f69f2445df4f9b17ad2b417be66c3710');
            });

            
            const debug = aes.getDebug(true);
            const keys = ['2b7e151628aed2a6abf7158809cf4f3c','a0fafe1788542cb123a339392a6c7605','f2c295f27a96b9435935807a7359f67f','3d80477d4716fe3e1e237e446d7a883b','ef44a541a8525b7fb671253bdb0bad00','d4d1c6f87c839d87caf2b8bc11f915bc','6d88a37a110b3efddbf98641ca0093fd','4e54f70e5f5fc9f384a64fb24ea6dc4f','ead27321b58dbad2312bf5607f8d292f','ac7766f319fadc2128d12941575c006e','d014f9a8c9ee2589e13f0cc8b6630ca6','d014f9a8c9ee2589e13f0cc8b6630ca6','ac7766f319fadc2128d12941575c006e','ead27321b58dbad2312bf5607f8d292f','4e54f70e5f5fc9f384a64fb24ea6dc4f','6d88a37a110b3efddbf98641ca0093fd','d4d1c6f87c839d87caf2b8bc11f915bc','ef44a541a8525b7fb671253bdb0bad00','3d80477d4716fe3e1e237e446d7a883b','f2c295f27a96b9435935807a7359f67f','a0fafe1788542cb123a339392a6c7605','2b7e151628aed2a6abf7158809cf4f3c'];
        
            it('AES128-5 keys should match', () => {
                expect(debug).to.deep.equal(keys);
            });      
            
        });
    });

})('function' === typeof require ? [require('../MyAES128/myaes128.js'), require('chai').expect] : [MyAES128, chai.expect]);

(([MyBigInt, expect]) => {
    

    describe('[TASK1] MyBigInt-mytests-Compare-Tests', () => {
    
            it('Compare-HexDec-1', () => {
                const a = MyBigInt.fromString('0');
                const b = MyBigInt.fromString('0');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-2', () => {
                const a = MyBigInt.fromString('0');
                const b = MyBigInt.fromString('-1');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('1');
                expect(d.toString()).to.equal('-1');  
            });
            it('Compare-HexDec-3', () => {
                const a = MyBigInt.fromString('0');
                const b = MyBigInt.fromString('1');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-4', () => {
                const a = MyBigInt.fromString('-1');
                const b = MyBigInt.fromString('-1');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-5', () => {
                const a = MyBigInt.fromString('1');
                const b = MyBigInt.fromString('1');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-6', () => {
                const a = MyBigInt.fromString('23123534');
                const b = MyBigInt.fromString('45356345645');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-7', () => {
                const a = MyBigInt.fromString('-234123541234');
                const b = MyBigInt.fromString('-234123541234');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-8', () => {
                const a = MyBigInt.fromString('4564676575');
                const b = MyBigInt.fromString('4535456456456345645');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-9', () => {
                const a = MyBigInt.fromString('4535456456456345645');
                const b = MyBigInt.fromString('4535456456456345645');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-10', () => {
                const a = MyBigInt.fromString('-4535456456456345645');
                const b = MyBigInt.fromString('-4535456456456345645');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('0');
                expect(d.toString()).to.equal('0');  
            });
            it('Compare-HexDec-11', () => {
                const a = MyBigInt.fromString('234534523452346523462');
                const b = MyBigInt.fromString('34523462346243624562362436');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-12', () => {
                const a = MyBigInt.fromString('235423543654654675756767656657');
                const b = MyBigInt.fromString('34125456587980980980980980980878654323');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-13', () => {
                const a = MyBigInt.fromString('-1232134234234523452436254635476546587');
                const b = MyBigInt.fromString('-2435234565465746587678567856786578678567865');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('1');
                expect(d.toString()).to.equal('-1');  
            });
            it('Compare-HexDec-14', () => {
                const a = MyBigInt.fromString('15');
                const b = MyBigInt.fromString('255');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-15', () => {
                const a = MyBigInt.fromString('65535');
                const b = MyBigInt.fromString('268435455');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-16', () => {
                const a = MyBigInt.fromString('68719476735');
                const b = MyBigInt.fromString('281474976710655');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-17', () => {
                const a = MyBigInt.fromString('281474976710655');
                const b = MyBigInt.fromString('3618502788666131106986593281521497120414687020801267626233049500247285301247');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-18', () => {
                const a = MyBigInt.fromString('281474976710655');
                const b = MyBigInt.fromString('7237005577332262213973186563042994240829374041602535252466099000494570602495');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-19', () => {
                const a = MyBigInt.fromString('281474976710655');
                const b = MyBigInt.fromString('57896044618658097711785492504343953926634992332820282019728792003956564819967');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-20', () => {
                const a = MyBigInt.fromString('281474976710655');
                const b = MyBigInt.fromString('115792089237316195423570985008687907853269984665640564039457584007913129639935');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('-1');
                expect(d.toString()).to.equal('1');  
            });
            it('Compare-HexDec-21', () => {
                const a = MyBigInt.fromString('281474976710655');
                const b = MyBigInt.fromString('-1');
                const c = a._compare(b);
                const d = b._compare(a);

                expect(c.toString()).to.equal('1');
                expect(d.toString()).to.equal('-1');  
            });
    });

})('function' === typeof require ? [require('../MyBigInt/mybigint.js'), require('chai').expect] : [MyBigInt, chai.expect]);
const expect = require('chai').expect;

describe('timeout test',function(){
    it('测试应该5000毫秒后结束',function () {
        var x = true;
        var f = function () {
            x = false;
            expect(x).to.be.not.ok;
            done();
        };
        setTimeout(f,6000);
    })
});
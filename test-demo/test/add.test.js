const add = require('../src/add.js');
const expect = require('chai').expect;

describe('should add test',function () {
    it.skip('should 1 and 1 to 2 ',function () {
        expect(add(1,1)).to.be.equal(2);
    })
    it('should 1 and 2 to 3 ',function () {
        expect(add(1,2)).to.be.equal(3);
    })
})
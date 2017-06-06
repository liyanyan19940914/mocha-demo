const add = require('../src/add.js');
const expect = require('chai').expect;

describe('should add test',function () {
    it('should 1 and 1 to 2 ',function () {
        expect(add(1,1)).to.be.equal(2);
    })
})
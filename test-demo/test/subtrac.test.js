const subtrac = require('../src/subtrac.js');
const expect = require('chai').expect;

describe('shoud subtrac test',function () {
    it('should 12 subtraction 3 to 9',function () {
        expect(subtrac(12,3)).to.be.equal(9);
    })
});
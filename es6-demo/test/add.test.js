import add from '../src/add';
import chai from 'chai';

const expect = chai.expect;

describe('should add test',function(){
    it('1 and 2 to 3',function () {
        expect(add(1,2)).to.be.equal(3);
    })
});

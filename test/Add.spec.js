const calculate = require('../lib')
const expect = require('chai').expect;
const {Add} = calculate

describe('加法函数的测试', () =>{
  it('0.1 加 0.2 应该等于 0.3 而不是 0.30000000000000004', () => {
    expect(Add(0.1, 0.2)).to.be.equal(0.3);
  })
})
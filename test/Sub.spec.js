const calculate = require('../lib')
const expect = require('chai').expect;
const {Sub,toFixed} = calculate

// 减法测试
describe('减法函数的测试', () =>{
  it('2.2 减 1.9 等于 0.3 而不是30.30000000000000027', () => {
    expect(Sub(2.2, 1.9)).to.be.equal(0.3);
  })
})
const calculate = require('../lib')
const expect = require('chai').expect;
const {Mul} = calculate

// 乘法测试
describe('乘法函数的测试', () =>{
  it('2.2 * 2.2 等于 4.84 而不是4.840000000000001 ', () => {
    expect(Mul(2.2, 2.2)).to.be.equal(4.84);
  })
})
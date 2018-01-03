const calculate = require('../lib')
const {Div} = calculate
const expect = require('chai').expect;

// 除法测试
describe('除法函数的测试', () =>{
  it('2.1 / 0.3 等于 7 而不是 7.000000000000001 ', () => {
    expect(Div(2.1, 0.3)).to.be.equal(7);
  })
})
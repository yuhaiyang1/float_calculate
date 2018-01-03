const calculate = require('../lib')
const {toFixed} = calculate
const expect = require('chai').expect;

// toFixed测试
describe('保留一位保留一位小数函数的测试', () =>{
  it('3.55b是3.6而不是3.5', () => {
    expect(toFixed(3.55, 1)).to.be.equal(3.6);
  })
})
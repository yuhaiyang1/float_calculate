// 自己实现
const toFixed = (num, n) => {
  return parseInt(((num * (Math.pow(10, n))) + 0.5), 10) / Math.pow(10, n)
}
// 两个浮点数求和
const Add = (num1, num2) => {
  let r1, r2, m
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return Math.round(num1 * m + num2 * m) / m
}
// 两个浮点数相减
const Sub = (num1, num2) => {
  let r1, r2, m, n
  try {
    r1 = `${num1}`.split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = `${num2}`.split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  n = (r1 >= r2) ? r1 : r2
  return toFixed((Math.round(num1 * m - num2 * m) / m), n)
}
// 两个浮点数相乘
const Mul = (num1, num2) => {
  let m = 0, s1 = `${num1}`, s2 = `${num2}`
  try {
    m += s1.split('.')[1].length
  } catch (e) {}
  try {
    m += s2.split('.')[1].length
  } catch (e) {}
  return Number(s1.replace('.', '')) *
  Number(s2.replace('.', '')) /
  Math.pow(10, m)
}
// 两个浮点数相除
const Div = (num1, num2) => {
  let t1, t2, r1, r2
  try {
    t1 = `${num1}`.split('.')[1].length
  } catch (e) {
    t1 = 0
  }
  try {
    t2 = `${num2}`.toString().split('.')[1].length
  } catch (e) {
    t2 = 0
  }
  r1 = Number(`${num1}`.replace('.', ''))
  r2 = Number(`${num2}`.toString().replace('.', ''))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}
module.exports = {
  toFixed,
  Add,
  Sub,
  Mul,
  Div
}

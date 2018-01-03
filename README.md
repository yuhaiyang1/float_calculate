# js-calculate

### 大家知道 js作为一门弱类型语言，在计算精度（比如说浮点数计算）比如上让我们非常头痛为了避免这个问题 0.3 + 0.6 = 0.8999999999999999 0.3 - 0.2 = 0.09999999999999998 0.3 * 1.5 = 0.44999999999999996 0.3 / 0.1 = 2.9999999999999996 封装了一些常用的方法: 
## toFixed: 接收两个参数 toFixed(num, n) num 是你需要保留的数字，n是需要保留的位数。为啥会封装了 js自带的方法toFixed() 举个🌰 3.55保留一位小数,用原生的会是 3.55.toFixed(1) 预期 3.6 实际 3.5
## 加法 Add()、 减法 Sul()、 乘法 Mul()、 除法 Div() 全部接受两个参数 比如 3 - 2 Sul(3, 2)

* `npm i fourth_calculate --save `
* `import Calculate from fourth_calculat`
* `调用 Calculate.toFixed、Calculate.Add() 等等`
* `谢谢支持请给start`  

@author :yhy

<!--
 * @Author: Vhen
 * @Date: 2020-09-30 13:40:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-09 10:56:10
 * @Description: 
-->
# 工具类文档

#### 安装以及引用

> npm i -D vhen-tools

```js
import tool from 'vhen-tools'
```

- 时间格式化

```js
tool.toTimeFormat(new Date()) // 2020-09-30
tool.toTimeFormat(new Date(),'YYYY-MM-DD HH:mm:ss') // 2020-09-30 13:47:17
tool.toTimeFormat(new Date(), 'YYYY年MM月DD日 HH时mm分ss秒') // 2020年09月30日 13时48分28秒

```

- 金额分隔符

```js
// 金额过大会有bug
tool.amountSeparator(545664645656.3568787,3) // 5,664,645,656.357
tool.amountSeparator(545664645656.3568787) // 5,664,645,656.356878
```
- 设置天数

```js
 // 未来十天
  let dayArr = tool.setDay(10);
 tool.toTimeFormat(dayArr[0]); // 2020-09-30
 tool.toTimeFormat(dayArr[1]); // 2020-10-10

 // 今天
 let dayArr = tool.setDay();
 tool.toTimeFormat(dayArr[0]); // 2020-09-30
 tool.toTimeFormat(dayArr[1]); // 2020-09-30

 // 最近10天

let dayArr = tool.setDay(-10);
 tool.toTimeFormat(dayArr[0]); // 2020-09-20
 tool.toTimeFormat(dayArr[1]); // 2020-09-30

```
- 隐藏某部分字符串/或者替换部分字符串

```js
tool.hideStr('123456789',3,4) // 123****6789
tool.hideStr('abcdefg',3,4,'----') // abc----defg
```

- 生成从min到max的随机数整数

```js
tool.randomNum(10000,99999) // 95301 随机五位数
```

- 指定位数字符串空格

```js
tool.strSpace('5465456454654646',5) // 54654 56454 65464 6
```
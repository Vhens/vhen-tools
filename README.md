<!--
 * @Author: Vhen
 * @Date: 2020-09-30 13:40:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-09-30 15:26:40
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
 Tool.toTimeFormat(dayArr[0]); // 2020-09-30
 Tool.toTimeFormat(dayArr[1]); // 2020-10-10

 // 今天
 let dayArr = tool.setDay();
 Tool.toTimeFormat(dayArr[0]); // 2020-09-30
 Tool.toTimeFormat(dayArr[1]); // 2020-09-30

 // 最近10天

let dayArr = tool.setDay(-10);
 Tool.toTimeFormat(dayArr[0]); // 2020-09-20
 Tool.toTimeFormat(dayArr[1]); // 2020-09-30

```
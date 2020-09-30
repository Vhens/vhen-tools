/*
 * @Author: Vhen
 * @Date: 2020-09-23 16:27:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-09-30 10:32:14
 * @Description: 
 */
 import moment from 'moment'
 const Tool = {};
/**
* @description: 格式化时间
* @param {str} 日期
* @return:
*/
Tool.toTimeFormat = (str, pattern = 'YYYY-MM-DD') => {
 if (!str) {
   return '';
 }
 const patternArr = pattern.split(' ');
 let result = patternArr[0].toUpperCase();
 result = result.replace(/:MM/g, ':mm');
 result = result.replace(/S/g, 's');
 if (patternArr.length > 1) {
   result += ` ${patternArr[1].replace(/h/g, 'H')}`;
 }
 return moment(str).format(result);
};

export default Tool;

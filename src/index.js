/*
 * @Author: Vhen
 * @Date: 2020-09-23 16:27:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-10-09 10:53:23
 * @Description:
 */
import moment from '../lib/moment'
const Tool = {}
/**
 * @description: 格式化时间
 * @param {str} 日期
 * @return:
 */
Tool.toTimeFormat = (str, pattern = 'YYYY-MM-DD') => {
  if (str) {
    const patternArr = pattern.split(' ')
    let result = patternArr[0].toUpperCase()
    result = result.replace(/:MM/g, ':mm')
    result = result.replace(/S/g, 's')
    if (patternArr.length > 1) {
      result += ` ${patternArr[1].replace(/h/g, 'H')}`
    }
    return moment(str).format(result)
  }
}

/**
 * @description: 金额分隔符
 * @param {type}
 * @param {type}
 * @return:
 */
Tool.amountSeparator = (num, type) => {
  if (num) {
    num = type ? Number(num).toFixed(type) : String(num)
    return num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
}

/** 设置天数
 * @description: 最近7天等 默认0是今日
 * @param {type}
 * @return:
 */
Tool.setDay = (day = 0) => {
  const start = new Date()
  const nowTime = start.getTime()
  const end = start.setTime(start.getTime() - 3600 * 1000 * 24 * day)
  return day === 0 ? [nowTime, nowTime] : day === 1 ? [end, end] : [end, nowTime]
}

/** 隐藏某部分字符串/或者替换部分字符串
 * @description: 最近7天等 默认0是今日
 * @param {type}
 * @return:
 */
Tool.hideStr = (str, topFew, lastFew, character = '****') => {
  if (str) {
    return str.substring(0, topFew) + character + str.substring(str.length - lastFew, str.length)
  }
}

/** 生成从min到max的随机数整数
 * @description: 
 * @param {type}
 * @return:
 */
Tool.randomNum = (min, max) => {
    return Math.floor(min + Math.random() * (max - min)) 
}

/** 字符串空格
 * @description: 
 * @param {type}
 * @return:
 */
Tool.strSpace=(str, digit = 4)=> {
  if (str) {
    let reg = new RegExp("(.{" + digit + "})", "g");
    return str.replace(reg, "$1 ");
  }
}

export default Tool

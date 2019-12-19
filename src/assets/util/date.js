const dateObj = {}
dateObj.format = function(tamp, fmt) {
  if (!tamp || tamp === {} || tamp === undefined) {
    return ''
  }

  const week = getYearWeek(tamp)

  const o = {
    'M+': tamp.getMonth() + 1, // 月份
    'W+': week,
    'd+': tamp.getDate(), // 日
    'h+': tamp.getHours(), // 小时
    'm+': tamp.getMinutes(), // 分
    's+': tamp.getSeconds(), // 秒
    'q+': Math.floor((tamp.getMonth() + 3) / 3), // 季度
    'S': tamp.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (tamp.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }

  return fmt
}

dateObj.formatSeconds = function(second) {
  if (!second || second === {} || second === undefined) {
    return ''
  }
  let theTime = parseInt(second) // 秒
  let theTime1 = 0 // 分
  let theTime2 = 0 // 小时
  if (theTime > 60) {
    theTime1 = parseInt(theTime / 60)
    theTime = parseInt(theTime % 60)
    if (theTime1 > 60) {
      theTime2 = parseInt(theTime1 / 60)
      theTime1 = parseInt(theTime1 % 60)
    }
  }

  let result = '' + parseInt(theTime) + '秒'
  if (theTime1 > 0) {
    result = '' + parseInt(theTime1) + '分' + result
  }
  if (theTime2 > 0) {
    result = '' + parseInt(theTime2) + '小时' + result
  }

  return result
}

function getYearWeek(date) {
  const da = date // 日期格式2015-12-30
  // 当前日期
  const date1 = date
  // 1月1号
  const date2 = new Date(da.getFullYear(), 0, 1)
  // 获取1月1号星期（以周一为第一天，0周一~6周日）
  let dateWeekNum = date2.getDay() - 1
  if (dateWeekNum < 0) {
    dateWeekNum = 6
  }
  if (dateWeekNum < 4) {
    // 前移日期
    date2.setDate(date2.getDate() - dateWeekNum)
  } else {
    // 后移日期
    date2.setDate(date2.getDate() + 7 - dateWeekNum)
  }
  const d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000)
  if (d < 0) {
    const date3 = (date1.getFullYear() - 1) + '-12-31'
    return getYearWeek(date3)
  } else {
    // 得到年数周数
    // let year = date1.getFullYear()
    const week = Math.ceil((d + 1) / 7)
    return week
  }
}

export default dateObj

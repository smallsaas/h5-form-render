import router from '@/router'
import axios from 'axios'
const OSS_URL = 'https://jimangmensso.oss-cn-shenzhen.aliyuncs.com/'

/**
 * @function
 * @description 设置标题
 * @param  {} argTitle 标题
 */
export const setTitle = (argTitle) => {
  document.getElementsByTagName('title')[0].innerText = argTitle
}

/**
 * @function
 * @description 使用postcss-px2rem时使用
 * @param {int} argBaseSize 基础大小 100px（要跟配置一致） argWidth 基础宽度
 */
export const remInit = (argBaseSize = 100, argWidth = 375) => {
  // 设置 rem 函数
  const setRem = () => {
    // 当前页面宽度相对于 argWidth 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / argWidth
    // 设置页面根节点字体大小
    const fontSize = argBaseSize * Math.min(scale, 2)
    document.documentElement.style.fontSize = fontSize + 'px'
  }
  // 初始化
  setRem()
  // 改变窗口大小时重新设置 rem
  window.onresize = () => {
    setRem()
  }
}

/**
 * @function
 * @description 数据安全访问
 * @param  {object|Array} argData  [原始数据]
 * @param  {string} argCheck [要返回的数据，用'.'连接，数组用'.+数字表示']
 * @param  {*} argValue [如果数据有误，返回的值，选填]
 * @param  {Boolean} argSetValueForce [是否强制赋值argValue]
 * @returns {any}
 */
export const safeData = (argData, argCheck, argValue, argSetValueForce) => {
  if (typeof argCheck !== 'string' && typeof argCheck !== 'number') {
    console.error('argCheck请传入string当前为：' + argCheck)
    return ''
  }
  const temKey = argCheck.toString().split('.')
  const temLen = temKey.length
  if (!argData) {
    return argValue
  }
  if (temLen > 1) {
    for (let i = 0; i < temLen - 1; i++) {
      if (typeof argData[temKey[i]] !== 'object') {
        if (argSetValueForce) {
          console.error('赋值失败：', argData)
        }
        return argValue
      }
      argData = argData[temKey[i]] || {}
    }
  }
  if (argSetValueForce) {
    argData[temKey[temLen - 1]] = argValue
  }
  if (typeof argValue === 'undefined') {
    return argData[temKey[temLen - 1]]
  }
  return argData[temKey[temLen - 1]] || argValue
}

/**
 * @function
 * @description 页面跳转
 * @param  {string} argPath  [路径] 无数据时返回
 * @param  {string} argType [跳转方式 push、replace、go]
 */
export const toPage = (argPath, argType = 'push') => {
  if (!argPath) {
    router.go(argType)
  } else if (argPath[0] === '/') {
    router[argType](argPath)
  } else {
    router[argType](location.hash.replace('#', '') + '/' + argPath)
  }
}

/**
 * @function
 * @description 获取url参数
 * @param  {string} argName  [参数名] 无数据时返回
 * @param  {string} argUrl [url]
 */
export const urlParam = (argName, argUrl = window.location.href) => {
  const result = argUrl.match(new RegExp('[?&]' + argName + '=([^&]+)', 'i'))
  if (!result) {
    return ''
  }
  return decodeURIComponent(result[1]) || ''
}

/**
 * @description 日期格式化显示
 * @function
 * @param  {number} date 时间对象\时间戳，默认当前时间
 * @param  {string} fmt 格式化符串，默认'YYYY-MM-DD HH:mm:ss' E为星期数，EEE:星期一 q为季度，S为毫秒数
 * @param  {string} emptyTip date为false时，默认''
 * @returns {string}
 */
export const formatTime = (date = +new Date(), fmt = 'YYYY-MM-DD HH:mm:ss', emptyTip = '') => {
  if (!date && date !== 0) {
    return emptyTip
  }
  if (typeof date === 'number') {
    date = '' + date
    if (date.length === 10) {
      date += '000'
    }
  }
  date = new Date(+date)
  const o = {
    'M+': date.getMonth() + 1,
    'D+': date.getDate(),
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
    'H+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  const week = {
    0: '\u65e5',
    1: '\u4e00',
    2: '\u4e8c',
    3: '\u4e09',
    4: '\u56db',
    5: '\u4e94',
    6: '\u516d'
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[date.getDay() + '']
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return fmt
}

export const Base64 = {
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  encode: function (e) {
    let t = ''
    let n, r, i, s, o, u, a
    let f = 0
    e = Base64._utf8_encode(e)
    while (f < e.length) {
      n = e.charCodeAt(f++)
      r = e.charCodeAt(f++)
      i = e.charCodeAt(f++)
      s = n >> 2
      o = (n & 3) << 4 | r >> 4
      u = (r & 15) << 2 | i >> 6
      a = i & 63
      if (isNaN(r)) {
        u = a = 64
      } else if (isNaN(i)) {
        a = 64
      }
      t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
    }
    return t
  },
  decode: function (e) {
    let t = ''
    let n, r, i
    let s, o, u, a
    let f = 0
    e = e.replace(/[^A-Za-z0-9+/=]/g, '')
    while (f < e.length) {
      s = this._keyStr.indexOf(e.charAt(f++))
      o = this._keyStr.indexOf(e.charAt(f++))
      u = this._keyStr.indexOf(e.charAt(f++))
      a = this._keyStr.indexOf(e.charAt(f++))
      n = s << 2 | o >> 4
      r = (o & 15) << 4 | u >> 2
      i = (u & 3) << 6 | a
      t = t + String.fromCharCode(n)
      if (u !== 64) {
        t = t + String.fromCharCode(r)
      }
      if (a !== 64) {
        t = t + String.fromCharCode(i)
      }
    }
    t = Base64._utf8_decode(t)
    return t
  },
  _utf8_encode: function (e) {
    e = e.replace(/rn/g, 'n')
    let t = ''
    for (let n = 0; n < e.length; n++) {
      const r = e.charCodeAt(n)
      if (r < 128) {
        t += String.fromCharCode(r)
      } else if (r > 127 && r < 2048) {
        t += String.fromCharCode(r >> 6 | 192)
        t += String.fromCharCode(r & 63 | 128)
      } else {
        t += String.fromCharCode(r >> 12 | 224)
        t += String.fromCharCode(r >> 6 & 63 | 128)
        t += String.fromCharCode(r & 63 | 128)
      }
    }
    return t
  },
  _utf8_decode: function (e) {
    let t = ''
    let n = 0
    let r = 0
    let c2 = 0
    let c3 = 0
    while (n < e.length) {
      r = e.charCodeAt(n)
      if (r < 128) {
        t += String.fromCharCode(r)
        n++
      } else if (r > 191 && r < 224) {
        c2 = e.charCodeAt(n + 1)
        t += String.fromCharCode((r & 31) << 6 | c2 & 63)
        n += 2
      } else {
        c2 = e.charCodeAt(n + 1)
        c3 = e.charCodeAt(n + 2)
        t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63)
        n += 3
      }
    }
    return t
  }
}

export const uploader = (file, blob) => {
  const policyText = {
    expiration: '2099-01-01T12:00:00.000Z', // 设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
    conditions: [
      ['content-length-range', 0, 1048576000] // 设置上传文件的大小限制
    ]
  }
  const policyBase64 = Base64.encode(JSON.stringify(policyText))
  const accesskey = 'c8LJnYklNQn0ylVIqzrZcLDIaalJyK'
  const accessid = 'LTAI4G1GzQgUi3xxndoqaXhw'
  const bytes = Crypto.HMAC(Crypto.SHA1, policyBase64, accesskey, {
    asBytes: true
  })
  const signature = Crypto.util.bytesToBase64(bytes)
  const fileKey = calculateObjectName(file.name)
  const formData = new FormData()
  formData.append('name', file.name)
  formData.append('key', fileKey)
  formData.append('policy', policyBase64)
  formData.append('OSSAccessKeyId', accessid)
  formData.append('success_action_status', 200)
  formData.append('signature', signature)
  formData.append('file', dataURItoBlob(blob), new Date().getTime() + getSuffix(file.name))
  return axios({
    method: 'post',
    // 测试用
    // 真实地址 https://jimangmensso.oss-cn-shenzhen.aliyuncs.com
    // url: '/upload',
    url: 'https://jimangmensso.oss-cn-shenzhen.aliyuncs.com',
    data: formData
  }).then(() => {
    return OSS_URL + fileKey
  }).catch(e => {
    return OSS_URL + fileKey
  })
}

function getSuffix (filename) {
  const pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos !== -1) {
    suffix = filename.substring(pos)
  }
  return suffix
}

function calculateObjectName (filename) {
  var suffix = getSuffix(filename)
  var gCurTime = new Date().getTime()
  var gObjectName = 'poster/' + gCurTime + '_' + randomString(10) + suffix
  return gObjectName
}

function randomString (len) {
  len = len || 32
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
  var maxPos = chars.length
  var pwd = ''
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

// base64转二进制
function dataURItoBlob (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1]); var n = bstr.length; var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

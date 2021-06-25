import _ from 'lodash'

// 获取全局配置
const globalConfigStorage = uni.getStorageSync('globalConfigStorage')

export const globalConfig = {
  host: 'https://xxx',
  formHost: _.get(globalConfigStorage, 'formEP', 'https://api.mock.smallsaas.cn/form'),
  dataHost: _.get(globalConfigStorage, 'dataEP', 'https://api.mock.smallsaas.cn/data'),
  tokenStorageKey: 'token'  //token閿
}
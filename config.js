import _ from 'lodash'

// 获取全局配置
const globalConfigStorage = uni.getStorageSync('globalConfigStorage')

export const globalConfig = {
  host: 'https://xxx',
  useCache: globalConfigStorage.useCache || false,
  formHost: _.get(globalConfigStorage, 'formEP', 'https://api.mock.smallsaas.cn/form'),
  dataHost: _.get(globalConfigStorage, 'dataEP', 'https://api.mock.smallsaas.cn/data'),
  endpoint: _.get(globalConfigStorage, 'endpoint', 'https://api.cloud.smallsaas.cn'),
  workflow: _.get(globalConfigStorage, 'workflow', 'https://api.wf.smallsaas.cn'),
  authEP: _.get(globalConfigStorage, 'authEP', 'https://api.uaas.smallsaas.cn'),
  tokenStorageKey: 'token'  //token閿
}
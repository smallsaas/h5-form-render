import _ from 'lodash'

// ��ȡȫ������
const globalConfigStorage = uni.getStorageSync('globalConfigStorage')

export const globalConfig = {
  host: 'https://xxx',
  useCache: globalConfigStorage.useCache || false,
  formHost: _.get(globalConfigStorage, 'formEP', 'https://api.mock.smallsaas.cn/form'),
  dataHost: _.get(globalConfigStorage, 'dataEP', 'https://api.mock.smallsaas.cn/data'),
  endpoint: _.get(globalConfigStorage, 'endpoint', 'https://api.cloud.smallsaas.cn'),
  workflowEP: _.get(globalConfigStorage, 'workflowEP', 'https://api.uat.smallsaas.cn'),
  authEP: _.get(globalConfigStorage, 'authEP', 'https://api.uaas.smallsaas.cn'),
  // uatEP: _.get(globalConfigStorage, 'workflowEP', 'https://api.uat.smallsaas.cn'),
  designEP:  _.get(globalConfigStorage, 'designEP', 'https://api.uat.smallsaas.cn'),
  extraEP: _.get(globalConfigStorage, 'extraEP', 'https://api.uat.smallsaas.cn'),
  tokenStorageKey: 'token',//token��
  sstencenMapKey: 'HGPBZ-E2IRR-ELTWC-WTE4W-I7MBE-P4FBU' // 获取地址sdk key
}
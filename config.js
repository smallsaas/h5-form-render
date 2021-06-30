import _ from 'lodash'

// ��ȡȫ������
const globalConfigStorage = uni.getStorageSync('globalConfigStorage')

export const globalConfig = {
  host: 'https://xxx',
  useCache: globalConfigStorage.useCache || false,
  formHost: _.get(globalConfigStorage, 'formEP', 'https://api.mock.smallsaas.cn/form'),
  dataHost: _.get(globalConfigStorage, 'dataEP', 'https://api.mock.smallsaas.cn/data'),
  endpoint: _.get(globalConfigStorage, 'endpoint', 'https://api.cloud.smallsaas.cn'),
  workflow: _.get(globalConfigStorage, 'workflow', 'https://api.wf.smallsaas.cn'),
  authEP: _.get(globalConfigStorage, 'authEP', 'https://api.uaas.smallsaas.cn'),
  uatEP: _.get(globalConfigStorage, 'uatEP', 'https://api.uat.smallsaas.cn'),
  tokenStorageKey: 'token'  ,//token��
	tencenMapKey: 'HGPBZ-E2IRR-ELTWC-WTE4W-I7MBE-P4FBU' // 获取地址sdk key
}
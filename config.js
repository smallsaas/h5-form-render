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
  sstencenMapKey: 'HGPBZ-E2IRR-ELTWC-WTE4W-I7MBE-P4FBU' ,// 获取地址sdk key
	// 执法token
	enforcementKey:"eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE2LCJkYXlPZldlZWsiOiJGUklEQVkiLCJkYXlPZlllYXIiOjE5NywiaG91ciI6MTYsIm1pbnV0ZSI6MTYsIm1vbnRoIjoiSlVMWSIsIm1vbnRoVmFsdWUiOjcsIm5hbm8iOjI0OTAwMDAwMCwic2Vjb25kIjoxNiwieWVhciI6MjAyMSwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifX0sInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImFsZyI6IkhTMjU2In0.eyJhY2Nlc3NfdG9rZW4iOiIzOGE0MjNiYzU4M2Y0ZjQ5YTllZDkwMWI4MmJkN2Y4NCIsInJlZnJlc2hfdG9rZW4iOiJlNTg2YjdiNDk3YzY0N2ZlOTI5YjRmZTU1Yzk0YThkNCIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjIsImRlcHRfaWQiOjMsInVzZXJuYW1lIjoiemYwMSIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImxpY2VuY2UiOiJwcm9ncmVzcyIsImZyb20iOjAsInRpbWVfc3RhbXAiOiIxNjI1NTU5Mzc2Iiwicm9sZV9jb2RlcyI6WyJBU1MiXX0.O9y_EAjRNPd2BOhvGOhzbYr6rYCvF5IAQV3GbWPqYys"
}
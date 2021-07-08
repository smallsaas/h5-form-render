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
  tencenMapKey: 'HGPBZ-E2IRR-ELTWC-WTE4W-I7MBE-P4FBU' ,// 获取地址sdk key
	// 执法token
  enforcementKey:"eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE3LCJkYXlPZldlZWsiOiJTQVRVUkRBWSIsImRheU9mWWVhciI6MTk4LCJob3VyIjoxOSwibWludXRlIjoxMCwibW9udGgiOiJKVUxZIiwibW9udGhWYWx1ZSI6NywibmFubyI6Njk2MDAwMDAwLCJzZWNvbmQiOjQsInllYXIiOjIwMjEsImNocm9ub2xvZ3kiOnsiY2FsZW5kYXJUeXBlIjoiaXNvODYwMSIsImlkIjoiSVNPIn19LCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJzZXJ2ZXIiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NfdG9rZW4iOiI5ODg5NTE4OTI4Mjk0ODM1OTQ3YzJkNmU4Yzg4N2FmYiIsInJlZnJlc2hfdG9rZW4iOiI3MDUwZGVlZDUzMmY0NjJjOTdiMmY4ZWZlNzllZGE3YiIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjIsImRlcHRfaWQiOjMsInVzZXJuYW1lIjoiemYwMSIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImxpY2VuY2UiOiJwcm9ncmVzcyIsImZyb20iOjAsInRpbWVfc3RhbXAiOiIxNjI1NjU2MjA0Iiwicm9sZV9jb2RlcyI6WyJBU1MiXX0.L_By2r_yoDFDQ-bNZze2I1qY5Uanp1xXP_t_mS1MUTU"
}
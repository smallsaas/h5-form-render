<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig,getIcon } from 'common/api.js'
    import _ from 'lodash'
		import {Base64} from '@/utils/tools.js'
	export default {
		onLaunch: async function() {
            console.log('App Launch')
						uni.showLoading({
							title:"小程序初始化中"
						})
						let _this = this
						uni.request({
							url:`${globalConfig.formHost}?id=2`,
							method:"GET",
							success(res) {
								// console.log(res)
								let User = JSON.parse(Base64.decode(res.data.data.defaultUser))
								// console.log(User)
								// console.log(User.username)
								// console.log(User.password)
								_this.LoginData.username = User.username
								_this.LoginData.password = User.password
								_this.getToken()
							},
							fail(res) {
								uni.showModal({
									title:"获取数据失败",
									content:"请检查网络配置",
									showCancel:false
								})
							}
						})
						// this.getToken()
            // 测试token
            // uni.setStorageSync(globalConfig.tokenStorageKey, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAwMSIsInVzZXJJZCI6IjAiLCJ1c2VyVHlwZSI6MTAxLCJiVXNlclR5cGUiOiJTWVNURU0iLCJ0ZW5hbnRPcmdJZCI6MTAwMDAwMDAwMDAwMDAwMDAxLCJhY2NvdW50IjoiYWRtaW4iLCJleHRyYVVzZXJUeXBlIjowLCJpYXQiOjE2MjUwMzYxNjgsImp0aSI6IjAiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTI5NTM2OH0.JjSZKutYDezJ_WjAT56EzZWLTKj6foe_bNUlraYORnbFGrqYJbkJL5S-FAQTZv5RzflkzBs0wyd0LIB9B22ChA')
						// uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjoxNjI1MDUzNTIxMjE4LCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJhY2Nlc3MiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6InVzZXIiLCJ1c2VyTmFtZSI6IjAwMDAwMCIsImxvZ2luSWQiOiI0MzA3MjE3MmU0NTk0ODNkOTVlMGQ0YzM2NGI5MTdjMiIsInVzZXJJZCI6IjQzMDcyMTcyZTQ1OTQ4M2Q5NWUwZDRjMzY0YjkxN2MyIn0.Aiir-aUXBEqJWl6wT5VhpLhfh4i9BBIDBOZPc4-XRqQ')
						// uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE2LCJkYXlPZldlZWsiOiJGUklEQVkiLCJkYXlPZlllYXIiOjE5NywiaG91ciI6OSwibWludXRlIjozNywibW9udGgiOiJKVUxZIiwibW9udGhWYWx1ZSI6NywibmFubyI6ODAyMDAwMDAwLCJzZWNvbmQiOjIyLCJ5ZWFyIjoyMDIxLCJjaHJvbm9sb2d5Ijp7ImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEiLCJpZCI6IklTTyJ9fSwidG9rZW5fdHlwZSI6IkJlYXJlciIsInNjb3BlIjoic2VydmVyIiwiYWxnIjoiSFMyNTYifQ.eyJhY2Nlc3NfdG9rZW4iOiI3NGY1MTYzNWJhYjE0NjIxOWEzNzQxMjNiYWIxYjhkMSIsInJlZnJlc2hfdG9rZW4iOiJlNTdiZTcwZGFlYjI0NDE1OTE1ZDQyZWRjMWFjMjJmMyIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjQsImRlcHRfaWQiOjE1LCJ1c2VybmFtZSI6InF5MDEiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJzZXJ2ZXIiLCJsaWNlbmNlIjoicHJvZ3Jlc3MiLCJmcm9tIjowLCJ0aW1lX3N0YW1wIjoiMTYyNTUzNTQ0MiIsInJvbGVfY29kZXMiOlsiUVlZSCJdfQ.vn6MSrhlHDF3B4EBqCXVL0531MWqJAZQM__wrXpO2N0')
						// uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE3LCJkYXlPZldlZWsiOiJTQVRVUkRBWSIsImRheU9mWWVhciI6MTk4LCJob3VyIjoxOSwibWludXRlIjoxMCwibW9udGgiOiJKVUxZIiwibW9udGhWYWx1ZSI6NywibmFubyI6Njk2MDAwMDAwLCJzZWNvbmQiOjQsInllYXIiOjIwMjEsImNocm9ub2xvZ3kiOnsiY2FsZW5kYXJUeXBlIjoiaXNvODYwMSIsImlkIjoiSVNPIn19LCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJzZXJ2ZXIiLCJhbGciOiJIUzI1NiJ9.eyJhY2Nlc3NfdG9rZW4iOiI5ODg5NTE4OTI4Mjk0ODM1OTQ3YzJkNmU4Yzg4N2FmYiIsInJlZnJlc2hfdG9rZW4iOiI3MDUwZGVlZDUzMmY0NjJjOTdiMmY4ZWZlNzllZGE3YiIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjIsImRlcHRfaWQiOjMsInVzZXJuYW1lIjoiemYwMSIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImxpY2VuY2UiOiJwcm9ncmVzcyIsImZyb20iOjAsInRpbWVfc3RhbXAiOiIxNjI1NjU2MjA0Iiwicm9sZV9jb2RlcyI6WyJBU1MiXX0.L_By2r_yoDFDQ-bNZze2I1qY5Uanp1xXP_t_mS1MUTU')
						// uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjIzLCJkYXlPZldlZWsiOiJGUklEQVkiLCJkYXlPZlllYXIiOjIwNCwiaG91ciI6MTAsIm1pbnV0ZSI6MjAsIm1vbnRoIjoiSlVMWSIsIm1vbnRoVmFsdWUiOjcsIm5hbm8iOjgxMDAwMDAwLCJzZWNvbmQiOjQ2LCJ5ZWFyIjoyMDIxLCJjaHJvbm9sb2d5Ijp7ImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEiLCJpZCI6IklTTyJ9fSwidG9rZW5fdHlwZSI6IkJlYXJlciIsInNjb3BlIjoic2VydmVyIiwiYWxnIjoiSFMyNTYifQ.eyJhY2Nlc3NfdG9rZW4iOiIzYmJkYTA3NmRlMDQ0NGMzYWY2NWZiZWU3YjhkY2U0ZiIsInJlZnJlc2hfdG9rZW4iOiJiNTY3MzcyNGJlNTA0MWQwYjRiYzlmN2IzMjNmMjVhNCIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjgsImRlcHRfaWQiOjMsInVzZXJuYW1lIjoiemYwOSIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImxpY2VuY2UiOiJwcm9ncmVzcyIsImZyb20iOjAsInRpbWVfc3RhbXAiOiIxNjI2MTQyODQ2Iiwicm9sZV9jb2RlcyI6WyJBU1MiXX0.GhzsavncIgoP-cW4MPbcBO0-ABwT_gTxW6V49lkxXYw')
            // 获取全局配置数据						
            const res = await getGolobalConfig()
            if (_.get(res, 'code') === 200) {
                uni.setStorageSync('globalConfigStorage', _.get(res, 'data.globalConfig', {}))
            }
						
						const icon = await getIcon()
						if(_.get(icon,'code')===200){
							
							uni.setStorageSync('iconList',_.get(icon,'data',{}))
						}
						uni.hideLoading()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		data:{
			LoginData:{
				username:'',
				password:'',
				app:'public',
				// from:5,
				type:"1"
			}
		},
		methods:{
			getToken(){
					uni.request({
					  // 请求路径
					  url: 'https://api.uat.smallsaas.cn/api/sys/oauth/app/login',
					  data: this.LoginData,
					  header: {
						// 'content-type': 'application/x-www-form-urlencoded'
						'content-type': 'application/json'
					  },
					  method: 'POST',
					  success(res){
					      // 请求成功后获取openid和session_key
								let token;
								if(res.data.code===1){
									// uni.showModal({
									// 	title:res.data.msg
									// })
								}else{
									// uni.showModal({
									// 	title:"登陆成功"
									// })
								}
								console.log(res.data)
								token = res.data.encryptedData
								uni.setStorageSync(globalConfig.tokenStorageKey,token)
					  },
				})
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>

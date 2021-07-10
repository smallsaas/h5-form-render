<!-- 获取微信登录并提交至API -->
<template>
</template>

<script>
	export default {
		name:"GetWXLoginInfo",
		data() {
			return {
				userInfo:{
					iv:'',
					encryptedData:'',
					from:2,
					app:"internal",
					type:2
				}
			};
		},
		props:{
			type:{
				type:Number,
				default:1
			}
		},
		created() {
			this.$emit('login',this.onGotUserInfo())
		},
		onGotUserInfo() {
			let _this = this
		    // 获取用户信息
		    uni.getUserInfo({
		        // 获取信息成功
		        success(res) {
		            console.log("获取用户信息",res);
								_this.userInfo.iv=res.iv;
								_this.userInfo.encryptedData=res.encryptedData;
		            // 成功后进行登录,获取code
		            uni.login({
		              success (res) {
		                 console.log(res);
		                if (res.code) 
										{
											let code = res.code
											// 登录所需数据
											let LoginData = {
												..._this.userInfo,
												code:code
											}
											console.log(LoginData)
		                  //发起网络请求
		                  uni.request({
		                    // 请求路径
		                    url: 'https://api.uat.smallsaas.cn/auth/oauth/token',
		                    // 请求参数code
												'content-type': 'application/x-www-form-urlencoded',
		                    data: LoginData,
		                    method: 'POST',
		                    success(res){
		                        // 请求成功后获取openid和session_key
		                        console.log(res)
		                    }
		                  })
											
		                } else {
		                  console.log('登录失败！' + res.errMsg)
		                }
		              }
		            })
		        },
		        fail() {
		            console.log("获取用户信息失败");
		        }
		    })
		}
	}
</script>

<style>

</style>

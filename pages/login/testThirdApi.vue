<template>
	
	<view class="btnList">
	    <!-- 如果用手机号登录，获取手机号码相关信息 -->
	    <!-- <button type="primary" open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getPhoneNumber">手机号一键登录</button> -->
	    <!-- 如果用微信登录，获取微信相关用户信息 -->
	    <!-- <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button> -->
	    <!--测试登录 -->
	    <button type="primary" @click="onLoginFunc">登录</button>
	</view>
</template>

<script>
	// import dynamicPage from '../../components/dynamic-page/index.vue'
	// import { globalConfig } from '@/config.js'
	export default {
        onLoad() {
            // 执行查看授权选项
            this.getSettingMes();
        },
		data() {
			return {
				auth: '',
				iv: '',
				encryptedData: ''
			}
		},
		methods: {
			// 查看已授权选项
			getSettingMes() {
			    let _this = this;
			    uni.getSetting({
			        success(res) {
			            if (res.authSetting['scope.userInfo']) {
			                // 用户信息已授权，获取用户信息
			                uni.getUserInfo({
			                    success(res) {
			                        console.log("授权信息 = ", res);
			                    },
			                    fail(err) {
			                        console.log("获取用户信息失败 = ", err)
			                    }
			                })
			            } else if (!res.authSetting['scope.userInfo']) {
			                console.log("需要点击按钮手动授权")
			            }
			        },
			        fail() {
			            console.log("获取已授权选项失败")
			        }
			    })
			},
			// 手动授权方法
			onGotUserInfo(e) {
			    let _this = this;
			    // 获取用户信息
			    uni.getUserInfo({
			        // 获取信息成功
			        success(res) {
			            console.log("wz.getUserInfo = ", res);
						// _this.iv = res.iv
						// _this.encryptedData = res.encryptedData
			            // 成功后进行登录,获取code
			            uni.login({
			              success (loginRes) {
			                 console.log("wz.login = ", loginRes);
							 // _this.auth = loginRes.code
			                if (loginRes.code) {
							  	const data = {
							  		from: '2',
							  		auth: loginRes.code,
							  		iv: res.iv,
							  		encryptedData: res.encryptedData,
							  		app: "internal"
							  	}
							  	_this.onRequest(data)
			                } else {
			                  console.log('登录失败！' + loginRes.errMsg)
			                }
			              }
			            })
			        },
			        fail() {
			            console.log("获取用户信息失败");
			        }
			    })
			},
			// 手机登录时获取手机号码相关信息的函数
			getPhoneNumber(e) {
			    console.log(e);
			},
			onLoginFunc(){
				
				let _this = this;
				
				// 获取code
				uni.login({
				  success (loginRes) {
					 console.log("wz.login = ", loginRes);
					if (loginRes.code) {
						// 获取用户信息
						uni.getUserInfo({
							success(res) {
								console.log("wz.getUserInfo = ", res);
								const data = {
									from: '2',
									auth: loginRes.code,
									iv: res.iv,
									encryptedData: res.encryptedData,
									app: "internal"
								}
								_this.onRequest(data)
							},
							fail() {
								console.log("获取用户信息失败");
							}
						})
						
					} else {
					  console.log('登录失败！' + loginRes.errMsg)
					}
				  }
				})
				
			},
			onRequest(data){
				//发起网络请求
				uni.request({
				  // 请求路径
				  url: 'https://rt.zbsoft.top/auth/oauth/token',
				  data: data,
				  header: {
					'content-type': 'application/x-www-form-urlencoded'
				  },
				  method: 'POST',
				  success(res){
				      // 请求成功后获取openid和session_key
				      console.log('登陆成功 = ', res)
				  },
				  fail(err) {
				  	console.log('登陆失败 = ', err)
				  }
				})
			}
		},
		components: {
			// dynamicPage
		}
	}
</script>

<style lang="less" scoped>
  .btnList {
	  >button{
		  margin-top: 20rpx;
		  margin-bottom: 20rpx;
	  }
  }
</style>

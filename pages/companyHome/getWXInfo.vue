<template>
    <view>
        <!-- 如果用手机号登录，获取手机号码相关信息 -->
        <button type="primary" open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getPhoneNumber">手机号一键登录</button>
        <!-- 如果用微信登录，获取微信相关用户信息 -->
        <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">获取用户信息</button>
    </view>
</template>

<script>
    export default {
        data() {
					return {
						userInfo:{
							iv:'',
							encryptedData:'',
							from:2,
							app:"internal",
							type:2
						}
					}
        },
        onLoad() {
            // 执行查看授权选项
            this.getSettingMes();
						// 自动授权
						this.onGotUserInfo()
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
																		_this.userInfo.iv=res.iv;
																		_this.userInfo.encryptedData=res.encryptedData;
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
							let _this = this
                // 获取用户信息
                uni.getUserInfo({
                    // 获取信息成功
                    success(res) {
                        console.log("获取用户信息",res);
				
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
																header:{
																	'content-type': 'application/x-www-form-urlencoded',
																},
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
            },
            // 手机登录时获取手机号码相关信息的函数
            getPhoneNumber(e) {
                console.log(e);
            }
        }
    }
</script>
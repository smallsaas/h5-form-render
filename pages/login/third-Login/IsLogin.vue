<template>
    <view>
        <!-- 如果用手机号登录，获取手机号码相关信息 -->
        <!-- <button type="primary" open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getPhoneNumber">手机号一键登录</button> -->
        <!-- 如果用微信登录，获取微信相关用户信息 -->
        <!-- <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="onGotUserInfo">授权</button> -->
				<!-- <button  @click="getUserProfile"></button> -->
    </view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	import {Base64} from '@/utils/tools.js'
    export default {
        data() {
					return {
						userInfo:{
							iv:'',
							encryptedData:'',
							from:2,
							app:"internal",
							rawData:'',
							type:0,
							auth:null
						},
						id:null,
						GetInfo:false
					}
        },
        onLoad(e) {
            // 执行查看授权选项
						// console.log(e)
            // this.getSettingMes(e.id);//通过e.id拿编号
						// 自动授权e
						this.onGotUserInfo(e.id)
        },

				// updated() {

				// },
        methods: {
            // 查看已授权选项
            // getSettingMes(e) {
            //     let _this = this;
            //     uni.getSetting({
            //         success(res) {
												// console.log(res)
            //             if (res.authSetting['scope.userInfo']) {
            //                 // 用户信息已授权，获取用户信息
            //                 uni.getUserInfo({
            //                     success(res) {
            //                         console.log("授权信息 = ", res);
												// 						console.log(e)
            //                     },
            //                     fail(err) {
            //                         console.log("获取用户信息失败 = ", err)
            //                     }
            //                 })
            //             } else if (!res.authSetting['scope.userInfo']) {
            //                 console.log("需要点击按钮手动授权")
            //             }
            //         },
            //         fail() {
            //             console.log("获取已授权选项失败")
            //         }
            //     })
            // },
						// 新授权方式
						getUserProfile(e){
							let that = this
							let _this = this
						 uni.showModal({
							 title: '申请',
							 content: '正在请求您的个人信息',
							 success(res) {
								 if (res.confirm) {
									 uni.getUserProfile({
									 desc: "获取你的昵称、头像、地区及性别",
									 success: res => {
										 that.GetInfo = true
										 console.log(res)
										 that.id = e.id
										 // that.userInfo = res.userInfo;
										 that.userInfo.iv=res.iv;
										 that.userInfo.encryptedData=res.encryptedData;
										 //自动解析rawData更改用
										 let newRawData;        
										 let jsonRaw = JSON.parse(res.rawData)
										// 更改字段
										for(let i in jsonRaw){
											if(i==="nickName"){
												jsonRaw.nickname=jsonRaw.nickName
												delete jsonRaw["nickName"]
											}
										}
										newRawData = JSON.stringify(jsonRaw)
										// let testData
										// testData = Base64.decode(res.encryptedData)
										// console.log(testData)
										 that.userInfo.rawData = newRawData;
										 // that.userInfo.rawData = res.rawData;
										 that.userInfo.type = e

										 			if (_this.userInfo.auth){
										 					// 登录所需数据
										 					let LoginData = {
										 						..._this.userInfo,
										 					}
										 					// console.log(LoginData)
										           //发起网络请求
										           uni.request({
										             // 请求路径
										             url: 'https://api.uat.smallsaas.cn/auth/oauth/token',//第三方登录
										             // url: 'https://api.uat.smallsaas.cn/oauth/token',//第三方登录
										 						// url:"https://api.uat.smallsaas.cn/api/u/bind/login",//登录
										             // 请求参数code
										 						header:{
										 							'content-type': 'application/x-www-form-urlencoded',
										 						},
										             data: LoginData,
										             method: 'POST',
										 						success(res){
										 								console.log(res)
										                 // 请求成功后获取openid和session_key
										 								if(res.data.code===-1){
										 								uni.showModal({
										 									title:"请注册",
										 									content:"您没有注册，是否前往注册？",
										 									cancelText:"其他角色",
										 									confirmText:"立即注册",
										 									success(button) {

										 										let list = {
										 											..._this.userInfo,
										 											"type":e
										 										}
										 										// console.log(res.data)
										 										// console.log(list)
										 										// console.log(button)
										 										if(button.confirm){
										 											// console.log(true)
										 											uni.redirectTo({
										 												url:"/pages/login/third-Login/third-register?query="+encodeURIComponent(JSON.stringify(list)),
										 												success() {
										 													console.log("跳转成功")
										 												},
										 												fail(toFail){
										 													console.log(toFail)
										 												}
										 											})
										 										}else if(button.cancel){
										 											uni.navigateBack({
										 												delta:10
										 											})
										 										}
										 									},
										 									fail(fail){
										 										console.log(fail)
										 									}
										 								})
										 							}else{
										 								if(res.data.encryptedData){
										 									let token;
										 									let nickName;
																			let username;
										 									let avatar;
										 									let code;
																			// console.log(res.data)
										 									token = res.data.encryptedData
										 									nickName = res.data.nickname
																			username = res.data.username
										 									code = res.data.bindCode
										 									avatar = JSON.parse(LoginData.rawData).avatarUrl
										 									// console.log(avatar)
										 									let query = {
										 										"nickName":nickName	,//微信登录的用户名
										 										"avatar":avatar, //微信登录头像
										 										"code":code,
																				"username":username
										 									}
										 									uni.showModal({
										 										title:"登录成功",
										 										position:'center',
										 										duration: 500,
										 										success(click){
										 											// console.log(click.confirm)
										 											if(click.confirm||click.cancel){
										 												// console.log(e)
										 												// console.log(query)
																						uni.setStorageSync("userInfo",query)
																						uni.getStorageSync("userInfo")
																						// console.log("获取",a)
										 												switch(e){
										 													case '2':uni.reLaunch({
										 														url:"/pages/Market-index/Market-index?query="+encodeURIComponent(JSON.stringify(query)),
										 														fail(ea) {
										 															// console.log(ea)
										 														}
										 													});break;
										 													case '4':uni.reLaunch({
										 														url:"/pages/companyHome/home?query="+encodeURIComponent(JSON.stringify(query)),
										 														fail(ea) {
										 															// console.log(ea)
										 														}
										 													});break;
										 													case '3':uni.reLaunch({
										 														url:"/pages/street/myhome?query="+encodeURIComponent(JSON.stringify(query)),
										 														fail(ea) {
										 															// console.log(ea)
										 														}
										 													});break;
										 												}
										 											}
										 										}
										 									})
										 									uni.setStorageSync(globalConfig.tokenStorageKey,token)
										 								}else{
										 									uni.showModal({
										 										title:"登录失败",
										 										position:'center',
										 										duration: 500,
										 										success(click){
										 											// console.log(click.confirm)
										 											if(click.confirm||click.cancel){
										 												uni.navigateBack({
										 													delta:1
										 												})
										 											}
										 										}
										 									})
										 									uni.clearStorage(globalConfig.tokenStorageKey)
										 								}
										 							}
										             }
										           })
										 					
										         } else {
										           console.log('登录失败！' + res.errMsg)
										 					uni.showModal({
										 						title:"登录失败",
										 						position:'center',
										 						duration: 500,
										 						success(click){
										 							// console.log(click.confirm)
										 							if(click.confirm||click.cancel){
										 								uni.navigateBack({
										 									delta:1
										 								})
										 							}
										 						}
										 					})
										 					uni.clearStorage(globalConfig.tokenStorageKey)
										         }
										     //   }
										     // })
										 
									 },
									 fail: res => {
										 //拒绝授权
										 uni.showToast({
										 	icon:none,
												title:"无法获取授权",
												duration:1500
										 })
										 uni.navigateBack()
									 }
								 })} else if (res.cancel) {
									 console.log(222)
									 //拒绝授权 showErrorModal是自定义的提示
									 uni.showToast({
									 	icon:none,
										title:"无法获取授权",
										duration:1500
									 })
									 uni.navigateBack()
								 }
							 }
						 })
						},
            // 手动授权方法
            onGotUserInfo(e) {
							let _this = this
                // 获取用户信息
								uni.login({
								  success (res) {
										_this.userInfo.auth = res.code
								     console.log(res);
										 _this.getUserProfile(e)
										// uni.getUserInfo({
										// 		// 获取信息成功
										// 		success(res) {
										// 				console.log("获取用户信息",res);
														// _this.userInfo.iv=res.iv;
														// _this.userInfo.encryptedData=res.encryptedData;
														// _this.userInfo.rawData = res.rawData;
														// _this.userInfo.type = e
                        // 成功后进行登录,获取code
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
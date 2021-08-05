<template>
	<view class="Confirm" style="position: relative;" >
		<view class="comment">
			<view class="title" v-if="config.placeholder">{{config.placeholder}}
			</view>
<!-- 			<view>
				<button @click="">模板测试</button>
			</view> -->
			<textarea adjust-position="true" v-model:value="comment" class="comment_input"
			:placeholder="'请输入'+(config.placeholder||'...')"
			maxlength="-1"
			></textarea>
		</view>
		<view class="ConfirmBox">
			<view class="agree button" @click="GetAgree('backToPrev')">
				{{config.lastText}}
			</view>
			<view class="agree button" @click="GetAgree('next')">
				{{config.agreeText}}
			</view>
			<view class="agree button" @click="exit()">
				关闭
			</view>
<!-- 			<view class="refuse button" @click="GetRefuse()">
				{{config.refuseText}}
			</view> -->
			<!-- <button @click="getFormData()">测试</button> -->
		</view>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	export default {
		name:"confirm",
		data() {
			return {
				comment:"",
				username:""
			};
		},
		props:{
			config:{
				type:Object,
				default(){
					return {
						agreeText:"同意",
						lastText:"回退给上一步发起人",
						refuseText:"拒绝",
						placeholder:"请输入..."
					}
				}
			},
			formData:Object,
			LastKey:Object
		},
		mounted() {
			// console.log("confimKey",this.LastKey)
			// console.log("FormDATA",this.formData)
			// console.log("userInfo",globalConfig.userInfo)
			this.username=uni.getStorageSync(globalConfig.userInfo).username
		},
		methods:{
			// getFormData(){
			// 	console.log("FormDATA",this.formData)
			// },
			exit(){
				uni.navigateBack({
					delta:10
				})
			},
			GetAgree(openType){
				// console.log(value);
				// console.log(this.comment)
				console.log("KEY",this.LastKey.applyUserName)
				let pages = getCurrentPages()
				let page = pages[0]
				let token = uni.getStorageSync(globalConfig.tokenStorageKey)
				let header = {
					Authorization:token
				}
				let url = `${globalConfig.workflowEP}/api.flow.examine/complete`
				let data = {
					"processDefineKey":this.LastKey.processDefineKey,
					"version":"1",
					"customValues":{
						"fileno":this.LastKey.fileno,
						"fileseq":this.LastKey.fileseq
					},
					"ignoreNotPersistent":true,
					"formData":this.formData,
					"operType":openType,
					"comment":this.comment,
					"taskId":this.LastKey.taskId
				}
				// console.log(data)
				uni.request({
					header:header,
					url:url,
					data:data,
					method:this.config.method||"POST",
					complete(res) {
						if(res.data.code==="00000"){
							uni.showToast({
								duration:500,
								title:"办理成功"
							})
							console.log(page)
							// uni.reLaunch({
							// 	url:page.$page.fullPath,
							// 	fail(e) {
							// 		console.log(e)
							// 	}
							// })
							uni.navigateBack({
								delta:10
							})
						}else{
							uni.showModal({
								content:res.data.msg
							})
						}
					}
				})
			},
		// 	GetRefuse(){
		// 		// console.log(value);
		// 		// console.log(this.comment)
		// 		let pages = getCurrentPages()
		// 		let page = pages[0]
		// 		let token = uni.getStorageSync(globalConfig.tokenStorageKey)
		// 		let header = {
		// 			Authorization:token
		// 		}
		// 		let that = this
		// 		let url = `${globalConfig.workflowEP}/api.flow.examine/complete`
		// 		let data = {
		// 			"processDefineKey":this.LastKey.processDefineKey,
		// 			"version":"1",
		// 			"customValues":{
		// 				"fileno":this.LastKey.fileno,
		// 				"fileseq":String(Number(this.LastKey.fileseq)+1)
		// 			},
		// 			"operType":"backToApply",
		// 			"comment":this.comment,
		// 			"taskId":this.LastKey.taskId
		// 		}
		// 		// console.log(data)
		// 		uni.request({
		// 			header:header,
		// 			url:url,
		// 			data:data,
		// 			method:this.config.method||"POST",
		// 			complete(res) {
		// 				console.log(res)
		// 				if(res.data.code==="00000"){
		// 					uni.showToast({
		// 						duration:500,
		// 						title:"审批成功"
		// 					})
		// 					let querydata = {
		// 						...that.config.query,
		// 						...data
		// 					}
		// 					let backUrl = '/pages'+that.config.failUrl+'?query='+encodeURIComponent(JSON.stringify(querydata))
		// 					console.log(backUrl)
		// 					uni.navigateTo({
		// 						url:backUrl
		// 					})
		// 				}else{
		// 					uni.showModal({
		// 						content:res.data.msg
		// 					})
		// 				}
		// 			}
		// 		})
		// 	}
		}
	}
</script>

<style lang="less">
	.Confirm{
		width: 90%;
		margin: 0 auto;
		box-shadow: 0px 0px 5px #999;
		border-radius: 5px;
		background-color: #eee;
		padding: 5px;
	}
	.ConfirmBox{
		z-index: 2;
		min-width: 97%;
		position: absolute;
		right: 5px;
		bottom: 10px;
		height: 40px;
		padding: 0px;
		margin-top: 20px;
		display: flex;
		border-radius: 10px;
		.button{
			flex: 1;
			// box-shadow: 0px 0px 5px #999;
			min-width: 20%;
			height: 40px;
			line-height: 40px;
			// padding: 0 10%;
			margin: 0 10px;
			text-align: center;
			font-size: 14px;
			font-weight: bolder;
			border-radius: 5px;
			// line-height: 60px;
			&:hover{
				opacity: .8;
			}
		}
		.agree{
			background-color: #46aa46;
			color: white;
		}
		// .refuse{
		// 	background-color: #e75f5f;
		// 	color: white;
		// }
	}
	.comment{
		z-index: 1;
		width: 100%;
		.comment_input{
			width: 90%;
			background-color: white;
			margin: 0 auto;
			border: 1px dotted #aaa;
			// border-bottom: 1px dotted #aaa;
			padding: 1em;
		}
		.title{
			font-weight: bolder;
			margin: 5px;
			// padding: 5px 0;
			font-size: 14px;
			// border-bottom: 1px solid #999;
		}
	}
</style>

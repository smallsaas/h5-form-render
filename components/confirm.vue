<template>
	<view class="Confirm" style="position: relative;">
		<view class="comment">
			<view class="title" v-if="config.placeholder">{{config.placeholder}}</view>
			<textarea adjust-position="true" v-model:value="comment" class="comment_input"
			:placeholder="'请输入'+(config.placeholder||'...')"
			maxlength="-1"
			></textarea>
		</view>
		<view class="ConfirmBox">
			<view class="agree button" @click="GetAgree()">
				{{config.agreeText}}
			</view>
<!-- 			<view class="refuse button" @click="GetRefuse()">
				{{config.refuseText}}
			</view> -->
		</view>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	export default {
		name:"confirm",
		data() {
			return {
				comment:""
			};
		},
		props:{
			config:{
				type:Object,
				default(){
					return {
						agreeText:"同意",
						refuseText:"拒绝",
						placeholder:"请输入..."
					}
				}
			},
			LastKey:Object
		},
		methods:{
			GetAgree(){
				// console.log(value);
				// console.log(this.comment)
				console.log(this.LastKey)
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
					"operType":"resolveDelegate",
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
								title:"审批成功"
							})
							console.log(page)
							uni.reLaunch({
								url:page.$page.fullPath,
								fail(e) {
									console.log(e)
								}
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
		width: 25%;
		position: absolute;
		right: 5px;
		bottom: 10px;
		height: 40px;
		margin-top: 20px;
		display: flex;
		border-radius: 10px;
		.button{
			flex: 1;
			// box-shadow: 0px 0px 5px #999;
			height: 40px;
			line-height: 40px;
			margin: 0 5%;
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

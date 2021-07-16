<template>
	<view class="content">
		<label class="title">请扫描企业营业执照</label>
		<van-uploader @after-read="handleAfterRead">
			<!-- <van-button plain hairline type="primary"></van-button> -->
			<image :src="icon.picture" class="icon" style="height: 50rpx;width: 50rpx;float: right;"/>
		</van-uploader>
	</view>

</template>

<script>
	import {
		globalConfig
	} from '@/config.js'
	import { upLoad } from '@/common/request.js'
	export default {
		name:"c-lincense",
		data() {
			return {
				icon:null,
				header: { // 请求token
					Authorization: `Bearer eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE5LCJkYXlPZldlZWsiOiJNT05EQVkiLCJkYXlPZlllYXIiOjIwMCwiaG91ciI6MTAsIm1pbnV0ZSI6MjksIm1vbnRoIjoiSlVMWSIsIm1vbnRoVmFsdWUiOjcsIm5hbm8iOjM2NzAwMDAwMCwic2Vjb25kIjoxMCwieWVhciI6MjAyMSwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifX0sInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImFsZyI6IkhTMjU2In0.eyJhY2Nlc3NfdG9rZW4iOiIyNGM2NTJlZjE4MDI0NTY3OWFiNTI2MjhkNDM1ZWMzZCIsInJlZnJlc2hfdG9rZW4iOiI2OGIxM2I3OTkzZDk0YTRmOGU3OTlhY2NkY2ZiODRhYiIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6NDAsImRlcHRfaWQiOjEsInVzZXJuYW1lIjoiMTExMTExIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsInNjb3BlIjoic2VydmVyIiwibGljZW5jZSI6InByb2dyZXNzIiwiZnJvbSI6MCwidGltZV9zdGFtcCI6IjE2MjU3OTc3NTAiLCJyb2xlX2NvZGVzIjpbIlJPTEVfQURNSU4iXX0.y9jJ1nK1YCIQWV1PSD0xKTi64dsvrnqDvAuvZsSo5dw`,
					token: 'eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE5LCJkYXlPZldlZWsiOiJNT05EQVkiLCJkYXlPZlllYXIiOjIwMCwiaG91ciI6MTAsIm1pbnV0ZSI6MjksIm1vbnRoIjoiSlVMWSIsIm1vbnRoVmFsdWUiOjcsIm5hbm8iOjM2NzAwMDAwMCwic2Vjb25kIjoxMCwieWVhciI6MjAyMSwiY2hyb25vbG9neSI6eyJjYWxlbmRhclR5cGUiOiJpc284NjAxIiwiaWQiOiJJU08ifX0sInRva2VuX3R5cGUiOiJCZWFyZXIiLCJzY29wZSI6InNlcnZlciIsImFsZyI6IkhTMjU2In0.eyJhY2Nlc3NfdG9rZW4iOiIyNGM2NTJlZjE4MDI0NTY3OWFiNTI2MjhkNDM1ZWMzZCIsInJlZnJlc2hfdG9rZW4iOiI2OGIxM2I3OTkzZDk0YTRmOGU3OTlhY2NkY2ZiODRhYiIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6NDAsImRlcHRfaWQiOjEsInVzZXJuYW1lIjoiMTExMTExIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsInNjb3BlIjoic2VydmVyIiwibGljZW5jZSI6InByb2dyZXNzIiwiZnJvbSI6MCwidGltZV9zdGFtcCI6IjE2MjU3OTc3NTAiLCJyb2xlX2NvZGVzIjpbIlJPTEVfQURNSU4iXX0.y9jJ1nK1YCIQWV1PSD0xKTi64dsvrnqDvAuvZsSo5dw',
					"Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryAFRaG58f2nIb0mPB"
				},
			}
		},
		created() {
			this.icon = globalConfig.icon
		},
		methods: {
			handleAfterRead(event) {
				const {
					file
				} = event.detail
				
				//识别图片
				this.handleGetLicence(file)
			},

			handleGetLicence(file) {
				const data = {
					file: file
				}
				uni.showLoading({
					title:"识别中"
				})
				uni.uploadFile({
					url: globalConfig.workflowEP + '/executive/companyattachment/ocr/licence',
					filePath: file.url,
					name: "file",
					header: this.header,
					formData: data,
					success: (res) => {
						if(res.statusCode == 200){
							const jsonObject = this.strToJson(res.data)
							console.log('返回数据 = ', jsonObject)
							this.$emit('getValue',jsonObject.data)
							uni.hideLoading()
						}
					},
					fail:(err) =>{
						console.log('操作失败 = ', err)
						uni.showModal({
							title:"识别失败！"
						})
					}
				})
			},
			
			strToJson(data){
				var str = data;
				var jsonStr = str.replace(" ", "");
				if (typeof jsonStr != 'object') {
					jsonStr = jsonStr.replace(/\ufeff/g, "");//重点
					return JSON.parse(jsonStr);
				}
			}
		}
	}
</script>

<style lang="less">
	.content{
		// margin: 15px 0 0 15px;
		// position: relative;
		margin: 20px;
		width: auto;
		display: flex;
		// box-shadow: 0px 0px 1px #aaa;
		.title{
			font-weight: bolder;
			font-size: 14px;
			flex: 1;
			line-height: 50rpx;
		}
		.icon{
			// position: absolute;
			// right: 5px;
			// top: 5px;
		}
	}
</style>

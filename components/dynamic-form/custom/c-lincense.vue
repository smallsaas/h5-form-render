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
					Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`,
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
				console.log(data)
				uni.showLoading({
					title:"识别中"
				})
				uni.uploadFile({
					url: globalConfig.YyzzEP + '/executive/companyattachment/ocr/licence',
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
						uni.hideLoading()
						console.log('操作失败 = ', err)
						uni.showModal({
							title:err.errMsg
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
		margin: 0px 15px;
		padding: 10px 0;
		width: auto;
		display: flex;
		border-bottom: 1px solid #F5F6F7;
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

<template>
	<view class="centerBox">
		<view v-if="url">
			<view>表单的下载地址:</view>
			<view style="color: #1A5EB5;" @click="copy(url)">{{url}}</view>
			<view>华为手机使用本地浏览器访问</view>
			<view>其他品牌手机如果无法访问</view>
			<view>请使用Edge浏览器访问</view>
			<view style="margin: 3% 18%;" class="qrbox">
				<ayQrcode ref="qrcode" :modal="modal_qr" :url="url" @hideQrcode="hideQrcode" :height="200" :width="200" 
				/>
			</view>
			<view>长按二维码进行保存</view>
			<button class="boxButton" @click="copy(url)">点击复制</button>
			<button class="boxButton" @click="toHome()">返回主页</button>
		</view>
		<view v-else style="width: 100%;text-align: center;">请填写完成表单之后再访问此页面！</view>
	</view>
</template>

<script>
	import { globalConfig } from '@/config.js'
	import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"
	export default {
		data() {
			return {
				pId:null,
				formId:null,
				dataId:null,
				url:null,
				modal_qr: false
			}
		},
		components: {
			ayQrcode,

		},
		methods: {
			// 展示二维码
			showQrcode() {
				let _this = this;
				this.modal_qr = true;
				// uni.showLoading()
				setTimeout(function() {
					// uni.hideLoading()
					_this.$refs.qrcode.crtQrCode()
				}, 50)
			},

			//传入组件的方法
			hideQrcode() {
				this.modal_qr = false;
			},
			// 复制操作
			copy(value){
				uni.setClipboardData({
					data:value,
					success() {
						uni.showToast({
							title:"复制成功"
						})
					}
				})
			},
			getWindowUrl(){
				let that = this
				uni.request({
					url:`${globalConfig.workflowEP}/api.flow.examine/processDetail`,
					method:"POST",
					data:{
						processInstanceId:this.pId
					},
					header:{
							Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
					},
					complete(value){
						console.log(value,"value")
						if(value.data.code === "00000"){
							that.formId = value.data.data.form.id
							that.dataId = value.data.data.formData.id
							that.url = `https://zf.hdqmjs.com/#/print?formId=${that.formId}&dataId=${that.dataId}`
						}else{
							uni.showModal({
								showCancel:false,
								content:value.data.msg
							})
						}
					}
				})
			},
			toHome(){
				uni.navigateBack({
					delta:10
				})
			}
		},
		onLoad(e){
			this.pId = e.processInstanceId
			if(this.pId){
				this.getWindowUrl()
			}
			if(this.url){
				this.showQrcode();//一加载生成二维码
			}
		},
		mounted() {
			this.showQrcode();//一加载生成二维码
		},
		updated() {
			this.showQrcode();//一加载生成二维码
		}
	}
</script>

<style>
	.centerBox{
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 18px;
    height: 100vh;
		width: 100vw;
    font-weight: bolder;
	}
	.boxButton{
    color: white;
    background-color: #1A5EB5;
    width: 130px;
    margin: 20px auto;
	}
	.qrbox{
		margin: 3% 18%;
		width: 220px;
		height: 220px;
		display: flex;
		/* top: 50%; */
		/* left: 50%; */
		/* box-shadow: 0 0 2px black; */
		overflow: hidden;
		position: relative;
		left: 8vw;
	}
</style>

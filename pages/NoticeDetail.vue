<!-- 跳转标准配置页面，纯配置页面都可以跳转到这，需要带参数！ -->
<template>
	<view v-if="srvFormData" class="page">
		<!-- <dynamic-page :API="api" :srvFormData="srvFormData" Details="true" v-if="api"></dynamic-page> -->
		<view class="title">{{srvFormData.title}}</view>
		<view class="author">发布人：{{srvFormData.author}}</view>
		<view class="time">发布时间：{{srvFormData.create_time}}</view>
		<view class="content" v-html="Debug(srvFormData.content)">
		</view>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	import dynamicPage from '@/components/dynamic-page/index.vue'
	export default {
		components:{
			dynamicPage
		},
		onLoad(e) {
			let decode
			decode = JSON.parse(decodeURIComponent(e.query))
			console.log(decode)
			this.api=`${globalConfig.formHost}?id=66661`
			// this.id=decode.id
			this.getData(decode.id)
			console.log("进来",this.srvFormData)
		},
		data() {
			return {
				api:null,
				srvFormData:null
			}
		},
		methods: {
			Debug(item){
				// console.log()
				item = item.replace(/src="/g, 'src="https://images.weserv.nl/?url=')
				//清除background样式
				let str = item.split(";")
				// console.log("STR",str)
				for(var i in str){
					// console.log("TEST",i)
					if(str[i].indexOf("background")!==-1){
						console.log("I",str[i])
						str[i]=null
					}
				}
				str = str.join(";")
				str = str.replace(/;;/g,';')
				item = str
				// console.log(str)
				return item
			},
				getData(id){
					let that = this
					uni.request({
						url:`${globalConfig.workflowEP}/api.page.design.form/loadFormInfo`,
						method:"POST",
						header:{
							Authorization:`${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`
						},
						data:{
							code:"tz",
							dataId:id
						},
						complete(res) {
							console.log(res)
							that.srvFormData=res.data.data.formData
							console.log("noticeSrv",that.srvFormData)
						}
					})
				}
		}
	}
</script>

<style lang="less">
	.page{
		padding: 20rpx;
		margin: 20rpx;
		box-shadow: 0px 0px 10px #aaa;
		.title{
			font-size: 40rpx;
			text-align: center;
			font-weight: bolder;
			margin-bottom: 1em;
		}
		.author{
			// font-weight: bold;
			text-align: center;
			font-size: 25rpx;
		}
		.time{
			color: #999;
			text-align: center;
			font-size: 25rpx;
		}
		.content{
			margin-top: 1em;
			
		}
	}
</style>

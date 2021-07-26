<template>
	
	<view>
<!-- 		<dynamic-page
		   :API="getPageAapi"
		   contentType="json"
		   contentPayload="data.formInfo.appDesignData"
		/> -->
		<dynamic-page
			v-if="key&&getPageAapi"
		   :API="getPageAapi"
			 :processDefineKey="key"
		/>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	import {Base64} from '@/utils/tools.js'
	export default {
		components:{ dynamicPage },
		mounted() {

		},
		onLoad (e){
			uni.showLoading({
				title:"加载中"
			})
			// console.log("e",e)
			let decode = JSON.parse(decodeURIComponent(e.query))
			console.log("decode",decode)
			// console.log(e.id)
			// console.log(e.key)
			this.getPageAapi = globalConfig.formHost + "?id=" + decode.id
			this.key = decode.key
			uni.hideLoading()
		},
		data() {
			return {
				key:null,
				// 旧工作流
				// getPageAapi: 'https://api.mock.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: 'https://api.uat.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: globalConfig.formHost + '?id=800',
				// 外部工作流
				// getPageAapi: globalConfig.formHost + '?id=10089',
				getPageAapi:null
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
	// page {
	// 	height: 100%;
	// 	background-color: #E5E5E5;
	// 	padding: 6rpx 0;
	// }
	
</style>
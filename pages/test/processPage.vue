<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		   contentType="json"
		   contentPayload="data.formInfo.appDesignData"
		/>
	</view>

</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	
	export default {
		components:{ dynamicPage },
		onLoad (e){
		},
		data() {
			return {
				// getPageAapi: 'https://api.mock.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				getPageAapi: 'https://api.uat.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: globalConfig.formHost + '?id=800',
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
		padding: 6rpx 0;
	}
	
</style>
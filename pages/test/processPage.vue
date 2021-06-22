<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		/>
	</view>

</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { config } from '@/config.js'
	
	export default {
		components:{ dynamicPage },
		onLoad (e){
		},
		data() {
			return {
				configHost: 'http://192.168.3.239:8090',
				getPageAapi: 'http://192.168.3.239:8090' + '/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
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
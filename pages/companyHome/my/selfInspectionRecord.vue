<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		/>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	export default {
		components:{ dynamicPage },
		onLoad (e){
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=110',
				// getPageAapi: uni.getStorageSync('globalConfigStorage').formEP + '?id=110', //通过获取缓存里域名
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

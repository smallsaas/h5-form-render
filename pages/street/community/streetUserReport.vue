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
				// getPageAapi: globalConfig.formHost + '?id=510',
				getPageAapi: globalConfig.formHost + '?id=5600',
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

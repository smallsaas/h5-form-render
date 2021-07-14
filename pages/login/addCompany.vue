<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
			 processDefineKey="yyzz"
			 FormKey="yyzz"
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
				getPageAapi: globalConfig.formHost + '?id=12000',
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
</style>
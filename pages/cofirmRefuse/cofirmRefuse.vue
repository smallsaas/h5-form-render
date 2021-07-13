<template>
	
	<view>
<!-- 		<dynamic-page
		   :API="getPageAapi"
		   contentType="json"
		   contentPayload="data.formInfo.appDesignData"
		/> -->
		<dynamic-page
		   :API="getPageAapi"
			 :processDefineKey="key"
			 :FormKey="key"
		/>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	
	export default {
		components:{ dynamicPage },
		onLoad (e){
			let decode = JSON.parse(decodeURIComponent(e.query))
			console.log(decode)
			this.key=decode.key
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=10090',
				key:""
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
</style>
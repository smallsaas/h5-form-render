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
			 :customValues="custom"
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
			// console.log("decode",decode)
			this.key=decode.key
			this.custom=decode.customValues
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=10090',
				key:"",
				custom:""
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
</style>
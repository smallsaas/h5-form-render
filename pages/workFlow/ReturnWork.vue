<template>
	
	<view>
<!-- 		<dynamic-page
		   :API="getPageAapi"
		   contentType="json"
		   contentPayload="data.formInfo.appDesignData"
		/> -->
		<dynamic-page
		   :API="getPageAapi"
			 :srvFormData="list"
			 processDefineKey="fg"
		/>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	
	export default {
		components:{ dynamicPage },
		mounted() {
			let list = globalConfig.companyInfo
			// this.list = globalConfig.companyInfo
			this.list["businessLicense"]=list["licenceNo"]
			this.list["companyName"]=list["name"]
			this.list["companyType"]=list["type"]
			this.list["companyAddress"]=list["address"]
			this.list["companyLegalPerson"]=list["personName"]
			this.list["companyPhone"]=list["personPhone"]
			
			console.log("companyInfo",this.list)
		},
		onLoad (e){
			
		},
		onUnload(e) {
			console.log("unload",e)
		},
		data() {
			return {
				list:{},
				// 旧工作流
				// getPageAapi: 'https://api.mock.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: 'https://api.uat.smallsaas.cn/api/u/workflow/process/code?id=e84ffab7c2ed22f86fffd99d62b1fd5d',
				// getPageAapi: globalConfig.formHost + '?id=800',
				// 外部工作流
				getPageAapi: globalConfig.formHost + '?id=10087',
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
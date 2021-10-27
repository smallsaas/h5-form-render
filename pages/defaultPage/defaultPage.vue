<!-- 跳转标准配置页面，纯配置页面都可以跳转到这，需要带参数！ -->
<template>
	<view>
		<dynamic-page :API="api" v-if="api" :otherSumbitData="otherSumbitData"></dynamic-page>
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
			// console.log(e)
			let decode
			decode = e.query?JSON.parse(decodeURIComponent(e.query)):e
			// console.log(decode)
			this.api=`${globalConfig.formHost}?id=${decode.id}`
			let companyInfo = uni.getStorageSync("companyInfo")
			let stringCompany = JSON.stringify(companyInfo)
			this.otherSumbitData = {
				"companyId":companyInfo.id,
				"companyName":companyInfo.name,
				"companyType":companyInfo.type,
				"businessLicense":companyInfo.lincenseNo,
				"companyLegalPerson":companyInfo.personName,
				"companyPhone":companyInfo.personName,
				"companyAddress":companyInfo.address
			}
		},
		data() {
			return {
				api:null,
				otherSumbitData:{}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

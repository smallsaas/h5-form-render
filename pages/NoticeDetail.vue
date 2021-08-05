<!-- 跳转标准配置页面，纯配置页面都可以跳转到这，需要带参数！ -->
<template>
	<view>
		<dynamic-page :API="api" :srvFormData="srvFormData" Details="true" v-if="api"></dynamic-page>
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
			let decode
			decode = JSON.parse(decodeURIComponent(e.query))
			console.log(decode)
			this.api=`${globalConfig.formHost}?id=66661`
			// this.id=decode.id
			this.getData(decode.id)
			console.log("进来",this.srvFormData)
		},
		data() {
			return {
				api:null,
				srvFormData:null
			}
		},
		methods: {
				getData(id){
					let that = this
					uni.request({
						url:`${globalConfig.workflowEP}/api.page.design.form/loadFormInfo`,
						method:"POST",
						header:{
							Authorization:`${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`
						},
						data:{
							code:"tz",
							dataId:id
						},
						complete(res) {
							console.log(res)
							that.srvFormData=res.data.data.formData
							console.log("noticeSrv",that.srvFormData)
						}
					})
				}
		}
	}
</script>

<style>

</style>

<template>
	<view>
<!-- 		<swiper
		autoplay="true"
		interval="5000"
		circular="true"
		vertical="true"
		style="background-color: #0005;height: 30px;line-height: 30px;text-align: center;color: white;"
		>
			<swiper-item v-for="(item,i) in Noticelist" :key="i" style="width: 100%;">
				<img style="width: 15px;height: 15px;position: absolute;left: 10px;top: 50%;transform: translate(0,-50%);" :src="icon.report"></img>
				<span style="width: 80%;">{{item.author}}:{{item.title}}</span>
			</swiper-item>
		</swiper> -->
		<dynamic-page
			:API="api"
			v-if="api"
		></dynamic-page>
	</view>
</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import {globalConfig} from '@/config.js'
	export default {
		name:"notice",
		created() {
			this.api=`${globalConfig.formHost}?id=66666666`
		},
		data() {
			return {
				api:null
			}
		},
		components:{
			dynamicPage
		},
		methods: {
			
			// getNotice(){
			// 	let that = this
			// 	uni.request({
			// 		url:`${globalConfig.workflowEP}/api.page.design.form/listDataPage`,
			// 		method:"POST",
			// 		data:{
			// 			"pageNo":1,
			// 			"pageSize":20,
			// 			"formId":"46"
			// 		},
			// 		header:{
			// 			Authorization:`Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`
			// 		},
			// 		complete(res) {
			// 			// console.log("list",res)
			// 			that.Noticelist = res.data.data.formDataPage.list
			// 		}
			// 	})
			// },
		}
	}
</script>

<style>

</style>

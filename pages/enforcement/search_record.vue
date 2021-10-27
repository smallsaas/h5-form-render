<!-- 本页面用于查询自查和复工记录 -->
<template>
	<view>
		<dynamic-page
			:API="api"
			:otherSearch="otherSearch"
		></dynamic-page>
	</view>
</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import {globalConfig} from '@/config.js'
	export default {
		data() {
			return {
				api:`${globalConfig.formHost}?id=7777615`,
				otherSearch:{}
			}
		},
		onLoad(e){
			let companyId = e.id
			let formCode = e.code
			// 动态更变页面名称
			if(e.name){
				if(e.code === "zc"){
					uni.setNavigationBarTitle({
						title:e.title+"自查记录"
					})
				}else if(e.code === "fg"){
					uni.setNavigationBarTitle({
						title:e.title+"复工记录"
					})
				}else{
					uni.setNavigationBarTitle({
						title:e.title+"记录"
					})
				}
			}else{
				if(e.code === "zc"){
					uni.setNavigationBarTitle({
						title:"自查记录"
					})
				}else if(e.code === "fg"){
					uni.setNavigationBarTitle({
						title:"复工记录"
					})
				}else{
					uni.setNavigationBarTitle({
						title:"记录"
					})
				}
			}
			this.otherSearch = {
				"formCode":formCode,
				"customValues":{
					"companyId":companyId
				}
			}
		},
		components:{
			dynamicPage
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

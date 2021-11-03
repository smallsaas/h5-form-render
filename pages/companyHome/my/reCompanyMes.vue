<template>
	<view v-if="list">
		<!-- 更改企业信息 -->
		<dynamic-page
			:API="loadAPI"
			:srvFormData="list"
			isCompany="true"
		></dynamic-page>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	import dynamicPage from '@/components/dynamic-page/index.vue'
	export default {
		data() {
			return {
				list:null,
				loadAPI:`${globalConfig.workflowEP}/form?id=88888`
			}
		},
		components:{
			dynamicPage
		},
		created() {
			this.getMyCompanyMes()
		},
		methods: {
			// 获取我的企业信息
			getMyCompanyMes(){
				let that = this
				uni.request({
					url:`${globalConfig.workflowEP}/executive/companyinfo/myCompany`,
					method:"GET",
					header:{
						Authorization:`Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`
					},
					complete(res) {
						// console.log("res",res)
						if(res.statusCode===200){
							let list = res.data.data
							let newList = {}
							for(var item in list){
								if(!Array.isArray(list[item])){
									newList[item] = list[item]
								}
							}
							that.list=newList
							// console.log(that.list)
						}
					}
				})
			}
			
		}
	}
</script>

<style>

</style>

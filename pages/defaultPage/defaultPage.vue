<!-- 跳转标准配置页面，纯配置页面都可以跳转到这，需要带参数！ -->
<template>
	<view>
		<dynamic-page :API="api" v-if="api"></dynamic-page>
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
			this.api=`${globalConfig.formHost}?id=${decode.id}`
		},
		data() {
			return {
				api:null
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

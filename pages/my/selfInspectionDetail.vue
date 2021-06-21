<template>
	<view>
		<dynamic-page
		   :API="getPageAapi"
		/>
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { config } from '@/config.js'

	export default {
		components: {
			dynamicPage
		},
		onLoad(e) {
			var query = {};
			if (e.query) {
				query = { ...JSON.parse(decodeURIComponent(e.query)) }
				this.getPageAapi =  config.formHost + '/form?id=' + query.id
				console.log('this.getPageAapi = ', this.getPageAapi)
			}else {
				console.error('获取id数据异常')
			}
		},
		data() {
			return {
				getPageAapi: config.formHost + '/form?id=300',
			}
		},
		methods: {
		}
	}
</script>

<style lang="less">
	// page {
	// 	height: 100%;
	// 	background-color: #E5E5E5;
	// 	padding: 18rpx 0;
	// }
	
</style>

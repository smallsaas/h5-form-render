<template>
	<view>
		<dynamic-page
		   :API="getPageApi"
		   :dynamicLoadUrl="dynamicLoadUrl"
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
			if (e.id) {
				this.dynamicLoadUrl =  config.formHost + '/data?id=' + e.id
			}else {
				console.error('获取id异常')
			}
		},
		data() {
			return {
				dynamicLoadUrl: '',
				getPageApi: config.formHost + '/form?id=141',
			}
		},
		methods: {
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
		padding: 18rpx 0;
	}

</style>
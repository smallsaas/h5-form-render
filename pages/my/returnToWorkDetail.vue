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
	import { globalConfig } from '@/config.js'

	export default {
		components: {
			dynamicPage
		},
		onLoad(e) {
			var query = {};
			if (e.query) {
				query = { ...JSON.parse(decodeURIComponent(e.query)) }
			console.log('this.query.id = ', this.query.id)
				this.dynamicLoadUrl =  globalConfig.formHost + '/data?id=' + query.id
			}else {
				console.error('获取id异常')
			}
		},
		data() {
			return {
				record: {
					dynamicLoadUrl: '',
					getPageApi: globalConfig.formHost + '/form?id=121',
				},
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

	.card {
		padding: 26rpx 16rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 14rpx;
	}

	.title {
		color: #505050;
		font-size: 32rpx;
		line-height: 150%;
		text-align: left;
		font-weight: bold;
		padding-left: 20rpx;
		margin-bottom: 10rpx;
	}

	.enterprise-info{
		padding: 0 0rpx 0rpx 20rpx;
		
		.item{
			height: 50rpx;
			display: flex;
			align-items: center;
			.label{
				font-size: 26rpx;
				width: 188rpx;
				color: #808080;
			}
			
			.text{
				font-size: 28rpx;
				color: #383838;
			}
		}
	
	}
</style>

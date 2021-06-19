<template>
	<view class='card'>
	
		<van-steps :steps="steps" :active="active" direction="vertical" active-color="#ee0a24" />
	
	</view>
</template>

<script>
	export default {
		data(){
			return {
				active: -1,
				steps: [{
						text: '2020-12-20 12:12:12',
						descLabel: '执法对象: ',
						desc: '北京天翔文化产业有限公司',
						opinionLabel: '执法地点: ',
						opinion: '北京海淀区清华园街道1101号',
						inactiveIcon: 'circle',
						activeIcon: 'checked',
						isLink: true
					},
					{
						text: '2020-12-23 15:20:23',
						descLabel: '执法对象: ',
						desc: '北京天翔文化产业有限公司',
						opinionLabel: '执法地点: ',
						opinion: '北京海淀区清华园街道1101号',
						inactiveIcon: 'circle',
						activeIcon: 'checked',
						isLink: true
					},
				]
			}
		}
		
	}
</script>

<style lang="less">
	.card {
		padding: 26rpx 16rpx;
		background-color: #ffffff;
		border-radius: 16rpx 16rpx 0rpx 0;
		margin-bottom: 18rpx;
	}
</style>

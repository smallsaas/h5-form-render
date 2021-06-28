<template>
	<view>
		<view class="home_container">
			<view class="venue_tag" @click="handleToCompany">
				<text>企业自查</text>
			</view>
			
		</view>
		
		<view class="home_container">
			
			<view class="venue_tag" @click="handleCompanyHome">
				<text>首页</text>
			</view>
			
			<view class="venue_tag" @click="handleToMy">
				<text>我的</text>
			</view>
			
<!-- 			<view class="venue_tag" @click="handleToReturnToWork">
				<text>复工</text>
			</view> -->
			
<!-- 			<view class="venue_tag" @click="handleToSelfInspectionRecord">
				<text>自查记录</text>
			</view> -->
			
<!-- 			<view class="venue_tag" @click="handleToSelfInspectionDetail">
				<text>自查详情</text>
			</view> -->
			
			<view class="venue_tag" @click="handleToSignature">
				<text>签名</text>
			</view>
			
			
<!-- 			<view class="venue_tag" @click="handleReturnToWorkRecord">
				<text>复工记录</text>
			</view>	 -->	
				
<!-- 			<view class="venue_tag" @click="handleReturnToWorkDetail">
				<text>复工详情</text>
			</view>	 -->
				
<!-- 			<view class="venue_tag" @click="handleLawEnforcementRecord">
				<text>执法记录</text>
			</view> -->
			
<!-- 			<view class="venue_tag" @click="handleLawEnforcementDetail">
				<text>执法详情</text>
			</view> -->
			
			<view class="venue_tag" @click="handleLawProcessPage">
				<text>流程测试</text>
			</view>
			
			<view class="venue_tag" @click="handleWxInfo">
				<text>获取微信用户信息</text>
			</view>
			
		</view>
		

	</view>

</template>

<script>
	export default {
		methods: {
			handleToCompany () {
				uni.navigateTo({
					url: '../company/check'
				})
			},
			handleToMy () {
				uni.navigateTo({
					url: '../companyHome/my/index'
				})
			},
			handleCompanyHome () {
				uni.navigateTo({
					url: '../companyHome/home'
				})
			},
			// handleToReturnToWork () {
			// 	uni.navigateTo({
			// 		url: '../my/returnToWork'
			// 	})
			// },
			// handleToSelfInspectionRecord () {
			// 	uni.navigateTo({
			// 		url: '../my/selfInspectionRecord'
			// 	})
			// },
			// handleToSelfInspectionDetail () {
			// 	uni.navigateTo({
			// 		url: '../my/selfInspectionDetail'
			// 	})
			// },
			handleToSignature (){
				uni.navigateTo({
					url: '../test/signature'
				})
			},
			// handleReturnToWorkRecord () {
			// 	uni.navigateTo({
			// 		url: '../my/returnToWorkRecord'
			// 	})
			// },
			// handleReturnToWorkDetail () {
			// 	uni.navigateTo({
			// 		url: '../my/returnToWorkDetail'
			// 	})
			// },
			// handleLawEnforcementRecord () {
			// 	uni.navigateTo({
			// 		url: '../my/lawEnforcementRecord'
			// 	})
			// },
			// handleLawEnforcementDetail () {
			// 	uni.navigateTo({
			// 		url: '../my/lawEnforcementDetail'
			// 	})
			// },
			handleLawProcessPage () {
				uni.navigateTo({
					url: '../test/processPage'
				})
			},
			handleWxInfo () {
				uni.navigateTo({
					url: './getWXInfo'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
    .baseFlex {
        display: flex;
        align-items: center;
    }
	.home_container {
		padding: 16rpx;
        .baseFlex();
		// justify-content: center;
		// height: 100vh;
		flex-wrap: wrap;
		.venue_tag {
			.baseFlex();
			padding: 32rpx;
			color: rgba(80, 80, 80, 1);
			background-color: rgba(214, 239, 238, 1);
			border-radius: 8px;
			font-size: 14px;
			line-height: 150%;
			text-align: center;
			margin: 20rpx 20rpx;
			.sport_image {
				width: 48rpx;
				height: 48rpx;
				margin-right: 8rpx;
			}
		}
	}
</style>

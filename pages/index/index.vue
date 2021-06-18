<template>
	<view>
		<view class="home_container">
			<view class="venue_tag" @click="handleToCompany">
				<text>企业自查</text>
			</view>
		    <view class="venue_tag" @click="handleToTest">
		    	<text>测试</text>
		    </view>
			
		</view>
		
		<view class="home_container">
			
			<view class="venue_tag" @click="handleToMy">
				<text>我的</text>
			</view>
			
			<view class="venue_tag" @click="handleToReturnToWork">
				<text>复工</text>
			</view>
			
			<view class="venue_tag" @click="handleToSelfInspectionRecord">
				<text>自查记录</text>
			</view>
			
			<view class="venue_tag" @click="handleToSelfInspectionDetail">
				<text>自查详情</text>
			</view>
			
			<view class="venue_tag" @click="handleToAutograph">
				<text>签名</text>
			</view>
			
		</view>
	</view>

</template>

<script>
	export default {
		methods: {
            handleToTest () {
               uni.navigateTo({
                    url: '../test/index'
               }) 
            },
			handleToCompany () {
				uni.navigateTo({
					url: '../company/check'
				})
			},
			handleToMy () {
				uni.navigateTo({
					url: '../my/index'
				})
			},
			handleToReturnToWork () {
				uni.navigateTo({
					url: '../my/returnToWork?id=11'
				})
			},
			handleToSelfInspectionRecord () {
				uni.navigateTo({
					url: '../my/selfInspectionRecord?id=12'
				})
			},
			handleToSelfInspectionDetail () {
				uni.navigateTo({
					url: '../my/selfInspectionDetail'
				})
			},
			handleToAutograph (){
				
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

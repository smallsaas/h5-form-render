<template>
	<view class="venue-item">
		<view class="flex">
			<view class="left">
				<image src="../../../static/images/empty.png" />
			</view>
			<view class="middle flex1">
				<view class="title">{{ item.company }}</view>
				<view class="subTitle">
					{{ item.address}}
				</view>
			</view>
			<view class="right">
				<view v-if="item.status === 'pass'" class="status">
					正常营业
				</view>
				<view v-else-if="item.status === 'failed'" class="status" style="background-color: #808080;">
					关闭
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'VenueListItem',
		props: {
			item: Object,
			ext: Object
		}
	}
</script>
<style lang="less" scoped>
	.venue-item {
		padding: 22rpx;
		background: #fff;
		border-bottom: 1px solid #eee;
		font-size: 28rpx;
		transition: all .4s;
		margin: 0 4rpx;

		.flex {
			display: flex;
			flex-direction: row;
			overflow: hidden;

			.left {
				>image{
					width: 140rpx;
					height: 140rpx;
				}
			}
			
			.middle {
				
				margin: 0 10rpx;
				
				.title {
					color: #333;
					font-weight: 700;
					font-size: 32rpx;
				}
				
				.subTitle {
					margin: 10rpx 0;
					color: #505050;
				}
				
				.text-line-1 {
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}

			.flex1 {
				flex: 1;
				max-width: calc(100% - 282rpx);
			}

			.right {
				display: flex;
				justify-content: center;
				align-items:center;
				.status {
					width: 120rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 24rpx;
					background-color: #43CF7C;
					color: #ffffff;
					border-radius: 12rpx;
				}
			}
		}
	}

	.self-item:active {
		background-color: #f2f2f2;
		transition: all .4s;
	}
</style>

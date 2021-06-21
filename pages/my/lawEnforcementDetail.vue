<template>
	<view>
		<view class='card'>
			<!-- <view class='title'>
				<view class="line"></view><view>企业信息</view>
			</view> -->
			<view class='enterprise-info'>
				<view class="item">
					<van-row type="flex">
						<van-col>
							<view class='label'>名称: </view>
						</van-col>
						<van-col>
							<view class='text'>北京天翔文化产业有限公司</view>
						</van-col>
					</van-row>
				</view>
				<view class="item">
					<van-row type="flex">
						<van-col>
							<view class='label'>法定代表人: </view>
						</van-col>
						<van-col>
							<view class='text'>王伟伟</view>
						</van-col>
					</van-row>
				</view>
				
				<view class="item">
					<van-row type="flex">
						<van-col>
							<view class='label'>场所地址: </view>
						</van-col>
						<van-col>
							<view class='text'>北京市海淀区文化产业园A8901</view>
						</van-col>
					</van-row>
				</view>
				
				<view class="item">
					<van-row type="flex">
						<van-col>
							<view class='label'>成立日期: </view>
						</van-col>
						<van-col>
							<view class='text'>2020年3月1日</view>
						</van-col>
					</van-row>
				</view>
			
				<view class="item">
					<van-row type="flex">
						<van-col>
							<view class='label'>联系电话: </view>
						</van-col>
						<van-col>
							<view class='text'>13666000111</view>
						</van-col>
					</van-row>
				</view>
			
			</view>
		</view>

	</view>
</template>

<script>
	import _ from 'lodash';
	// import { getSelfInspectionRecord } from '@/common/api.js'
	import dynamicCell from "@/components/custom-c/cell.vue";

	export default {
		components: {
			dynamicCell
		},
		onLoad(e) {
			// this.initData("110");
		},
		data() {
			return {
				record: {
					id: 1,
				},
			}
		},
		methods: {
			// async initData(id){
			// 	const res = await getSelfInspectionRecord({id: id})
			// 	if (_.get(res, 'code') === 200) {
			// 	    var data = { ..._.get(res, 'data', {}) };
			// 		console.log('data = ', data.record)
			// 		// this.listData = data.record;
			// 	}
			// },
			onItemClick(path) {
				console.log('path = ', path);
			}
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

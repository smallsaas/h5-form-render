<template>
<view>
	<block v-for="(item,index) in listData" :key="index">
		<view class='card'>
			<view class='title'>
				<view>{{ item.year }}</view>
			</view>
			<view class='title' style="font-size: 28rpx;">
				<view>{{ item.startTime}} - {{ item.endTime }}</view>
			</view>
			<!-- <view class='date-info'>
				
			</view> -->
			<view v-for="(cItem,cIndex) in item.cellList" :key="cIndex">
				<dynamic-cell :perem="{
					title: cItem.title
				}" 
				@handleClick="onItemClick(cItem.path)"
				/>
			</view>
			<view class="footer">
				<view>去填写</view>
			</view>
		</view>
	</block>

</view>
</template>

<script>
    import _ from 'lodash';
	// import { getSelfInspectionRecord } from '@/common/api.js'
	import dynamicCell from "@/components/custom-c/cell.vue";
	
	
	export default {
		components: { dynamicCell },
		onLoad (e){
			// this.initData("110");
		},
		data() {
			return {
				listData: [
					{ 
						id: 1, 
						year: "2021年",
						startTime: "4月1日",
						endTime: "4月5日",
						cellList:[
							{title: "4月1日", path: "/4-1"},
							{title: "4月2日", path: "/4-2"},
							{title: "4月3日", path: "/4-3"},
							{title: "4月4日", path: "/4-4"},
						]
					},
					{
						id: 2, 
						year: "2021年",
						startTime: "5月1日",
						endTime: "5月5日",
						cellList:[
							{title: "5月1日", path: "/5-1"},
							{title: "5月2日", path: "/5-2"},
							{title: "5月3日", path: "/5-3"},
							{title: "5月4日", path: "/5-4"},
							{title: "5月5日", path: "/5-5"},
						]
					},
					{
						id: 3, 
						year: "2021年",
						startTime: "6月1日",
						endTime: "6月3日",
						cellList:[
							{title: "6月1日", path: "/6-1"},
							{title: "6月2日", path: "/6-2"},
							{title: "6月3日", path: "/6-3"},
						]
					},
				],
			}
		},
		methods:{
			// async initData(id){
			// 	const res = await getSelfInspectionRecord({id: id})
			// 	if (_.get(res, 'code') === 200) {
			// 	    var data = { ..._.get(res, 'data', {}) };
			// 		console.log('data = ', data.record)
			// 		// this.listData = data.record;
			// 	}
			// },
			onItemClick(path){
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
	
	.title{
		color: #505050;
		font-size: 32rpx;
		line-height: 150%;
		text-align: left;
		font-weight: bold;
		padding-left: 20rpx;
		margin-bottom: 10rpx;
	}
	
	.date-info{
		margin-top: 16rpx;
		padding: 0 0rpx 0rpx 38rpx;
	}
	
	.footer{
		height: 90rpx;
		display: flex;
		justify-content: flex-end;
		justify-items: center;
		padding-right: 20rpx;
		
		>view{
			width: 120rpx;
			height: 72rpx;
			line-height: 72rpx;
			font-size: 24rpx;
			text-align: center;
			color: #2a82e4;
			margin-top: 16rpx;
		}
	}
	
</style>

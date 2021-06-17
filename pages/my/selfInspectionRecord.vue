<template>
	<view>
		<view class="art-item">
		  <view class="flex">
		    <view class="left flex1" v-for="(item,index) in listData" :key="index">
		      <view class="title text-line-1">{{ item.title }}</view>
		      <view class="desc text-line-1">
		        期间: {{ item.startTime }} - {{ item.endTime }}
		      </view>
		      <view class="time">{{ item.submitTime }}</view>
		    </view>
		    <view class="right">
				<view class="status">
					通过
				</view>
				<!-- <view class="failed">
					未通过
				</view> -->
		    </view>
		  </view>
		</view>
	</view>

</template>

<script>
    import _ from 'lodash';
	import { getSelfInspectionRecord } from '@/common/api.js'
	
	export default {
		onLoad (e){
			this.initData("101");
		},
		data() {
			return {
				listData:[]
			}
		},
		methods:{
			async initData(id){
				const res = await getSelfInspectionRecord({id: id})
				if (_.get(res, 'code') === 200) {
				    var data = { ..._.get(res, 'data', {}) };
					console.log('data = ', data)
					this.listData = data.record;
				}
			}
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
		padding: 6rpx 0;
	}
	
	.art-item {
	  padding: 32rpx;
	  background: #fff;
	  border-bottom: 1px solid #eee;
	  font-size: 28rpx;
	  transition: all .4s;
	  margin: 0 4rpx;
	  
	  .flex {
	      display: flex;
		  justify-content: space-between;
		  
	      .left {
	        .title {
	          color: #333;
	          font-weight: 700;
	        }
	        .desc {
	          margin: 10rpx 0;
	          color: #a9a9a9;
	        }
	        .text-line-1 {
	            text-overflow: ellipsis;
	            white-space: nowrap;
	            overflow: hidden;
	        }
	        .time {
	          color: #a9a9a9;
	        } 
	      }
		  
	      .flex1 {
	        flex: 1;
	        max-width: calc(100% - 200rpx);
	      }
	      
	      .right {
	        width: 164rpx;
	        height: 128rpx;
			.status{
				width: 170rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 24rpx;
				background-color: #43CF7C;
				color: #ffffff;
				border-radius: 12rpx;
				margin-top: 20rpx;
			}
	      }
	  }
	}
</style>

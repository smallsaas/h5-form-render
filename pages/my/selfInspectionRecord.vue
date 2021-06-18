<template>
	<view>
		<block v-for="(item,index) in listData" :key="index">
			<view class="self-item">
			  <view class="flex">
			    <view class="left flex1" >
			      <view class="title text-line-1">{{ item.title }}</view>
			      <view class="times text-line-1">
			        期间: {{ item.startTime }} - {{ item.endTime }}
			      </view>
			      <view class="submit-time">{{ item.submitTime }}</view>
			    </view>
			    <view class="right">
					<view v-if="item.status === 'pass'" class="status">
						通过
					</view>
					<view v-else-if="item.status === 'failed'" class="status" style="background-color: #D43030;">
						未通过
					</view>
			    </view>
			  </view>
			</view>
		</block>
	</view>

	
<!-- 	<view>
		<dynamic-list :config="config" />
	</view> -->


</template>

<script>
    import _ from 'lodash';
	import { getSelfInspectionRecord } from '@/common/api.js'
	
	import dynamicList from '@/components/dynamic-list/index.vue';
    import { getDynamicListField } from '@/common/api.js';
	
	export default {
		onLoad (e){
			// this.initPage("110")
			this.initData("110");
		},
		data() {
			return {
				config: {},
				listData:[]
			}
		},
		methods:{
			async initData(id){
				const res = await getSelfInspectionRecord({id: id})
				if (_.get(res, 'code') === 200) {
				    var data = { ..._.get(res, 'data', {}) };
					console.log('data = ', data.record)
					this.listData = data.record;
				}
			},
			// async initPage (id) {
			// 	const res = await getDynamicListField({ id: id })
			// 	if (_.get(res, 'code') === 200) {
			// 		this.config = _.cloneDeep(_.get(res, 'data', {}))
			// 		console.log('this.config = ', this.config)
			// 	}
			// }
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
		padding: 6rpx 0;
	}
	
	.self-item {
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
			  font-size: 32rpx;
	        }
	        .times {
	          margin: 10rpx 0;
	          color: #505050;
	        }
	        .text-line-1 {
	            text-overflow: ellipsis;
	            white-space: nowrap;
	            overflow: hidden;
	        }
	        .submit-time {
	          color: #a6a6a6;
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
				margin-top: 40rpx;
			}
	      }
	  }
	}
	
</style>

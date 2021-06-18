<template>
<!-- 	<block v-if="listData && listData.length > 0">
		<view v-for="(item, index) in listData" :key="index">
			<view class="self-item">
			  <view class="flex">
			    <view class="left flex1">
			      <view class="title text-line-1">{{ item.title }}</view>
			      <view class="desc text-line-1">
			        期间: {{ item.startTime }} - {{ item.endTime }}
			      </view>
			      <view class="time">提交时间: {{ item.submitTime }}</view>
			    </view>
			    <view class="right">
					<view class="status">
						通过
					</view> -->
					<!-- <view class="failed">
						未通过
					</view> -->
<!-- 			    </view>
			  </view>
			</view>
		</view>
	</block> -->
	
	<view>
		<dynamic-list :config="config" />
	</view>


</template>

<script>
    import _ from 'lodash';
	import { getSelfInspectionRecord } from '@/common/api.js'
	
	import dynamicList from '@/components/dynamic-list/index.vue';
    import { getDynamicListField } from '@/common/api.js';
	
	export default {
		onLoad (e){
			this.initPage("110")
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
			async initPage (id) {
				const res = await getDynamicListField({ id: id })
				if (_.get(res, 'code') === 200) {
					this.config = _.cloneDeep(_.get(res, 'data', {}))
					console.log('this.config = ', this.config)
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
	
</style>

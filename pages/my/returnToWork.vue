<template>
	<view class="company_check_container">
		<view class="top_content">
		  <view class="item" style="font-size: 16px;">
			<view style="font-size: 16px;">距离复工上报结束还有 </view>
			<view style="font-size: 30px; color: #D43030; margin: 0 6px;"> {{formData.days}} </view>
			<view style="font-size: 16px;"> 天 </view>
		  </view>
			<view class="item" style="margin-top: 7px; color: #07C160;">
				<view>继续保持</view>
			</view>
		</view>
		<divider />
		<view class="center_content">
			<dynamic-form :config="config" :ifManualSubmit="true" @submit="handleSubmit"
			 />
		</view>
	</view>
</template>

<script>
	import dynamicForm from "@/components/dynamic-form/index.vue";
    import _ from 'lodash';
	import divider from "@/components/custom-c/divider.vue";
	import { getDynamicFormField, getReturnToWork } from '@/common/api.js'
	export default {
		components: {
			dynamicForm,
			divider
		},
		onLoad (e){
			this.initData(e.id);
			this.initField(e.id);
		},
		data() {
			return {
				config: {},
				formData: {}
			}
		},
		methods: {
			async initField(id){
				const res = await getDynamicFormField({id: id})
				if (_.get(res, 'code') === 200) {
				    this.config = { ..._.get(res, 'data', {}) }
				}
			},
			async initData(id){
				const res = await getReturnToWork({id: id})
				if (_.get(res, 'code') === 200) {
				    this.formData = { ..._.get(res, 'data', {}) };
				}
			},
			handleSubmit() {
				// uni.navigateTo({
				//     url: ""
				// })
			},
			// formatLoadDataa (data) {
   //              let obj = {}
   //              data.map(x => {
   //                  obj = {...obj, ...x }
   //              })
   //              return obj
   //          }
		}
	}
</script>

<style lang="less">
	.company_check_container {
		position: relative;
		font-size: 28rpx;

		.top_content {
			background-color: rgba(255, 255, 255, 1.0);
			width: 100%;
			height: 280rpx;
			color: #000000;
			display: flex;
			flex-direction: column;
			justify-content: center;
			justify-items: center;

			.item {
				display: flex;
				flex-direction: row;
				justify-content: center;

				// >view:last-child {
				// 	font-weight: 700;
				// 	flex: 1;
				// }
				>view{
					display: flex;
					align-items: center;
				}
			}
		}

		.center_content {
			// position: relative;
			// top: -16rpx;
			// // box-shadow: 0 0 8rpx #c7c7c7;
			// border-top-left-radius: 24rpx;
			// border-top-right-radius: 24rpx;
			background-color: #fff;
			padding: 20rpx 0;
		}
	}
</style>

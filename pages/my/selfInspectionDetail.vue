<template>
	<view>

		<view class='card'>
			<dynamic-page
			   :API="getformAapi"
			/>
		</view>

		<view class='card'>
			<view class='title'>
				<view class="line"></view>
				<view>审批记录</view>
			</view>

			<van-steps :steps="steps" :active="active" direction="vertical" active-color="#ee0a24" />

		</view>



	</view>
</template>

<script>
	import _ from 'lodash';
	// import {
	// 	getSelfInspectionRecord
	// } from '@/common/api.js'
	
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { config } from '@/config.js'

	export default {
		components: {
			dynamicPage
		},
		onLoad(e) {
			this.initField(310)
			// this.initData("110");
		},
		data() {
			return {
				getformAapi: config.formHost + '/form?id=300',
				srvFormData: {},
				config: {
					formBtns: false,
					fields: [],
				},
				active: -1,
				steps: [{
						text: '审批时间: 2020-12-20 12:12:12',
						desc: '审批状态: 通过',
						opinion: '',
						inactiveIcon: 'circle',
						activeIcon: 'checked',
						isLink: false
					},
					{
						text: '审批时间: 2020-12-25 12:12:12',
						desc: '审批状态: 不通过',
						opinion: '审批意见: 测试1234567',
						inactiveIcon: 'circle',
						activeIcon: 'checked',
						isLink: false
					},
				]
			}
		},
		methods: {
			async initField(id){
				const res = await getSelfInspectionDetailField({id: id})
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
		border-radius: 16rpx 16rpx 0rpx 0;
		margin-bottom: 18rpx;
	}

	.title {
		color: #505050;
		font-size: 30rpx;
		line-height: 150%;
		text-align: left;
		font-weight: bold;
		padding: 10rpx 14rpx;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		align-items: center;

		.line {
			width: 6rpx;
			height: 30rpx;
			background-color: rgba(153, 153, 153, 1);
			margin-right: 10rpx;
		}
	}

	.enterprise-info {
		margin-top: 16rpx;
		padding: 0 0rpx 0rpx 38rpx;

		.item {
			height: 50rpx;
			display: flex;
			align-items: center;

			.label {
				font-size: 26rpx;
				width: 188rpx;
				color: #808080;
			}

			.text {
				font-size: 28rpx;
				color: #383838;
			}
		}

	}
</style>

<template>
	<view>

		<view class='card'>
			<view class='title'>
				<view class="line"></view>
				<view>企业信息</view>
			</view>
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


		<view class='card'>
			<dynamic-form :config="config" :srvFormData="srvFormData" />
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
	import {
		getSelfInspectionRecord
	} from '@/common/api.js'

	import dynamicForm from '@/components/dynamic-form/index.vue'

	export default {
		components: {
			dynamicForm
		},
		onLoad(e) {
			// this.initData("110");
		},
		data() {
			return {
				srvFormData: {
					companyName: '北京天翔文化产业有限公司',
					peple: '王伟伟',
					address: '北京市海淀区文化产业园A8901',
					date: '2020年3年1日',
					phone: '13666000111',
					licenseImage: [{
						url: require('../../static/images/empty.png'),
						isImage: true
					}],
					businessImage: [{
						url: require('../../static/images/empty.png'),
						isImage: true
					}],
					sceneImage: [{
							url: require('../../static/images/empty.png'),
							isImage: true
						},
						{
							url: require('../../static/images/empty.png'),
							isImage: true
						},
						{
							url: require('../../static/images/empty.png'),
							isImage: true
						}
					],
					check1: '选项内容',
					check2: '选项#1',
					check3: '技术咨询'
				},
				config: {
					formBtns: false,
					fields: [{
							"__config__": {
								"layout": "rowFormItem",
								"tagIcon": "row",
								"layoutTree": true,
								"formId": 112,
								"renderKey": 1621415404383,
								"componentName": "证件",
								"children": [{
										"__config__": {
											"label": "营业执照",
											"labelWidth": null,
											"showLabel": true,
											"tag": "el-upload",
											"tagIcon": "input",
											"required": false,
											"layout": "colFormItem",
											"formId": 113,
											"renderKey": 1621415432107
										},
										"readonly": true,
										"max-count": 1,
										"deletable": false,
										"__vModel__": "businessImage"
									},
									{
										"__config__": {
											"label": "许可证",
											"labelWidth": null,
											"showLabel": true,
											"tag": "el-upload",
											"tagIcon": "input",
											"required": false,
											"layout": "colFormItem",
											"formId": 113,
											"renderKey": 1621415432107
										},
										"readonly": true,
										"max-count": 1,
										"deletable": false,
										"__vModel__": "licenseImage"
									}
								]
							}
						},
						{
							"__config__": {
								"layout": "rowFormItem",
								"tagIcon": "row",
								"layoutTree": true,
								"formId": 112,
								"renderKey": 1621415404383,
								"componentName": "现场照片",
								"children": [{
									"__config__": {
										"label": "",
										"labelWidth": null,
										"showLabel": true,
										"tag": "el-upload",
										"tagIcon": "input",
										"required": false,
										"layout": "colFormItem",
										"formId": 113,
										"renderKey": 1621415432107
									},
									"readonly": true,
									"max-count": 1,
									"deletable": false,
									"__vModel__": "sceneImage"
								}]
							}
						},
						{
							"__config__": {
								"layout": "rowFormItem",
								"tagIcon": "row",
								"layoutTree": true,
								"formId": 112,
								"renderKey": 1621415404383,
								"componentName": "自查选项",
								"children": [{
										"__config__": {
											"label": "自查项 #1",
											"labelWidth": null,
											"showLabel": true,
											"tag": "el-input",
											"tagIcon": "input",
											"required": false,
											"layout": "colFormItem",
											"formId": 113,
											"renderKey": 1621415432107
										},
										"readonly": true,
										"max-count": 1,
										"deletable": false,
										"__vModel__": "check1"
									},
									{
										"__config__": {
											"label": "自查项 #2",
											"labelWidth": null,
											"showLabel": true,
											"tag": "el-input",
											"tagIcon": "input",
											"required": false,
											"layout": "colFormItem",
											"formId": 113,
											"renderKey": 1621415432107
										},
										"readonly": true,
										"max-count": 1,
										"deletable": false,
										"__vModel__": "check2"
									},
									{
										"__config__": {
											"label": "自查项 #3",
											"labelWidth": null,
											"showLabel": true,
											"tag": "el-input",
											"tagIcon": "input",
											"required": false,
											"layout": "colFormItem",
											"formId": 113,
											"renderKey": 1621415432107
										},
										"readonly": true,
										"max-count": 1,
										"deletable": false,
										"__vModel__": "check3"
									}
								]
							}
						}
					]
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
			async initData(id) {
				const res = await getSelfInspectionRecord({
					id: id
				})
				if (_.get(res, 'code') === 200) {
					var data = {
						..._.get(res, 'data', {})
					};
					console.log('data = ', data.record)
					// this.listData = data.record;
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

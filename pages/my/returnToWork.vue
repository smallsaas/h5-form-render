<template>
	<view class="company_check_container">
		<view class="top_content">
		  <view class="item" style="font-size: 16px;">
			<view style="font-size: 16px;">距离复工上报结束还有 </view>
			<view style="font-size: 30px; color: #D43030; margin: 0 6px;"> 3 </view>
			<view style="font-size: 16px;"> 天 </view>
		  </view>
			<view class="item" style="margin-top: 7px; color: #07C160;">
				<view>继续保持</view>
			</view>
		</view>
		<divider />
		<view class="center_content">
			<dynamic-form :config="config" :ifManualSubmit="true" @submit="handleSubmit" />
		</view>
	</view>
</template>

<script>
	import dynamicForm from "@/components/dynamic-form/index.vue";
	import divider from "@/components/dynamic-c/divider.vue";
	export default {
		components: {
			dynamicForm,
			divider
		},
		data() {
			return {
				config: {
					fields: [{
							"__config__": {
								"label": "企业名称",
								"showLabel": true,
								"tag": "el-input",
								"tagIcon": "input",
								"required": false,
								"layout": "colFormItem"
							},
							"readonly": false,
							inputBlock: true,
							placeholder: "请输入企业名称",
							"__vModel__": "field1"
						},

						{
							"__config__": {
								"label": "企业地址",
								"showLabel": true,
								"tag": "el-input",
								"tagIcon": "input",
								"required": false,
								"layout": "colFormItem"
							},
							"readonly": false,
							inputBlock: true,
							placeholder: "请输入企业地址",
							"__vModel__": "field2"
						},
						{
							"__config__": {
								"label": "法定代表人",
								"showLabel": true,
								"tag": "el-input",
								"tagIcon": "input",
								"required": false,
								"layout": "colFormItem"
							},
							"readonly": false,
							inputBlock: true,
							placeholder: "请输入法定代表人",
							"__vModel__": "field2"
						},
						{
							"__config__": {
								"label": "进馆人数",
								"labelWidth": null,
								"showLabel": true,
								"tag": "el-input",
								"tagIcon": "number",
								"required": false,
								"layout": "colFormItem"
							},
							placeholder: "请输入进馆人数",
							"readonly": false,
							inputBlock: true,
							"__vModel__": "field3"
						}
					]
				}
			}
		},
		methods: {
			handleSubmit() {
				// uni.navigateTo({
				//     url: ""
				// })
			}
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

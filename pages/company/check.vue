<template>
	<view class="company_check_container">
		<view class="top_content">
			<view class="item">
				<view>自查企业：</view>
				<view>北京天翔文化产业有限公司</view>
			</view>
			<view class="item">
				<view>自查时间：</view>
				<view>2021-04-24</view>
			</view>
		</view>
		<view class="center_content">
			<dynamic-form 
                :config="config" 
                :ifManualSubmit="true"
                @submit="handleSubmit"
            />
		</view>
	</view>
</template>

<script>
	import dynamicForm from '@/components/dynamic-form/index.vue'
	export default {
		components: { dynamicForm },
		data() {
			return {
				config: {
					fields: [
						{
							"__config__": {
							    "layout": "rowFormItem",
							    "tagIcon": "row",
							    "componentName": "自查事项",
							    "children": [
							      {
							        "__config__": {
							          "label": "自查项 #1",
							          "showLabel": true,
							          "tag": "el-input",
							          "tagIcon": "input",
							          "required": false,
							          "layout": "colFormItem"
							        },
							        "readonly": false,
									inputBlock: true,
									placeholder: '请输入自查说明',
							        "__vModel__": "check1"
							      },
								  {
								    "__config__": {
								      "label": "自查项 #2",
								      "labelWidth": null,
								      "showLabel": true,
								      "tag": "el-radio-group",
								      "tagIcon": "input",
								      "required": false,
								      "layout": "colFormItem"
								    },
									__slot__: {
										options:[
											{ label: '选项 #1', value: '1' },
											{ label: '选项 #1', value: '2' },
										]
									},
								    "readonly": false,
									inputBlock: true,
									placeholder: '请选择自查项 #2',
								    "__vModel__": "check2"
								  },
								  {
								    "__config__": {
								      "label": "自查项 #3",
								      "labelWidth": null,
								      "showLabel": true,
								      "tag": "el-checkbox-group",
								      "tagIcon": "input",
								      "required": false,
								      "layout": "colFormItem"
								    },
									__slot__: {
										options:[
											{ label: '是', value: '1' },
											{ label: '否', value: '2' },
											{ label: '不知道', value: '3' },
											{ label: '技术咨询', value: '4' },
										]
									},
								    "readonly": false,
									inputBlock: true,
								    "__vModel__": "check3"
								  },
								  {
								    "__config__": {
								      "label": "自查项 #4",
								      "labelWidth": null,
								      "showLabel": true,
								      "tag": "el-input",
								      "tagIcon": "input",
								      "required": false,
								      "layout": "colFormItem"
								    },
									placeholder: '请输入自查项4',
								    "readonly": false,
									inputBlock: true,
								    "__vModel__": "date"
								  }
								]
							}
						},
						{
							"__config__": {
							    "layout": "rowFormItem",
							    "tagIcon": "row",
							    "layoutTree": true,
							    "componentName": "现场照片",
							    "children": [
							      {
							        "__config__": {
							          "label": "",
							          "labelWidth": null,
							          "showLabel": true,
							          "tag": "el-upload",
							          "tagIcon": "input",
							          "required": false,
							          "layout": "colFormItem",
							        },
							        "readonly": false,
									inputBlock: true,
							        "__vModel__": "sceneImage"
							      }
								]
							}
						},
                        {
                        	"__config__": {
                        	    "layout": "rowFormItem",
                        	    "tagIcon": "row",
                        	    "layoutTree": true,
                        	    "componentName": "上传附件",
                        	    "children": [
                        	      {
                        	        "__config__": {
                        	          "label": "食品安全许可证",
                        	          "labelWidth": null,
                        	          "showLabel": true,
                        	          "tag": "el-upload",
                        	          "tagIcon": "input",
                        	          "required": false,
                        	          "layout": "colFormItem"
                        	        },
                        	        "readonly": false,
                        			inputBlock: true,
                                    accept: 'file',
                        	        "__vModel__": "foodSafeImage"
                        	      },
                                  {
                                    "__config__": {
                                      "label": "营业许可证",
                                      "labelWidth": null,
                                      "showLabel": true,
                                      "tag": "el-upload",
                                      "tagIcon": "input",
                                      "required": false,
                                      "layout": "colFormItem"
                                    },
                                    "readonly": false,
                                     inputBlock: true,
                                     accept: 'file',
                                    "__vModel__": "businessImage"
                                  }
                        		]
                        	}
                        },
                        {
                        	"__config__": {
                        	    "layout": "rowFormItem",
                        	    "tagIcon": "row",
                        	    "layoutTree": true,
                        	    "componentName": "备注",
                        	    "children": [
                        	      {
                        	        "__config__": {
                        	          "label": "",
                        	          "labelWidth": null,
                        	          "showLabel": true,
                        	          "tag": "el-input",
                        	          "tagIcon": "textarea",
                        	          "required": false,
                        	          "layout": "colFormItem"
                        	        },
                                    placeholder: '请输入自查备注',
                        	        "readonly": false,
                        			inputBlock: true,
                        	        "__vModel__": "note"
                        	      }
                        		]
                        	}
                        },
					]
				}
			}
		},
        methods: {
            handleSubmit () {
                uni.navigateTo({
                    url: './checkComfirm'
                })
            }
        }
	}
</script>

<style lang="less">
	.company_check_container {
		position: relative;
		font-size: 28rpx;
		.top_content {
			background-color: rgba(26, 94, 181, 1);
			padding: 30rpx;
			color: #fff;
			.item {
				display: flex;
				margin-bottom: 16rpx;
				>view:last-child {
					font-weight: 700;
					flex: 1;
				}
			}
		}
		.center_content {
			position: relative;
			top: -16rpx;
			// box-shadow: 0 0 8rpx #c7c7c7;
			border-top-left-radius: 24rpx;
			border-top-right-radius: 24rpx;
			background-color: #fff;
			padding: 20rpx 0;
		}
	}
</style>

<template>
	<dynamic-form 
		:config="config"
		:srvFormData="srvFormData"
	/>
</template>

<script>
	import dynamicForm from '@/components/dynamic-form/index.vue'
	export default {
		components: { dynamicForm },
		data() {
			return {
				srvFormData: {
					companyName: '北京天翔文化产业有限公司',
					peple: '王伟伟',
					address: '北京市海淀区文化产业园A8901',
					date: '2020年3年1日',
					phone: '13666000111',
					licenseImage: [
						{
							url: require('../../static/images/empty.png'),
							isImage: true
						}
					],
					businessImage: [
						{
							url: require('../../static/images/empty.png'),
							isImage: true
						}
					],
					sceneImage: [
						{
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
					fields: [
						{
							"__config__": {
							    "layout": "rowFormItem",
							    "tagIcon": "row",
							    "layoutTree": true,
							    "formId": 112,
							    "renderKey": 1621415404383,
							    "componentName": "企业信息",
							    "children": [
							      {
							        "__config__": {
							          "label": "名称",
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
							        "__vModel__": "companyName"
							      },
								  {
								    "__config__": {
								      "label": "法定代表人",
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
								    "__vModel__": "peple"
								  },
								  {
								    "__config__": {
								      "label": "场所地址",
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
								    "__vModel__": "address"
								  },
								  {
								    "__config__": {
								      "label": "成立日期",
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
								    "__vModel__": "date"
								  },
								  {
								    "__config__": {
								      "label": "联系电话",
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
								    "__vModel__": "phone"
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
							    "componentName": "证件",
							    "children": [
							      {
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
							          "formId": 113,
							          "renderKey": 1621415432107
							        },
							        "readonly": true,
									"max-count": 1,
									"deletable": false,
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
							    "formId": 112,
							    "renderKey": 1621415404383,
							    "componentName": "自查选项",
							    "children": [
							      {
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
				}
			}
		}
	}
</script>

<style>
</style>

			import {globalConfig} from '@/config.js'
			// import {LoadComplete} from '@/common/api.js'
			export const convert=(argConfig)=> {
			  if (!argConfig.isLawForm) {
			    return argConfig
			  }
			  const config = deepClone(argConfig)
			  config.isLawForm = false
			
			  // 生成检查事项
			  const itemChilds = []
			  for (let i = 0; i < argConfig.lawFormConfig.checkItemsList.length; i++) {
			    const item = argConfig.lawFormConfig.checkItemsList[i]
			    const item1 = {
			      __config__: {
			        label: '检查方法',
			        tag: 'el-radio-group',
			        tagIcon: 'radio',
			        layout: 'colFormItem',
			        required: false,
			        title: item.title
			      },
			      __slot__: {
			        options: item.way.options || []
			      },
			      __vModel__: item.way.__vModel__
			    }
			    const item2 = {
			      __config__: {
			        label: '检查结果',
			        tag: 'el-radio-group',
			        tagIcon: 'radio',
			        layout: 'colFormItem',
			        required: false,
			      },
			      __slot__: {
			        options: item.result.options || []
			      },
			      __vModel__: item.result.__vModel__
			    }
			    itemChilds.push(item1)
			    itemChilds.push(item2)
			  }
			  const checkItems = {
			    type: 'default',
			    justify: 'start',
			    align: 'top',
			    __config__: {
			      layout: 'rowFormItem',
			      tagIcon: 'row',
			      componentName: '检查事项',
			      children: itemChilds
			    }
			  }
			
			  config.fields = [
			    {
			      type: 'default',
			      justify: 'start',
			      align: 'top',
			      __config__: {
			        layout: 'rowFormItem',
			        tagIcon: 'row',
			        componentName: '基础信息',
			        children: [
			          {
			            __config__: {
			              label: '检查时间',
			              tag: 'el-date-picker',
			              tagIcon: 'date',
			              layout: 'colFormItem',
			              required: false,
			            },
			            type: 'date',
			            placeholder: '请选择检查时间',
			            __vModel__: 'checkTime'
			          },
			          {
			            __config__: {
			              label: '检查单号',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入检查单号',
			            __vModel__: 'checkOno'
			          },
			          {
			            __config__: {
			              label: '检查地点',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入检查地点',
			            __vModel__: 'checkAddress'
			          },
			        ]
			      }
			    },
			    {
			      type: 'default',
			      justify: 'start',
			      align: 'top',
			      __config__: {
			        layout: 'rowFormItem',
			        tagIcon: 'row',
			        componentName: '检查对象',
			        children: [
			          {
			            __config__: {
			              label: '统一社会信用代码',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入统一社会信用代码',
			            __vModel__: 'businessLicense'
			          },
			          {
			            __config__: {
			              label: '名称',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入名称',
			            __vModel__: 'companyName'
			          },
			          {
			            __config__: {
			              label: '类型',
			              tag: 'el-select',
			              tagIcon: 'select',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请选择类型',
									__slot__: {
										options: [{
												"label": "健身",
												"value": "BBD"
										}, {
												"label": "游泳",
												"value": "SW"
										}, {
												"label": "攀岩",
												"value": "RC"
										}, {
												"label": "滑雪",
												"value": "SKI"
										}, {
												"label": "滑冰",
												"value": "SKA"
										}]
									},
			            __vModel__: 'companyType'
			          },
			          {
			            __config__: {
			              label: '住所',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入住所',
			            __vModel__: 'companyAddress'
			          },
			          {
			            __config__: {
			              label: '法定代表人',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入法定代表人',
			            __vModel__: 'companyLegalPerson'
			          },
			          {
			            __config__: {
			              label: '联系方式',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入联系方式',
			            __vModel__: 'companyPhone'
			          },
			        ]
			      }
			    },
			    checkItems,
			    {
			      type: 'default',
			      justify: 'start',
			      align: 'top',
			      __config__: {
			        layout: 'rowFormItem',
			        tagIcon: 'row',
			        componentName: '检查结论',
			        children: [
			          {
			            __config__: {
			              label: '检查结果',
			              tag: 'el-radio-group',
			              tagIcon: 'radio',
			              layout: 'colFormItem',
			              required: false,
			            },
			            __slot__: {
			              options: [{
			                label: '合格',
			                value: '合格'
			              }, {
			                label: '不合格',
			                value: '不合格'
			              }]
			            },
			            __vModel__: 'checkResult'
			          },
			          {
			            __config__: {
			              label: '检查人意见',
			              tag: 'el-input',
			              tagIcon: 'textarea',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入检查人意见',
			            __vModel__: 'checkSuggest'
			          }
			        ]
			      }
			    },
			    {
			      type: 'default',
			      justify: 'start',
			      align: 'top',
			      __config__: {
			        layout: 'rowFormItem',
			        tagIcon: 'row',
			        componentName: '检查人',
			        children: [
			          {
			            __config__: {
			              label: '执法人员1',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入执法人员1',
			            __vModel__: 'lawPerson1'
			          },
			          {
			            __config__: {
			              label: '证件号1',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入证件号1',
			            __vModel__: 'lawPerson1Id'
			          },
			          {
			            __config__: {
			              label: '执法人员2',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入执法人员2',
			            __vModel__: 'lawPerson2'
			          },
			          {
			            __config__: {
			              label: '证件号2',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入证件号2',
			            __vModel__: 'lawPerson2Id'
			          },
			
			          {
			            __config__: {
			              label: '记录人',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入记录人',
			            __vModel__: 'recorder'
			          },
			          {
			            __config__: {
			              label: '被检查人',
			              tag: 'signature',
			              tagIcon: 'signature',
			              layout: 'colFormItem',
			              required: false,
			            },
			            placeholder: '请输入被检查人',
			            __vModel__: 'examinee'
			          },
			          {
			            __config__: {
			              label: '备注',
			              tag: 'el-input',
			              tagIcon: 'input',
			              layout: 'colFormItem',
			              required: false,
										defaultValue:"/",
			            },
			            placeholder: '请输入备注',
			            __vModel__: 'remark'
			          }
			        ]
			      }
			    }
			  ]
			  return config
			}
			export const deepClone=(obj)=> {
			  const _toString = Object.prototype.toString
			
			  // null, undefined, non-object, function
			  if (!obj || typeof obj !== 'object') {
			    return obj
			  }
			
			  // DOM Node
			  if (obj.nodeType && 'cloneNode' in obj) {
			    return obj.cloneNode(true)
			  }
			
			  // Date
			  if (_toString.call(obj) === '[object Date]') {
			    return new Date(obj.getTime())
			  }
			
			  // RegExp
			  if (_toString.call(obj) === '[object RegExp]') {
			    const flags = []
			    if (obj.global) { flags.push('g') }
			    if (obj.multiline) { flags.push('m') }
			    if (obj.ignoreCase) { flags.push('i') }
			
			    return new RegExp(obj.source, flags.join(''))
			  }
			
			  const result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {}
			
			  for (const key in obj) {
			    result[key] = deepClone(obj[key])
			  }
			
			  return result
			}
			//确定表单是否可用工具（流程重要工具)(废弃)
			// export async function isDisabled(config,key,taskId){
			// 	let newField;
			// 	let newConfig;
				
			// 	let res = await LoadComplete({"processDefineKey":key,"taskId":taskId})
			// 	if(res.code==="00000"){
			// 		// console.log("获取到的数据res",res)
			// 		let list = res.data.nodeSettingEntity.formFiledEntityList
			// 		// console.log("list",list)
			// 		for(var i in list){
			// 			// console.log("name",list[i].name)
			// 			let status = list[i].status
			// 			let fields = config
			// 			// console.log("config",config)
			// 					let __model__ = fields.__vModel__
			// 					if(__model__===list[i].name){
			// 						let __newConfig__ = fields
			// 						if(status===0){
			// 							newConfig={...__newConfig__,"readonly":true}
			// 							// console.log("NewConfig",newConfig)
			// 						}else{
			// 							newConfig={...__newConfig__,"readonly":false}
			// 						}
			// 						newField=newConfig
			// 						// console.log("NEWFIELD",newField)
			// 						return newField
			// 			}
			// 			// if(config.fields)
			// 		}
			// 	}
			// 	// console.log("完成之后的配置",newField)
			// 	return newField
			// }
			
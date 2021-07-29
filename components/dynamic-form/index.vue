<!-- 由于uniapp小程序对jsx很不友好，所以config.fields的children只支持到第一层 -->
<template>
	<view class="base_vants_container" :style="[_get(config, 'outStyle', {})]">
        <van-skeleton row="20" :loading="skeletonLoading">
            <block v-for="(item, index) in fields" :key="index">
							<c-lincense
							v-if="_get(item,'__config__.tag')==='c-lincense'"
								@getValue="lincenseValue"
							></c-lincense>
                <base-vants 
                    v-if="_get(item, '__config__.layout') === 'colFormItem'"
                    :fields="[{...item}]"
                    :form="form"
										:Details="Details"
                    @change="handleChange"
										@user="handleUser"
										@map="handleMap"
                    @clear="handleClear"
                />
                <view v-if="_get(item, '__config__.layout') === 'rowFormItem'">
									<card :title="_get(item, '__config__.componentName')" 	
									:jump="_get(item,'__config__.jump',false)"
									:url="config.NextNavigation||config.submittedNavigation"
									>
									<!-- 以上card为标题容器 -->
										<!-- <view class="line"></view> -->
										<!-- <view>{{_get(item, '__config__.componentName')}}</view> -->
									</card>
                    <block v-for="(k, i) in _get(item, '__config__.children', [])" :key="i">
											<c-lincense
											v-if="_get(k,'__config__.tag')==='c-lincense'"
												@getValue="lincenseValue"
											></c-lincense>
                        <base-vants
                            v-if="_get(k, '__config__.layout') === 'colFormItem'"
                            :fields="[{...k}]"
                            :form="form"
														:Details="Details"
                            @change="handleChange"
														@user="handleUser"
														@map="handleMap"
                            @clear="handleClear"
                        />
                        <view v-else>
                            <view class="form_row_title">
								{{_get(k, '__config__.componentName')}}
							</view>
                            <base-vants
                                :fields="_get(k, '__config__.children', [])"
                                :form="form"
																:Details="Details"
                                @change="handleChange"
																@user="handleUser"
																@map="handleMap"
                                @clear="handleClear"
                            />
                        </view>
                    </block>
                </view>
            </block>
						<!-- 旧button,无法对齐样式 -->
<!-- 							<van-button
							  v-if="_get(config, 'formBtns', true) && fields.length > 0"
							  round type="info" 
							  custom-style="width: 90%;margin: 40rpx auto 20rpx auto;display: flex"
							  @click='handleSubmit'
							  >提交</van-button>
								
							<van-button
							  v-if="_get(config, 'LastBtns', true) && fields.length > 0"
							  round type="info" 
							  custom-style="width: 90%;margin: 40rpx auto 20rpx auto;display: flex"
							  @click='handleLast'
							  >上一步</van-button>
								
								<van-button
								  v-if="_get(config, 'nextBtns', true) && fields.length > 0"
								  round type="info" 
								  custom-style="width: 90%;margin: 40rpx auto 20rpx auto;display: flex"
								  @click='handleNext'
								  >下一步</van-button> -->
									
						<!-- 新button -->
						<view class="button-box" v-if="!Details">
							<button
							class="button"
							v-if="_get(config, 'LastBtns', false) && fields.length > 0"
							@click="handleLast"
							>
							上一步
							</button>
							<button
							class="button"
							v-if="_get(config, 'nextBtns', false) && fields.length > 0"
							@click="handleNext"
							>
							下一步
							</button>

							<button
							class="button"
							v-if="_get(config, 'formBtns', true) && fields.length > 0"
							@click="handleSubmit"
							>
							{{_get(config,'formBtnsText',"提交")}}
							</button>
						</view>
						<!-- 确认协议保存按钮 -->
						<view v-if="_get(config, 'formCheckBtns', false) && fields.length > 0" class="formcheckbox">
							<view class="messageBox">
								<checkbox color="blue" style="transform:scale(0.8)" @click="handlecheck()" :checked="checks" class="Form_CheckBox"></checkbox>
								<span style="color: red;font-size: 10px;">{{_get(config,'formCheckText',"同意协议")}}</span>
							</view>
							<button
							class="sumbitButton"
							@click="handleSubmit"
							:disabled="!checks"
							>
							{{_get(config,'formCheckBtnsText',"提交")}}
							</button>
						</view>
        </van-skeleton>
	</view>
    
</template>

<script>
	import _ from 'lodash'
    import BaseVants from './BaseVants.vue'
		import {Base64,guid} from '../../utils/tools.js'
    import { globalConfig } from '@/config.js'
		import cLincense from './custom/c-lincense.vue'
		import card from '../other/Card.vue'
    const SUNMIT_API =  globalConfig.formHost + '/custom'
    const LOAD_API = globalConfig.formHost + '/userinfos'  // 默认获取数据
    const DEFAULT_CONFIG = globalConfig.formHost
    
	export default {
        components: { 
          BaseVants,
					card,
					cLincense
        },
		props: {
			config: {
                type: Object,
                default: function () {
                    return {}
                }
            },
				Details:{
					type:Boolean,
					default(){
						return false
					}
				},
				processDefineKey:{
					type:String,
					default(){
						return ""
					}
				},
			srvFormData: {
			  type: Object,
			  default() {
			    return {}
			  }
			},
            // 默认的提交数据
            formInfo: {
              type: Object,
              default() {
                return {}
              }
            },
            ifManualSubmit: Boolean, // 用于自定义提交
						isYyzz:Boolean,
						workflow:false,
						user:Object,
						taskId:String,
						debug:Boolean,
						isCompany:Boolean
		},
		data() {
			return {
				checks:false,
                formConfig: {}, // 表单配置
				fields: [],
				form: {},
				skeletonLoading: true,
                
                header: { // 请求token
                    Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''}`,
                    token: uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
                },
				lincense:null,
				userlist:null
			}
		},
        watch: {
            config: {
                handler(val, oldVal) {
                  if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
                    this.formConfig = { ...val }
                    if (_.get(val, 'fields')) {
                        this.handleInitFormData()
                    }
                  }
                },
                deep: true
             }, 
             srvFormData: {
                 handler(val, oldVal) {
                   if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
                      if (_.get(val, 'fields')) {
                           this.handleInitFormData()
                      }
                   }
                 },
                 deep: true
              },  
        },
		mounted() {
			// console.log("表单isCompany",this.isCompany)
			// console.log("表单的user",this.user)
            // 有具体配置信息时
            if (Object.keys(this.config).length > 0) {
                this.formConfig = _.cloneDeep(this.config)
            }
            if (_.has(this.formConfig, 'fields')) {
                this.handleInitFormData()
								this.skeletonLoading = false
            } else {
               // 从默认配置中获取表单
               this.fetchDefaultFormConfig()
							 this.skeletonLoading = false
            }
			// 外部传入的数据源
			if (Object.keys(this.srvFormData).length > 0) {
                this.form = { ...this.srvFormData }
				return
			}
            this.fetchFormData()
		},
		methods: {
            _get (item, str, defauleValue = '') {
              return _.get(item, str, defauleValue)
            },
						lincenseValue(e){
							this.skeletonLoading = true
							let fields = this.config.fields
							let vModel=[];
							fields.map((_config,_index)=>{
								if(_config.__config__.children){
									let children = _config.__config__.children
									children.map((c_config,c_index)=>{
										if(c_config==="establish_date"){
											vModel[c_index]=this.StrToDate(c_config.__vModel__)
	
											// console.log("更改",vModel[c_index])
										}else{
											vModel[c_index]=c_config.__vModel__
										}
										// console.log("c_config",c_config)
									})
									// console.log("vModel",vModel)
									// config = 
								}else{
									vModel[_index] = _config.__vModel__
									// console.log("111",vModel[_index])
									// console.log(children)
									// children.map((c_config,c_index)=>{
									// 	vModel[c_index]=c_config.__vModel__
									// 	// console.log(c_config)
									// })
								}
								// console.log(_config.__config__)
							})
							// console.log(vModel)
							// console.log(e)
								
							vModel.map((_Model,_v)=>{
								// console.log("model",_Model)
								// console.log("eModel",e[_Model])
								if(_Model==="establish_date"){
									this.form[_Model]=this.StrToDate(e[_Model])
								}else if(_Model==="valid_period"){
									this.form[_Model]=this.StrToDate(e[_Model])
								}else{
									this.form[_Model]=e[_Model]
								}
							})
								// this.config.map((item,key)=>{
								// 	console.log(item.__vModel__)
								// })
								// if(typeof(e[i])!=="object"&&typeof(e[i])!=="array"){
								// 	this.form[i] = e[i]
								// }
							
							console.log(this.form)
							this.skeletonLoading = false
						},
						// 校检loadAPI
						getLoadApi(url){
							let pages = getCurrentPages()
							let currentPage = pages[pages.length-1]
							let options = currentPage.options
							let urlList;
							let newUrl;
							console.log(options)
							if(url.indexOf("$$id")!==-1){
								urlList=url.split("$$")
								newUrl = urlList[0]+options.id
							}else{
								newUrl = url
							}
							return newUrl
						},
						StrToDate(data){
							let date;
							// let year = data.slice(0,4)
							date = data.slice(-4)
							console.log("data",data)
							let month = Math.floor(date/100)
						  let day = date.slice(-2)
							let year = (data-date)/10000
							if(month<10){
								month = "0"+month
							}
							console.log("date",date)
							console.log("year",year)
							console.log("day",day)
							console.log("month",month)
							return year+'-'+month+'-'+day
							// if(year <10000)
						},
            // 获取表单数据
            fetchFormData () {
							let loadApi = _.get(this.formConfig, 'loadApi', '')
							let newAPI = this.getLoadApi(loadApi)
							// console.log(newAPI)
							let head;
							let enfToken = globalConfig.enforcementKey
							if(loadApi.indexOf("/admin/companyinfo/")!==-1){
								head = {
									Authorization: `Bearer ${enfToken || ''}`,
								}
								console.log(this.header)
							}else{
								head = this.header
							}
							let a = this.$emit('getForm')
							console.log(a)
								uni.request({
								    url: newAPI || LOAD_API,
								    method: 'GET',
								    header: head,
								    complete: (res) => {
								       if (_.get(res, 'data.code') === 200) {
								           let resData = _.cloneDeep(_.get(res, 'data.data', {}))
								           if (_.isFunction(_.get(this.$parent, 'formatLoadData'))) {
								               resData = this.$parent.formatLoadData(resData)
								           }
								           this.form = { ...this.form, ...resData }
								       }else{
												 let resData = _.cloneDeep(_.get(res, 'data.data', {}))
												 if (_.isFunction(_.get(this.$parent, 'formatLoadData'))) {
												     resData = this.$parent.formatLoadData(resData)
														 console.log(resData)
												 }
												 this.form = { ...this.form, ...resData}
												 console.log(this.form)
											 }
								    }
								})
            },
            
            // 从默认接口中获取表单配置
            fetchDefaultFormConfig () {
                uni.request({
                    url: DEFAULT_CONFIG + _.get(this.formConfig, 'url', ''),
                    method: 'GET',
                    data:  _.has(this.formConfig, 'id') ? { id: this.formConfig.id } : {},
                    header: this.header,
                    complete: (res) => {
                        if (_.get(res, 'data.code') === 200) {
                            this.formConfig = {
                                ..._.get(res, 'data.data', {}),
                                ...this.formConfig
                            }
                            if (_.has(this.formConfig, 'fields')) {
                                this.handleInitFormData()
                            }
                        }
                    }
                })
            },
            
            // 从props中或者表单配置
            handleInitFormData () {
				const renderChild = (data = []) => {
					data.map(x => {
						const value = this.form[x.__vModel__] || _.get(this.srvFormData, x.__vModel__) || _.get(x, '__config__.defaultValue')
                        if (_.has(x, '__vModel__')) {
														this.form[x.__vModel__] = value
                        }
						if (_.get(x, '__config__.children', []).length > 0) {
						    x.__config__.children = [...renderChild(x.__config__.children)]
						}
						return x
					})
					return data
				}
            	this.fields = [...renderChild(_.cloneDeep(_.get(this.formConfig, 'fields', [])))]
				this.skeletonLoading = false
            },
						
						// 是否确认协议
						handlecheck(){
							this.checks = !this.checks
						},
						handleMap(e,item){
							console.log("地图的e",e)
							console.log("地图的item",item)
							this.form["latitude"]=e.latitude
							this.form["longitude"]=e.longitude
							console.log("srvData",this.srvFormData)
						},
            // 改变值时
            handleChange (e, item) {
							// console.log("子项",item)
							// if(item.__config__.tag==="el-upload"){
							// 	// console.log("是上传",JSON.parse(e))
							// 	this.form[item.__vModel__] = JSON.parse(e)
							// }else{
								this.form[item.__vModel__] = e
							// }
              const checkRequired = (data = []) => {
                  data.map(x => {
                      if (x['__vModel__'] === item['__vModel__']) {
						  const formType = _.get(x, '__config__.tag') 
                          x.error = _.get(x, '__config__.required') ? !e : false
                          if (['el-upload', 'el-checkbox-group', 'el-multiple-modal-select'].includes(formType)) {
                             x.error = _.get(x, '__config__.required') ? (!e || e.length === 0) : false
                          }
                      }
                      if (_.get(x, '__config__.children', []).length > 0) {
                          x.__config__.children = [...checkRequired(x.__config__.children)]
                      }
                      return x
                  })
                  return data
              }
              this.fields = [...checkRequired(this.fields)]
            },
						handleUser(e){
							this.userlist=e
						},
            // 清空时
            handleClear (e, item) {
                this.form[item.__vModel__] = ''
                const checkRequired = (data = []) => {
                    data.map(x => {
                        if (x['__vModel__'] === item['__vModel__'] && ['', undefined].includes(this.form[x.__vModel__])) {
                            x.error = _.get(x, '__config__.required') ? !e : false
                        }
                        if (_.get(x, '__config__.children', []).length > 0) {
                            x.__config__.children = [...checkRequired(x.__config__.children)]
                        }
                        return x
                    })
                    return data
                }
                this.fields = [...checkRequired(this.fields)]
            },
            // 设置错误信息
            handleRecursive (data = []) {
                data.map(x => {
                    if (_.get(x, '__config__.required') === true) {
						const formType = _.get(x, '__config__.tag')
                        if (['', undefined, null].includes(this.form[x.__vModel__])) {
                            x.error = true
                        }
                        if (['el-checkbox-group', 'el-multiple-modal-select'].includes(formType) && _.get(this.form, x.__vModel__, []).length === 0) {
                           x.error = true 
                        }
						if (formType === 'el-switch' && ['', undefined, null, false].includes(this.form[x.__vModel__])) {
							x.error = true
						}
                        if (formType === 'el-slider' && ['', undefined, null, false, 0].includes(this.form[x.__vModel__])) {
                            x.error = true
                        }
                    }
                    if (_.get(x, '__config__.children', []).length > 0) {
                        x.__config__.children = [...this.handleRecursive(x.__config__.children)]
                    }
                    return x
                })
                return data
            },
            
						// 上一步,数据传递未完成，仅跳转功能
						handleLast(){
							uni.navigateBack({
								delta:1
							})
						},
						// 下一步,数据传递未完成，仅跳转功能
						handleNext(){
							console.log('formInfo',this.formInfo)
							console.log('id',_.get(this.srvFormData, 'id') ? { id: this.srvFormData.id } : {})
							console.log('form',this.form)
							let NextData = {
							    ...this.formInfo,
							    ..._.get(this.srvFormData, 'id') ? { id: this.srvFormData.id } : {},
							    ...this.form
							}
							// 获取当前页提交数据
							console.log(NextData)
							uni.navigateTo({
								url: '/pages' + this.config.NextNavigation
							})
						},
						handleChangeCompany(){
							let data = {
								...this.formInfo,
								..._.get(this.srvFormData, 'id') ? { id: this.srvFormData.id } : {},
								...this.form
							}
							uni.request({
								url:`${globalConfig.workflowEP}/executive/companyinfo`,
								method:"PUT",
								header:{
									Authorization:`${uni.getStorageSync(`${globalConfig.tokenStorageKey}`)}`
								},
								data:data,
								success(res){
									if(res.data.data===true){
										uni.showModal({
											title:"提交成功",
											showCancel:false,
											success(button){
												if(button.confirm){
													uni.navigateBack({
														delta:10
													})
												}
											}
										})
									}else{
										uni.showModal({
											title:res.data.msg
										})
									}
								},
								fail(res){
									// console.log(res)
									uni.showModal({
										title:"网络波动，提交失败"
									})
								}
							})
						},
            // 提交
            handleSubmit () {
                const list = this.fields
                this.fields = [...this.handleRecursive(list)]
				let isPass = true
				const checkField = (data = []) => {
					data.map(x => {
						if (x.error) {
							isPass = false
						}
						if (_.get(x, '__config__.children', []).length > 0) {
						   checkField(x.__config__.children) 
						}
					})
				}
                checkField(this.fields)
                if (!isPass) {
                    return
                }
                let submitData = {
                    ...this.formInfo,
                    ..._.get(this.srvFormData, 'id') ? { id: this.srvFormData.id } : {},
                    ...this.form
                }
								// 工作流自定义数据接口
								
								let custom = {
									"fileno":this.config.fileno||guid(),
									"fileseq":this.config.fileseq||0,
									"companyName":this.config.companyName,
									"companyId":this.config.companyId
								}
								// let customData = Base64.encode(JSON.stringify(custom))	//
								let customData = custom	//
								
								let sumbit = submitData
                if (_.isFunction(_.get(this.$parent, 'formatSubmitData'))) {
                    submitData = this.$parent.formatSubmitData(submitData)
                }
                
                if (this.ifManualSubmit) {
                    this.$emit('submit', submitData)
                } else {
									if(_.get(this.config,"workflow")){
										console.log(this.config)
										let workflowData;
										let YyzzData;
										if(this.userlist){
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"userId":this.userlist.userId,
												"userName":this.userlist.name,
												"formData":submitData,
												"customValues":customData,
												// "comment": "同意"
											}
										}else if(this.user){
											// console.log("userId",this.user.userId)
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"userId":this.user.userId,
												"userName":this.user.name,
												"formData":submitData,
												"customValues":customData,
												"taskId":this.taskId,
												"ignoreNotPersistent":this.debug
											}
										}else{
											// console.log("没到",this.user)
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"formData":submitData,
												"customValues":customData,
												// "comment": "同意"
											}
										}
										for(var i in submitData){
												console.log('submitDataItem',submitData[i])
										}
										// 营业执照拼接的字段
										YyzzData = {
											"address":submitData["address"],
											"name":submitData["name"],
											"licenceNo":submitData["reg_num"],
											"personName":submitData["person"],
											"capital":submitData["capital"],
											"businessScope":submitData["business"],
											"startupDate":submitData["establish_date"],
											"expireDate":submitData["valid_period"]
										}
										// YyzzData = {
										// 	"address":
										// }
										// console.log("yyzz",this.isYyzz)
										// console.log("到提交",this.isCompany)
										if(this.isYyzz){
											this.YyzzRequest(YyzzData)
										}else if(this.isCompany){
											this.handleChangeCompany()
										}else{
											if(_.get(this.formConfig,'saveApi','')===''){
												this.workflowRequest(workflowData)
											}else{
												this.handleSubmitRequest(workflowData)
											}
										}
									}else if(this.workflow){
										console.log("工作流",this.config)
										let workflowData;
										let YyzzData;
										if(this.userlist){
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"userId":this.userlist.userId,
												"userName":this.userlist.firstName,
												"formData":submitData,
												"customValues":customData,
												// "comment": "同意"
											}
										}else if(this.user){
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"userId":this.user.userId,
												"userName":this.user.name,
												"formData":submitData,
												"customValues":customData,
												"taskId":this.taskId,
												"ignoreNotPersistent":this.debug
											}
										}else{
											workflowData = {
												"processDefineKey":this.processDefineKey,
												"formData":submitData,
												"customValues":customData,
												// "comment": "同意"
											}
										}
										for(var i in submitData){
												console.log('submitDataItem',submitData[i])
										}
										// 营业执照拼接的字段
										YyzzData = {
											"address":submitData["address"],
											"name":submitData["name"],
											"licenceNo":submitData["reg_num"],
											"personName":submitData["person"],
											"capital":submitData["capital"],
											"businessScope":submitData["business"],
											"startupDate":submitData["establish_date"],
											"expireDate":submitData["valid_period"]
										}
										// YyzzData = {
										// 	"address":
										// }
										// console.log("yyzz",this.isYyzz)
										if(this.isYyzz){
											this.YyzzRequest(YyzzData)
										}else if(this.isCompany){
											this.handleChangeCompany()
										}else{
											// console.log("到这了",this.formConfig,"工作流数据",workflowData)
											if(_.get(this.formConfig,'saveApi','')===''){
												this.workflowRequest(workflowData)
											}else{
												this.handleSubmitRequest(workflowData)
											}
										}
									}else{
										if(this.isCompany){
											this.handleChangeCompany()
										}else{
											this.handleSubmitRequest(submitData)
										}
										// console.log("啥也不是",this.workflow)
									}
                }
            },
						//营业执照提交
						YyzzRequest(data){
							const url = `${globalConfig.workflowEP}/admin/companyinfo`
							uni.showLoading({title:'正在识别中...'})
							uni.request({
							    url: url,
							    method:'POST',
							    data: data,
							    header: this.header,
							    complete: (res) => {
										console.log("res",res)
							        uni.hideLoading()
							        if (_.get(res, 'data.code') === 200) {
							            uni.showToast({
							                title:'操作成功'
							            }),
							            setTimeout(() => {
							                if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
																console.log(this.config.submittedNavigation)
							                    uni.navigateTo({
							                        url: '/pages' + this.config.submittedNavigation,
																			success() {
																					this.$emit("state","success")
																					 let page = getCurrentPages().pop();  //跳转页面成功之后
																					 if (!page) return;  
																					 page.onLoad(); //如果页面存在，则重新刷新页面
																			},
																			fail:(a)=>{
																				console.log(a)
																			}
							                    })
							                } else {
							                    uni.navigateBack({
																		success(){
																			let page = getCurrentPages().pop();  //跳转页面成功之后
																			if (!page) return;  
																			page.onLoad(); //如果页面存在，则重新刷新页面
																		},
																		delta:10
																	})
							                }
							            }, 500)
							        }else if(_.get(res,'data.data')===true){
												let pages = getCurrentPages()
												let LastPage = pages[0]
												let pageUrl = LastPage.$page.fullPath
												console.log(LastPage)
												
												setTimeout(() => {
												    if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
															console.log(this.config.submittedNavigation)
												        uni.navigateTo({
												            url: '/pages' + this.config.submittedNavigation,
																		success() {
																				this.$emit("state","success")
																				let page = getCurrentPages().pop();  //跳转页面成功之后
																				if (!page) return;  
																				page.onLoad(); //如果页面存在，则重新刷新页面
																		},
																		fail:(a)=>{
																			console.log(a)
																		}
												        })
												    } else {
												        uni.navigateBack({
																	success(){
																		let page = getCurrentPages().pop();  //跳转页面成功之后
																		if (!page) return;  
																		page.onLoad(); //如果页面存在，则重新刷新页面
																	},
												        	delta:10
												        })
												    }
												}, 500)
											}else{
												this.$emit("state","error")
												// console.log("识别失败")
												uni.showToast({
													title:res.msg
												})
												setTimeout(()=>{
													uni.hideToast()
												},1000)
											}
							    }
							})
						},
            workflowRequest(data){
							const url = `${globalConfig.workflowEP}/api.flow.examine/complete`
							uni.showLoading({ title: '', mask: true })
							uni.request({
							    url: url,
							    method:'POST',
							    data: data,
							    header: this.header,
							    complete: (res) => {
							        uni.hideLoading()
							        if (_.get(res, 'data.code') === 200) {
							            uni.showToast({
							                title:'操作成功'
							            }),
							            setTimeout(() => {
							                if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
																console.log(this.config.submittedNavigation)
							                    uni.navigateTo({
							                        url: '/pages' + this.config.submittedNavigation,
																			success() {
																					this.$emit("state","success")
																					 let page = getCurrentPages().pop();  //跳转页面成功之后
																					 if (!page) return;  
																					 page.onLoad(); //如果页面存在，则重新刷新页面
																			},
																			fail:(a)=>{
																				console.log(a)
																			}
							                    })
							                } else {
							                    uni.navigateBack({
																		success(){
																			let page = getCurrentPages().pop();  //跳转页面成功之后
																			if (!page) return;  
																			page.onLoad(); //如果页面存在，则重新刷新页面
																		},
																		delta:10
																	})
							                }
							            }, 500)
							        }else if(_.get(res,'data.code')==="00000"){
												let pages = getCurrentPages()
												let LastPage = pages[0]
												let pageUrl = LastPage.$page.fullPath
												console.log(LastPage)
												
												setTimeout(() => {
												    if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
															console.log(this.config.submittedNavigation)
												        uni.navigateTo({
												            url: '/pages' + this.config.submittedNavigation,
																		success() {
																				this.$emit("state","success")
																				let page = getCurrentPages().pop();  //跳转页面成功之后
																				if (!page) return;  
																				page.onLoad(); //如果页面存在，则重新刷新页面
																		},
																		fail:(a)=>{
																			console.log(a)
																		}
												        })
												    } else {
												        uni.navigateBack({
																	success(){
																		let page = getCurrentPages().pop();  //跳转页面成功之后
																		if (!page) return;  
																		page.onLoad(); //如果页面存在，则重新刷新页面
																	},
												        	delta:10
												        })
												    }
												}, 500)
											}else{
												this.$emit("state","error")
												uni.showToast({
													title:res.data.msg
												})
												setTimeout(()=>{
													uni.hideToast()
												},1000)
											}
							    }
							})
						},
            // 组件内默认提交
            handleSubmitRequest (data) {
                const url = _.get(this.formConfig, 'saveApi') || SUNMIT_API
                uni.showLoading({ title: '', mask: true })
                uni.request({
                    url: url,
                    method:'POST',
                    data: data,
                    header: this.header,
                    complete: (res) => {
                        uni.hideLoading()
                        if (_.get(res, 'data.code') === 200) {
                            uni.showToast({
                                title:'操作成功'
                            }),
                            setTimeout(() => {
                                if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
																	console.log(this.config.submittedNavigation)
                                    uni.navigateTo({
                                        url: '/pages' + this.config.submittedNavigation,
																				success() {
																						this.$emit("state","success")
																						let page = getCurrentPages().pop();  //跳转页面成功之后
																						if (!page) return;  
																						page.onLoad(); //如果页面存在，则重新刷新页面
																				},
																				fail:(a)=>{
																					console.log(a)
																				}
                                    })
                                } else {
                                    uni.navigateBack()
                                }
                            }, 500)
                        }else if(_.get(res,'data.code')==="00000"){
													let pages = getCurrentPages()
													let LastPage = pages[pages.length-2]
													let pageUrl = LastPage.$page.fullPath
													console.log(pageUrl)
													setTimeout(() => {
													    if (_.has(this.config, 'submittedNavigation') && this.config.submittedNavigation) {
																console.log(this.config.submittedNavigation)
													        uni.navigateTo({
													            url: '/pages' + this.config.submittedNavigation,
																			success() {
																					this.$emit("state","success")
																					let page = getCurrentPages().pop();  //跳转页面成功之后
																					if (!page) return;  
																					page.onLoad(); //如果页面存在，则重新刷新页面
																			},
																			fail:(a)=>{
																				console.log(a)
																			}
													        })
													    } else {
													        uni.reLaunch({
													        	url:pageUrl
													        })
													    }
													}, 500)
												}else{
													this.$emit("state","error")
													uni.showToast({
														title:res.data.msg
													})
													setTimeout(()=>{
														uni.hideToast()
													},1000)
												}
                    }
                })
            }
		}
	}
</script>

<style lang="less">
    .base_vants_container {
        .form_row_title {
            color: rgba(80, 80, 80, 1);
            font-size: 30rpx;
            line-height: 150%;
            text-align: left;
            font-weight: bold;
            padding: 10rpx 14rpx;
						border-bottom: 1px solid #EEEEEE;
			display: flex;
			align-items: center;
			& .line {
				width: 6rpx;
				height: 30rpx;
				background-color: rgba(153, 153, 153, 1);
				margin-right: 10rpx;
			}
        }
        .submit_but {
        	width: 80%;
        }
    }
		
		.button-box{
			display: flex;
			margin-top: 20px;
			width: 100%;
			.button{
				flex: 1;
				margin: 5px;
				border-radius: 5px;
				border: 1px solid #1989FA;
				background-color: white;
				color: #1989FA;
				&:last-child{
					background-color: #1989FA;
					color: white;
				}
			}
		}
		.sumbitButton:disabled{
			background-color: #2A82E4;
			color: white;
		}
		.formcheckbox{
			width: 90%;
			margin: 0 auto;
		}
		.sumbitButton{
			background-color: #2A82E4;
			color: white;
		}
		.Form_CheckBox{
			margin: 10px auto;
		}
		.Form_CheckBox[checked]{
			color: white!important;
		}
		.sumbitButton[disabled] {
			opacity: .5;
		  background-color: #2A82E4!important;
		  color: white!important;
		}
		
</style>

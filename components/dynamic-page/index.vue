<template>
	<view :style="[_get(config, 'pageStyle', {}), _get(config, 'moduleContainer', {})]">
        <van-skeleton row="10" :loading="skeletonLoading">
          <block v-if="_get(config, 'modules', []).length > 0">
            <view v-for="(item, index) in config.modules" :key="index">
								<dynamic-form
									v-if="_get(item, 'type') === 'autoform'&&(item.code||item.FormKey||FormKey)"
									:config="{
										 ...getCode(item.API,item.code),
										 outStyle: getComponentStyle(item),
										 ...customValues
									}"
								:srvFormData="getComponentsData(item) || {}"
								:processDefineKey="processDefineKey"
								@state="setState"
									 />
									<dynamic-form
										 v-if="_get(item, 'type') === 'autoform'&&!item.code"
										 :config="{
												..._get(config.moduleData, item.key, {}),
												outStyle: getComponentStyle(item)
										 }"
										:srvFormData="getComponentsData(item) || {}"
										:processDefineKey="processDefineKey"
										@state="setState"
									/>
		<!-- @state:获取工作流提交后状态 -->
										<view
										v-if="_get(item, 'type') === 'autolist'"
										>
											<card
													:Style="{
														'padding':'10px 0 0 0',
														'fill':'#EFEFEF',
														'title':{
															'fill':'#FFFFFF'
														}
													}"
													:title="_get(item,'name','')"
													:jump="_get(_get(config.moduleData,item.key,{}),'jump',false)"
													:jumpText="_get(_get(config.moduleData,item.key,{}),'jumpText','')"
													:url="_get(_get(config.moduleData,item.key,{}),'jumpUrl','')"
													v-if="_get(item,'name')!==undefined&&_get(item,'name')!==''"
													>
									    <dynamic-list
											:unloading="_get(_get(config.moduleData,item.key,{}),'unloading',false)"
									      :config="{
									          ..._get(config.moduleData, item.key, {}),
									...getComponentsData(item) ? { list: getComponentsData(item) } : {},
									          outStyle: getComponentStyle(item)
									      }"
									    />
											</card>
											<dynamic-list
											:unloading="_get(_get(config.moduleData,item.key,{}),'unloading',false)"
												:config="{
																	..._get(config.moduleData, item.key, {}),
												...getComponentsData(item) ? { list: getComponentsData(item) } : {},
																	outStyle: getComponentStyle(item)
												}"
												v-if="_get(item,'name')===undefined||_get(item,'name')===''"
											></dynamic-list>
										</view>
										
									<view v-if="_get(item, 'type') === 'banner'">
										<card
											:Style="{
												'padding':'10px 0 0 0',
												'fill':'#EFEFEF',
												'title':{
													'fill':'#FFFFFF'
												}
											}"
											:title="_get(item,'name','')"
											v-if="_get(item,'name')!==undefined&&_get(item,'name')!==''"
											>
										<swiper-images 
											 :list="getComponentsData(item) ||  _get(config.moduleData, `${item.key}.banners`, [])"
											 :outStyle="getComponentStyle(item)"
										/>
									</card>
									<swiper-images
											v-if="_get(item,'name')===undefined||_get(item,'name')===''"
										 :list="getComponentsData(item) ||  _get(config.moduleData, `${item.key}.banners`, [])"
										 :outStyle="getComponentStyle(item)"
									/>
								</view>
								
					<view v-if="_get(item, 'type') === 'navlist'">
						<card
							:Style="{
								'padding':'10px 0 0 0',
								'fill':'#EFEFEF',
								'title':{
									'fill':'#FFFFFF'
								}
							}"
							:title="_get(item,'name','')"
							v-if="_get(item,'name')!==undefined&&_get(item,'name')!==''"
							>
                <nav-list 
										:title="_get(item,'name','')"
										:config="{
											list: _get(config.moduleData, `${item.key}.navList`, []),
											itemModule: _get(config.moduleData, `${item.key}.itemModule`, []),
											outStyle: getComponentStyle(item),

										}"
                 />
							</card>
							<nav-list
								v-if="_get(item,'name')===undefined||_get(item,'name')===''"
									:title="_get(item,'name','')"
									:config="{
										list: _get(config.moduleData, `${item.key}.navList`, []),
										itemModule: _get(config.moduleData, `${item.key}.itemModule`, []),
										outStyle: getComponentStyle(item),

									}"
							 />
						</view>
				 <box-list
						v-if="_get(item,'type') === 'boxList'"
						:list="_get(config.moduleData,`${item.key}.navList`,[])"
				 ></box-list>
						<search
						 v-if="_get(item, 'type') === 'search'"
						 :config = "_get(config.moduleData,item.key,{})"
						></search>
						
						<!-- 新增  2021-2-25 -->
						<cell
							v-if="_get(item, 'type') === 'cell'"
							:param = "_get(config.moduleData,`${item.key}.param`, {})"
							:days = "getComponentsData(item) || 0"
						/>
						<!-- end -->
						<!-- 步骤条组件 2021-6-29 -->
						<steps
							v-if="_get(item, 'type') === 'steps'"
							:list="getComponentsData(item) ||  _get(config.moduleData, `${item.key}.steps`, [])"
							:outStyle="getComponentStyle(item)"
						></steps>
						<sumbit-state
						 v-if="_get(item, 'type') === 'sumbitState'"
						 :state="state"></sumbit-state>
						 <c-button
						 	v-if="_get(item, 'type') === 'button'"
						 	:config = "_get(config.moduleData,item.key,{})"
						 ></c-button>
						 <confirm
							v-if="_get(item,'type')==='confirm'"
							:config="_get(config.moduleData,item.key,{})"
							:LastKey="LastKey"
						 ></confirm>
            </view>
          </block>
        </van-skeleton>
	</view>
</template>

<script>
	import _ from 'lodash'
	import qs from 'qs'
	import { getFormAPIdata } from '../../common/api.js'
	import { request } from '../../common/request.js'
	import { Base64,guid } from '../../utils/tools.js'
	import dynamicList from '../dynamic-list/index.vue'
    import dynamicForm from '../dynamic-form/index.vue'
	import swiperImages from '../swiper-images/index.vue'
    import navList from '../nav-list/index.vue'
    import boxList from '../box-list/box-list.vue'
	import card from '../other/Card.vue'
	import search from '../search/search.vue'
	import cell from '../other/Cell.vue'
	import steps from '../Steps/Steps.vue'
	import sumbitState from '../other/SumbitState.vue'
	import cButton from '../other/C-Button.vue'
	import confirm from '../confirm.vue'
    import { globalConfig } from '@/config.js'
	export default {
		components: { 
			dynamicList, 
			dynamicForm,
			swiperImages,
			navList,
			boxList,
			card,
			search,
			cell,
			steps,
			sumbitState,
			cButton,
			confirm
		},
		props: {
			API: String,  // 页面数据请求接口
            requsetParam: {  // 页面数据请求参数
				type: Object,
				default: function () {
					return {}
				}
			},
            contentType: {  //页面数据类型 [base64, json]
                type: String,
                default: 'json'
            },
            contentPayload: {  //页面有效数据位置
                type: String,
                default: 'data'
            },
						// 工作流定义提交类型
						processDefineKey:{
							type:String,
							default:''
						},
						//上一步的processDefineKey
						LastKey:{
							type:Object,
							default:{}
						},
						FormKey:{
							type:String
						},
						customValues:{
							type:Object
						}
		},
		data () {
			return {
				config: {}, //页面配置信息
				pageData: {}, // 页面数据
				skeletonLoading: true,
				
				header: {  // 请求header
						Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''}`,
						token: uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
				},
				codeData:{},
				codeAPI:"",
				code:"",
				state:null,
			}

		},
		created() {
			console.log(this.number)
		  if (!this.API) {
			  return
		  }
		  this.fetchConfigData()
			this.getState()
			
		},
		//#ifdef MP-WEIXIN
		mounted(){
			let TFormKey = this.FormKey
			console.log(this.FormKey)
			this.config.modules.map((item,i)=>{
				if(_.get(item, 'type') === 'autoform'){
					let FormKey = _.get(item,'FormKey','')
					if(FormKey){
						console.log(FormKey)
						this.getWorkflow(FormKey)	
					}else if(TFormKey){
						this.getWorkflow(TFormKey)
					}else{
						this.getCodeData(this.codeAPI,this.code)
					}
				}
			})
		},
		//#endif
		// #ifdef APP-PLUS
		updated(){
			let TFormKey = this.FormKey
			console.log(this.FormKey)
			this.config.modules.map((item,i)=>{
				if(_.get(item, 'type') === 'autoform'){
					let FormKey = _.get(item,'FormKey','')
					if(FormKey){
						console.log(FormKey)
						this.getWorkflow(FormKey)	
					}else if(TFormKey){
						this.getWorkflow(TFormKey)
					}else{
						this.getCodeData(this.codeAPI,this.code)
					}
				}
			})
		},
		// #endif
		methods: {
			_get (data, field, value) {
				return _.get(data, field, value)
			},
			async getWorkflow(Key){
				let res = await this.getWorkflowlist(Key)
				if(res.code==="00000"){
					console.log(res.data.formEntity.code)
					let api = '/api.page.design.form/loadFormInfo'
					let code = res.data.formEntity.code
					console.log(api)
					console.log(code)
					
					this.getCodeData(api,code)
				}else{
					uni.showModal({
						title:res.msg,
						showCancel:false
					})
				}
			},
			// 自查编号
			getWorkflowlist(Key){
				let url = `${globalConfig.workflowEP}/api.flow.examine/toComplete`
				let data = {
					processDefineKey:Key
				} 
				return request('POST',url,data)
			},
			// 获取有code时，API数据更改为真正表单数据
			async getCodeData(API,code){
				let res = await getFormAPIdata(API,{"code":code})
				let form;
				let jsonDefineBase64;
				let jsonDefine;
				let json;
				let fields
				if(res.code = 200){
					form = _.get(res.data,"form",{}),
					jsonDefineBase64 = _.get(form,"jsonDefine","")
					jsonDefine = Base64.decode(jsonDefineBase64)
					json = JSON.parse(jsonDefine)
					console.log(json)
				}else{
					// console.log("值为",res)
					uni.showModal({
						title:res.msg,
						showCancel:false
					})
				}
				this.codeData = json
			},
			
			getCode(API,code){
				this.codeAPI = API
				this.code = code
				if(this.codeData){
					console.log(this.codeData)
				}
				return this.codeData
			},
			// 获取工作流提交成功后状态
			setState(e){
				// this.statset
				uni.setStorage({
				    key: 'state',
				    data: e,
				    success: function () {
				        console.log('success');
				    }
				});
			},
			getState(){
				const state = uni.getStorageSync('state')
				console.log(state)
				this.state = state
			},
			// 获取页面请求数据接口 
			getRequestUrl (resData) {
                let url
				if (_.has(resData, 'dataSource.api') && resData.dataSource.api) {
				   url =  resData.dataSource.api
				}
				if (url && Object.keys(this.requsetParam).length > 0) {
					let str = url.split('?')[0]
					let query = url.split('?')[1] ? qs.parse(url.split('?')[1]) : {}
                    const queryData = {
                        ...query,
                        ...this.requsetParam
                    }
					if (str.includes('/:')) {
						let newStr = ''
						str.split('/:').map((x, i) => {
                            if (_.has(queryData, x)) {
                                delete queryData[x]
                            }
							newStr += (i === 0 ? x : `/${this.requsetParam[x]}`)
						})
						str = newStr
					}
                    let queryStr = ''
                    Object.keys(queryData).map((x, i) => {
                         if (queryData[x] !== '' && this.requsetParam[x] !== '') {
                            const symbol = (i === Object.keys(queryData).length - 1 ? '' : '&')
                            queryStr += (query[x] === '' ? `${_.get(this.requsetParam, x, '')}${symbol}` : `${x}=${_.get(this.requsetParam, x, query[x])}${symbol}`) 
                         }
                    })
					url = str + (queryStr ? `?${queryStr}` : '')
				}
				return url
			},
			fetchConfigData () {
				uni.request({
					url: this.API,
					method: 'GET',
					header: this.header,
					complete: (res) => {
						if (_.get(res, 'data.code') === 200) {                 
                            const contentType = this.contentType || 'json'
                            const contentPayload = this.contentPayload || 'data'
                            let responseData = _.get(res.data, contentPayload, contentType === 'base64' ? '' : {})
                            if (responseData && contentType === 'base64') {
                                try {
                                   responseData = Base64.decode(responseData) ? JSON.parse(Base64.decode(responseData)) : {}
                                } catch {}
                            }
							if (responseData && _.isString(responseData)) {
								try {
								   responseData = JSON.parse(responseData)
								} catch {}
							}
							const resData = _.cloneDeep(responseData)
                            
                            // 获取页面请求接口
                            let pageUrl
                            const dataPayload = _.get(resData, 'dataPayload')
                            if (dataPayload && _.get(res.data, dataPayload) && typeof _.get(res.data, dataPayload) === 'object' && JSON.stringify(_.get(res.data, dataPayload)) !== '{}') {
                                pageUrl = ''
                                this.pageData = _.cloneDeep(_.get(res.data, dataPayload))
                            } else {
                               pageUrl = this.getRequestUrl(resData)
                            }
							// 加载页面数据
							if (pageUrl) {
								this.fetchPageData(resData, pageUrl)
							} else {
								this.config = resData
								this.skeletonLoading = false                               
							}
							if (_.has(resData, 'title')) {
								uni.setNavigationBarTitle({
									title: _.get(resData, 'title', '动态页面')
								})
							}
						}
					}
				})
			},
			fetchPageData (configData = {}, pageUrl) {
				uni.request({
					url: pageUrl,
					method: 'GET',
                    data: _.get(configData, 'dataSource.request', {}),
                    header: this.header,
					complete: (res) => {
						this.config = { ...configData }
						this.skeletonLoading = false
						if (_.get(res, 'data.code') === 200) {			
                            const resData = _.get(res, 'data', {})
                            const responseConfig = _.get(this.config, 'dataSource.response', {})
                            let dataField = 'data'
                            if (_.has(responseConfig, 'data') && responseConfig.data) {
                                dataField = responseConfig.data
                            }
                            this.pageData = _.cloneDeep(_.get(resData, dataField, {}))
						}
					}
				})
			},
			// 获取组件数据
			getComponentsData (item) {
				if (!_.has(item, 'binding') || JSON.stringify(item.binding) === '{}') {
					return false
				}
				const comonentScouce = {}
				for (const i in item.binding) {
					comonentScouce[item.binding[i]] = _.get(this.pageData, i, '')
				}
				console.log(comonentScouce)
				let value
				switch (item.type) {
					case 'autoform':
					    value = comonentScouce
						break;
					case 'autolist':
					    value = _.has(comonentScouce, 'list') ? comonentScouce.list : false
						break;
					case 'banner':
					    value = _.has(comonentScouce, 'banners') ? comonentScouce.banners : false;
						break;
					case 'navlist':
					    value = _.has(comonentScouce, 'navList') ? comonentScouce.navList : false
					    break;
					case 'boxList':
					    value = _.has(comonentScouce, 'navList') ? comonentScouce.navList : false
						break;
				    //新增  2021-2-25
					case 'cell':
					    value = _.has(comonentScouce, 'days') ? comonentScouce.days : false
						break;
					//
					case 'steps':
					    value = _.has(comonentScouce, 'steps') ? comonentScouce.steps : false
						break;
					default:
					    value = comonentScouce
				}
                return value
			},
            // 获取组件容器外层布局
            getComponentStyle (item) {
                if (_.has(item, 'container') && JSON.stringify(item.container) !== '{}') {
                    return _.get(item, 'container', {})
                }
                return _.get(this.config, 'moduleContainer', {})
            }
		}
	}
</script>

<style>
</style>

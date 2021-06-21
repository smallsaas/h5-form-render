<template>
	<view :style="[_get(config, 'pageStyle', {}), _get(config, 'moduleContainer', {})]">
        <van-skeleton row="10" :loading="skeletonLoading">
          <block v-if="_get(config, 'modules', []).length > 0">
            <view v-for="(item, index) in config.modules" :key="index">
                <dynamic-form
                   v-if="_get(item, 'type') === 'autoform'"
                   :config="{
                      ..._get(config.moduleData, item.key, {}),
                      outStyle: getComponentStyle(item)
                   }"
				   :srvFormData="getComponentsData(item)"
                />
								<card
								:Style="{
									'padding':'10px 0 0 0',
									'fill':'#EFEFEF',
									'title':{
										'fill':'#FFFFFF'
									}
									}"
								:title="_get(item,'name','')"
								v-if="_get(item, 'type') === 'autolist'"

								>
                <dynamic-list
                  :config="{
                      ..._get(config.moduleData, item.key, {}),
					  ...getComponentsData(item) ? { list: getComponentsData(item) } : {},
                      outStyle: getComponentStyle(item)
                  }"
                />
								</card>
                <swiper-images 
                   v-if="_get(item, 'type') === 'banner'"
                   :list="getComponentsData(item) ||  _get(config.moduleData, `${item.key}.banners`, [])"
                   :outStyle="getComponentStyle(item)"
                />
                <nav-list 
                    v-if="_get(item, 'type') === 'navlist'"
										:title="_get(item,'name','')"
					:config="{
						list: _get(config.moduleData, `${item.key}.navList`, []),
						itemModule: _get(config.moduleData, `${item.key}.itemModule`, []),
						outStyle: getComponentStyle(item),
						title: _get(item,'name','')
					}"
                 />
				 <box-list
						v-if="_get(item,'type') === 'boxList'"
						:list="_get(config.moduleData,`${item.key}.navList`,[])"
				 ></box-list>
				 <card-list
					 v-if="_get(item,'type') === 'cardList'"
					 :list="_get(config.moduleData,`${item.key}.navList`,[])"
				 ></card-list>
            </view>
          </block>
        </van-skeleton>
	</view>
</template>

<script>
	import _ from 'lodash'
	import dynamicList from '../dynamic-list/index.vue'
    import dynamicForm from '../dynamic-form/index.vue'
    import swiperImages from '../swiper-images/index.vue'
    import navList from '../nav-list/index.vue'
    import boxList from '../box-list/box-list.vue'
		import cardList from '../cardList/cardList.vue'
		import card from '../other/Card.vue'
	export default {
		components: { 
					dynamicList, 
					dynamicForm,
					swiperImages,
					navList,
					boxList,
					cardList,
					card
        },
		props: {
			API: String,  // 请求接口
		},
		data () {
			return {
				config: {}, //页面配置信息
				pageData: {}, // 页面数据
                skeletonLoading: true
			}
		},
		created() {
		  if (!this.API) {
			  return
		  }
		  this.fetchConfigData()
		},
		methods: {
			_get (data, field, value) {
				return _.get(data, field, value)
			},
			fetchConfigData () {
				uni.request({
					url: this.API,
					method: 'GET',
					complete: (res) => {
						if (_.get(res, 'data.code') === 200) {
							const resData = _.cloneDeep(_.get(res, 'data.data', {}))							
							// 加载页面数据
							if (_.has(resData, 'dataSource.api') && resData.dataSource.api) {
								this.fetchPageData(resData)
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
			fetchPageData (resData = {}) {
				uni.request({
					url: resData.dataSource.api,
					method: 'GET',
                    data: _.get(this.config, 'dataSource.request', {}),
					complete: (res) => {
						this.config = { ...resData }
						this.skeletonLoading = false
						if (_.get(res, 'data.code') === 200) {
                            // const resData = _.get(res, 'data', {})
                            // const responseConfig = _.get(this.config, 'dataSource.response', {})
                            // let dataField = 'data'
                            // if (_.has(responseConfig, 'data') && responseConfig.data) {
                            //     dataField = responseConfig.data
                            // }
							// this.pageData = _.cloneDeep(_.get(resData, dataField, {}))
							this.pageData = _.cloneDeep(_.get(res, 'data.data', {}))
						}
					}
				})
			},
			// 获取组件数据
			getComponentsData (item) {
				if (!_.has(item, 'binding') || JSON.stringify(item.binding) === '{}') {
					return {}
				}
				const comonentScouce = {}
				for (const i in item.binding) {
					comonentScouce[item.binding[i]] = _.get(this.pageData, i, '')
				}
				let value
				switch (item.type) {
					case 'autoform':
					    value = comonentScouce
						break;
					case 'autolist':
					    value = _.has(comonentScouce, 'list') ? comonentScouce.list : false
						break;
					case 'banner':
					    value = _.has(comonentScouce, 'banners') ? comonentScouce.banners : false
						break;
					case 'navlist':
					    value = _.has(comonentScouce, 'navList') ? comonentScouce.navList : false
					    break;
					case 'boxList':
					    value = _.has(comonentScouce, 'navList') ? comonentScouce.navList : false
						break;
					default:
					    value = comonentScouce
				}
			},
            // 获取组件容器外层布局
            getComponentStyle (item) {
                if (_.has(item, 'container') && JSON.stringify(item.container) !== '{}') {
									console.log(_.get(item,'container',{}))
                    return _.get(item, 'container', {})
                }
                return _.get(this.config, 'moduleContainer', {})
            }
		}
	}
</script>

<style>
</style>

<template>
	<view 
	   class="venue_dynamic_list_container"
	   :style="[_get(config, 'outStyle', {})]"
	>
        <view>
            <view class="tab_list" v-if="typeList.length > 0">
                <ms-tabs
                    :list="typeList"
                    field="name"
                    v-model="tabActive"
                    @selected="handleSelectTab"
                />
            </view>
            <load-refresh
                ref="loadRefresh"
                :pagination="_get(config, 'pagination', true)"
                :isRefresh="isRefresh"
                refreshType="hollowDots"
                color="#04C4C4"
                :heightReduce="heightReduce"
                :fixedHeight="fixedHeight"
                :currentPage="listCurrentPage"
                :totalPages="listTotalPages" 
                @loadMore="loadMore" 
                @refresh="refresh"
             >
              <view slot="content-list" class="list_content">
                  <view v-for="(item, index) in list" :key="index">
                     <article-item
						 v-if="getListItemKey() === 'ArticleItem'"
                         :item="{
							 ...item,
							 ...getComponentBindData(item)
						 }"
                         :itemNavigation="_get(config, 'itemNavigation', '')"
                     />
					 <self-inspection-record-item
					 	v-if="getListItemKey() === 'SelfInspectionRecordItem'"
					 	:item="{
							...item,
							...getComponentBindData(item)
						}"
					 	:itemNavigation="_get(config, 'itemNavigation', '')"
					 />
					<state-item
                      :item="{
						  ...item,
						  ...getComponentBindData(item)
					  }"
					  :itemNavigation="_get(config, 'config.itemNavigation', '/articleDetail/index?id=&title=&type=')"
					  v-if="getListItemKey() === 'StateItem'"
					/>
					<record-steps-item 
					  v-if="getListItemKey() === 'RecordStepsItem'"
					  :item="{
						  ...item,
						  ...getComponentBindData(item)
					  }"
					  :itemNavigation="_get(config, 'itemNavigation', '')"
					/>
					<return-to-work-record-item
						v-if="getListItemKey() === 'ReturnToWorkRecordItem'"
						:item="{
							...item,
							...getComponentBindData(item)
						}"
						:itemNavigation="_get(config, 'itemNavigation', '')"
					/>
                  </view>
              </view>
            </load-refresh>
        </view>
	</view>
</template>

<script>
    import _ from 'lodash'
    import qs from 'qs'
    import { Base64 } from './tools.js'
	import loadRefresh from '../load-refresh/load-refresh.vue'
    import msTab from '../ms-tabs/ms-tabs.vue'
    import ArticleItem from './listItem/ArticleItem.vue'
    import StateItem from './listItem/state-list/state-list.vue'
	import SelfInspectionRecordItem from './listItem/SelfInspectionRecordItem.vue'
	import RecordStepsItem from './listItem/RecordStepsItem.vue'
	import ReturnToWorkRecordItem from './listItem/ReturnToWorkRecordItem.vue'
    import { globalConfig } from '@/config.js'
    
	export default {
		components: {
		  loadRefresh,
          msTab,
          ArticleItem,
		  StateItem,
		  SelfInspectionRecordItem,
		  RecordStepsItem,
		  ReturnToWorkRecordItem
		},
		props: {
			config: {
				type: Object,
				default: function() {
					return {}
				}
			}
		},
		data() {
			return {
				listCurrentPage: 1,
				listTotalPages: 1,
				list: [],
                typeList: [],
                tabActive: 0,
                
                listSearch: {}, // 列表查询参数
                pageNoField: '',  // 页数配置的字段名
                pageSizeField: '' // size配置的字段名
			}
		},
        computed: {
          heightReduce () {
            return this.typeList.length > 0 ? 88 : 0
          },
		  //是否外部传入数据
		  isPropsList () {
			return _.has(this.config, 'list') && _.isArray(this.config.list)
		  },
          // 列表高度
          fixedHeight () {
             // 默认传入的为px
             let height = 0
             if (_.get(this.config, 'outStyle.height')) {
                height = parseInt(_.get(this.config, 'outStyle.height', 0)) - (this.typeList.length > 0 ? 44 : 0)
             }
             if (height < 0) {
                height = 0
             }
             return height * 2
          },
          isRefresh () {
              return !this.isPropsList && this.list.length !== 0
          }
        },
		mounted() {
		 // 外部传入数据源
		 if (this.isPropsList) {
		 	this.list = _.cloneDeep(this.config.list)
		 } else {
			if (_.get(this.config, 'loadApi')) {
			   this.updateData()
			}
		 }
		},
		methods: {
			_has (item = {}, str) {
				if (Object.keys(item).length === 0) {
					return false
				}  
				return _.get(item, str)
			},
            _get (item, str, defauleValue = '') {
              return _.get(item, str, defauleValue)
            },
            getListItemKey() {
              // const moduleKey = _.get(this.config, 'config.modules[0].key', '')
              // const moduleData = _.get(this.config, 'config.moduleData', {})
              // const keyData = _.get(moduleData, moduleKey, {})
			  const keyData = _.get(this.config,'itemModule',{})
              return _.get(keyData, 'name', '')
            },
            
            // 切换tab
            handleSelectTab (e, item) {
                this.tabActive = e
                const typeField = _.get(this.config, 'request.fixed')
                this.listSearch = {
                    ...this.listSearch,
                    [typeField]: _.get(item, 'value'),
                    [this.pageNoField]: 1
                }
                this.fetchList({ refresh: true })
            },
            
            // 更新数据
            updateData () {  
                this.typeList =  _.get(this.config, 'tabConfig.show') === true ? _.get(this.config, 'tabConfig.list', []) : []
                const requestData = _.get(this.config, 'request', {})
                const searchData = {}
                for (const key in requestData) {
                    if (key !== 'default') {
                        searchData[requestData[key]] = ''
                    }
                }
                if (_.has(searchData, 'pageNo')) {
                    searchData.pageNo = 1
                }
                if (_.has(searchData, 'pageSize')) {
                    searchData.pageSize = 10
                }
                this.pageNoField = _.get(searchData, 'pn', 'pageNo')
                this.pageSizeField = _.get(searchData, 'pn', 'pageSize')
                this.listSearch = { ...searchData, ..._.get(this.config, 'request.default', {}) }
                if (_.get(this.config, 'loadApi')) {
                    this.fetchList({ refresh: true })
                }
            },
            
            // 获取列表信息
            fetchList (searchData = {}) {
              uni.showLoading({
                  title: "loading...",
                  mask: true
              })
              uni.request({
                  url: _.get(this.config, 'loadApi'),
                  method: 'GET',
                  data: this.listSearch,
                  header: {
                      Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''}`,
                      token: uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
                  },
                  complete: (res) => {
                     uni.hideLoading()
                     if (['000000', 200].includes(_.get(res, 'data.code'))) {
                        const data = _.get(res, 'data.data', {})
                        const listField = _.get(this.config, 'response.list', '')
                        const totolField = _.get(this.config, 'response.total', 0)
                        
                        const prevList = _.get(searchData, 'refresh') ? [] : this.list
                        this.list = prevList.concat(listField ? _.get(data, listField, []) : _.get(res, 'list', []))
                        const total = _.get(data, totolField, 0)
                        this.listCurrentPage = this.list.length < 10 ? 1 :  Math.floor(total / 10)
                        this.listTotalPages = total < 10 ? 1 : Math.floor(total / 10)
                        this.$refs.loadRefresh.completed()
                     }
                  }
              })  
            },
            
            // 加载更多
            loadMore () {
				if (this.isPropsList) {
					return
				}
                this.listSearch = {
                    ...this.listSearch,
                    [this.pageNoField]: this.listSearch[this.pageNoField] + 1
                }
                this.fetchList()
            },
            
            // 上拉加载刷新
            refresh () {
				if (this.isPropsList) {
					return
				}
            	this.listSearch = {
            	    ...this.listSearch,
            	    [this.pageNoField]: 1
            	}
            	this.fetchList({ refresh: true })
            },
			
			// 列表项组件与列表数据绑定
			getComponentBindData (item) {
				if (!_.has(this.config, 'binding') || JSON.stringify(this.config.binding) === '{}') {
					return {}
				}
				const comonentScouce = {}
				for (const i in this.config.binding) {
					comonentScouce[this.config.binding[i]] = _.get(item, i, '')
				}
				return comonentScouce
			}
		}
	}
</script>

<style lang="less" scoped>
	.venue_dynamic_list_container {
		width: 100%;
		display: block;

		.tab_list {
			border-bottom: 1px solid #f2f2f2;
			position: relative;
			z-index: 100;
		}

		.list_content {}
	}
</style>

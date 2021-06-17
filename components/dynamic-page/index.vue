<template>
	<view :style="[_get(config, 'pageStyle', {}), _get(config, 'container', {})]">
        <van-skeleton row="20" :loading="skeletonLoading">
          <block v-if="_get(config, 'modules', []).length > 0">
            <view v-for="(item, index) in config.modules" :key="index">
                <dynamic-form
                   v-if="_get(item, 'type') === 'autoform'"
                   :config="{
                      ..._get(config.moduleData, item.key, {}),
                      outStyle: _get(item, 'container', {})
                   }"
                />
                <dynamic-list
                  v-if="_get(item, 'type') === 'autolist'"
                  :config="{
                      ..._get(config.moduleData, item.key, {}),
                      outStyle: _get(item, 'container', {})
                  }"
                />
                <swiper-images 
                   v-if="_get(item, 'type') === 'banner'"
                   :list="_get(config.moduleData, `${item.key}.banners`, [])"
                />
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
    
	export default {
		components: { 
            dynamicList, 
            dynamicForm,
            swiperImages
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
		mounted() {
		  if (!this.API) {
			  return
		  }
		  this.fetchConfigData()
		},
		methods: {
			_get(data, field, value) {
				return _.get(data, field, value)
			},
			fetchConfigData () {
				uni.request({
					url: this.API,
					method: 'GET',
					complete: (res) => {
						if (_.get(res, 'data.code') === 200) {
							const data = _.cloneDeep(_.get(res, 'data.data', {}))       
							this.config = { ... data }
                            
							if (_.has(this.config, 'title')) {
								uni.setNavigationBarTitle({
									title: _.get(this.config, 'title', '动态页面')
								})
							}
							// 加载页面数据
							if (_.has(this.config, 'dataSource.api') && this.config.dataSource.api) {
								this.fetchPageData()
							}
						}
                        this.skeletonLoading = false
					}
				})
			},
			fetchPageData () {
				uni.request({
					url: this.config.dataSource.api,
					method: 'GET',
                    data: _.get(this.config, 'dataSource.request', {}),
					complete: (res) => {
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
			}
		}
	}
</script>

<style>
</style>

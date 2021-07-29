<template>
	<view>
		<dynamic-page style="margin-bottom: 50px;" :API="api" v-if="current===0&&loading===false">
		</dynamic-page>
		
		<DataBase v-if="current===1"></DataBase>
		
		<my :item="query" :list="list" v-if="current===2"></my>
		
		<van-tabbar :active="current" @change="onChange">
					<van-tabbar-item>
					  <image
						slot="icon"
						:src="icon.tabbarEnforcement"
						mode="aspectFit"
						style="width: 30px; height: 18px;"
					  />
					  <image
						slot="icon-active"
						:src="icon.tabbarEnforcementActive"
						mode="aspectFit"
						style="width: 44rpx; height: 44rpx;"
					  />
					  执法
					</van-tabbar-item>
					
					<van-tabbar-item>
					  <image
						slot="icon"
						:src="icon.tabbarCompanyData"
						mode="aspectFit"
						style="width: 44rpx; height: 44rpx;"
					  />
					  <image
						slot="icon-active"
						:src="icon.tabbarCompanyDataActive"
						mode="aspectFit"
						style="width: 44rpx; height: 44rpx;"
					  />
					  企业库
					</van-tabbar-item>
					
					<van-tabbar-item>
					  <image
						slot="icon"
						:src="icon.tabbarMy"
						mode="aspectFit"
						style="width: 44rpx; height: 44rpx;"
					  />
					  <image
						slot="icon-active"
						:src="icon.tabbarMyActive"
						mode="aspectFit"
						style="width: 44rpx; height: 44rpx;"
					  />
					  我的
					</van-tabbar-item>
				</van-tabbar>
	</view>
</template>

<script>
	import _ from 'lodash'
	import card from '../../components/other/Card.vue'
	import DynamicPage from '../../components/dynamic-page/index.vue'
	import DataBase from '../enforcement/enterpriseDatabase.vue'
	import my from '../enforcement/my/my.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=2000',
				icon:"",
				current: 0,
				query:"",
				loading:false,
				list:[]
			}
		},
		// onShow() {
		// 	uni.hideHomeButton()
		// },
		created() {
			uni.hideHomeButton()
			this.icon=globalConfig.ico
			this.getList()
		},
		onInit() {
			uni.hideHomeButton()
			this.icon=globalConfig.icon
		},
		onPullDownRefresh() {
			uni.showLoading({
				title:"加载中..."
			})
			this.loading=true
			console.log(this.loading)
			// this.$forceUpdate()
			this.loading=false
			uni.hideLoading()
		},
		onLoad(e){
			let query = JSON.parse(decodeURIComponent(e.query))
			this.query = query
			console.log(query)
			this.icon=globalConfig.icon
			uni.hideHomeButton()
		},
		methods: {
			onChange(event) {
				console.log('event = ', event.detail)
				this.current = event.detail
				this.getList()
			},
			getList(){
				let that = this
				uni.request({
					url:`${globalConfig.dataHost}?id=5557`,
					method:"GET",
					success(res) {
						// console.log("res",res)
						that.list = res.data.data.list
					}
				})
			}
		},
		components:{
			DynamicPage,
			my,
			DataBase
		}
	}
</script>

<style>

</style>

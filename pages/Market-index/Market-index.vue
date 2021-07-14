<template>
	<view>
		<dynamic-page :API="api" v-if="current===0">
		</dynamic-page>
		
		<my :item="query" v-if="current===1"></my>
		
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
	import my from '../enforcement/my/my.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=2000',
				icon:"",
				current: 0,
				query:""
			}
		},
		onLoad(e){
			let query = JSON.parse(decodeURIComponent(e.query))
			this.query = query
			this.icon=globalConfig.icon
			uni.hideHomeButton()
		},
		methods: {
			onChange(event) {
				console.log('event = ', event.detail)
				this.current = event.detail
			},
		},
		components:{
			DynamicPage,
			my
		}
	}
</script>

<style>

</style>

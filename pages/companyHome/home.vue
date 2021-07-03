<template>
	
	<view>
		<dynamic-page
			v-if="current == 0"
		   :API="getPageAapi"
		/>
		
		<law-enforcement v-if="current == 1" />
		
		<return-to-work v-if="current == 2"/>
		
		<my-page v-if="current == 3"/>
		
		<van-tabbar :active="current" @change="onChange">
			<van-tabbar-item>
			  <image
				slot="icon"
				src="/static/tabbar/home.png"
				mode="aspectFit"
				style="width: 30px; height: 18px;"
			  />
			  <image
				slot="icon-active"
				src="/static/tabbar/home-on.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  首页
			</van-tabbar-item>
			
			<van-tabbar-item>
			  <image
				slot="icon"
				src="/static/tabbar/work.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  <image
				slot="icon-active"
				src="/static/tabbar/work-on.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  执法
			</van-tabbar-item>
			
			<van-tabbar-item>
			  <image
				slot="icon"
				src="/static/tabbar/work.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  <image
				slot="icon-active"
				src="/static/tabbar/work-on.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  复工
			</van-tabbar-item>
			
			<van-tabbar-item>
			  <image
				slot="icon"
				src="/static/tabbar/my.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  <image
				slot="icon-active"
				src="/static/tabbar/my-on.png"
				mode="aspectFit"
				style="width: 44rpx; height: 44rpx;"
			  />
			  我的
			</van-tabbar-item>
		</van-tabbar>
		
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import myPage from '@/pages/companyHome/my/index.vue'
	import returnToWork from '@/pages/companyHome/my/returnToWork.vue'
	import lawEnforcement from '@/pages/companyHome/lawEnforcement/index.vue'
	import { globalConfig } from '@/config.js'
	
	
	export default {
		components:{ 
			dynamicPage,
			myPage,
			returnToWork,
			lawEnforcement
		},
		onLoad (e){
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=109',
				current: 0
			}
		},
		methods:{
			onChange(event) {
				console.log('event = ', event.detail)
				this.current = event.detail
			},
		},
		tabList: [
			{ id: 0, title: '首页', normal: '/static/tabbar/home.png', active: '/static/tabbar/home-on.png' },
			{ id: 1, title: '复工', normal: '/static/tabbar/work.png', active: '/static/tabbar/work-on.png' },
			{ id: 2, title: '我的', normal: '/static/tabbar/my.png', active: '/static/tabbar/my-on.png' }
		]
	}
</script>

<style lang="less">
	// page {
	// 	height: 100%;
	// 	background-color: #E5E5E5;
	// 	padding: 6rpx 0;
	// }
	
</style>

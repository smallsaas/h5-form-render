<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		/>
		
		<tabBar :current="0" :list="tabList"></tabBar>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	
	import tabBar from "@/components/other/tabbar.vue"
	
	export default {
		components:{ 
			dynamicPage,
			tabBar
		},
		onLoad (e){
		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
		},
		onBackPress() {
			return true
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=109',
				tabList: [
					{
						text: '首页',  
						icon: '/static/tabbar/home.png',  //未选中图标
						icon_a: '/static/tabbar/home-on.png',  //选中图片
						path: "/pages/companyHome/home",  //页面路
					},{
						text: '复工',
						icon: '/static/tabbar/work.png',
						icon_a: '/static/tabbar/work-on.png',
						path: "/pages/companyHome/my/returnToWork",
					},{
						text: '我的',
						icon: '/static/tabbar/my.png',
						icon_a: '/static/tabbar/my-on.png',
						path: "/pages/companyHome/my/index",
					},
					
				]
			}
		},
		methods:{
		}
	}
</script>

<style lang="less">
	// page {
	// 	height: 100%;
	// 	background-color: #E5E5E5;
	// 	padding: 6rpx 0;
	// }
	
</style>

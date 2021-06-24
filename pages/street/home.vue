<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		/>
		
		
		<view>
			<van-tabbar :active="active" @change="onChange">
			  <van-tabbar-item icon="home-o">首页</van-tabbar-item>
			  <van-tabbar-item icon="comment-o">社区</van-tabbar-item>
			  <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
			</van-tabbar>
		</view>
	</view>

</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	
	export default {
		components:{ dynamicPage },
		onLoad (e){
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=108',
				active: 0
			}
		},
		
		methods:{
		  onChange(event) {
			// event.detail 的值为当前选中项的索引
			this.active = event.detail
			switch (event.detail){
				case 0:
					uni.navigateTo({
						url: './home'
					})
					break;
				case 1:
					uni.navigateTo({
						url: ''
					})
					break;
				case 2:
					uni.navigateTo({
						url: './my/index'
					})
					break;
				default:
					break;
			}
		  },
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

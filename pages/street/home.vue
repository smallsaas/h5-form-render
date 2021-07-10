<template>
	
	<view>
		<dynamic-page
		   :API="getPageAapi"
		    v-if="current == 0"
		/>
		
		<!-- <street-user-report v-if="current == 1" /> -->
		
		<my-page v-if="current === 1" />
		
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
			
				<button style="background-color: #1A5EB5;color: white;width: 60px;height: auto;line-height: 30px;text-align: center;
				box-shadow: 0px 0px 0px #666;margin: 10px auto;font-weight: bolder;
				" @click="add()">+</button>
			
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
	import { globalConfig } from '@/config.js'
	import streetUserReport from '@/pages/street/community/streetUserReport'
	import myPage from '@/pages/street/my/index'
	
	export default {
		components:{ 
			dynamicPage,
			streetUserReport,
			myPage
		},
		onLoad (e){
			uni.hideHomeButton()
		},
		data() {
			return {
				getPageAapi: globalConfig.formHost + '?id=108',
				// getSPageApi: globalConfig.formHost + '?id=5600',
				current: 0
			}
		},
		
		methods:{
		  onChange(event) {
				// console.log('event = ', event.detail)
				this.current = event.detail
		  },
			add(){
				uni.navigateTo({
					url:'/pages/street/community/streetUserReport'
				})
			}
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

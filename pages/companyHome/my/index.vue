<template>
	<view class="my_container">
		<view class='container_top'>
			<van-row>
				<van-col>
					<view class='avatar'>
						<img v-if="userInfo.avatar" :src="userInfo.avatar"/>
						<img v-else  :src="this.defaultAvatar"/>
					</view>
				</van-col>
				<van-col>
					<view class='userInfo'>
						<van-row type="flex">
							<van-col>
								<view class='text'>{{userInfo.userName}}</view>
							</van-col>
							<van-col>
								<van-button plain type='info' size='small' round>信息按钮</van-button>
							</van-col>
						</van-row>
						<van-row type="flex">
							<van-col>
								<view class='text'>企业编号: </view>
							</van-col>
							<van-col>
								<view class='text'>{{userInfo.enterpriseNumber}} </view>
							</van-col>
						</van-row>
						<van-row type="flex">
							<van-col>
								<view class='text'>企业域名: </view>
							</van-col>
							<van-col>
								<view class='text'>{{userInfo.domainName}} </view>
							</van-col>
						</van-row>
						<van-row type="flex">
							<van-col>
								<view class='text' style="text-align: right;">职位: </view>
							</van-col>
							<van-col>
								<view class='text' style="text-align: left;">{{userInfo.job}} </view>
							</van-col>
						</van-row>
					</view>
					
				</van-col>
			</van-row>
		</view>


		<view v-for="(item,index) in cellList" :key="index">
			<dynamic-cell :param="{
				title: item.title,
				icon: item.icon
			}" 
			@handleClick="onItemClick(item.path)"
			/>
		</view>

		<tabBar :current="2" :list="tabList"></tabBar>

	</view>

</template>

<script>
	import dynamicCell from "@/components/custom-c/cell.vue";
    import _ from 'lodash';
	import { getUserInfo } from '@/common/api.js'
	import tabBar from "@/components/other/tabbar.vue"
	
	export default {
		components:{
			dynamicCell,
			tabBar
		},
		onLoad (e){
			this.initData("100");
		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
		},
		data() {
			return {
				defaultAvatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F25%2F20191225224833_zloky.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626422745&t=86d45ded6db55de9e9b4c13fe2084c3a',
				userInfo:{
					// avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F25%2F20191225224833_zloky.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626422745&t=86d45ded6db55de9e9b4c13fe2084c3a',
					// userName: '张三',
					// enterpriseNumber: 'Ab263549898',
					// domainName: 'hajdshdjAb263549898',
					// job: '员工',
				},
				cellList:[
					{title: "自查记录", icon: "orders-o", path: "./selfInspectionRecord"},
					{title: "复工记录", icon: "label-o", path: "./returnToWorkRecord"},
					{title: "执法记录", icon: "label-o", path: "./lawEnforcementRecord"}
				],
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
			async initData(id){
				const res = await getUserInfo({id: id})
				if (_.get(res, 'code') === 200) {
				    this.userInfo = { ..._.get(res, 'data', {}) };
				}
			},
			onItemClick(path){
				if(path){
				   uni.navigateTo({
						url: path
				   }) 
				}else{
					console.log('path 不存在 ')
				}
			},
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
	}

	.my_container {
		width: 100%;
		height: 100%;
	}

	.container_top {
		margin: 18rpx 0;
		padding: 12rpx 0;
		background-color: #ffffff;
		
		.avatar {
			width: 180rpx;
			>img{
				width: 110rpx;
				height: 110rpx;
				margin-left: 46rpx;
				margin-top: 50rpx;
			}
		}
		
		.userInfo {
			font-size: 28rpx;
			margin-top: 40rpx;
		
			.text {
				min-width: 130rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
				margin-right: 14rpx;
			}
		}
	}




</style>

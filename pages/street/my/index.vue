<template>
	<view class="my_container">
		<view class='container_top'>
			
			<view class='avatar'>
				<img v-if="userInfo.avatar" :src="userInfo.avatar"/>
				<img v-else  :src="this.defaultAvatar"/>
			</view>
			<view class='userInfo'>
				<view class='title'>{{userInfo.userName}}</view>
				<view class='subTitle'>{{userInfo.type}}</view>
			</view>
			
				
		</view>


		<view v-for="(item,index) in cellList" :key="index">
			<dynamic-cell v-if="item.title" :param="{
				title: item.title,
				icon: item.icon
			}" 
			@handleClick="onItemClick(item.path)"
			/>
			<divider v-else size="18"/>
			 
		</view>

	</view>

</template>

<script>
	import dynamicCell from "@/components/custom-c/cell.vue";
	import divider from "@/components/custom-c/divider.vue";
    import _ from 'lodash';
	import { getUserInfo } from '@/common/api.js'
	
	export default {
		components:{
			dynamicCell,
			divider
		},
		onLoad (e){
			this.initData("100");
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
					{title: "我的上报", icon: "orders-o", path: "/pages/street/my/myReport"},
					{title: "我的收藏", icon: "label-o", path: ""},
					{title: ""},
					{title: "设置", icon: "label-o", path: ""}
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
					// console.log('path 不存在 ')
				}
			}
		},
		mounted() {
			uni.setNavigationBarTitle({
			　　title: '我的'
			})
			this.initData("100");
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
		display: flex;
		flex-direction: column;
		
		.avatar {
			display: flex;
			justify-content: center;
			margin: 40rpx 0 20rpx 0;
			>img{
				width: 160rpx;
				height: 160rpx;
				border-radius: 50%;
			}
		}
		
		.userInfo {
			font-size: 28rpx;
			margin-top: 15rpx;
			padding-bottom: 20rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			.text {
				min-width: 130rpx;
				height: 70rpx;
				line-height: 70rpx;
				text-align: center;
			}
		
			.title {
				.text();
				font-size: 36rpx;
			}
			
			.subTitle {
				.text();
				height: 40rpx;
				line-height: 40rpx;
				color: #a6a6a6;
			}
		}
	}




</style>

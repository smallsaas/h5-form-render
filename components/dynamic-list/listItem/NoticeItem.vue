<template>
	<view class="noticeItem">
		<image mode="aspectFit" :src="icon.notice" class="image"></image>
		<view class="content">
			<view><span style="font-weight:bolder;margin-right:5px">通知人:</span>{{item.author}}</view>
			<view><span style="font-weight:bolder;margin-right:5px">通知标题:</span>{{item.title}}</view>
			<view><span style="font-weight:bolder;margin-right:5px">发布时间:</span>{{item.create_time}}</view>
		</view>
		<image mode="aspectFit" :src="icon.arrowRight" class="image"></image>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	export default {
		name:'noticeItem',
		props:{
			item:Object
		},
		data(){
			return {
				icon:null
			}
		},
		created() {
			this.icon = globalConfig.icon
			console.log("item",this.item)
		}
	}
</script>

<style lang="less">
	.noticeItem{
		height: 100px;
		display: flex;
		align-items: center;
		.image{
			width: 20px;
			height: 20px;
			padding: 0 20px;
		}
		.content{
			display: flex;
			flex: 1;
			flex-direction: column;
		}
	}
</style>

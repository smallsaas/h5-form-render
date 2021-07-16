<template>
	<view>
		<view class="AvatarCard" v-if="theme==='enforcement'||theme==='company'">
			<view class="avatar_Box">
				<image :src="list.avatar||icon.avatarMy" class="avatar"></image>
			</view>
			<view class="title_Box" v-if="theme==='enforcement'">
				<view class="row"><span class="title">姓名:</span>{{list.nickName||list.username||'-'}}</view>
				<view class="row"><span class="title">证号:</span>{{list.code||'-'}}</view>
			</view>
			<view class="title_Box" v-if="theme==='company'">
				<view class="row"><span class="title">公司名称:</span>{{list.nickName||list.username||'-'}}</view>
				<view class="row"><span class="title">营业执照号:</span>{{list.code||'-'}}</view>
			</view>
		</view>
		<view class="AvatarCard" v-if="theme==='street'" style="flex-direction: column;align-items: center;">
			<view class="avatar_Box">
				<image :src="list.avatar||icon.avatarMy" class="avatar"></image>
			</view>
			<view class="title_Box">
				<view class="row"><span class="title">{{list.nickName||list.username||'-'}}</span></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {globalConfig} from '@/config.js'
	import card from './other/Card.vue'
	export default {
		name:"Avatar",
		data() {
			return {
				icon:{},
				list:{}
			};
		},
		components:{
			card
		},
		props:{
			item:{
				type:Object
			},
			theme:String
		},
		created() {
			
			if(this.item){
				this.list=this.item
			}else{
				this.list = uni.getStorageSync(globalConfig.userInfo)
				console.log(this.list)
			}
			this.icon = globalConfig.icon
			console.log("userInfo",globalConfig.userInfo)
		}
	}
</script>

<style lang="less">
	.AvatarCard{
		background-color: white;
		display: flex;
		padding: 50px 10px;
		margin: 10px;
		// box-shadow: 0px 0px 5px #aaa;
		.avatar_Box{
			padding: 5px;
			.avatar{
				width: 50px;
				height: 50px;
				border-radius: 50%;
			}
		}
	}
	.title_Box{
		.title{
			font-weight: bolder;
			margin: 0 10px;
		}
		.row{
			line-height: 30px;
		}
	}
</style>

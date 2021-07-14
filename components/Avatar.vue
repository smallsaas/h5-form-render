<template>
	<view>
		<view class="AvatarCard">
			<view class="avatar_Box">
				<image :src="item.avatar||icon.avatarMy" class="avatar"></image>
			</view>
			<view class="title_Box">
				<view class="name"><span class="title">姓名:</span>{{item.nickname||'-'}}</view>
				<view class="number"><span class="title">证号:</span>{{item.number||'-'}}</view>
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
				icon:{}
			};
		},
		components:{
			card
		},
		props:{
			item:{
				type:Object
			}
		},
		created() {
			this.icon = globalConfig.icon
			console.log(this.item)
		}
	}
</script>

<style lang="less">
	.AvatarCard{
		background-color: white;
		display: flex;
		padding: 50px 10px;
		margin: 10px;
		box-shadow: 0px 0px 5px #aaa;
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
		.name{
			line-height: 30px;
		}
		.number{
			line-height: 30px;
		}
	}
</style>

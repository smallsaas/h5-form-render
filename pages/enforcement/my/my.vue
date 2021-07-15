<template>
	<view>
		<avatar :theme="theme" :item="item"></avatar>
		<view class="ListBody">
			<view @click="jump(item.nav)" class="ListChild" v-for="(item,i) in list">
				<image :src="icon[list.icon]" v-if="list.icon"></image>
				<view class="ListTitle">{{item.title}}</view>
				<image :src="icon.arrowRight" class="Arrow"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import Avatar from '../../../components/Avatar.vue'
	import {globalConfig} from '@/config.js'
	export default {
		name:"my",
		data() {
			return {
				icon:{
					
				}
			}
		},
		created() {
			this.icon = globalConfig.icon
			console.log(this.item)
		},
		methods: {
			jump(nav){
				uni.navigateTo({
					url:'/pages'+nav
				})
			}
		},
		props:{
			item:Object,
			theme:{
				type:String,
				default(){
					return "enforcement"
				}
			},
			list:{
				type:Array,
				default(){
					return [
						{"title":"我的执法记录","nav":"/enforcement/myEnforcement"}
						// {"title":"我的执法记录","nav":"/enforcement/myEnforcement"}
					]
				}
			}

		},
		components:{
			Avatar
		}
	}
</script>

<style>
	page{
		background-color:#eee;
	}
	.ListBody{
		margin: 20px 10px;
		/* box-shadow: 0px 0px 5px #aaa; */
	}
	.ListChild{
		height: 50px;
		background-color: white;
		border-bottom: 1px solid #EEEEEE;
		display: flex;
	}
	.ListTitle{
		height: 50px;
		line-height: 50px;
		flex: 1;
		margin-left: 10px;
		font-weight: bolder;
		font-size: 16px;
	}
	.Arrow{
		padding: 10px;
		width: 30px;
		height: 30px;
	}
</style>

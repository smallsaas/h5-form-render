<template>
	<view>
		<view class="AvatarCard" v-if="theme==='enforcement'||theme==='company'">
			<view class="avatar_Box">
				<image :src="list.avatar||icon.avatarMy" class="avatar"></image>
				<view class="unBind" @click="unbinding">解绑</view>
			</view>
			<view class="title_Box" v-if="theme==='enforcement'">
				<view class="row"><span class="title">姓名:</span>{{list.nickName||list.username||'-'}}</view>
				<view class="row"><span class="title">证号:</span>{{getCode(theme)||'-'}}</view>
			</view>
			<view class="title_Box" v-if="theme==='company'">
				<view class="row"><span class="title">公司名称:</span>{{list.nickName||list.username||'-'}}</view>
				<view class="row"><span class="title">营业执照号:</span>{{getCode(theme)||'-'}}</view>
			</view>
		</view>
		<view class="AvatarCard" v-if="theme==='street'" style="flex-direction: column;align-items: center;">
			<view class="avatar_Box">
				<image :src="list.avatar||icon.avatarMy" class="avatar"></image>
				<view class="unBind" @click="unbinding">解绑</view>
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
				list:{},
				code:''
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
		methods:{
			getCode(item){
				let that = this;
				if(item==="enforcement"){
					uni.request({
						url:`${globalConfig.loginEP}/admin/user/info`,
						method:"GET",
						header:{
								Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
						},
						success(res) {
							// console.log(res.data.data.sysUser.personNo)
							that.code = res.data.data.sysUser.personNo
						}
					})
				}else if(item==="company"){
					uni.request({
						url:`${globalConfig.loginEP}/admin/user/info`,
						method:"GET",
						header:{
								Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
						},
						success(res) {
							// console.log(res.data.data.sysUser.personNo)
							that.code = res.data.data.sysUser.personNo
						}
					})
				}else{
					
				}
				return this.code
			},
			unbinding(){
				if(theme==="company"){
					uni.request({
						url:`${globalConfig.loginEP}/admin/systhirdpartyuser/unbindUser`,
						method:"PUT",
						header:{
								Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
						},
						success(e) {
							console.log(e)
							if(e.data.data===true){
								uni.showLoading({
									content:"解绑成功",
									showCancel:false
								})
								setTimeout(()=>{
									uni.reLaunch({
										url:"/pages/login/third-Login/third-Login",
										success() {
											uni.hideLoading()
										}
									})
								},2000)
							}
						}
					})
				}else{
					uni.request({
						url:`${globalConfig.loginEP}/admin/systhirdpartyuser/unbindUser`,
						method:"PUT",
						header:{
								Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
						},
						success(e) {
							console.log(e)
							if(e.data.data===true){
								uni.showLoading({
									content:"解绑成功",
									showCancel:false
								})
								setTimeout(()=>{
									uni.reLaunch({
										url:"/pages/login/third-Login/third-Login",
										success() {
											uni.hideLoading()
										}
									})
								},2000)
							}
						}
					})	
				}
			}
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
			.unBind{
				position: relative;
				bottom: 0;
				width: 30px;
				font-size: 10px;
				background-color: #00ACA7;
				color: white;
				text-align: center;
				left: 50%;
				transform: translate(-50%);
				padding: 3px 10px;
				border-radius: 3px;
			}
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

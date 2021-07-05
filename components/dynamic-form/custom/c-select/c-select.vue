<template>
	<view class="SelectBox">
		<view class="Content">
			<view class="Content_Value">{{content}}</view>
			<button class="SelectBtn" @click="getValue()">选择用户列表</button>
		</view>
		<swiper vertical="1" :display-multiple-items="length" :style="{'height':height}" autoplay="false" easing-function="easeInOutCubic" class="windows" v-show="show">
			<swiper-item v-for="(item,i) in list" class="allList" :key="i">
				<view @click="hide(i)" class="SelectList" >
					<view class="title">{{item.userName}}</view>
					<view class="subtitle">{{item.orgName}}</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
		import {getSearchList} from '../../../../common/api.js'
	export default {
		name:"c-select",
		data(){
			return{
				list:{},
				show:false,
				content:"请选择用户",
				length:"",
				height:"120px"
			}
		},
		methods:{
			async getValue(){
				const res = await getSearchList();
				console.log(res)
				this.list = res.data.records
				this.show = true
				console.log(this.list)
				console.log(this.show)
				if(this.list.length<5){
					this.length = this.list.length
					this.height = this.list.length * 60 + "px"
					console.log(this.height)
				}else{
					this.length = 6
					this.height = "360px"
				}
			},
			hide(i){
				this.content = this.list[i].userName
				this.show = false
				this.$emit("change",this.list[i].id)
			}
		},
		props:{
			loadAPI:{
				type:String,
				default(){
					
				}
			}
		}
	}
</script>

<style lang="less">
	.SelectBox{
	}
	.Content{
		.Content_Value{
			text-align: center;
			font-size: 16px;
		}
		.SelectBtn{
			// width: 60px;
			width: 120px;
			padding: 0px 10px;
			height: 30px;
			line-height: 30px;
			font-size: 16px;
			background-color: #1A5EB5;
			color: white;
		}
	}
	.windows{
		position: fixed;
		width: 80%;
		box-shadow: 0px 0px 5px #333;
		// bottom: 0;
		top: 50%;
		transform: translate(0,-50%);
		right: 0;
		max-height: 600px;
		z-index: 20000;
		background-color: #fff;
		.allList{
			position: relative;
			overflow: scroll;
			.SelectList{
				width: 100%;
				height: 80px;
				padding: 10px;
				z-index: initial;
				.title{
					font-size: 15px;
					font-weight: bolder;
				}
				.subtitle{
					font-size: 12px;
					color: #666;
				}
			}
		}
	}
</style>

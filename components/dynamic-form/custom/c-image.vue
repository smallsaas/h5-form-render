<template>
	<view :style="param.style" class="images">
		<!-- <image :url=""></image> -->
		<view v-if="!param.value" class="get">
			获取数据中...
		</view>
		<view class="imageBox" v-for="(item,i) in param.value">
			<view class="imagecontent">
				<image class="image" mode="aspectFit" :id="item.title" :src="item.url||'../../../static/images/empty.png'">
				</image>
			</view>
			<view class="label" :for="item.title" v-if="item.title">
				<span style="color: red;" v-if="param.required">*</span>
				<span class="title">{{item.title}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"c-image",
		props:{
			param:{
				type:Object,
				default: function(){
					return {
						
					}
				}
			}
		},
	methods:{
		getParam(){
			console.log(this.param)
		}
	},
	data(){
		
	}
}
</script>

<style lang="less">
	.images{
		// flex: 1;
		overflow: hidden;
		// width: 130px;
		// margin: 5px 15px 15px 15px;
		.get{
			color: #666;
			font-weight: bolder;
			font-size: 12px;
			margin: 5px 5px 15px 5px;
		}
	}
	.imageBox{
		float: left;
		margin: 5px 5px 15px 5px;
		width: 80px;
		height: 80px;
		.imagecontent{
			width: 100%;
			height: 100%;
			background-color: #666;
			.image{
				max-width: 100%;
				max-height: 100%;
			}
		}
		.label{
			margin-top: -20px;
			background-color: #999;
			opacity: .5;
			width: 100%;
			height: 20px;
			line-height: 20px;
			font-size: 10px;
			font-weight: bolder;
			text-align: center;
			// margin: 0 auto;
			.title{
				text-align: center;
				width: 100%;
				color: white;
				line-height: 20px;
			}
		}
	}

</style>

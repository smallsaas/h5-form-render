<template>
	<view class="c-video">
		<view v-for="(item,i) in param.value" class="c-video-content">
			<video :src="item.url" class="c-video-player"></video>
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
				// console.log(this.param)
			}
		},
		data(){
			
		}
	}
</script>

<style>
	.c-video{
		overflow: hidden;
	}
	.c-video-content{
		
	}
	.c-video-player{
		width: 180px;
		height: 100px;
		float: left;
		margin: 10px;
	}
</style>

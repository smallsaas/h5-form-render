<template>
	<van-cell :title="title">
	  <view style="color: #008EF6" @click="clickFunc">{{ param.content }}</view>
	</van-cell>
</template>

<script>
	export default {
		data(){
			return {
				title:''
			}
		},
		props:{
			days: Number,
			param:{
				type:Object,
				default: function(){
					return {
						title: "title",
						content: "content",
						path: ""
					}
				}
			},
		},
		methods:{
			clickFunc(){
				// this.$emit('handleClick', e.detail);
				uni.navigateTo({
					url: this.param.path
				})
			}
		},
		mounted(){
			this.title = this.param.title.replace("0", " " + this.days + " ")
		}
	}
</script>

<style>
</style>

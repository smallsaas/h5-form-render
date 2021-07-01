<template>
	<view>
		<view v-if="selectValue">{{selectValue}}</view>
		<button @click="SplitValue()">请选择</button>
	</view>
</template>

<script>
	import search from '../../search/search.vue'
	export default {
		name:"c-select-list",
		data(){
			return{
				selectValue:null,
				show:true
			}
		},
		methods:{
			SplitValue(){
					uni.reLaunch({
						url:"/components/dynamic-form/custom/selectBox/selectBox",
						animationType:"slide-in-left",
						animationDuration:300,
						fail(e) {
							console.log(e)
						}
					})
			},
			shows(){
				this.show=!this.show;
			},
		}
	}
</script>

<style>
	.Modal{
		position: fixed;
		overflow: scroll;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		width: auto;
		height: 100%;
		z-index: 10000;
		background-color: white;
	}
</style>

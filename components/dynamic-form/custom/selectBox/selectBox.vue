<template>
	<view>
		<view class="Nav">
			<view class="NavBody">
				<view class="Lefticon" v-if="lefticon">{{leftText||"完成"}}</view>
			</view>
		</view>
		<view class="content">
			<search searchType="bottom"></search>
		</view>
	</view>
</template>

<script>
	import search from '../../../search/search.vue'
	export default {
		data() {
			return {
				
			}
		},
		props:{
			lefticon:{
				type:Boolean,
				default(){
					return true
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
.Nav{
	background: #576B95;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 64px;
	z-index: 10000;
	.NavBody{
		bottom: 0;
		top: 26px;
		left: 0;
		right: 0;
		.Lefticon{
			color: white;
			line-height: 100px;
		}
	}

}
.content{
	position: absolute;
	width: 100%;
	height: 100%;
}

</style>

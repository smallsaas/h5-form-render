<template>
	<view class="stateSearchlist">
		<view class="titleBox">
			<span class="title">{{item.name}}</span>
		</view>
		<view class="subTitleBox">
			{{item.address}}
		</view>
		<radio @click="getItemName()"></radio>
	</view>
	
</template>
<script>
	
	export default {
		data(){
			return {
				check:false
			}
		},
		created() {
		},
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			getItemName(){
				this.check = true
				this.$emit("getName",this.item.name)
				
			}
		}
	}
</script>

<style lang="less">
	.stateSearchlist{
		border-bottom: 1px solid #EEE;
		padding: 10px;
		>.titleBox{
			width: 100%;
			height: 2em;
			line-height: 2em;
			>.title{
				font-size: 14px;
				width: auto;
				font-weight: bolder;
			}
			>.state{
				border: 1px solid #B7CEE5;
				color: #B7CEE5;
				font-size: 8px;
				padding: 1px 4px;
				&:hover{
					background-color: #B7CEE5;
					color: white;
				}
			}
			>.state-example{
				margin-right: 5px;
				margin-left: 20px;
				line-height: 20px;
			}
		}
		>.subTitleBox{
			color: #A6A6A6;
			font-size: 12px;
		}
	}
	
</style>

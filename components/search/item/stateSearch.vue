<template>
	<view class="stateSearchlist">
		<view class="titleBox">
			<span class="title">{{item.name}}</span>
			<span class="state state-example" v-if="item.state.example.status">检查 {{item.state.example.number}}</span>
			<span class="state state-self" v-if="item.state.self.status">自查 {{item.state.self.number}}</span>
		</view>
		<view class="subTitleBox">
			{{item.address}}
		</view>

	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			},

		}
	}
</script>

<style lang="less">
	.stateSearchlist{
		position: relative;
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

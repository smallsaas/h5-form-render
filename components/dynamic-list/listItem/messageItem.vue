<template>
	<view class="MessageItemBox">
		<span class="title">{{item.title}}</span>
		<span class="subtitle">{{item.subtitle}}</span>
	</view>
</template>

<script>
    export default {
      name: 'messageItem',
      props: {
        item: Object
      }
    }
</script>

<style lang="less">
	.MessageItemBox{
		display: flex;
		text-align: center;
		font-weight: bolder;
		margin:0px 10px;
		padding: 10px 0px;
		border-bottom: 1px solid #aaa;
		.title{
			font-size: 14px;
			flex: 1;
		}
		.subtitle{
			font-size: 14px;
			flex: 2;
		}
	}
</style>

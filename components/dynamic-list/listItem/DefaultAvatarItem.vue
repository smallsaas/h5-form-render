<template>
	<view class="avatarItem">
		<span class="avatarBox">
			<image :src="item.img" mode="scaleToFill" style="width: 50px; height: 50px;border-radius: 50%;">
		</span>
		<span class="name">{{item.name}}</span>
		<span v-if="item.sub">
			<span class="" style="float: right;">{{item.sub}}</span>
		</span>
	</view>
	</image>
</template>

<script>
	export default {
		name:"avatar-item",
		props:{
			item:Object
		}
	}
</script>

<style lang="less">
	.avatarItem{
		font-size: 16px;
		padding: 10px;
		width: auto;
		height: 50px;
		line-height: 50px;
		.avatarBox{

		}
		.name{
			margin-left: 10px;
			position: absolute;
		}
	}
</style>

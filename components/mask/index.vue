<template>
	<view class="mask_container">
		<slot></slot>
	</view>
</template>

<style lang="less">
	.mask_container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.6);
		overflow: hidden;
		transition: all .2s;
	}
</style>

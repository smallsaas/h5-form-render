<template>
	<view class='divider' v-bind:style='{ height: size+"rpx"}'></view>
</template>

<script>
	export default {
		props:{
			size: {
				type: String,
				default: '2'
			}
		}
	}
</script>

<style>
	.divider {
		width: 100%;
		background-color: #E5E5E5;
	}
</style>

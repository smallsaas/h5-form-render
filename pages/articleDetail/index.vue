<template>
	<view style="padding: 40rpx">
		<view>id：{{queryData.id}}</view>
		<view>标题：{{queryData.title}}</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				queryData: {}
			}
		},
		onLoad(e) {
			if (e.query) {
				this.queryData = { ...JSON.parse(decodeURIComponent(e.query)) }
			} else {
                this.queryData = { ...e }
            }
		}
	}
</script>

<style>
</style>

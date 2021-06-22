<template>
	<view>

		<van-steps :steps="item.recordSteps" :active="active" direction="vertical" active-color="#ee0a24" />

	</view>
</template>
<script>
	import qs from 'qs'
	export default {
		name: 'RecordStepsItem',
		data(){
			return {
				active: -1
			}
		},
		props: {
			item: Object,
			// ext: Object,
			// itemNavigation: String
		},
		computed: {

		},
		methods: {

		},
		mounted(){
			console.log('this.item = ', this.item)
		}
	}
</script>
<style lang="less" scoped>

</style>

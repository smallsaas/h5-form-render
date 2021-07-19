<template>
	<view>
		<dynamic-page
			 :API="api"
			 :customValues="customValues"
		></dynamic-page>
	</view>
</template>

<script>
	import dynamicPage from '../../../components/dynamic-page/index.vue'
	import {globalConfig} from '@/config.js'
	export default {
		data() {
			return {
				customValues:{},
				api: globalConfig.formHost + '?id=2090'
			}
		},
		methods: {
			getCustomValues(e){
				let decode = JSON.parse(decodeURIComponent(e))
				this.customValues = decode.customValues
			},
		},
		onLoad(e) {
			console.log(e)
			this.getCustomValues(e.query)
			// this.getConfig()
		},
		components:{
			dynamicPage
		}
	}
</script>

<style>

</style>

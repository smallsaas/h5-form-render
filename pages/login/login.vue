<template>
	<view>
		<dynamic-page :API="api"></dynamic-page>
	</view>
	
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=130'
			}
		},
		methods: {
		},
		components: {
			dynamicPage
		}
	}
</script>

<style>

</style>

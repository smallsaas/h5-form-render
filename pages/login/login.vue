<template>
	<view>
		<dynamic-page :API="api"></dynamic-page>
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { config } from '@/config.js'
	export default {
		data() {
			return {
				api: config.formHost + '/form?id=108'
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

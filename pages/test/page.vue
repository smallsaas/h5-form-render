<template>
	<view>
		<dynamic-page
           :API="api"
        />
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
    import { config } from '@/config.js'
	export default {
		components: {
			dynamicPage
		},
		data() {
			return {
				api: config.formHost + '/form?id=200'
			}
		}
	}
</script>

<style>
</style>

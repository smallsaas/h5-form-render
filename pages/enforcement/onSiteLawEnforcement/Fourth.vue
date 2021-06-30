<template>
	<view>
		<dynamic-page
           :API="api"
        />
	</view>
</template>

<script>
	import dynamicPage from '../../../components/dynamic-page/index.vue'
    import { globalConfig } from '@/config.js'
	export default {
		components: {
			dynamicPage
		},
		data() {
			return {
				api: globalConfig.formHost + '?id=2021'
			}
		}
	}
</script>

<style>
</style>

<template>
	<view style="background-color: white;">
		<dynamic-page
           :API="api"
        />
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
    import { globalConfig } from '@/config.js'
	export default {
		name:"DataBase",
		components: {
			dynamicPage
		},
		data() {
			return {
				api: globalConfig.formHost + '?id=2003'
			}
		}
	}
</script>

<style>
</style>

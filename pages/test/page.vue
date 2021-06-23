<template>
	<view>
		<dynamic-page
           :API="api"
        />
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
    import { globalConfig } from '@/config.js'
	export default {
		components: {
			dynamicPage
		},
		data() {
			return {
				// api: globalConfig.formHost + '/form?id=201'
                api: 'https://api.mock.smallsaas.cn/form?id=300'
			}
		}
	}
</script>

<style>
</style>

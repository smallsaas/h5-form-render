<template>
	<view>
		<dynamic-page
           :API="api"
					 contentType="json"
					 contentPayload="data.formInfo.appDesignData"
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
				api: globalConfig.workflowEP + '/api/u/workflow/process/code?id=9a2da0df30200a2096bd882ffd7b5d6f'
			}
		},
		methods:{
			
		}
	}
</script>

<style>
</style>

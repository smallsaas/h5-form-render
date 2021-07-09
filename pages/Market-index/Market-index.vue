<template>
	<view>
		<dynamic-page :API="api">
		</dynamic-page>
	</view>
</template>

<script>
	import _ from 'lodash'
	import card from '../../components/other/Card.vue'
	import DynamicPage from '../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=2000',
				
			}
		},
		onLoad(){
				
		},
		methods: {

		},
		components:{
			DynamicPage
		}
	}
</script>

<style>

</style>

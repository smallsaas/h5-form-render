<template>
	<view>
		<search :config="list"></search>
	</view>
</template>

<script>
	import search from '../../../components/search/search.vue'
	import {getSearchPage} from '@/common/api.js'
	export default {
		data() {
			return {
				list:Object
			}
		},
		onLoad() {
			this.getSearch()
		},
		methods: {
			async getSearch(){
				const res = await getSearchPage({id:12311})
				if (_.get(res, 'code') === 200) {
					this.list = _.get(res, 'data', {})
					console.log(this.list)
				}
			}
		}
	}
</script>

<style>

</style>

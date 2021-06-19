<template>
	<view>
		<card :title="name" :Style="Style">
			<state-list :list="list"></state-list>
		</card>
	</view>

</template>

<script>
	import card from '../other/Card.vue'
	import stateList from './state-list.vue'
	export default {
		components:{
			card,
			stateList
		},
		props:{
			list:Array,
			Style:Object,
			name:String
		},
		methods:{
		}
	}
</script>

<style>
	
</style>

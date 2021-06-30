<template>
	<view v-if="list.step&&list.active">
		<van-steps
			:steps="list.step"
			:active="list.active-1"
			active-icon="success"
			active-color="#38f"
		/>
	</view>
</template>

<script>
	import _ from 'lodash'
	export default {
		name:"Steps",
		data() {
			return {
				
			};
		},
		props:{
			list:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>

<style>

</style>

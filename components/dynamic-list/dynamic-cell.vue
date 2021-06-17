<template>
	<van-cell v-bind:title="title" v-bind:icon="icon" is-link />
</template>

<script>
	export default {
		props:{
			perem:{
				type:Object,
				default: function(){
					return {
						title: "title",
						icon: "setting-o"
					}
				}
			}
		}
	}
</script>

<style>
</style>

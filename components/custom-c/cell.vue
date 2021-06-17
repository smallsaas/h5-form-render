<template>
	<van-cell :title="perem.title" :icon="perem.icon" 
	@click="clickFunc"
	is-link />
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
			},
		},
		methods:{
			clickFunc(e){
				this.$emit('handleClick', e.detail);
			}
		}
	}
</script>

<style>
</style>

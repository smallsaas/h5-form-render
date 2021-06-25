<template>
	<van-cell :title="param.title" :icon="param.icon" 
	@click="clickFunc"
	is-link />
</template>

<script>
	export default {
		props:{
			param:{
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

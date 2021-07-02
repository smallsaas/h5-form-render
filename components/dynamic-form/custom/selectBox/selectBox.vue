<template>
	<view>
		<view class="Nav">
			<view class="NavBody">
			</view>
		</view>
		<view class="content">
			<search :config="config" searchType="bottom"></search>
		</view>
	</view>
</template>

<script>
	import search from '../../../search/search.vue'
	export default {
		data() {
			return {
				config:{
            loadAPI:"https://api.mock.smallsaas.cn/data",
            id:"12313",
            field:"address",
            itemModule:{
                name:"radioItem"
            }
				}
			}
		},
		props:{
			lefticon:{
				type:Boolean,
				default(){
					return true
				}
			},
			list:Object
		},
		onLoad() {
			this.getSearch()
		},
		onHide() {
			console.log("hide")
		},
		methods: {
			async getSearch(){
				const res = await getSearchPage({id:12311})
				if (_.get(res, 'code') === 200) {
					this.list = _.cloneDeep(_.get(res, 'data', {}))
				}
			},
		}
	}
</script>

<style lang="less">
.Nav{
	background: #576B95;
	position: fixed;
	top: 0;
	left: 0px;
	width: 100%;
	height: 64px;
	z-index: 10000;
	.NavBody{
		top: 20px;
		left: 0;
		right: 0;
		padding-left: 10px;
		.Lefticon{
			color: white;
			line-height: 100px;
		}
	}

}
.content{
	position: absolute;
	width: 100%;
	height: 100%;
}

</style>

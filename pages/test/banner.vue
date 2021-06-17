<template>
	<view>
		<view class="banners">
			<!-- <banner :item="item" :moduleData="moduleData"></banner> -->
		</view>
		<view>
			<magic-nav :item="NavItem" :moduleData="NavData"></magic-nav>
		</view>
	</view>
</template>

<script>
	import banner from '../../components/other/Banner.vue'
	import card from '../../components/other/Card.vue'
	import MagicNav from '../../components/other/MagicNav.vue'
	import { getDynamicFormField } from '../../common/api.js'
	import _ from 'lodash'
	export default {
		components:{banner,card,MagicNav},
		data(){
			return {
				// banner --- 缺少Vant轮播图组件
				config:{},
				item:{},
				moduleData:{},
				// MagicNav
				NavItem:{},
				NavData:{}
			}
		},
		onLoad() {
		    this.fetchData();
				this.fetchNavData();
		},
		methods:{
			async fetchData(){
				const res = await getDynamicFormField({ id:105 })
				let key
				if (_.get(res, 'code') === 200) {
					let modules;
					let moduleData;
					let banners;
					this.config = _.cloneDeep(_.get(res, 'data', {}))
					// console.log(this.config)
					modules = _.get(this.config,'modules',{})
					key = _.get(modules[0],'key','')
					moduleData = _.get(_.get(this.config,'moduleData',{}),key,{})
					banners = _.get(moduleData,'banners',{})
					this.item = banners
					this.moduleData = moduleData
					// console.log(this.item)
					// console.log(this.moduleData)
				}
			},
			async fetchNavData(){
				const res = await getDynamicFormField({ id:105 })
				let key
				if (_.get(res, 'code') === 200) {
					let modules;
					let moduleData;
					let NavList;
					this.config = _.cloneDeep(_.get(res, 'data', {}))
					// console.log(this.config)
					modules = _.get(this.config,'modules',{})
					key = _.get(modules[1],'key','')
					moduleData = _.get(_.get(this.config,'moduleData',{}),key,{})
					NavList = _.get(moduleData,'navList',{})
					this.NavItem = NavList
					this.NavData = moduleData
					// console.log(this.NavItem)
					// console.log(this.NavData)
			}
		}
		},
		}
</script>

<style>
</style>

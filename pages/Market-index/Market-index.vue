<template>
	<view>
		<dynamic-page :API="api">
		</dynamic-page>
<!-- 		<box-list :list="boxListData"></box-list>
		<card-list :list="cardListData"></card-list> -->
		<!-- <card title="待办" :Style="cardStyle"> -->
<!-- 			<view :style="{'background': 'white'}">
				<state-list></state-list>
			</view> -->
		<!-- </card> -->
	</view>
</template>

<script>
	import _ from 'lodash'
	import { getDynamicListField } from '@/common/api.js'
	// import boxList from '../../components/box-list/box-list.vue'
	// import cardList from '../../components/cardList/cardList.vue'
	import card from '../../components/other/Card.vue'
	// import stateList from '../../components/state-list/state-list.vue'
	import DynamicPage from '../../components/dynamic-page/index.vue'
	import { config } from '@/config.js'
	export default {
		data() {
			return {
		api: config.formHost + '/form?id=108',
/*			boxListData:[
				],
				cardListData:[
				],
				cardStyle:{
					title:{
						fill:"white",
					},
					fill:"#E1E1E1",
					padding:"8px 0"
				} */
			}
		},
		onLoad(){
/* 			this.getboxList()
			this.getcardList() */
		},
		methods: {
/* 			async getboxList(){
				const res = await getDynamicListField({id:108});
				let data;
				let modules;
				let moduleData;
				let key;
				let thelist;
				console.log(res)
				if(_.get(res,'code')===200){
					data = _.get(res,'data',{})
					modules = _.get(data,'modules',[])
					moduleData = _.get(data,'moduleData',{})
					key = _.get(modules[0],'key','')
					thelist = _.get(_.get(moduleData,key,{}),'navList',[])
					console.log(thelist)
					this.boxListData = thelist
				}
			},
			async getcardList(){
				const res = await getDynamicListField({id:108});
				let data;
				let modules;
				let moduleData;
				let key;
				let thelist;
				console.log(res)
				if(_.get(res,'code')===200){
					data = _.get(res,'data',{})
					modules = _.get(data,'modules',[])
					moduleData = _.get(data,'moduleData',{})
					key = _.get(modules[1],'key','')
					thelist = _.get(_.get(moduleData,key,{}),'navList',[])
					console.log(thelist)
					this.cardListData = thelist
				}
			} */
		},
		components:{
			/* boxList,cardList,card,stateList, */DynamicPage
		}
	}
</script>

<style>

</style>

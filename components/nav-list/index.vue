<template>
	<view :style="{'background':_get(config,'outStyle.background','')}">
		<view class="nav_list_header" v-if="_get(config,'title')!==''">
			<view class="nav_list_title">{{_get(config,'title',"")}}</view>
		</view>
		 <view 
				class="nav_list_container" 
				:style="[_get(config, 'outStyle', {})]"
			>
		<!-- 	<view
				class="nav_list_container" 
			> -->
		      <block class="block" v-for="(item, index) in _get(config, 'list', [])" :key="index">
					 <magic-item
					 			v-if="_get(config, 'itemModule.name') === 'MagicItem'"
					 			:item="item"
					 />
					<state-list-item
						v-if="_get(config, 'itemModule.name') === 'stateListItem'"
						:item="item"
					></state-list-item>
					<card-list-item
					v-if="_get(config, 'itemModule.name') === 'cardListItem'"
					:item="item"
					>
					</card-list-item>
			  </block>
		</view>
	</view>
</template>

<script>
	import magicItem from './navItem/MagicItem.vue'
	import stateListItem from './navItem/stateListItem.vue'
	import cardListItem from './navItem/cardListItem.vue'
	// import card from '../other/Card.vue'
    export default {
		components: {
			magicItem,
			stateListItem,
			cardListItem
		},
        props: {
						title:String,
            config: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        },
        methods: {
					_get (data, field, value) {
						return _.get(data, field, value)
					},
					a(){
						console.log(this.config)
					}
        }
    }
</script>

<style lang="less">
    .nav_list_container {
				width: 100%;
				// background-color: white;
				padding-bottom: 10px;
		display: grid;
		font-weight: bolder;
		font-size: 14px;
		grid-template-columns: repeat(4, 25%);
			&>.block{
				margin: 0 auto;
			}
    }
		.nav_list_header{
			padding-top: 10px;
			border-bottom: 1px solid #EEEEEE;
			background-color:	#EFEFEF;
		}
		.nav_list_title{
			background-color: white;
			color: black;
			width: 100%;
			padding: 10px;
			font-weight: bolder;
			font-size: 12px;
		}
</style>

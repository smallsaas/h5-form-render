<template>
	<card :title="title" :Style="[_get(config, 'outStyle', {})]">
    <view 
		class="nav_list_container" 
		:style="[_get(config, 'outStyle', {})]"
	>
      <block v-for="(item, index) in _get(config, 'list', [])" :key="index">
			 <magic-item
			 			v-if="_get(config, 'itemModule.name') === 'MagicItem'"
			 			:item="item"
			 />

	  </block>
    </view>
		</card>
</template>

<script>
	import magicItem from './navItem/MagicItem.vue'
	import card from '../other/Card.vue'
    export default {
		components: {
			magicItem,card
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
			}
        }
    }
</script>

<style lang="less">
    .nav_list_container {
				width: 100%;
				background-color: white;
				padding-bottom: 20px;
		display: grid;
		grid-template-columns: repeat(4, 25%);
    }
</style>

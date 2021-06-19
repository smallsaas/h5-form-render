<template>
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
</template>

<script>
	import magicItem from './navItem/MagicItem.vue'
    export default {
		components: {
			magicItem
		},
        props: {
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
		display: grid;
		grid-template-columns: repeat(5, 20%);
    }
</style>

<template>
	<view 
		class="magic_item_container"
		:style="[_get(item, 'container', {})]"
	>
	  <navigator :url="getNavigationUrl(item.nav || item.url)" hover-class="navigator-hover">
	      <view class="magic_item">
	          <image :src="item.img" mode="widthFix" class="image" />
	          <view class="title">{{item.title}}</view>
	      </view>
	  </navigator>
	</view>
</template>

<script>
	import _ from 'lodash'
	import qs from 'qs'
	export default {
		props: {
			item: {
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
			getNavigationUrl (str) {
			    let text = ''
			    if (str) {
			       const route = str.split('?')[0]
			       const query = str.split('?')[1] ? qs.parse(str.split('?')[1]) : {}
			       text += (`/pages${route.charAt(0) !== '/' ? '/' : ''}` + route)
			       if (Object.keys(query).length > 0) {
			           for (const i in query) {
			               if (query[i] === '') {
			                   query[i] = this.item[i] || ''
			               }
			           }
			           text += '?query=' + encodeURIComponent(JSON.stringify(query))
			       }
			    }
			    return text
			},
		}
	}
</script>

<style lang="less">
	.magic_item_container {
		transition: all .2s;
		.magic_item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 28rpx;
			border-radius: 6rpx;
			>.image {
			    width: 90rpx;
			    height: 90rpx;
			    border-radius: 50%;
			    padding: 20rpx;
			}
			>.title {
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    overflow: hidden;
			}
		}
	}
	.magic_item_container:active {
		background-color: #f2f2f2;
		transition: all .2s;
	}
</style>

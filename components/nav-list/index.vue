<template>
    <view class="nav_list_container">
        <view class="nav_list" v-if="Array.isArray(list) && list.length > 0">
            <block v-for="(item, index) in list" :key="index" >
              <navigator :url="getNavigationUrl(item.url)" hover-class="navigator-hover">
                  <view class="nav_item">
                      <image :src="item.img" mode="widthFix" class="image" />
                      <view class="title">{{item.title}}</view>
                  </view>
              </navigator>  
            </block>
        </view>
    </view>
</template>

<script>
    import qs from 'qs'
    export default {
        props: {
            list: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
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
    .nav_list_container {
        width: 100%;
        .nav_list {
            display: grid;
            grid-template-columns: repeat(5, 20%);
            .nav_item {
                display: flex;
                flex-direction: column;
                text-align: center;
                font-size: 28rpx;
                border-radius: 6rpx;
                transition: all .2s;
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
            .nav_item:active {
                background-color: #f2f2f2;
                transition: all .2s;
            }
        }
    }
</style>

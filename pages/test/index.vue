<template>
    <view class="test_container">
        <view class="venue_tag" @click="handleClick('form')">动态表单</view>
        <view class="venue_tag" @click="handleClick('list')">动态列表</view>
        <view class="venue_tag" @click="handleClick('page')">动态页面</view>
        <view class="venue_tag" @click="handleClick('banner')">测试Nav</view>
    </view>
</template>

<script>
    export default {
        methods: {
            handleClick (text) {
                const obj = {
                    form: './form?id=10',
                    list: './list',
                    page: './page',
									
										banner: './banner'
                }
                uni.navigateTo({
                    url: obj[text]
                })
            }
        }
    }
</script>

<style lang="less">
    .test_container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        .venue_tag {
            padding: 32rpx;
            color: rgba(80, 80, 80, 1);
            background-color: rgba(214, 239, 238, 1);
            border-radius: 8px;
            font-size: 14px;
            line-height: 150%;
            text-align: center;
            margin: 0 20rpx;
        }
    }
</style>

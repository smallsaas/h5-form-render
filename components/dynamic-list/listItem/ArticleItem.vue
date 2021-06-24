<template>
  <view class="art-item">
    <view class="flex">
      <view class="left flex1">
        <view class="title text-line-1">{{ item.title }}</view>
        <view class="desc text-line-1">
          {{ item.desc }}
        </view>
        <view class="time">{{ item.time }}</view>
      </view>
      <view class="right">
        <img :src="item.img" />
      </view>
    </view>
  </view>
</template>
<script>
    export default {
      name: 'ArticleItem',
      props: {
        item: Object
      }
    }
</script>
<style lang="less" scoped>
.art-item {
  padding: 32rpx;
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 28rpx;
  transition: all .4s;
  .flex {
      display: flex;
      .left {
        .title {
          color: #333;
          font-weight: 700;
        }
        .desc {
          margin: 10rpx 0;
          color: #a9a9a9;
        }
        .text-line-1 {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .time {
          color: #a9a9a9;
        } 
      }
      .flex1 {
        flex: 1;
        max-width: calc(100% - 164rpx);
      }
      
      .right {
        width: 164px;
        height: 128rpx;
        margin-left: 40rpx;
        img {
          width: 100%;
          height: 100%;
        }
      }
  }
}

.art-item:active {
    background-color: #f2f2f2;
    transition: all .4s;
}
</style>

<template>
	<van-row>
	  <van-col span='6'>
		  <img v-bind:src="avatar" class='img' >
	  </van-col>
	  <van-col span='18' class='titleContent'>
		  <van-row type="flex">
		    <van-col> <view  class='text' >{{userName}}</view></van-col>
		    <van-col><van-button plain type='info' size='small'>信息按钮</van-button></van-col>
		  </van-row>
		  <van-row type="flex">
			<van-col> <view  class='text'>企业编号: </view></van-col>
			<van-col><view  class='text'>{{enterpriseNumber}} </view></van-col>
		  </van-row>
		 <van-row type="flex">
			<van-col> <view  class='text'>企业域名: </view></van-col>
			<van-col><view  class='text'>{{domainName}} </view></van-col>
		 </van-row>
		 <van-row type="flex">
			<van-col> <view  class='text'>职位: </view></van-col>
			<van-col><view  class='text'>{{job}} </view></van-col>
		 </van-row>
	  </van-col>
	</van-row>
</template>

<script>
	export default {
		data () {
			return {
				avatar : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F25%2F20191225224833_zloky.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1626422745&t=86d45ded6db55de9e9b4c13fe2084c3a',
				userName: '张三',
				enterpriseNumber: 'Ab263549898',
				domainName: 'hajdshdjAb263549898',
				job: '员工'
			}
		}
	}
</script>

<style lang="less">
	.img{
		width: 55px;
		height: 55px;
		margin-left: 20px;
		margin-top: 35px;
	}
	.titleContent{
		font-size: 14px;
		margin-left: 1px;
		margin-top: 35px;
		.text {
			width: 65px;
			height: 35px;
			line-height: 35px;
			text-align: center;
			margin-right: 7px;
		}
	}
</style>

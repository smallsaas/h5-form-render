<template>
	<view class="Sumbit">
		<view class="success state" v-if="state==='success'">
			<view class="SumbitState" style="color:#24C891">&#xe613;</view>
			<view class="sumbitText">提交成功</view>
			<button class="ReturnButton" @click="Back()">回到首页</button>
		</view>
		<view class="error state" v-else="state==='error'">
			<view class="SumbitState" style="color: #EA5E56;">&#xe656;</view>
			<view class="sumbitText">提交失败</view>
			<button class="ReturnButton" @click="Back()">回到首页</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"SumbitState",
		props:{
			state:{
				type:String,
				default(){
					return 'error'
				}
			}
		},
		methods:{
			Back(){
				uni.navigateBack({
					delta:10
				})
			}
		}
	}
</script>

<style lang="less">
	@font-face {
	  font-family: 'SumbitState';  /* Project id 2631740 */
	  src: 
	       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVwAAsAAAAACtAAAAUkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDdAqHUIZuATYCJAMgCxIABCAFhG0HehuWCVFUTwJkPxNsWw1rRaQMTcRaaVt6DTmMWbuDzIPibzz8/xrtvv//yM6seNumGkXbYolI4pA2cvoSxVqg4SlQvUKe/7/N/EupkqmMOSNiVMQiFUMehBHIgRevkGoa6r4y3YkuRWPVpXxb9a8cdbI+QxhJmifv///7ufrfPP6Fpjek9XJnrpgmEofGMo1GNfOSIYWIinQt6wsn8CECnV0TDLqaMc8Ko25YrECewYTpgd0eN7LEwvC7Q4nhh9Zcpz2wiH+GkJ4PegG81f8+/mrdcJIqEy714Ml0AR4P7P9u/zd8/swobxg2TqiQsdkyV7yLD7yQWdhE6sJqzyNgUvSRlLoSfEs3hZ3if2FM30gYItcw8V880KiFLCkqosYNo5z92NYYUaUst50/ADY1jOmwCRinwCbDaIdNglGBTYHxf/RRgVY9YBKYIA5BfADBdKTrksgLJ86KdDczLZMuH1qVnjo6cxSRURA0bTFGG9YoHbHH6ZAjUYWORDKsdmXNi0am7bCZ7TgaCkZi9UY6vQl9CDWrD0Wy7FZFeCSU7bALj5qZNofgsJFhten0TK6srHJ8GRmH7jor6TOLk5epy45ahbVLokMOmpeg/lWiVjAu3r2cZY+X7CdCV0I01cncpxXN2NsYMKLRSDxOEKHE+4Qt8uLxXfjkpfn6Wfbpqz4zJlBRKj5rIjH3+dJG6/yX2JGTV8ye1R0/dogKjimA1HZL6p0MW2EVBcb9yEOCoBRB6JHFQgjMBwCWnYz7NFmHOWZdV9c6hvshoYZWZ4754du1tuZ43vEHD5YuPZZXmrezV/6fKBoN5wOdPikgjRMYRhjn/DlOIqsw9q37k8hYSiJOiqkpXbkjY4dH6L4j2+HNwV5vwNwxZ6sv0+fxeD2+7GXebLfOEFXZUH0xmdTqfeDN8SaTFncHIgI7siGXf3TmJj2wKbxnQ2DDX6BjcSwtnMo2WOuWnJTXUMtSvcThYli1ZsTJ3rolDVY2NVwWTl1cPb1q6pTK6dUXJCQkdJ5kcWp46qbaBcX3ihfUxphulu3BhORlYrUe7b2gzWqsZefzymJleedn6C8FD15OwxPmKCnb2/zItjV3Y8Wa1VVG7uYl0oeK1SvmNcypq5tdP/+OhBpa3nn1d/kovpUbMpfmpRw7dWrn8NTcMF0Htbp+paCbNKDsQE0ZlNUcKDPne2Hi48eFpUyp1EKsDpsAhlhXyLqr9Uni7pMByH16DwajcdmA8FIGaa/62Rty5CCUbo/Iz871jXxj27d29Lj/bX/8p78P37KXNOmaaSVSK87smGIQpirxTdKWTT0e2TH8nzrZulZZLqETJ3EqR6Z9LdM4V6NCDbXmbEgaC5C1Fklhb0Kldwi11il0Nsw8vDdDQ4oygnXbGIRJNyAZ9wWySS9JYX+Byrw/oDY5EjoPI/2EveXJ1FQNsRgJNOenZV5VRMmNKaN9CZLc/azmVOsCO9J0OU23NDZ7yzORgrQydtE9UivGIi1q6gA9g10O9fertEtTexGPG50Yu5imJjHsnRp5dQAolzQIC0MENI4fTcZTKUS1M0b5fn8JROLWj6XFjPqRtkM0OnnutBaNmlOQmQYl1ahtWV3nIWmFYSJtJtKoBtBmwIf0iwUVzRW+Xi+EhzVy5si5MJr4RGJaQ2P9poElPQM6wo3bSJGjRBV1NNHGiImncq/MqrwTKZKkysYU9266U+ZYeajkZhVOHoHvtoDTjllkfm2UTZHeaw/VVbfuVklWEAAA') format('woff2'),
				 url('//at.alicdn.com/t/font_2631740_55yqq5zi98y.woff2?t=1625477926319') format('woff2'),
	       url('//at.alicdn.com/t/font_2631740_rxvm3d9byaj.woff?t=1625477903224') format('woff'),
	       url('//at.alicdn.com/t/font_2631740_rxvm3d9byaj.ttf?t=1625477903224') format('truetype');
	}
	
	.SumbitState {
	  font-family: "SumbitState" !important;
	  font-size: 16px;
	  font-style: normal;
		width: 100%;
		font-size: 100px;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.Sumbit{
		width: 100%;
		position: relative;
		text-align: center;
		.sumbitText{
			font-size: 30px;
			font-weight: bolder;
		}
		.state{
			position: absolute;
			left: 50%;
			transform: translate(-50%);
		}
		.ReturnButton{
			background-color: #1A5EB5;
			color: white;
			// width: 25%;
			height: 50px;
			line-height: 50px;
			margin-top: 10px;
		}
	}

</style>

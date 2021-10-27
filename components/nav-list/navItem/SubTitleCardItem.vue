<template>
	<navigator
	:url="item.nav"
	>
	<view 
	class="SubTitleCard"
	:style="[_get(item, 'container', {})]"
	>
	<view class="card">
		<view class="imageBox" v-if="item.svg">
				<!-- <view :class="'cardIcon icon-'+item.svg" v-if="item.svg!==undefined&&item.img===undefined" mode="aspectFit"></view> -->
				<image :src="getIcon(item.svg)" class="image" mode="aspectFit"></image>
			</view>
			<view
				class="titleBox"
			>
			<view class="title">{{item.title}}</view>
			<view class="subTitle">{{item.subTitle}}</view>
			</view>
		</view>
	</view>
	</navigator>
</template>

<script>
	import _ from 'lodash'
	import {globalConfig} from '@/config.js'
	export default {
		name:"sub-title-card-item",
		props:{
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		created() {
			this.icon = globalConfig.icon
			// this.getIcon()
		},
		data(){
			return {
				icon:""
			}
		},
		methods:{
			_get (data, field, value) {
				return _.get(data, field, value)
			},
			getIcon(value){
				// console.log(value)
				// console.log(this.icon[value])
				return this.icon[value]
			}
		}
	}
</script>

<style lang="less">
	/* 字体文件 图标*/
	@font-face {
	  font-family: 'cardIcon';  /* Project id 2627814 */
	  src: url('//at.alicdn.com/t/font_2627814_ijwngxtkupi.woff2?t=1624417982103') format('woff2'),
	       url('//at.alicdn.com/t/font_2627814_ijwngxtkupi.woff?t=1624417982103') format('woff'),
				 url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAZMAAsAAAAAC1gAAAX/AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqJUIdPATYCJAMUCwwABCAFhG0HWBuHCVGUTk6S7CMxdh6FQahU7oRmJC9ZRVDtbd+z4Xik6FA5ylyerNCoUxiHopCKwniw2Yb/3Q3PNvuHuIL1AYvCVeDmsoyrMC6KOTDjovT/1v9bWV57laH7FfH3h6qZ5wGbL9viNPbPWtOWBSwRDNAcHWNjrdwClblKVYCdwVrCGa4j0GNdB96JdLIcJLZppxlk4jO6g7gy2joNDWJ5o1JDCo2mhW4sIH5U0j3vNgAe/J+PbyCKWCCpGRgnOr2V9IPzn1GfN8Ce/z3gJr8DPMM1kJMTKjKWF2aOu3pnGxwqln3UU/Z7fAeAHo0kvVGfST5jP2/4vwPEsq2pe0xkCJSG/eO1gIH6SOJBqvBG2TwybxIewRvLI/HeIPl2UKWm92CQeATilVdP+++eZUXdK4NIftT9M3MSoexOYU6mhSu+WnySIjhoIG2k4tJY/rqLEd/j89kbwt1nMoIYtLspJC48XBpKHzRZMzKSskYyh8cU72ygd0ZaTlJ74eNFIo+b9gjCj+UBENyBS440nwmTKHSY8j5HOKwIAzAEeVVjY6qIMhIEpo35FUUX98gfL1agqtkKlRJZIQ+EkEQfwRFKbnhkV5p6wI/TQ32G4GCfUuTjfAHQJfdhGB5Ep8gBqlKgkHJamo+bgwIP9vgx4osoOQhKWnFVimwtJrhAAB/K2EgG0gexBP+66nPXle81+3E8aA7eU/UA9bfuEo7kpQ1ss8ib1xMcdxBiJAsao4ZvFp5FkK1YCAsQvlXn784ezAFDGRN/SFiFFmVyaSXQQMk21F8kudI5WAaCOL6xMoAhoXRsMH174XbE17GTGi4m1uUNzBnJGhhwSBMSqsMOF4ZKt9eOGiQ9QTRh3SYv2ls+iNhaHCpEfAG8W25/ZUUQRVUDhOnBa3WIfroXK45LMDvwEtz7vvsdsWBar+Ab9/u4tyQ2IUEJbIv1yNWYQ5ZTWysLolLegqLGtXG3Fh2MWZy5qSt5xb1qramEeOJ7XX3XlNxZcenXbYkTiNfzu4cShf0ftr2lf6PMvvJtKKqwMnhrOp0Bliid+xh+onxu5QJd+rp0Tfn8sjlB78IsWWG5uFKmmF7cW9T9W3fJiOXrKi7sTt3L9Fnl0lKxQFxNqyn6YrOWmcNQB9Sg48Jv85cbziQfT7q65XQ4YMVkk+Lj48vVuJpe+LGiw9T+RLUs7lueOAbw24PBcE0+xIOr4noQpCfX1CEI/f+qEsPiy4kdHRn/t/WemWg1XJzS3vV9RsdxUOO5L5zAW5w7qv51FLbl/7sucV4TKohi+NRTu166kvI9JKg5LFIXVX1YIhbJHk6/9CMxaWDF+kPUhHFyV3etqpEPTT70SwrIshLPbwTPvurBtp+uuDVnig3uSUX/Q4G+go2uqYuJ7eF9uZmXUygQ0OeFTdDSp7YL5oNZkOx1/L0NWS8/LGv0786Q9jg381YOPaU/50YhWyCSwxLpYq7ozd4T535duSY12h1Vcu1N0TPji/iwgNQ84X0O5pVjsxu9jRJxL4BCKpaUgKWAzv9AKXAUcTIPfBf2AuT/KQJA5wL8Gtx17k9yNfV2ZFFS268N+ndHXv5QLfDl/xsKT3enFzh3VWDRmW5XUg3mv1aqgDIVQIl8iS0C3NXz6eFOnM8Np7Z3xHvDqMdh8Y2kHo8h6TIJWWMaW4jLUPXahpbGPvRYItvea5QdLEocYNHTBIQh+yAZ8ATZkDvYQnwXqgnfQstQwNDjOsbts9ds6JBeO0M7mX6ybxmpU1vMrGVxIkHlTEbjMtL2pNQnKxm7Qxcha6jqbEbGmBn7EEscbo3I6WRJ1m4xkVLiZIzRaCGtdoueUTsprdNpbREK2bInotQWE0Acs2PQnBj9SH2WIemoWZixbm8nJPf9MzE0XIxo9pqWCr8Sw85B1z+pBqUawMqQGWq5lHoHNw0RJxVnkViu3MKEJKXsDKOZtCBZy8fpMdScKNoOcasWQqoTiyJqerXpMxY/YW2Nl6nBg2CID0VB0aDrjjEvc9FmxKZbxiyzmDVaV+JyrY6ly3wGV7TWS/TRZgAAAA==') format('woff2'),
	       url('//at.alicdn.com/t/font_2627814_ijwngxtkupi.ttf?t=1624417982103') format('truetype');
	}
	
	.cardIcon{
		  font-family: "cardIcon" !important;
		  font-size: 16px;
		  font-style: normal;
		  -webkit-font-smoothing: antialiased;
		  -moz-osx-font-smoothing: grayscale;	
			color: #2A82E4;
			align-items: center;
	}
	
	.icon-street:before {	//街镇用户
	  content: "\e645";
	}
	
	.icon-enterprise:before { //企业用户
	  content: "\e666";
	}
	
	.icon-enforcement:before { //执法人员
	  content: "\e62e";
	}
	
	.icon-management:before {	//管理人员
	  content: "\e736";
	}
	
	// 样式文件
	.SubTitleCard{
		background-color: white;
		box-shadow: 0px 2px 5px 2px #D8D8D8;
		padding: 20px;
		margin: 5px;
		.card{
			display:flex
		}
		.imageBox{
			// width: 32px;
			// height: 32px;
			float: left;
			margin-right: 15px;
			.cardIcon{
				position: relative;
				top:50%;
				transform: translate(0,-50%);
			}
			.image{
				width: 16px;
				height: 16px;
				position: relative;
				top:50%;
				transform: translate(0,-50%);
			}
		}
		.titleBox{
			.title{
				color: #2A82E4;
				width: 100%;
				font-size: 12px;
				width: 10em;
				white-space: wrap;
				overflow: hidden;
			}
			.subTitle{
				color: #A6A6A6;
				font-size: 8px;
			}
		}
	}
</style>

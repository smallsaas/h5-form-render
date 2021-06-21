<template>
	<view class="stateList">
			<navigator :url="itemNavigation" class="state_allcontent">
				<view class="stateIcon stateIcon-go"></view>
				<view class="stateList-content">
					<view class="stateList-title">{{item.title}}</view>
					<view class="stateList-company stateList-content-child">主管部门：{{item.company}}</view>
					<view class="stateList-time stateList-content-child">起止日期：{{item.start}} - {{item.end}}</view>
				</view>
				<view class="stateList-stateGroup">
					<view class="stateList-state" v-if="item.state==='enforcement'" style="background-color: #43CF7C;">
						待执法
					</view>
					<view class="stateList-state" v-if="item.state==='rectification'" style="background-color: #2A82E4;">
						待整改
					</view>
				</view>
			</navigator>
	</view>
</template>

<script>
	import './static/iconfont.css'
	export default {
		name:"state-list",
		onLoad() {
			this.const()
		},
		methods:{
			async const(){
				console.log(item)
			}
		},
		data() {
			return {
			};
		},
		props:{
			item:Object,
			itemNavigation:String
		}
	}
</script>

<style>
	/* 字体文件 */
	/* 字体文件 */
@font-face {
  font-family: 'stateIcon';  /* Project id 2619385 */
  src: 
		   url('//at.alicdn.com/t/font_2619384_53vqolohb34.woff2?t=1624240368044') format('woff2'),
			url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAALMAAsAAAAABpAAAAKBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACCcAp4gQkBNgIkAwgLBgAEIAWEeQcvG9YFyC6wbdiTICoEioVdXN//7tkzBoiHp/2+nTtv3qolMeuSRdO2daARyieapGIhi4VI9gqVf/9rbU4loxNJu3sXUU+eV+av+N/BLPKIhEiIhELoVPGQicAGHIAVS4oTnBxfymljPm/ANfkL6IEPBL4WlZRFa3qwAY4H1mVRhE8y8inI7gjUkm8RaLBoWn57eXMH2nd0jmBAkdMf5NVxx7V1qMpxWabZOqEG3Zgh/ipJ99NXPI2Vjz+WowqSsgCnbu9yyYKnuFMK19WK0+JFZbkWel1CiQKzQCaO+lM7CqKNLWjwFw3Txiz47r8aOsWhbUL665zKJtBLhWcSfelRKxPI6eAYMD/p9aT6obP9dq6zt0/W2d2n12oqrz42dB/8JqIB7bVd9bh5+6Xx/s3Ll5NyLPDuMujkDzwYnf4epf7v6dE08i2/MS7ka78DswDVSlbcEwj+3/c6k/+qjUWAb7dYwoLU7dgf/CUDUDabGVKGnspAMjZpXkKDBlR5uMPbVHP33eRCve57Ctbqz72FelOkRGbmUWq0gRr1NtFgxsb2Rp0OFUSuAdNuCUKHRyQt3qHQ4ZnIzC9KPf5QoyNaaHASowc2Go+D+oIknclC4wRdM46EF+V6xtV5m27GW2QfBLpU1Mm8PZKZG0fYU7R6doUiksssyQ7tPrNAIeMQl2e8joIgxkTGHpmsOMzJuKqKti8pZhxC3RaJ6BixIMMJ5DLFIiKsZHV3MeDf5JaU20JsBwI62del5t9DkN5dcDjUo9AMYkUfYR2PdE/mkK2PMQEJUiyElg85jgQCMZS0j/MQE1M4ExKJcaorJ1C9cllj+Bt5qQfHksIdUYDylhvJAwA=') format('woff2'),
      url('//at.alicdn.com/t/font_2619384_fviikqobdml.woff?t=1624104004217') format('woff'),
      url('//at.alicdn.com/t/font_2619384_fviikqobdml.ttf?t=1624104004217') format('truetype');
}
.stateIcon {
  font-family: "stateIcon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	width: 20%;
	text-align: center;
}

.stateIcon-go:before {
  content: "\e636";
}
.stateListBody{
	border-bottom: 1px solid #E9E9E9;
}
/* .stateListBody:last-child{
	border-bottom: none;
} */

.state_allcontent{
	display: flex;
	align-items: center;
	padding:20px 0;
}

.stateList{
	background-color: white;
	font-size: 14px;
	font-weight: bolder;
	border-bottom: 1px solid #E9E9E9;
}

.stateList-content{
	width: 80%;
	line-height: 2em;
}

.stateList-stateGroup{
	width: 30%;
}

.stateList-content-child{
	font-size: 10px;
	line-height: 1.5em;
	font-weight: normal;
}


.stateList-state{
	width: 80%;
	margin: 0 auto;
	color: white;
	margin-right: 20px;
	text-align: center;
	padding:5px 0;
	border-radius: 15px;
}
</style>

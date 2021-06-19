<template>
	<view class="stateList">
			<navigator :url="itemNavigation" class="state_allcontent">
				<view class="stateIcon stateIcon-go"></view>
				<view class="stateList-content">
					<view class="stateList-title">{{item.title}}</view>
					<view class="stateList-company">主管部门：{{item.company}}</view>
					<view class="stateList-time">起止日期：{{item.start}} - {{item.end}}</view>
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
@font-face {
  font-family: 'stateList';  /* Project id 2619385 */
  src: 
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAH0AAwAAAAABAQAAAGlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIhwjEgZgADwKgTCBIgE2AiQDDgsMAAQgBYIEByAbFwPIjlKjy+4QPPD7+zoXA70/ALXym7pUpkLZUNZNbGAbJMAT1/Q3/zxP7JEElOnc1qVtHZSNCZpIl4Xzz3H+Sf/u3CZ5KMuxg5K0lnbI4QlAAAbgjkQCLClAAyCY3H0GG2iNOI4VWl6Uk0CDDBGTpIk0Kko481VjjRU8IvhbmzI3TFAmpu8KEvkYCGZIggLcUXnCHU00YE3UkWZrYwPE2vjoc7dQAbKS7DGSDBRQYQ0v+GfSPnzPzi32hrB0tk2Mt+459Bxr85m9cfCFEA6Y1x0sh24Km5Ub0+PXwF6svHQofLmpIOwVAweFN5RdudIu6IhsJztsU8K7eB3/LmFVpq/XXjdCjVUj1dBOaaCFORG2pl2J9tWl+QjLkCX/v63SALz545Urt/Lw2zinvqtNgDXSQL5rVIMfbur7tTSG0QB+HBeAFeGaVOU3ANY0Ughth8AVuiExEolAkU0w0ITSDazwZfc71oRymi22GrHVhHoz+E6rCVO2mTdisxQSSWY/j0ZNratCnqEtIWVskYLNThOa/hlLFgW7FDz8RwUAGw/52QAAAAA=') format('woff2'),
       url('//at.alicdn.com/t/font_2619385_h88j2pnwthq.woff?t=1624008379370') format('woff'),
       url('//at.alicdn.com/t/font_2619385_h88j2pnwthq.ttf?t=1624008379370') format('truetype');
}
.stateIcon {
  font-family: "stateList" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	width: 20%;
	text-align: center;
}

.stateIcon-go:before {
  content: "\e653";
}
.stateListBody{
	border-bottom: 1px solid #E9E9E9;
}
.stateListBody:last-child{
	border-bottom: none;
}

.state_allcontent{
	display: flex;
	align-items: center;
	padding:20px 0;
}


.stateList-content{
	width: 80%;
}

.stateList-stateGroup{
	width: 30%;
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

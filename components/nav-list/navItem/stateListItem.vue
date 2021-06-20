<template>
	<view class="stateList"
	:style="[_get(item, 'container', {})]"
	>
		<view
			class="stateListBody"
		>
			<navigator :url="item.url" class="state_allcontent">
				<view class="stateIcon stateIcon-go">
				</view>
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
	</view>
</template>

<script>
	// import './static/iconfont.css'
	export default {
		name:"state-list-item",
		data() {
			return {
			};
		},
		props:{
			item: {
				type: Object,
				default: function () {
					return {}
				}
			}
		}
	}
</script>

<style>
	/* 字体文件 */
@font-face {
  font-family: 'stateIcon';  /* Project id 2619385 */
  src: 
			 url('//at.alicdn.com/t/font_2619385_0pmpd0ed6nob.woff2?t=1624104219123') format('woff2'),
       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAH0AAwAAAAABAQAAAGlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIhwjEgZgADwKgTCBIgE2AiQDDgsMAAQgBYIEByAbFwPIjlKjy+4QPPD7+zoXA70/ALXym7pUpkLZUNZNbGAbJMAT1/Q3/zxP7JEElOnc1qVtHZSNCZpIl4Xzz3H+Sf/u3CZ5KMuxg5K0lnbI4QlAAAbgjkQCLClAAyCY3H0GG2iNOI4VWl6Uk0CDDBGTpIk0Kko481VjjRU8IvhbmzI3TFAmpu8KEvkYCGZIggLcUXnCHU00YE3UkWZrYwPE2vjoc7dQAbKS7DGSDBRQYQ0v+GfSPnzPzi32hrB0tk2Mt+459Bxr85m9cfCFEA6Y1x0sh24Km5Ub0+PXwF6svHQofLmpIOwVAweFN5RdudIu6IhsJztsU8K7eB3/LmFVpq/XXjdCjVUj1dBOaaCFORG2pl2J9tWl+QjLkCX/v63SALz545Urt/Lw2zinvqtNgDXSQL5rVIMfbur7tTSG0QB+HBeAFeGaVOU3ANY0Ughth8AVuiExEolAkU0w0ITSDazwZfc71oRymi22GrHVhHoz+E6rCVO2mTdisxQSSWY/j0ZNratCnqEtIWVskYLNThOa/hlLFgW7FDz8RwUAGw/52QAAAAA=') format('woff2'),
       url('//at.alicdn.com/t/font_2619385_h88j2pnwthq.woff?t=1624008379370') format('woff'),
       url('//at.alicdn.com/t/font_2619385_h88j2pnwthq.ttf?t=1624008379370') format('truetype');
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

.stateList{
	background-color: white;
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

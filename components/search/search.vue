<!-- 搜索功能已完成，差样式及子项 -->
<!-- 默认可直接调用，使用stateSearchItem列表子项，调用的api对应的字段通过field来定义 -->
<template>
	<view>
		<view class="search-box">
			<view class="searchIcon search_Icons">&#xe600;</view>
			<view class="search-input">
				<input type="text" class="SearchinputBox" v-model="inputValue" @input="getList()" @change="getList()" adjust-position="false" placeholder="请输入....."/>
			</view>
			<!-- <view class="talkIcon search_Icons">&#xe6ff;</view> -->
			<!-- 语音输入按钮 -->
		</view>
		<view class="search-list">
			<view v-for="(item,i) in listData" v-if="inputValue===''">
				<navigator :url="url[i]">
					<state-search-item v-if="config.itemModule.name==='stateSearchItem'"
						:item="item"
					></state-search-item>
				</navigator>
			</view>
			<view v-for="(item,i) in searchlist" v-if="inputValue!==''">
				<navigator :url="url[i]">
					<!-- 子项添加处 -->
				<state-search-item v-if="config.itemModule.name==='stateSearchItem'"
					:item="item"
				></state-search-item>
				</navigator>
			</view>
		</view>
		<view style="width: auto;color: #ccc;font-size: 12px; font-weight: bolder;margin: 10px;text-align: center;">没有更多了</view>
	</view>
</template>

<script>
	// import { getSearchList } from '../../common/api.js'
	import { request } from '../../common/request.js'
	import { globalConfig } from '@/config.js'
	
	import stateSearchItem from './item/stateSearch.vue'
	export default {
		name:"search",
		components:{
			stateSearchItem
		},
		data() {
			return {
				inputValue:"",
				listData:null,
				searchlist:null,
				itemNavigation:"",
				url:null
			};
		},
		props:{
			config:{
				type:Object,
				default(){
					return {
						loadAPI:null,
						itemModule:{
							name:"stateSearchItem"
						},
						field:"",
						id:null
					}
				}
			},
		},
		created() {
			this.getData()
			// console.log(this.searchlist)
		},
		methods:{
			getSearchList(params){
				let url=this.config.loadAPI||`${globalConfig.dataHost}`
				return request('GET', url, params)
			},
			async getData(){
				const res = await this.getSearchList({id:this.config.id||12311});
				// console.log(res)
				this.listData = res.data.list
				this.itemNavigation = res.data.itemNavigation
				this.url = this.getID(this.listData)
			},
			getList(){
				this.searchlist = []
				// console.log(this.searchlist)
				if(this.inputValue!==""){
					for(let i=0;i<this.listData.length;i++){
						let list = this.listData[i]
						if(list[this.config.field||'name'].indexOf(this.inputValue)!==-1){
							// console.log(this.searchlist)
							this.searchlist.push(list)
							this.url=this.getID(this.searchlist)
						}
					}
				}
				// console.log(this.searchlist)
				// console.log(this.inputValue)
			},
			getID(list){
				let urlList=[];
				let url = this.itemNavigation;
				// console.log(list)
				for(let j=0;j<list.length;j++){
					if(list[j].id){
						url = this.itemNavigation + "?id=" + list[j].id
					}
					urlList.push(url)
				}
				return urlList
			}
		}
	}
</script>

<style lang="less">
	// 图标文件
	@font-face {
	  font-family: 'search';  /* Project id 2631740 */
	  src: url('//at.alicdn.com/t/font_2631740_nv78ry9vbap.woff2?t=1624530258486') format('woff2'),
				 url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQQAAsAAAAACGQAAAPCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDHAqEDINwATYCJAMQCwoABCAFhG0HRBt6B1GUDkqL7GdC2eaDpjGE7A53c3LKsCMbVS/VfWz8GwH8/ah5sRFF3dbWtLRURZBXYg16JMdNRfn/b05/kd3wXueTtnLICm1D/xK+vMtlCMJMmQlbYSYcSCChN/96mT8d7KmgkhTAJOXArJUnjb2t0AgGr1Wff3A5/ZUHOM+yXMZaNActrMcwKw4oXWOSlTA2jF1cxjUCKk2ZldxY3d6D6rUqAhiSphUGwuRwbZsq5FmDXJIclAtK607NEH7JEG+T78BT9/fhm17Ig6gkgbbT3umKAYObP+9FCvu/dpBeXPeXAbtHlCBhbGamcF7uOJTyw2NSKvOCaQsAB8tFerV6L7QsX7QqRbn+l0cSBUIp4MRqMId0yY4JTTaJj9hEPhaiE9glg3JU4B2+I013P0dmcZJDIhLI+ECqXcEvIQwmCBjCLpJXcpSiDDvwX+doEVKn4q00L77qCE7+kBCMIBIUBYCf/qORxPsTS3/+wL9eAy+fkzipIQRCpdF0zVtLAiZwRg86P9rt+KWEHN0+uMZlyNbe7iZ7RSigpXqOiEUZTbrYEHaXeACAbdH8jxwOoOH3EMR5PnaX1kSKY6J+H+xpPhjvYbeJFsCWAerqYR1MeJp9cL8oZomJmpxljpJie5nz3OA63IAbXaZJFCvZcNcbbg31bjI7s78/axZzsTWbdCekt1m9XLDlTG0hLeqzcvdZ0P1H6Wx+9Qw3krI0jIRU67aebgemCjSP/tu6O2p91R5PlbfuxuA63MBa600iklRzn6xFzd09PIwzRaoYPsQz7IXfRUvpGnpfuCwwMfxo8Ss9n3sajLYn26NwNQgBipcJS6EAxc/UkxTv2USvM0jd/ADd1HU979em5asO3vfhdzW4knpKL1BYW/C6nbIC5UsD2UvOl0homoriFzJu6jwYUambeb9xGr31oWm5idGgXEsIUZkeSMr1oZkyBiWqzEGpcstQadTa7CpNuJSQC8CIBwBBvSeIar2HpN4zmimvUKLVH5SqDymotB9aS1YZCHZxiaMq0CDaCbF1FlDDLIpe8g6asafyqNilHSCPbB/pSp1kbA0D5H2MiA7NnhCUUM58sgp2Q89jJOTMQV1IlhDhpCzTvA9JOvOhaB2HVAIyEJoThE3HBKhdXCimvr8DmWIeFS8hlTgPIC5il090STo10DVFUIt0Lq0jh0w9gkBxL4pjfMQqtCFPDzNEmN/JgXSCxGoRDE2SUS5aVyGNr/KvcAlU0t6RQzKRSqQTGai60PuOrQamFavZiMVRzFKqYQAAAAA=') format('woff2'),
	       url('//at.alicdn.com/t/font_2631740_nv78ry9vbap.woff?t=1624530258486') format('woff'),
	       url('//at.alicdn.com/t/font_2631740_nv78ry9vbap.ttf?t=1624530258486') format('truetype');
	}
	.search_Icons{
		font-family: "search" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		position: absolute;
		text-align: center;
		top:20px
	}
	.searchIcon{
		left: 8%;
	}
	.talkIcon{
		right: 8%;
	}
	
	.search-box{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: white;
		opacity: .8;
		z-index: 10000;
	}
	.search-list{
		margin-top: 50px;
	}
	
	.search-input{
		margin: 10px auto;
		width: 90%;
		height: 30px;
		border-radius: 30px;
		border: 2px solid #ccc;
	}
	.SearchinputBox{
		margin: 0 auto;
		width: 80%;
		height: 30px;
		font-size: 14px;
		color: #333;

	}
	.inputTextBox{
		position: relative;
		top: 0;
		width: 90%;
		height: 300px;
		margin: 0 auto;
		background-color: #DCDEE0;
	}
</style>

<template>
	<navigator :url="navigationUrl" hover-class="navigator-hover">
		<view class='card'>
			<view class='title'>
				<view>{{ item.year }}</view>
			</view>
			<view class='title' style="font-size: 28rpx;">
				<view>{{ item.startTime}} - {{ item.endTime }}</view>
			</view>
			<!-- <view class='date-info'>
				
			</view> -->
			<view v-for="(cItem,cIndex) in item.cellList" :key="cIndex">
				<dynamic-cell :perem="{
					title: cItem.title
				}" 
				@handleClick="onItemClick(cItem.path)"
				/>
			</view>
			<view class="footer">
				<view>去填写</view>
			</view>
		</view>
	</navigator>
</template>
<script>
	import qs from 'qs'
	import dynamicCell from "@/components/custom-c/cell.vue";
	export default {
		name: 'ReturnToWorkRecordItem',
		components: { dynamicCell },
		props: {
			item: Object,
			ext: Object,
			itemNavigation: String
		},
		computed: {
			navigationUrl() {
				console.log('item = ', this.item);
				console.log('itemNavigation = ', this.itemNavigation);
				let text = ''
				if (this.itemNavigation) {
				   const route = this.itemNavigation.split('?')[0]
				   const query = this.itemNavigation.split('?')[1] ? qs.parse(this.itemNavigation.split('?')[1]) : {}
				   text += (`/pages${route.charAt(0) !== '/' ? '/' : ''}` + route)
				   if (Object.keys(query).length > 0) {
				       for (const i in query) {
				           if (query[i] === '') {
				               query[i] = this.item[i] || ''
				           }
				       }
				console.log('query1111 = ', query);
				       text += '?query=' + encodeURIComponent(JSON.stringify(query))
				   }
				}
				return text
			}
		},
		methods: {
			onItemClick(path){
				console.log('path = ', path);
			}
		},
		mounted(){
			// console.log('this.item = ', this.item)
		}
	}
</script>
<style lang="less" scoped>
	
	.card {
		padding: 26rpx 16rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 14rpx;
	}
	
	.title{
		color: #505050;
		font-size: 32rpx;
		line-height: 150%;
		text-align: left;
		font-weight: bold;
		padding-left: 20rpx;
		margin-bottom: 10rpx;
	}
	
	.date-info{
		margin-top: 16rpx;
		padding: 0 0rpx 0rpx 38rpx;
	}
	
	.footer{
		height: 90rpx;
		display: flex;
		justify-content: flex-end;
		justify-items: center;
		padding-right: 20rpx;
		
		>view{
			width: 120rpx;
			height: 72rpx;
			line-height: 72rpx;
			font-size: 24rpx;
			text-align: center;
			color: #2a82e4;
			margin-top: 16rpx;
		}
	}

</style>

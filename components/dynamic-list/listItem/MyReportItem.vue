<template>
	<view class='card'>
		
		<view class="left">
			<view class='title'>
				<view>{{ item.year }}</view>
			</view>
			<view class='title' style="font-size: 28rpx;">
				<view>{{ item.startTime}} - {{ item.endTime }}</view>
			</view>
		</view>
		
		
		<view class="right">
			<view v-if="item.status === 'pass'" class="status">
				正常营业
			</view>
			<view v-else-if="item.status === 'failed'" class="status" style="background-color: #808080;">
				关闭
			</view>
		</view>
		
	</view>
</template>
<script>
	import dynamicCell from "@/components/custom-c/cell.vue";
	export default {
		name: 'MyReportItem',
		components: { dynamicCell },
		props: {
			item: Object,
			ext: Object
		},
		data(){
			return {
				itemId: '',
				path: ''
			}
		},
		computed: {
			setValue(){
			   // this.itemId = this.item.id;
			}
		},
		methods: {
			onItemClick(item){
				let path = ''
				if (this.itemNavigation) {
				   const route = this.itemNavigation.split('?')[0]
				   const query = this.itemNavigation.split('?')[1] ? qs.parse(this.itemNavigation.split('?')[1]) : {}
				   path += (`/pages${route.charAt(0) !== '/' ? '/' : ''}` + route + '?')
				   if (Object.keys(query).length > 0) {
				       for (const i in query) {
							path += (i + '=' + item[i])
				       }
				   }
				}
				uni.navigateTo({
					url: path
				})
			},

		},
		mounted(){
			console.log('this.item = ', this.item)
		}
	}
</script>
<style lang="less" scoped>
	
	.card {
		padding: 26rpx 16rpx;
		background-color: #ffffff;
		border-radius: 16rpx;
		margin-bottom: 14rpx;
		display: flex;
		flex-direction: row;
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
	

</style>

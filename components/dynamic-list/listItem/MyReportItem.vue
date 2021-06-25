<template>
	<view class='card'>
		
		<view class="flex">
			<view class="left flex1">
				<view class='times'>
					<view>{{ item.year }}</view>
				</view>
				<view class='times' style="font-size: 28rpx;">
					<view>{{ item.month }}</view>
				</view>
				
				<view class='title' style="font-size: 28rpx;">
					<view>{{ item.title }}</view>
				</view>
			</view>
			
			
			<view class="right">
				<view v-if="item.status === 'toBeVerified'" class="status">
					待验证
				</view>
				<view v-else-if="item.status === 'verified'" class="status" style="background-color: #43CF7C;">
					已验证
				</view>
				<view v-else-if="item.status === 'validationFailed'" class="status" style="background-color: #D43030;">
					验证失败
				</view>
			</view>
		</view>
		
		<van-grid column-num="3" border="false">
		  <van-grid-item use-slot v-for="(item,index) in item.imgList">
			 <van-image width="100" height="100" :src="item.url" :key="item.id" />
		  </van-grid-item>
		</van-grid>
		
		<divider/>
		
		<view class="position">
			<view style="margin-top: 3rpx;">
				<van-icon name="location-o" size="44rpx" />
			</view>
			<view>定位地点：{{ item.address }}</view>
		</view>

		
	</view>
</template>
<script>
	import divider from '@/components/custom-c/divider.vue'
	export default {
		name: 'MyReportItem',
		components: { divider },
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
		display: flex;
		flex-direction: column;
	}
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 24rpx;
		.left {
			.times {
				color: #333;
				font-weight: 700;
				font-size: 32rpx;
			}
		
			.title {
				margin: 10rpx 0;
				color: #333;
			}
		
		// 	.text-line-1 {
		// 		text-overflow: ellipsis;
		// 		white-space: nowrap;
		// 		overflow: hidden;
		// 	}
		
		// 	.submit-time {
		// 		color: #a6a6a6;
		// 	}
		}
		
		.flex1 {
			flex: 1;
			max-width: calc(100% - 160rpx);
		}
		
		.right {
			// width: 164rpx;
			// height: 128rpx;
		
			.status {
				width: 140rpx;
				height: 50rpx;
				line-height: 50rpx;
				text-align: center;
				font-size: 24rpx;
				background-color: #2A82E4;
				color: #ffffff;
				border-radius: 12rpx;
				margin-top: 40rpx;
			}
		}
	}
	
	.position{
		display: flex;
		flex-direction: row;
		justify-items: center;
		margin-top: 20rpx;
	}
	
	

</style>

<template>
	<navigator :url="navigationUrl" hover-class="navigator-hover">
		<view class="self-item">
			<view class="flex">
				<view class="left flex1">
					<view class="title text-line-1">{{ item.title }}</view>
					<view class="times text-line-1">
						期间: {{ item.startTime }} - {{ item.endTime }}
					</view>
					<view class="submit-time">提交时间: {{ item.submitTime }}</view>
				</view>
				<view class="right">
					<view v-if="item.status === 'pass'" class="status">
						通过
					</view>
					<view v-else-if="item.status === 'failed'" class="status" style="background-color: #D43030;">
						未通过
					</view>
				</view>
			</view>
		</view>
	</navigator>
</template>
<script>
	import qs from 'qs'
	export default {
		name: 'SelfInspectionRecordItem',
		props: {
			item: Object,
			ext: Object,
			itemNavigation: String
		},
		computed: {
			navigationUrl() {
				// let text = ''
				// if (this.itemNavigation) {
				//    const route = this.itemNavigation.split('?')[0]
				//    const query = this.itemNavigation.split('?')[1] ? qs.parse(this.itemNavigation.split('?')[1]) : {}
				//    text += (`/pages${route.charAt(0) !== '/' ? '/' : ''}` + route)
				//    if (Object.keys(query).length > 0) {
				//        for (const i in query) {
				//            if (query[i] === '') {
				//                query[i] = this.item[i] || ''
				//            }
				//        }
				//        text += '?query=' + encodeURIComponent(JSON.stringify(query))
				//    }
				// }
				// return text
			}
		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	.self-item {
		padding: 32rpx;
		background: #fff;
		border-bottom: 1px solid #eee;
		font-size: 28rpx;
		transition: all .4s;
		margin: 0 4rpx;

		.flex {
			display: flex;
			justify-content: space-between;

			.left {
				.title {
					color: #333;
					font-weight: 700;
					font-size: 32rpx;
				}

				.times {
					margin: 10rpx 0;
					color: #505050;
				}

				.text-line-1 {
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}

				.submit-time {
					color: #a6a6a6;
				}
			}

			.flex1 {
				flex: 1;
				max-width: calc(100% - 200rpx);
			}

			.right {
				width: 164rpx;
				height: 128rpx;

				.status {
					width: 170rpx;
					height: 50rpx;
					line-height: 50rpx;
					text-align: center;
					font-size: 24rpx;
					background-color: #43CF7C;
					color: #ffffff;
					border-radius: 12rpx;
					margin-top: 40rpx;
				}
			}
		}
	}

	.self-item:active {
		background-color: #f2f2f2;
		transition: all .4s;
	}
</style>

<template>
<!-- 	<navigator :url="navigationUrl" hover-class="navigator-hover">
		<view class="state_allcontent">
			<view class="AvatarStateList">
				<view class="formNumber" v-if="item.formNumber">执法单号:<span style="font-weight: bolder;">{{item.formNumber}}</span></view>
				<view class="body">
					<view class="avatar" v-if="item.img">
						<image :src="item.img" mode="widthFix" class="avatar-img" />
					</view>
					<view class="content" v-if="item.title||item.remarks||item.item.object">
						<view class="titleBox" v-if="item.title||item.object">
							<view class="time" v-if="item.time"><span class="content-title">执法时间:</span>{{item.time}}</view>
							<view class="object" v-if="item.object"><span class="content-title">执法对象:</span>{{item.object}}</view>
						</view>
						<view class="remarks" v-if="item.remarks">{{item.remarks}}</view>
					</view>
					<view class="state" v-if="item.state">
							<view v-if="item.state.modify" class="modify">修改</view>
							<view v-if="item.state.approval" class="approval">审批</view>
					</view>
				</view>
			</view>
		</view>
	</navigator> -->
	
	<navigator :url="navigationUrl" hover-class="navigator-hover">
		<view class="state_allcontent">
			<view class="AvatarStateList">
				<view class="formNumber" v-if="item.code">执法单号:<span style="font-weight: bolder;">{{item.code}}</span></view>
				<view class="body">
					<view class="avatar" v-if="item.img">
						<image :src="item.img" mode="widthFix" class="avatar-img" />
					</view>
					<view class="content" >
						<view class="titleBox" style="margin-left: 20rpx;">
							<view class="time" v-if="item.createTime"><span class="content-title">执法时间:</span>{{item.createTime}}</view>
							<view class="object" v-if="item.object"><span class="content-title">执法对象:</span>{{item.object}}</view>
						</view>
						<view class="remarks" v-if="item.remarks">{{item.remarks}}</view>
					</view>
					<view class="state" v-if="item.state">
							<view v-if="item.state.modify" class="modify">修改</view>
							<view v-if="item.state.approval" class="approval">审批</view>
					</view>
				</view>
			</view>
		</view>
	</navigator>
</template>

<script>
	import qs from 'qs'
	export default {
		name:"avatar-state-list",
		props:{
			item:Array,
			itemNavigation:String
		},
		onLoad(){
			this.navigationUrl()
			// console.log(this.navigationUrl())
		},
		computed: {
			navigationUrl() {
				let text = ''
				if (this.itemNavigation) {
				   const route = this.itemNavigation.split('?')[0]
				   const query = this.itemNavigation.split('?')[1] ? qs.parse(this.itemNavigation.split('?')[1]) : {}
		
				   text += (`/pages${route.charAt(0) !== '/' ? '/' : ''}` + route)

					 if(query.id = "[id]"){
						 query.id = this.item.id
					 }
					 // console.log(this.item.id)
					 // console.log(route)
					 // console.log(query)
					 // console.log(text)
				   if (Object.keys(query).length > 0) {
				       for (const i in query) {
				           if (query[i] === '') {
				               query[i] = this.item[i] || ''
				           }
				       }
							 text+='?query='+query.id
				       // text += '?query=' + encodeURIComponent(JSON.stringify(query))
							 // console.log(text)
				   }
				}
				return text
			}
		}
	}
</script>

<style lang="less">
	.state_allcontent{
		background-color: #F4F4F4;
		padding: 2px 0 5px 0;
	}
	.AvatarStateList{
		background-color: white;
		width: 98%;
		margin: 0 auto;
		padding: 5px 0px 20px 0px;
		.formNumber{
			width: auto;
			text-align: left;
			font-size: 12px;
			border-bottom: 1px solid #EBEBEB;
			padding: 5px 0px;
			margin: 5px 10px 10px 10px;
		}
		.body{
			display: flex;
			width: 100%;
			.avatar{
				width: 50px;
				.avatar-img{
					border-radius: 50%;
					width: 32px;
					height: 32px;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}
			}
			.content{
				width: 58%;
				.titleBox{
					margin-bottom: 10px;
					.time{
						font-size: 10px;
					}
					.object{
						font-size: 10px;
					}
				}
				.remarks{
					font-size: 12px;
					font-weight: bold;
				}
			}
			.state{
				font-size: 8px;
				.modify{
					color: #5FA1EB;
					border: 1px solid #5FA1EB;
					border-radius: 2px;
					padding: 3px 8px;
					float: left;
					margin-right: 5px;
					&:hover{
						color: #fff;
						background-color: #5FA1EB;
					}
				}
				.approval{
					color: #D18FDD;
					border: 1px solid #D18FDD;
					border-radius: 2px;
					padding: 3px 8px;
					float: left;
					&:hover{
						color: #fff;
						background-color: #D18FDD;
					}
				}
			}
		}
	}
	.formNumber{
		width: 80%;
		margin: 0 auto;
		border-bottom: 1px solid #FEFEFE;
	}
</style>

<template>
	<navigator :url="navigationUrl" hover-class="navigator-hover">
		<view class="state_allcontent">
			<view class="AvatarStateList">
				<view class="formNumber" v-if="item.formNumber">
					执法单号:
					<span style="font-weight: bolder;">{{item.formNumber}}</span>
					<span class="enforcementState enforcement" v-if="item.enforcementState==='enforcement'">执法中</span>
					<span class="enforcementState rectification" v-if="item.enforcementState==='rectification'">待整改</span>
					<span class="enforcementState closeCase" v-if="item.enforcementState==='closeCase'">已结案</span>
				</view>
				<view class="body">
					<view class="avatar" v-if="item.img">
						<image :src="item.img" mode="widthFix" class="avatar-img" />
					</view>
					<view class="content" v-if="item.remarks||item.object||item.company||item.department||item.time">
						<view class="titleBox" v-if="item.remarks||item.object||item.company||item.department||item.time">
							<view class="time" v-if="item.time"><span class="content-title">执法时间:</span>{{item.time}}</view>
							<view class="object" v-if="item.object"><span class="content-title">执法对象:</span>{{item.object}}</view>
							<view class="company" v-if="item.company"><span class="content-title">执法单位:</span>{{item.company}}</view>
							<view class="department" v-if="item.department"><span class="content-title">执法科室:</span>{{item.department}}</view>
							<view class="remarks" v-if="item.remarks"><span class="content-title">执法标题:</span>{{item.remarks}}</view>
						</view>
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
			item:Object,
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
			.enforcementState{
				padding: 5px 10px;
				font-weight: bolder;
				font-size: 8px;
				float: right;
				margin-top: -5px;
				border-radius: 5px;
				&.enforcement{
					color: #77DCA0;
					border: 1px solid #77DCA0;
				}
				&.enforcement:hover{
					background-color: #77DCA0;
					color: white;
				}
				&.rectification{
					color: #E06969;
					border: 1px solid #E06969;
				}
				&.rectification:hover{
					color: white;
					background-color: #E06969;
				}
				&.closeCase{
					color: #A1A1A1;
					border: 1px solid #A1A1A1;
				}
				&.closeCase:hover{
					color: white;
					background-color: #A1A1A1;
				}
			}
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
					font-size: 10px;
				}
				.content-title{
					color: #666;
					font-weight: bolder;
					margin-right: 3px;
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

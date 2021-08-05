<template>
	<!-- <navigator :url="navigationUrl" hover-class="navigator-hover"> -->
		<view class="state_allcontent">
			<view class="AvatarStateList">
				<view class="formNumber" >
					工作名称:
					<span style="font-weight: bolder;font-size: 12px;margin-left: 5px;">{{item.instanceEntityVo.workName}}</span>
					<!-- <span class="enforcementState enforcement" v-if="item.finishState==='enforcement'">执法中</span> -->
					<span class="enforcementState rectification" v-if="item.finishState==='0'">待整改</span>
					<span class="enforcementState closeCase" v-if="item.finishState==='1'">已结案</span>
				</view>
				<view class="body">
					<view class="avatar" v-if="item.pdKey">
						<image :src="getVal(item.pdKey)" mode="widthFix" class="avatar-img" />
					</view>
					<view class="content">
						<view class="titleBox">
							<view class="time" v-if="item.actApplyTime"><span class="content-title">开始时间:</span>{{item.actApplyTime}}</view>
							<view class="object" v-if="item.actApplyUserName"><span class="content-title">执法人员:</span>{{item.actApplyUserName}}</view>
							<view class="company" v-if="item.actCurrDualUserName"><span class="content-title">下一步执行人:</span>{{item.actCurrDualUserName}}</view>
							<!-- <view class="department" v-if="item.department"><span class="content-title">执法科室:</span>{{item.department}}</view> -->
							<view class="remarks" v-if="item.formName"><span class="content-title">执法单名:</span>{{item.formName}}</view>
						</view>
					</view>
<!-- 					<view class="state" v-if="item.state">
							<view v-if="item.state.modify" class="modify">修改</view>
							<view v-if="item.state.approval" class="approval">审批</view>
					</view> -->
				</view>
			</view>
		</view>
	<!-- </navigator> -->
</template>

<script>
	import qs from 'qs'
	import {globalConfig} from '@/config.js'
	export default {
		name:"companyStateToEnforcement",
		props:{
			item:Object,
			itemNavigation:String
		},
		data(){
			return {
				iconList:{}
			}
		},
		created() {
			this.iconList = globalConfig.icon
			// console.log("iconList",this.iconList)
		},
		onLoad(){
			// this.navigationUrl()
			// console.log(this.navigationUrl())
		},
		methods:{
			DateToString(val){
				let Date = val.split(" ")[0]
				let DateJson = Date.split("-")
				let DateString =DateJson[1]+DateJson[2]
				return DateString
			},
			getVal(string){
				// console.log(string)
				string = "type"+string.replace(string[0],string[0].toUpperCase())
				// console.log(this.iconList[string])
				return this.iconList[string]
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
			font-size: 14px;
			border-bottom: 1px solid #EBEBEB;
			padding: 5px 0px;
			margin: 5px 10px 10px 10px;
			.enforcementState{
				padding: 5px 10px;
				font-weight: bolder;
				font-size: 10px;
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
				width: 70px;
				.avatar-img{
					// border-radius: 50%;
					width: 40px;
					height: 40px;
					position: relative;
					left: 50%;
					transform: translate(-50%);
				}
			}
			.content{
				width: 58%;
				.titleBox{
					margin-bottom: 10px;
					font-size: 14px;
				}
				.content-title{
					color: #666;
					font-weight: bolder;
					margin-right: 3px;
				}
			}
			.state{
				font-size: 10px;
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

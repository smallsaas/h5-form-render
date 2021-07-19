<template>
	<view class="ToDoListItem">
		<image :src="getVal(item.processDefineKey)" mode="aspectFit" v-if="item.processDefineKey" style="margin:auto 15px;min-width:40px;min-height: 40px;width: 40px;height: 50px;"></image>
		<view class="ToDoBody">
			<view class='taskName'>
				<span class="Title">待办事项：</span>{{item.businessName}}
			</view>
			<view class='createTime'>
				<span class="Title">发起时间：</span>{{item.createTime||item.startTime}}
			</view>
		</view>
	</view>
	<!-- <button @click="getZc">测试</button> -->
</template>
<script>
	import { globalConfig } from '@/config.js'
	export default {
		name:"toDoListItem",
		created() {
		},
		props:{
			item: Object
		},
		data(){
			return {
				iconList:globalConfig.icon
			}
		},
		methods:{
			getVal(string){
				string = "type"+string.replace(string[0],string[0].toUpperCase())
				// console.log(this.iconList[string])
				return this.iconList[string]
			}
		}
	}
</script>

<style lang="less">
	.ToDoListItem{
		height: 100px;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #eee;
		&:hover{
			background-color: #eee;
		}
		.ToDoBody{
			.taskName{
				font-size: 14px;
			}
			.createTime{
				font-size: 14px;
			}
		}
	}
		.ToDoBody{
			.Title{
				font-weight: bolder;
			}
		}

</style>

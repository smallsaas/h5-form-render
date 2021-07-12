<template>
	<view class="ToDoListItem">
		<image :src="getIcon(item.processDefineKey)" mode="aspectFit" v-if="item.processDefineKey" style="margin:auto 15px;width:50px;height: 50px;"></image>
		<view class="ToDoBody">
			<view class='taskName'>
				待办事项：{{item.taskName}}
			</view>
			<view class='createTime'>
				发起时间：{{item.createTime}}
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
			getIcon(e){
				let icon;
				let zc = this.iconList.typeZc
				switch(e){
					case "zc":icon=zc;break;
				}
				return icon
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
	}
</style>

<template>
	<view class="ToDoListItem">
		<image :src="getIcon(item.processDefineKey)" mode="aspectFit" v-if="item.processDefineKey" style="margin:auto 15px;width:50px;height: 50px;"></image>
		<view class="ToDoBody">
			<view class='taskName'>
				<span class="Title">待办事项：</span>{{item.businessName}}
			</view>
			<view class='createTime'>
				<span class="Title">发起时间：</span>{{item.createTime}}
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
				console.log(e)
				let icon;
				// let list = {
				// 	"zc":this.iconList.typeZc,
				// 	"test":this.iconList.typeTest,
				// 	"zglc":this.iconList.typeZglc,
				// 	"jdsb":this.iconList.typeJdsb,
				// }
				let list = this.iconList
				switch(e){
					case "zc":icon=list.typeZc;break;
					case "test":icon=list.typeTest;break;
					case "zglc":icon=list.typeZglc;break;
					case "jdsb":icon=list.typeJdsb;break;
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
		.ToDoBody{
			.Title{
				font-weight: bolder;
			}
		}

</style>

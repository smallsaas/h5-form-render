<template>
	<view>
		<!-- <c-View-Upload :param="param" @change="onchange"></c-View-Upload> -->
		<dynamic-page :API="api"></dynamic-page>
	</view>
</template>

<script>
	// import CViewUpload from '@/components/dynamic-form/custom/c-View-Upload/c-View-Upload'
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import {globalConfig} from '@/config.js'
	export default {
		components:{
			// CViewUpload
			dynamicPage
		},
		data() {
			return {
				// param:{
				// 	label:"测试",
				// 	required:true,
				// 	readonly:true,
				// 	value:JSON.stringify([{'url':'https://ai.hdqmjs.com/attachments/6ff0f1d8-61f0-4308-a84b-a4b8f6e9b8f5.jpg','hide':true}]),
				// 	error:false,
				// 	// "max-count":2
				// }
				api:globalConfig.formHost + "?id=136626"
			}
		},
		methods: {
			onchange(e){
				// console.log(e,"外部文件列表")
			}
		}
	}
</script>

<style>

</style>

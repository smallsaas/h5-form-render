<template>
	<view>
		<dynamic-form
		v-if="userList.userId"
			:config="config"
			:srvFormData="formData"
			workflow="true"
			:processDefineKey="key"
			:user="userList"
			:taskId="taskId"
			:Details="false"
			:debug="true"
		></dynamic-form>
		<dynamic-form
			v-if="!userList.userId"
			:config="config"
			:srvFormData="formData"
			workflow="true"
			:processDefineKey="key"
			:taskId="taskId"
			:Details="false"
			:debug="true"
		></dynamic-form>
<!-- 		<dynamic-page
			 :API="api"
			 :LastKey="processDefineKey"
		></dynamic-page> -->
	</view>
</template>

<script>
	import {Base64} from '@/utils/tools.js'
	import {globalConfig} from '@/config.js'
	import {convert} from '@/utils/customTools.js'
	import dynamicForm from '../../../components/dynamic-form/index.vue'
	// import confirm from '../../components/confirm.vue'
	import dynamicPage from '../../../components/dynamic-page/index.vue'
	export default {
		onLoad(e) {
			console.log("e",e)
			this.getPiId(e.query)
			this.getConfig()
		},
		components:{
			dynamicForm,
			dynamicPage
		},
		onReady() {
			console.log(this.config)
		},
		data() {
			return {
				loadApi:`${globalConfig.workflowEP}/api.flow.examine/processDetail`,
				piId:"",
				taskId:"",
				config:null,
				method:"POST",
				data:{
				},
				userList:{
					userId:null,
					name:null
				},
				formData:null,
				header:{
					Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
				},
				key:null,
				api: globalConfig.formHost + '?id=66000',
				processDefineKey:{},
				// id:""
			}
		},
		methods: {
			getPiId(e){
				let decode = JSON.parse(decodeURIComponent(e))
				this.piId=decode.piId
				this.taskId=decode.taskId
				console.log("decode",decode)
				console.log("userInfo",uni.getStorageSync(globalConfig.userInfo))
				let userInfo = uni.getStorageSync(globalConfig.userInfo)
				let userId = userInfo.userId.toString()
				console.log(userId)
				if(userId!==decode.preUserId){
					console.log("还是进来了")
					this.userList.userId=decode.preUserId
					this.userList.name=decode.preUserName
				}
				this.key=decode.processDefineKey
				console.log(decode)
				console.log(this.taskId)
				this.data = {
					"processInstanceId": this.piId
				}
			},
			getConfig(){
				// console.log(this.data)
				// console.log(this.method)
				let that = this
				uni.request({
					url:this.loadApi,
					method:this.method,
					data:this.data,
					header:this.header,
					complete(res) {
						// console.log(res)
						if(res.data.code === "00000"){
							// console.log(res)
							let form = res.data.data.form
							let data = res.data.data.formData
							that.formData = data
							// console.log(form)
							// console.log("enforcementSeq",res.data.data.customValues.fileseq)
							if(res.data.data.customValues){
								if(res.data.data.customValues.fileno){
									that.processDefineKey ={
										"processDefineKey":res.data.data.processDefineKey,
										"fileno":res.data.data.customValues.fileno,
										"fileseq":res.data.data.customValues.fileseq||0,
										"processDefinitionId":res.data.data.processDefinitionId,
										"taskId":that.taskId
									}
								}else{
									that.processDefineKey ={
										"processDefineKey":res.data.data.processDefineKey,
										// "fileno":res.data.data.customValues.fileno,
										// "fileseq":res.data.data.customValues.fileseq||0,
										"processDefinitionId":res.data.data.processDefinitionId,
										"taskId":that.taskId
									}
								}
							}else{
								that.processDefineKey ={
									"processDefineKey":res.data.data.processDefineKey,
									// "fileno":res.data.data.customValues.fileno,
									// "fileseq":res.data.data.customValues.fileseq||0,
									"processDefinitionId":res.data.data.processDefinitionId,
									"taskId":that.taskId
								}
							}

							let jsonDefine = form.jsonDefine
							that.config = convert(JSON.parse(Base64.decode(jsonDefine)))
							// console.log("config",that.config)
							console.log(that.processDefineKey)
							// console.log(that.config)
						}
					}
				})
			},
		}
	}
</script>

<style>

</style>

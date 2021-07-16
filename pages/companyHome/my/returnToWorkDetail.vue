<template>
	<view>
		<dynamic-form
			:config="config"
			:srvFormData="formData"
			:Details="true"
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
	import dynamicForm from '../../../components/dynamic-form/index.vue'
	// import confirm from '../../components/confirm.vue'
	import dynamicPage from '../../../components/dynamic-page/index.vue'
	export default {
		onLoad(e) {
			console.log(e)
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
				formData:null,
				header:{
					Authorization: `Bearer ${globalConfig.enforcementKey}`
				},
				api: globalConfig.formHost + '?id=66000',
				processDefineKey:{}
			}
		},
		methods: {
			getPiId(e){
				let decode = JSON.parse(decodeURIComponent(e))
				this.piId=decode.piId
				this.taskId=decode.taskId
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
							console.log("enforcementSeq",res.data.data.customValues.fileseq)
							that.processDefineKey ={
								"processDefineKey":res.data.data.processDefineKey,
								"fileno":res.data.data.customValues.fileno,
								"fileseq":res.data.data.customValues.fileseq,
								"processDefinitionId":res.data.data.processDefinitionId,
								"taskId":that.taskId
							}
							let jsonDefine = form.jsonDefine
							that.config = JSON.parse(Base64.decode(jsonDefine))
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


<!-- <template>
	<view>
		<dynamic-page
		   :API="getPageApi"
		   :requsetParam="requsetParam"
		/>
	</view>
</template>

<script>
	import dynamicPage from '@/components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'

	export default {
		components: {
			dynamicPage
		},
		onLoad(e) {
			var query = {};
			if (e.query) {
				query = { ...JSON.parse(decodeURIComponent(e.query)) }
				this.requsetParam =  query
			}else {
				console.error('获取请求参数异常')
			}
		},
		data() {
			return {
				requsetParam: '',
				getPageApi: globalConfig.formHost + '?id=121',
			}
		},
		methods: {
		}
	}
</script>

<style lang="less">
	page {
		height: 100%;
		background-color: #E5E5E5;
	}

</style>
 -->
<template>
	<view>
		<dynamic-form
			:config="config"
			:srvFormData="formData"
			:Details="true"
		></dynamic-form>
	</view>
</template>

<script>
	import {Base64} from '../../utils/tools.js'
	import {globalConfig} from '@/config.js'
	import dynamicForm from '../../components/dynamic-form/index.vue'
	export default {
		onLoad(e) {
			this.getPiId(e.query)
			this.getConfig()
		},
		components:{
			dynamicForm
		},
		onReady() {
			console.log(this.config)
		},
		data() {
			return {
				loadApi:`${globalConfig.workflowEP}/api.flow.examine/processDetail`,
				piId:"",
				config:null,
				method:"POST",
				data:{
				},
				formData:null,
				header:{
					Authorization: `Bearer ${globalConfig.enforcementKey}`
				}
			}
		},
		methods: {
			getPiId(e){
				this.piId=JSON.parse(decodeURIComponent(e)).piId
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
						console.log(res)
						if(res.data.code === "00000"){
							console.log(res)
							let form = res.data.data.form
							let data = res.data.data.formData
							that.formData = data
							console.log(form)
							let jsonDefine = form.jsonDefine
							that.config = JSON.parse(Base64.decode(jsonDefine))
							console.log(that.config)
						}
					}
				})
			},
		}
	}
</script>

<style>

</style>

<template>
	<view>
		<c-select @change="isSelect" :param="param" :loadAPI="API"></c-select>
		<c-button :config="config"></c-button>
	</view>
</template>

<script>
	import cSelect from '../../../components/dynamic-form/custom/c-select/c-select.vue'
	import cButton from '../../../components/other/C-Button.vue'
	import {globalConfig} from '@/config.js'
	export default {
		data() {
			return {
				API:`${globalConfig.workflowEP}/executive/companyinfo/page`,
				param:{
					label:"选择执法公司"
				},
				config:{
					type:"jump",
					url:""
				},
				selectId:null
			}
		},
		methods: {
			isSelect(e){
				console.log("select!",e)
				this.selectId=e
				this.config.url=this.config.url+"&selectId="+this.selectId
				console.log("url",this.config.url)
			}
		},
		onLoad(e) {
			this.config.url="/pages/enforcement/safeExport?query="+e.query
		},
		components:{
			cSelect,cButton
		}
	}
</script>

<style>

</style>

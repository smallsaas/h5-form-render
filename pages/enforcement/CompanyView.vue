<template>
	<view>
		<dynamic-page
           :API="api"
					 :srvFormData="data"
					 v-if="data"
        />
				<dynamic-page
					:API="listApi"
					:otherSearch="zcOtherSearch"
					listName="自查记录"
				></dynamic-page>
				<dynamic-page
					:API="listApi"
					:otherSearch="fgOtherSearch"
					listName="经营状况上报"
				></dynamic-page>
				<dynamic-page
					:API="listApi"
					:otherSearch="zfOtherSearch"
					listName="执法记录"
				></dynamic-page>
				<dynamic-page
					:API="listApi"
					:otherSearch="zgOtherSearch"
					listName="整改记录"
				></dynamic-page>
				<dynamic-page
					:API="listApi"
					:otherSearch="cfOtherSearch"
					listName="处罚记录"
				></dynamic-page>
				<dynamic-page
					:API="aqyApi"
					:otherSearch="aqyOtherSearch"
					listName="执业人员登记记录"
				></dynamic-page>
<!-- 		<view class="CompanyView_buttonGroup">
			<button class="CompanyView_button zc" @click="handleZC">
				自查记录</button>
			<button class="CompanyView_button fg" @click="handleFG">
				复工记录</button>
		</view> -->
	</view>
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	import {getSearchALL} from '@/common/api.js'
	// let Modeldata;
	// import { Base64 } from '../../utils/tools.js'
	export default {
		components: {
			dynamicPage
		},
		data() {
			return {
				api: globalConfig.formHost + '?id=2004',
				listApi: globalConfig.formHost + '?id=7777615',
				aqyApi: globalConfig.formHost + '?id=9999444',
				data:null,
				dataApi:`${globalConfig.workflowEP}/admin/companyinfo`,
				id:"",
				method:"GET",
				reload:false,
				icon:null,
				url:"/pages/enforcement/search_record",
				pageData:{
					
				},
				zcOtherSearch:{},
				fgOtherSearch:{},
				zfOtherSearch:{},
				zgOtherSearch:{},
				cfOtherSearch:{},
				aqyOtherSearch:{}
			}
		},
		onLoad(e) {
			// let query = Base64.decode(e.query)
			// // console.log(query)
			// ModelData = this.getList(e.id)
			uni.showLoading({
				title:"加载中"
			})
			// console.log(e.id)
			this.getValue(e.id)
			// this.pageData["id"]=e.id
			this.zcOtherSearch = {
				"formCode":"zc",
				"customValues":{
					"companyId":e.id
				}
			}
			this.fgOtherSearch = {
				"formCode":"fg",
				"customValues":{
					"companyId":e.id
				}
			}
			this.zfOtherSearch = {
				"formType":"zf",
				"customValues":{
					"companyId":e.id
				}
			}
			this.zgOtherSearch = {
				"formType":"zg",
				"customValues":{
					"companyId":e.id
				}
			}
			this.cfOtherSearch = {
				"formType":"cf",
				"customValues":{
					"companyId":e.id
				}
			}
			this.aqyOtherSearch = {
				"code":"aqy",
				"listWheres":[{
					"O_CODE":"equal",
					"F_CODE":"companyId",
					"VALUE":e.id
				}]
			}
			// this.data = Modeldata
			// // console.log("md",Modeldata)
			// // console.log("this",this.data)
			// this.getValue(e.id)
		},
		created() {
			this.icon = globalConfig.icon
		},
		methods:{
			// 跳转自查记录
			// handleZC(){
			// 	this.pageData["code"] = "zc"
			// 	uni.navigateTo({
			// 		url:`${this.url}?id=${this.pageData["id"]}&code=${this.pageData["code"]}&name=${this.pageData["name"]}`
			// 	})
			// },
			// handleFG(){
			// 	this.pageData["code"] = "fg"
			// 	uni.navigateTo({
			// 		url:`${this.url}?id=${this.pageData["id"]}&code=${this.pageData["code"]}&name=${this.pageData["name"]}`
			// 	})
			// },
			getValue(id){
				let that = this
				uni.request({
					url:this.dataApi+"/"+id,
					method:this.method,
					header:{
							Authorization: `Bearer ${uni.getStorageSync(globalConfig.tokenStorageKey)}`
					},
					complete(res) {
						// // console.log(res)
						that.data = res.data.data
						that.pageData["name"]=res.data.data.name
						uni.hideLoading()
						// // console.log("data",res.data.data)
					}
				})
			}
			// getValue(id){
			// 	this.reload = true
			// 	this.getList(id)
			// 	this.data = Modeldata
			// 	this.reload = false
			// },
			// async getList(id){
			// 	let res = await getSearchALL(id)
			// 	// // console.log(res)
			// 	let data = res.data
			// 	// console.log("data",res.data)
			// 	Modeldata =  data
			// 	return data
			// }
		}
	}
</script>

<style lang="less">
	.CompanyView_buttonGroup{
		width: 100%;
    display: flex;
    background: #EFEFEF;
    align-items: center;
		.CompanyView_button{
    /* -webkit-box-flex: 1; */
    /* -webkit-flex: 1; */
    /* flex: 1; */
    /* width: 50%; */
    color: #FFF;
    font-weight: bolder;
    border: 1px solid #aaaa;
    padding: 3px 30px;
    margin-bottom: 10px;
    border-radius: 10px;
    background: #00B26A;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
			.CompanyView_image{
				width: 16px;
				height: 16px;
			}
		}
	}
</style>

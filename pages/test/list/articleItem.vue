<template>
    <view>
        <dynamic-list :config="config" v-if="config.loadApi" />
    </view>
</template>

<script>
    import dynamicList from '@/components/dynamic-list/index.vue'
    import { getDynamicListField } from '@/common/api.js'
		import {GetJSON,SetJSON} from '../../../common/JSON.js'
	import _ from 'lodash'
    export default {
        components: { dynamicList },
        data() {
            return {
							config: {},
							debugConfig:{}
            }
        },
				onReady(){
					uni.clearStorage()
				},
        onLoad() {
            let json = uni.getStorageSync("article")
            console.log("json",json)
            let that = this
            let JsonData;
            console.log(json)
            if(json===""||json==={}){
            	this.fetchData()
            }else{
            	JsonData = uni.getStorageSync("article")
            	console.log("JsonData",JsonData)
            	// 设置缓存 form字段
            	SetJSON(JsonData,"articleItem")
            	// 获取form字段缓存
            	this.config=GetJSON("articleItem")
            	// console.log("config配置为",this.config)
            }
        },
        methods: {
            async fetchData () {
            	const res = await getDynamicListField({ id: 1003 })
            	if (_.get(res, 'code') === 200) {
            		let that = this
            		  this.debugConfig = _.cloneDeep(_.get(res, 'data', {}))
            			// this.val = {..._.get(res,'data',{})}
            			// console.log("this",this.debugConfig)
            			uni.setStorage({
            				key:"article",
            				data:that.debugConfig,
            				success() {
            					console.log("success",that.debugConfig)
            					SetJSON(that.debugConfig,"articleItem")
            					that.config=GetJSON("articleItem")
            				},
            				fail(e){
            					console.log("fail",e)
            				}
            			})
            	}
            }
        }
    }
</script>

<style>
    
</style>

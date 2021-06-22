<template>
    <view>
        <dynamic-form
           :config="config"
           @formatSubmitData="formatSubmitData"
           @formatLoadData="formatLoadData"
        />
    </view>
</template>

<script>
    import dynamicForm from '@/components/dynamic-form/index.vue'
    import _ from 'lodash'
    import { getDynamicFormField } from '@/common/api.js'
		import {GetJSON,SetJSON} from '../../../common/JSON.js'
    export default {
        components: {
            dynamicForm
        },
        data() {
            return {
              config: {},
							debugConfig:{}
            }
        },
				onReady(){
					uni.clearStorage()
				},
        onLoad(e) {
					uni.showLoading({ title: 'loading', mask: true })
					let json = uni.getStorageSync("p")
					console.log("json",json)
					let that = this
					let JsonData;
					console.log(json)
					if(json===""||json==={}){
						this.fetchData(e)
					}else{
						JsonData = uni.getStorageSync("p")
						console.log(JsonData)
						// 设置缓存 form字段
						SetJSON(JsonData,"form")
						// 获取form字段缓存
						this.config=GetJSON("form")
						uni.hideLoading()
						// console.log("config配置为",this.config)
					
					}
        },
				created() {
				},
        methods: {
            async fetchData (data = {}) {
                const res = await getDynamicFormField({id: data.id})
                if (_.get(res, 'code') === 200) {
									console.log("res",res)
									let that = this
                    this.debugConfig = { ..._.get(res, 'data', {}) }
										// this.val = {..._.get(res,'data',{})}
										// console.log("this",this.debugConfig)
										uni.setStorage({
											key:"p",
											data:that.debugConfig,
											success() {
												console.log("success",that.debugConfig)
												SetJSON(that.debugConfig,"form")
												that.config=GetJSON("form")
												uni.redirectTo({
													url:"/pages/test/form/form"
												})
											},
											fail(e){
												console.log("fail",e)
											}
										})
                }
            },
            formatSubmitData (data = {}) {
                const userinfos = []
                if (Object.keys(data).length > 0) {
                    for (const i in data) {
                        userinfos.push({
                            [i]: data[i]
                        })
                    }
                }
                return { userinfos }
            },
            formatLoadData (data) {
                let obj = {}
                data.map(x => {
                    obj = {...obj, ...x }
                })
                return obj
            }
        }
    }
</script>

<style>
</style>

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
    
    export default {
        components: {
            dynamicForm
        },
        data() {
            return {
              config: {}
            }
        },
        onLoad(e) {
            this.fetchData(e)
        },
        methods: {
            async fetchData (data = {}) {
                // const res = await getDynamicFormField({id: data.id})
                // if (_.get(res, 'code') === 200) {
                //     this.config = { ..._.get(res, 'data', {}) }
                // }
				this.config = {
					fields: [
						{
						  "__config__": {
						    "label": "用户1",
						    "tag": "el-single-modal-select",  // 单个选
							// defaultValue: '876708082437197830',
						    "required": true,
						    "layout": "colFormItem",
						  },
						  "placeholder": "请选择用户1",
						  "disabled": false,
						  
						  titleField: 'userName',  // 显示名称
						  valueField: 'id', // 取值处
						  "listUrl": "https://api.mock.smallsaas.cn/data?id=1001",
						  "__vModel__": "account1"
						},
						{
						  "__config__": {
						    "label": "用户2",
						    "tag": "el-multiple-modal-select",  // 多个选
						   // "defaultValue": ['0', '876708082437197830', '876708082437197847', '876708082437197845'],
						    "required": true,
						    "layout": "colFormItem",
						  },
						  "placeholder": "请选择用户2",
						  "disabled": false,
						  
						  titleField: 'userName',
						  "listUrl": "https://api.mock.smallsaas.cn/data?id=1001",
						  "__vModel__": "account2"
						},
					]
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

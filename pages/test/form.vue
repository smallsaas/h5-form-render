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
                const res = await getDynamicFormField({id: data.id})
                if (_.get(res, 'code') === 200) {
                    this.config = { ..._.get(res, 'data', {}) }
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

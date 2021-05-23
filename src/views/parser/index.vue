<template>
  <div class="form-container">
    <Parser :config="config" :form-info="formInfo" :srv-form-data="formData" />
  </div>
</template>
<script>
import Parser from '@/components/Parser'
import { urlParam, Base64 } from '@/utils'
// import { config } from '@/config'
import axios from 'axios'
export default {
  name: 'ParserPage',
  components: {
    Parser
  },
  data () {
    return {
      config: {},
      formId: '',
      dataId: '',
      formInfo: {},
      formData: {}
    }
  },
  created () {
    this.formId = urlParam('id')
    this.dataId = urlParam('dataId')
    this.initData()
  },
  methods: {
    initData () {
      if (!this.formId) {
        this.getDebugData()
        return
      }
      const url = `${this.BASE_API}/sport/api/form/manage/define/loadFormInfo.do?id=${this.formId}&dataId=${this.dataId}`
      axios.get(url)
        .then((res) => {
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code === '000000') {
            const data = res.data.data || {}
            this.formInfo = data.form || {}
            const formData = {}
            Object.keys((data.formData || {})).forEach(key => {
              const _key = key.toLowerCase()
              formData[_key] = data.formData[key]
            })
            this.formData = formData
            const jsonDefine = this.formInfo.jsonDefine
            this.config = JSON.parse(Base64.decode(jsonDefine))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getDebugData () {
      axios.get('https://api.mock.smallsaas.cn/form')
        .then((res) => {
          this.config = res.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="less" scoped>
</style>

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
      const url = `/sport/api/form/manage/define/loadFormInfo.do?id=${this.formId}&dataId=${this.dataId}`
      axios.get(url)
        .then((res) => {
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code === '000000') {
            const data = res.data.data || {}
            this.formInfo = data.form || {}
            const jsonDefine = this.formInfo.jsonDefine
            const config = JSON.parse(Base64.decode(jsonDefine))
            this.config = config
            if (!config.loadApi) {
              this.defaultApiHandler(data)
              return
            }
            this.customApiHandler(config)
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
    },
    defaultApiHandler (data) {
      const formData = {}
      Object.keys((data.formData || {})).forEach(key => {
        const _key = key.toLowerCase()
        formData[_key] = data.formData[key]
      })
      this.formData = formData
    },
    customApiHandler (config) {
      axios.get(config.loadApi).then(rs => {
        if (Object.prototype.toString.call(rs.data) === '[object Object]' && rs.data.code === '000000') {
          this.formData = rs.data.data || {}
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="less" scoped>
</style>

<template>
  <div class="form-container">
    <Parser
      :config="config"
      :form-info="formInfo"
      :srv-form-data="formData"
      :if-manual-submit="ifManualSubmit"
      @submit="submit"
      ref="h5FormParserCompRef"
    />
  </div>
</template>
<script>
import Parser from '@/components/Parser'
import { urlParam, Base64 } from '@/utils'
// import { config } from '@/config'
import axios from 'axios'
import cloneDeep from 'lodash.clonedeep'
export default {
  name: 'H5FormRender',
  props: {
    // 表单id
    argFormId: String,
    // 表单数据id
    argDataId: String,
    // 表单数据
    argFormData: {
      type: Object,
      default () {
        return null
      }
    },
    // 是否手动提交
    ifManualSubmit: Boolean
  },
  components: {
    Parser
  },
  data () {
    return {
      config: {},
      formInfo: {},
      formData: {}
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      const formId = this.argFormId || urlParam('id')
      const dataId = this.argDataId || urlParam('dataId')
      if (!formId) {
        this.getDebugData()
        return
      }
      const url = `/sport/api/form/manage/define/loadFormInfo.do?id=${formId}&dataId=${dataId}`
      axios.get(url)
        .then((res) => {
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code === '000000') {
            const data = res.data.data || {}
            this.formInfo = data.form || {}
            const jsonDefine = this.formInfo.jsonDefine
            const config = JSON.parse(Base64.decode(jsonDefine))
            this.config = config

            // 指定表单数据
            if (this.argFormData && JSON.stringify(this.argFormData) !== '{}') {
              this.formData = cloneDeep(this.argFormData)
              return
            }

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
    },
    getFormData () {
      return this.$refs.h5FormParserCompRef.getSubmitData()
    },
    submit (form, cb) {
      this.$emit('submit', form)
      cb()
    }
  }
}
</script>
<style lang="less" scoped>
</style>

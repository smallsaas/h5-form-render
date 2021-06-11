<template>
  <div>
    <div>标题一</div>
    <H5FormRender
      arg-form-id="4"
      :arg-form-data="argFormData"
      :if-manual-submit="false"
      @submit="submit"
      @OnSubmitFormSuc="OnSubmitFormSuc"
      ref="xxx"
    />
  </div>
</template>
<script>
import H5FormRender from '../parser'
export default {
  name: 'Example',
  components: {
    H5FormRender
  },
  data () {
    return {
      argFormData: {
        usr: 'zhangsan',
        pwd: '999',
        age: '19',
        sex: 1
      }
    }
  },
  methods: {
    submit (form, cb) {
      console.log('xx ', form)
      console.log('xx2 ', this.$refs.xxx.getFormData())
      cb()
    },
    OnSubmitFormSuc () {
      console.log('OnSubmitFormSuc ')
    }
  }
}
</script>
<style lang="less" scoped>
</style>

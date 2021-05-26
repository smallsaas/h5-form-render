<template>
  <div>
    <div>标题一</div>
    <H5FormRender
      arg-form-id="fd16da5eaf634d869861f6144f8f3c4f"
      :arg-form-data="argFormData"
      :if-manual-submit="true"
      @submit="submit"
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
    submit (form) {
      console.log('xx ', form)
      console.log('xx2 ', this.$refs.xxx.getFormData())
    }
  }
}
</script>
<style lang="less" scoped>
</style>

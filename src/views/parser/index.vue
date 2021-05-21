<template>
  <div class="form-container">
    <Parser :config="config" />
  </div>
</template>
<script>
import Parser from '@/components/Parser'
// import { config } from '@/config'
import axios from 'axios'
export default {
  name: 'ParserPage',
  components: {
    Parser
  },
  data () {
    return {
      config: {}
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
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

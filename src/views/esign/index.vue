<template>
  <div class="esign-comp pd-t15">
    <div class="esign-box">
      <vue-esign
        ref="esign"
        :width="esignWidth"
        :height="esignHeight"
        :is-crop="isCrop"
        :line-width="lineWidth"
        :line-color="lineColor"
        bg-color="#fff"
      />
    </div>
    <div class="ta-c mg-t10 sign-footer">
      <van-button size="small" @click="close">关闭</van-button>
      <van-button
        size="small"
        type="warning"
        class="mg-l20"
        @click="handleReset"
      >
        清空
      </van-button>
      <van-button
        type="info"
        size="small"
        class="mg-l20"
        @click="handleGenerate"
      >
        确认
      </van-button>
    </div>
  </div>
</template>
<script>
import { uploader } from '@/utils'
export default {
  name: 'Esign',
  data () {
    return {
      lineWidth: 4,
      lineColor: '#000000',
      resultImg: '',
      isCrop: false,
      esignWidth: document.body.clientWidth - 32,
      esignHeight: 200
    }
  },
  methods: {
    handleReset () {
      this.$refs.esign.reset()
    },
    handleGenerate () {
      this.$refs.esign.generate().then(res => {
        this.resultImg = res
        uploader({ name: 'sign.png' }, res).then(rs => {
          this.$emit('signatureSuc', rs)
        })
      }).catch(() => { })
    },
    close () {
      this.$emit('close')
    }
  }

}
</script>
<style lang="less" scoped>
.esign-box {
  width: calc(100% - 32px);
  height: 200px;
  border: 1px solid #ddddde;
  margin: 0 auto;
}
.sign-footer {
  button {
    width: 100px;
  }
}
</style>
<style lang="less">
.esign-box {
  canvas {
    background: #fff !important;
  }
}
</style>

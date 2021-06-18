<template>
  <div class="law-form">
    <div class="pd-f15">基础信息</div>
    <van-cell-group>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        v-model="form.checkTime"
        label="检查时间"
        placeholder="点击选择检查时间"
        @click="showCheckTimePicker = true"
      />
      <van-field
        label="检查单号"
        v-model="form.checkOno"
        placeholder="输入检查单号"
      ></van-field>
      <van-field
        label="检查地点"
        v-model="form.checkAddress"
        placeholder="输入检查地点"
      ></van-field>
    </van-cell-group>
    <div class="pd-f15">检查对象</div>
    <van-cell-group>
      <van-field
        label="统一社会信用代码"
        v-model="form.businessLicense"
        placeholder="输入统一社会信用代码"
      ></van-field>
      <van-field
        label="名称"
        v-model="form.companyName"
        placeholder="输入名称"
      ></van-field>
      <van-field
        label="类型"
        v-model="form.companyType"
        placeholder="输入类型"
      ></van-field>
      <van-field
        label="住所"
        v-model="form.companyAddress"
        placeholder="输入住所"
      ></van-field>
      <van-field
        label="法定代表人"
        v-model="form.companyLegalPerson"
        placeholder="输入法定代表人"
      ></van-field>
      <van-field
        label="联系方式"
        v-model="form.companyPhone"
        placeholder="输入联系方式"
      ></van-field>
    </van-cell-group>

    <div class="pd-f15">检查事项</div>
    <div class="items">
      <div class="item" v-for="(item, index) in checkItemsList" :key="index">
        <div class="item-title">{{ item.title }}</div>
        <van-field label="检查方法">
          <template slot="input">
            <van-radio-group
              class="item-options"
              direction="horizontal"
              v-model="form[item.way.__vModel__]"
            >
              <van-radio
                :name="opt.value"
                v-for="(opt, oi) in item.way.options"
                :key="oi"
              >
                {{ opt.label }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field label="检查结果">
          <template slot="input">
            <van-radio-group
              class="item-options"
              direction="horizontal"
              v-model="form[item.result.__vModel__]"
            >
              <van-radio
                :name="opt.value"
                v-for="(opt, oi) in item.result.options"
                :key="oi"
              >
                {{ opt.label }}
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </div>
    </div>

    <div class="pd-f15">检查结论</div>
    <van-cell-group>
      <van-field label="检查结果">
        <template slot="input">
          <van-radio-group direction="horizontal" v-model="form.checkResult">
            <van-radio name="合格">合格</van-radio>
            <van-radio name="不合格">不合格</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        label="检查人意见"
        type="textarea"
        v-model="form.checkSuggest"
        placeholder="输入检查人意见"
      ></van-field>
    </van-cell-group>

    <div class="pd-f15">检查人</div>
    <van-cell-group>
      <van-field
        label="执法人员1"
        v-model="form.lawPerson1"
        placeholder="输入执法人员1"
      ></van-field>
      <van-field
        label="证件号1"
        v-model="form.lawPerson1Id"
        placeholder="输入证件号1"
      ></van-field>
      <van-field
        label="执法人员2"
        v-model="form.lawPerson2"
        placeholder="输入执法人员2"
      ></van-field>
      <van-field
        label="证件号2"
        v-model="form.lawPerson2Id"
        placeholder="输入证件号2"
      ></van-field>
      <van-field
        label="记录人"
        v-model="form.recorder"
        placeholder="输入记录人"
      ></van-field>
      <van-field
        label="被检查人"
        v-model="form.examinee"
        placeholder="输入被检查人"
      ></van-field>
      <van-field
        label="备注"
        type="textarea"
        v-model="form.remark"
        placeholder="输入备注"
      ></van-field>
    </van-cell-group>
    <div class="mg-t15 pd-l20 pd-r20 pd-b20">
      <van-button round block type="info" :loading="loading" @click="onSubmit">
        提交
      </van-button>
    </div>
    <!-- 选择检查时间 -->
    <van-popup v-model="showCheckTimePicker" position="bottom">
      <van-datetime-picker
        @confirm="onCheckTimeConfirm"
        @cancel="showCheckTimePicker = false"
      />
    </van-popup>
  </div>
</template>
<script>
import { formatTime } from '../utils'
import axios from 'axios'
const SUNMIT_API = '/api.page.design.form/submitFormData'
export default {
  name: 'LawForm',
  props: {
    config: {
      type: Object,
      default () {
        return {}
      }
    },
    formInfo: {
      type: Object,
      default () {
        return {}
      }
    },
    srvFormData: {
      type: Object,
      default () {
        return {}
      }
    },
    ifManualSubmit: Boolean
  },
  data () {
    return {
      showCheckTimePicker: false,
      loading: false,
      form: {
        checkTime: '', // 检查时间
        checkOno: '', // 检查单号
        businessLicense: '', // 统一社会信用代码
        companyName: '', // 公司名称
        companyType: '', // 公司类型
        companyAddress: '', // 公司地址
        companyLegalPerson: '', // 公司法人
        companyPhone: '', // 公司联系方式
        checkAddress: '', // 检查地点
        checkResult: '', // 检查结论
        checkSuggest: '', // 检查人意见
        lawPerson1: '', // 执法人1
        lawPerson1Id: '', // 执法人1证件号
        lawPerson2: '', // 执法人2
        lawPerson2Id: '', // 执法人2证件号
        recorder: '', // 记录人
        examinee: '', // 被检查人
        remark: '', // 备注
      }
    }
  },
  computed: {
    lawFormConfig () {
      return this.config.lawFormConfig || {}
    },
    checkItemsList () {
      return this.lawFormConfig.checkItemsList || []
    }
  },
  watch: {
    config: {
      immediate: true,
      deep: true,
      handler () {
        const checkItemsList = (this.config.lawFormConfig || {}).checkItemsList || []
        for (let i = 0; i < checkItemsList.length; i++) {
          const item = checkItemsList[i]
          this.$set(this.form, item.way.__vModel__, this.srvFormData[item.way.__vModel__])
          this.$set(this.form, item.result.__vModel__, this.srvFormData[item.result.__vModel__])
        }
      }
    },
    srvFormData: {
      immediate: true,
      deep: true,
      handler () {
        Object.keys(this.form).forEach(key => {
          this.form[key] = this.srvFormData[key]
        })
      }
    }
  },
  methods: {
    onCheckTimeConfirm (e) {
      this.showCheckTimePicker = false
      this.form.checkTime = formatTime(new Date(e).getTime(), 'YYYY-MM-DD hh:mm')
    },
    getSubmitData () {
      return this.form
    },
    closeLoading () {
      this.loading = false
    },
    onSubmit () {
      if (this.ifManualSubmit) {
        this.loading = true
        this.$emit('submit', this.getSubmitData(), this.closeLoading)
        return
      }
      if (!this.config.saveApi) {
        this.defaultSubmitFn()
        return
      }
      this.customSubmitFn()
    },
    // 默认的提交行为
    defaultSubmitFn () {
      const params = {
        code: this.formInfo.code,
        version: this.formInfo.version,
        data: this.getSubmitData(),
        dataId: this.srvFormData.id
      }
      this.submitFn(SUNMIT_API, params)
    },
    // 自定义接口的提交行为
    customSubmitFn () {
      const params = {
        id: this.srvFormData.id,
        ...this.getSubmitData()
      }
      this.submitFn(this.config.saveApi, params)
    },
    submitFn (url, params) {
      this.loading = true
      axios.post(url, params)
        .then((res) => {
          this.loading = false
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code.indexOf('00000') >= 0) {
            this.$toast('提交成功')
            // this.$f.toPage()
            this.$emit('OnSubmitFormSuc')
          } else {
            this.$toast('提交失败')
          }
        })
        .catch(() => {
          this.$toast('提交失败')
          this.loading = false
        })
    }
  }
}
</script>
<style lang="less" scoped>
.items {
  .item {
  }
  .item-title {
    line-height: 22px;
    padding: 10px 16px 0;
    background: #fff;
  }
  .item-options {
    background: #fff;
    padding: 0 16px 10px;
  }
}
</style>

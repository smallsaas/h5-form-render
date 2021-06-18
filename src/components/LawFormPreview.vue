<template>
  <div class="law-form-detail">
    <div class="pd-f15">基础信息</div>
    <van-cell-group>
      <van-cell title="检查时间" :value="srvFormData.checkTime" />
      <van-cell title="检查单号" :value="srvFormData.checkOno" />
      <van-cell title="检查地点" :value="srvFormData.checkAddress" />
    </van-cell-group>
    <div class="pd-f15">检查对象</div>
    <van-cell-group>
      <van-cell title="统一社会信用代码" :value="srvFormData.businessLicense" />
      <van-cell title="名称" :value="srvFormData.companyName" />
      <van-cell title="类型" :value="srvFormData.companyType" />
      <van-cell title="住所" :value="srvFormData.companyAddress" />
      <van-cell title="法定代表人" :value="srvFormData.companyLegalPerson" />
      <van-cell title="联系方式" :value="srvFormData.companyPhone" />
    </van-cell-group>
    <div class="pd-f15">检查事项</div>
    <div class="items">
      <div class="item" v-for="(item, index) in checkItemsList" :key="index">
        <div class="item-title">{{ item.title }}</div>
        <van-cell title="检查方法" :value="srvFormData[item.way.__vModel__]" />
        <van-cell
          title="检查结果"
          :value="srvFormData[item.result.__vModel__]"
        />
      </div>
    </div>
    <div class="pd-f15">检查结论</div>
    <van-cell-group>
      <van-cell title="检查结果" :value="srvFormData.checkResult" />
      <van-cell title="检查人意见" :value="srvFormData.checkSuggest" />
    </van-cell-group>
    <div class="pd-f15">检查人</div>
    <van-cell-group>
      <van-cell title="执法人员1" :value="srvFormData.lawPerson1" />
      <van-cell title="证件号1" :value="srvFormData.lawPerson1Id" />
      <van-cell title="执法人员2" :value="srvFormData.lawPerson2" />
      <van-cell title="证件号2" :value="srvFormData.lawPerson2Id" />
      <van-cell title="记录人" :value="srvFormData.recorder" />
      <van-cell title="被检查人" :value="srvFormData.examinee" />
    </van-cell-group>
    <van-cell title="备注" :value="srvFormData.remark" />
  </div>
</template>
<script>
export default {
  name: 'LawFormDetail',
  props: {
    config: {
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
  },
  data () {
    return {}
  },
  computed: {
    lawFormConfig () {
      return this.config.lawFormConfig || {}
    },
    checkItemsList () {
      return this.lawFormConfig.checkItemsList || []
    }
  },
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

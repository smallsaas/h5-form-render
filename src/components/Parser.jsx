import cloneDeep from 'lodash.clonedeep'
import { formatTime } from '../utils'
import { Toast } from 'vant'
import axios from 'axios'
import esign from '../views/esign'
const SUNMIT_API = '/api.page.design.form/submitFormData'
let signatureKey = ''
export default {
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    },
    formInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    srvFormData: {
      type: Object,
      default() {
        return {}
      }
    },
    ifManualSubmit: Boolean,
    token: String
  },
  components: {
    esign
  },
  data() {
    return {
      form: {},
      showPicker: {},
      select: {},
      fields: [],
      loading: false,
      showSignature: false
    }
  },
  render() {
    return this.getRenderDom()
  },
  methods: {
    getEleItem(item) {
      let jsx
      if (item.__config__.layout === 'colFormItem') {
        jsx = this.colFormItemHandler(item)
      } else {
        jsx = this.rowFormItemHandler(item)
      }
      return jsx
    },
    colFormItemHandler(item) {
      let jsx
      const __config__ = item.__config__
      const __slot__ = item.__slot__
      const rules = []
      if (__config__.required && __config__.tag !== 'el-switch') {
        rules.push({
          required: true,
          message: item.placeholder || '不能为空'
        })
      }
      switch (__config__.tag) {
        case 'el-input':
          if (item.hidden) {
            jsx = ''
          } else {
            jsx = <van-field
              label={__config__.label}
              type={__config__.tagIcon === 'input' ? 'text' : __config__.tagIcon}
              required={__config__.required}
              value={this.form[item.__vModel__] || __config__.defaultValue}
              onInput={(e) => this.handleSimpleSetValue(e, item)}
              placeholder={item.placeholder}
              clearable={item.clearable}
              left-icon={item['prefix-icon']}
              right-icon={item['suffix-icon']}
              rows={(item.autosize || {}).maxRows}
              autosize
              autocomplete="off"
              onClear={(e) => this.clearField(e, item)}
              maxlength={item.maxlength}
              show-word-limit={item['show-word-limit']}
              readonly={item.readonly}
              disabled={item.disabled}
              style={item.style}
              rules={rules}
            />
          }
          break
        case 'el-input-number':
          jsx = <van-field
            name="stepper"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-stepper
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
                onChange={(e) => this.handleSimpleSetValue(e, item)}
              />
            </template>
          </van-field>
          break
        case 'el-select':
          // eslint-disable-next-line no-case-declarations
          const optionLabelMap = {}
          for (let i = 0; i < __slot__.options.length; i++) {
            optionLabelMap[__slot__.options[i].value] = __slot__.options[i].label
          }
          jsx = <div>
            <van-field
              readonly
              required={__config__.required}
              disabled={item.disabled}
              style={item.style}
              placeholder={item.placeholder}
              clickable
              name="picker"
              label={__config__.label}
              value={this.select[item.__vModel__] || optionLabelMap[__config__.defaultValue]}
              onClick={() => this.handleOpenPicker(item)}
              rules={rules}
            />
            <van-popup v-model={this.showPicker[item.__vModel__]} position="bottom">
              <van-picker
                show-toolbar
                columns={__slot__.options}
                value-key="label"
                onConfirm={(e) => this.handlePickerConfirm(e, item)}
                onCancel={() => this.handlePickerCancel(item)}
              />
            </van-popup>
          </div>
          break
        case 'el-radio-group':
          jsx = <van-field name="radio"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-radio-group
                direction="horizontal"
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || +__config__.defaultValue}
              >
                {
                  __slot__.options.map(v => {
                    return <van-radio
                      name={v.value}
                      class={__slot__.options.length ? 'mg-b5' : ''}
                      onClick={() => this.handleSimpleSetValue(v.value, item)}
                    >{v.label}</van-radio>
                  })
                }
              </van-radio-group>
            </template>
          </van-field>
          break
        case 'el-checkbox-group':
          jsx = <van-field
            name="checkboxGroup"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-checkbox-group
                direction="horizontal"
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
              >
                {
                  __slot__.options.map(v => {
                    return <van-checkbox
                      shape="square"
                      name={v.value}
                      onClick={() => this.handleCheckbox(v, item)}
                      class={__slot__.options.length ? 'mg-b5' : ''}
                    >{v.label}</van-checkbox>
                  })
                }
              </van-checkbox-group>
            </template>
          </van-field>
          break
        case 'el-switch':
          jsx = <van-field
            name="switch"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-switch
                size="20"
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
                onClick={() => this.handleSwitch(item)}
              />
            </template>
          </van-field>
          break
        case 'el-slider':
          jsx = <van-field
            name="slider"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-slider
                size="20"
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
                onChange={(e) => this.handleSimpleSetValue(e, item)}
              />
            </template>
          </van-field>
          break
        case 'el-time-picker':
          jsx = this.getDateJsx(item, __config__, rules)
          break
        case 'el-date-picker':
          jsx = this.getDateJsx(item, __config__, rules)
          break
        case 'el-rate':
          jsx = <van-field
            name="rate"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              <van-rate
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
                onChange={(e) => this.handleSimpleSetValue(e, item)}
              />
            </template>
          </van-field>
          break
        case 'el-upload':
          // eslint-disable-next-line no-case-declarations
          let uploadJsx = <van-uploader
            readonly={item.readonly}
            disabled={item.disabled}
            value={this.form[item.__vModel__] || __config__.defaultValue}
            beforeRead={(e) => this.handleUploader(e, item)}
          />

          if (item['list-type'] === 'attachment') {
            uploadJsx = <div style="width: 100%;">
              <van-uploader>
                <van-button type="primary" class="upload-btn">上传文件</van-button>
              </van-uploader>
              <div class="file-list">
                <div class="flex-space-between">
                  <div>第三方客户端.pdf</div>
                  <van-icon name="close" />
                </div>
              </div>
            </div>
          }

          jsx = <van-field
            name="uploader"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
            rules={rules}
          >
            <template slot="input">
              {uploadJsx}
            </template>
          </van-field>
          break
        case 'signature':
          signatureKey = item.__vModel__
          jsx = <van-cell
            class="signature-cell"
            title={__config__.label}
            value={this.form[item.__vModel__] || __config__.defaultValue}
            is-link
            onClick={(e) => this.openSignatureDialog(e, item)}
            placeholder={item.placeholder}
          >
            <img style="width: 100%;" src={this.form[item.__vModel__]} alt="" />
          </van-cell>
          break
        default:
          break
      }
      return jsx
    },
    openSignatureDialog() {
      this.showSignature = true
    },
    closeSignatureDialog() {
      this.showSignature = false
    },
    signatureSuc(url) {
      this.showSignature = false
      this.form[signatureKey] = url
    },
    rowFormItemHandler(item) {
      const children = item.__config__.children
      return <div>
        <div class="pd-f15">{item.__config__.componentName}</div>
        {
          children.map((ele) => {
            return this.getEleItem(ele)
          })
        }
      </div>
    },
    getDateJsx(item, __config__, rules) {
      const minDate = new Date(1949, 0, 1)
      const jsx = <div>
        <van-field
          readonly
          required={__config__.required}
          disabled={item.disabled}
          style={item.style}
          placeholder={item.placeholder}
          clickable
          name="datetimePicker"
          label={__config__.label}
          value={this.form[item.__vModel__] || __config__.defaultValue}
          onClick={() => this.handleOpenPicker(item)}
          rules={rules}
        />
        <van-popup v-model={this.showPicker[item.__vModel__]} position="bottom">
          <van-datetime-picker
            type={__config__.tagIcon}
            minDate={minDate}
            onConfirm={(e) => this.handleDatePickerConfrim(e, item)}
            onCancel={() => this.handlePickerCancel(item)}
          />
        </van-popup>
      </div>
      return jsx
    },
    getRenderDom() {
      const fields = this.initFormData(this.config.fields || [])
      this.fields = fields
      return <div>
        <van-form onSubmit={this.onSubmit} label-width="5.2em">
          {
            fields.map((item) => {
              return this.getEleItem(item)
            })
          }
          <div class="mg-t15 pd-l20 pd-r20 pd-b20">
            <van-button round block type="info" loading={this.loading} native-type="submit">提交</van-button>
          </div>
        </van-form>

        <van-popup v-model={this.showSignature} position="bottom">
          <esign class="mg-b20" onSignatureSuc={this.signatureSuc} onClose={this.closeSignatureDialog}></esign>
        </van-popup>
      </div>
    },
    handleSimpleSetValue(e, item) {
      this.delDefaultValue(item)
      this.form[item.__vModel__] = e
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handleOpenPicker(item) {
      this.showPicker[item.__vModel__] = true
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handlePickerCancel(item) {
      this.showPicker[item.__vModel__] = false
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handlePickerConfirm(e, item) {
      this.delDefaultValue(item)
      this.showPicker[item.__vModel__] = false
      this.form[item.__vModel__] = e.value
      this.select[item.__vModel__] = e.label
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handleCheckbox(e, item) {
      e.checked = !e.checked
      let list = []
      if (this.form[item.__vModel__] && this.form[item.__vModel__].length) {
        list = cloneDeep(this.form[item.__vModel__])
      }
      if (e.checked) {
        list.push(e.value)
      } else {
        const index = list.indexOf(e.value)
        list.splice(index, 1)
      }
      this.form[item.__vModel__] = list
      this.delDefaultValue(item, [])
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handleSwitch(item) {
      this.delDefaultValue(item, false)
      this.form[item.__vModel__] = !this.form[item.__vModel__]
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handleDatePickerConfrim(e, item) {
      if (item.__config__.tagIcon === 'time') {
        this.form[item.__vModel__] = e
      } else {
        this.form[item.__vModel__] = formatTime(new Date(e).getTime(), 'YYYY-MM-DD')
      }
      this.delDefaultValue(item)
      this.showPicker[item.__vModel__] = false
      this.$nextTick(() => {
        this.$forceUpdate()
      })
      console.log('debug form ', this.form)
    },
    handleUploader(e, item) {

    },
    initFormData(fields = []) {
      const list = fields.map(item => {
        if (item.__config__.layout === 'rowFormItem') {
          for (let j = 0; j < item.__config__.children.length; j++) {
            const subtIem = cloneDeep(item.__config__.children[j])
            let srvValue = this.srvFormData[subtIem.__vModel__]
            if (['el-select', 'el-radio-group', 'el-checkbox-group'].indexOf(subtIem.__config__.tag) >= 0) {
              for (let i = 0; i < subtIem.__slot__.options.length; i++) {
                if ((srvValue + '') === (subtIem.__slot__.options[i].value + '')) {
                  srvValue = subtIem.__slot__.options[i].label
                }
              }
            }
            const value = srvValue || item.__config__.defaultValue
            subtIem.__config__.defaultValue = value
            item.__config__.children[j] = subtIem
          }
        } else {
          const value = this.srvFormData[item.__vModel__] || item.__config__.defaultValue
          item.__config__.defaultValue = value
        }
        return item
      })
      return list
    },
    clearField(e, item) {
      this.delDefaultValue(item)
      this.form[item.__vModel__] = ''
    },
    delDefaultValue(item, arg) {
      item.__config__.defaultValue = arg || ''
    },
    getSubmitData() {
      const form = {}
      for (let i = 0; i < this.fields.length; i++) {
        const item = this.fields[i]
        if (item.__config__.layout === 'rowFormItem') {
          for (let j = 0; j < item.__config__.children.length; j++) {
            const subtIem = item.__config__.children[j]
            form[subtIem.__vModel__] = this.form[subtIem.__vModel__] || subtIem.__config__.defaultValue
          }
        } else {
          form[item.__vModel__] = this.form[item.__vModel__] || item.__config__.defaultValue
        }
      }
      return form
    },
    closeLoading() {
      this.loading = false
    },
    onSubmit() {
      // console.log('form data: ', this.getSubmitData())
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
    defaultSubmitFn() {
      const params = {
        code: this.formInfo.code,
        version: this.formInfo.version,
        data: this.getSubmitData(),
        dataId: this.srvFormData.id
      }
      this.submitFn(SUNMIT_API, params)
    },
    // 自定义接口的提交行为
    customSubmitFn() {
      const params = {
        id: this.srvFormData.id,
        ...this.getSubmitData()
      }
      this.submitFn(this.config.saveApi, params)
    },
    submitFn(url, params) {
      this.loading = true
      axios.post(url, params, {
        headers: {
          accessToken: this.token
        }
      })
        .then((res) => {
          this.loading = false
          if (Object.prototype.toString.call(res.data) === '[object Object]' && res.data.code.indexOf('00000') >= 0) {
            Toast('提交成功')
            this.$emit('OnSubmitFormSuc')
          } else {
            Toast('提交失败')
          }
        })
        .catch(() => {
          Toast('提交失败')
          this.loading = false
        })
    }
  }
}

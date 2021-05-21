import cloneDeep from 'lodash.clonedeep'
import { formatTime } from '@/utils'
export default {
  props: {
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      form: {},
      showPicker: {},
      select: {},
    }
  },
  render() {
    // this.initFormData()
    return this.getRenderDom()
  },
  methods: {
    // todo
    initFormData() {
      const fields = this.config.fields
      for (let i = 0; i < fields.length; i++) {
        const item = fields[i]
        const __config__ = item.__config__
        // this.form[item.__vModel__] = __config__.defaultValue
        this.$set(this.form, item.__vModel__, __config__.defaultValue)
      }
    },
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
      switch (__config__.tag) {
        case 'el-input':
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
            maxlength={item.maxlength}
            show-word-limit={item['show-word-limit']}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
          />
          break
        case 'el-input-number':
          jsx = <van-field
            name="stepper"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
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
          >
            <template slot="input">
              <van-radio-group
                direction="horizontal"
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
              >
                {
                  __slot__.options.map(v => {
                    return <van-radio
                      name={v.value}
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
          jsx = this.getDateJsx(item, __config__)
          break
        case 'el-date-picker':
          jsx = this.getDateJsx(item, __config__)
          break
        case 'el-rate':
          jsx = <van-field
            name="rate"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
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
          jsx = <van-field
            name="uploader"
            label={__config__.label}
            required={__config__.required}
            readonly={item.readonly}
            disabled={item.disabled}
            style={item.style}
          >
            <template slot="input">
              <van-uploader
                readonly={item.readonly}
                disabled={item.disabled}
                value={this.form[item.__vModel__] || __config__.defaultValue}
                beforeRead={(e) => this.handleUploader(e, item)}
              />
            </template>
          </van-field>
          break
        default:
          break
      }
      return jsx
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
    getDateJsx(item, __config__) {
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
        />
        <van-popup v-model={this.showPicker[item.__vModel__]} position="bottom">
          <van-datetime-picker
            type={__config__.tagIcon}
            onConfirm={(e) => this.handleDatePickerConfrim(e, item)}
            onCancel={() => this.handlePickerCancel(item)}
          />
        </van-popup>
      </div>
      return jsx
    },
    getRenderDom() {
      const fields = this.config.fields || []
      return <van-form onSubmit={this.onSubmit} label-width="5.2em">
        {
          fields.map((item) => {
            return this.getEleItem(item)
          })
        }
        <div class="mg-t15 pd-x20">
          <van-button round block type="info" native-type="submit">提交</van-button>
        </div>
      </van-form>
    },
    handleSimpleSetValue(e, item) {
      this.form[item.__vModel__] = e
      this.$nextTick(() => {
        this.$forceUpdate()
      })
      console.log('debug form ', this.form)
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
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    handleSwitch(item) {
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
      console.log('debug e ', new Date(e).getTime())

      this.showPicker[item.__vModel__] = false

      this.$nextTick(() => {
        this.$forceUpdate()
      })
      console.log('debug form ', this.form)
    },
    handleUploader(e, item) {

    },
    onSubmit() {
      console.log('form data: ', this.form)
    }
  }
}

import clonedeep from 'lodash.clonedeep'
export default {
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
  render() {
    return this.getRenderDom()
  },
  methods: {
    getRenderDom() {
      const fields = this.initFormData(this.config.fields || [])
      return <div>
        {
          fields.map((item) => {
            return this.getEleItem(item)
          })
        }
      </div>
    },
    initFormData(fields = []) {
      const list = fields.map(item => {
        if (item.__config__.layout === 'rowFormItem') {
          for (let j = 0; j < item.__config__.children.length; j++) {
            const subtIem = clonedeep(item.__config__.children[j])
            let srvValue = this.srvFormData[subtIem.__vModel__]
            if (['el-select', 'el-radio-group', 'el-checkbox-group'].indexOf(subtIem.__config__.tag) >= 0) {
              for (let i = 0; i < subtIem.__slot__.options.length; i++) {
                if (+srvValue === subtIem.__slot__.options[i].value) {
                  srvValue = subtIem.__slot__.options[i].label
                }
              }
            }
            const value = srvValue || item.__config__.defaultValue
            subtIem.__config__.defaultValue = value
            item.__config__.children[j] = subtIem
          }
        } else {
          let srvValue = this.srvFormData[item.__vModel__]
          if (['el-select', 'el-radio-group', 'el-checkbox-group'].indexOf(item.__config__.tag) >= 0) {
            for (let i = 0; i < item.__slot__.options.length; i++) {
              if (+srvValue === item.__slot__.options[i].value) {
                srvValue = item.__slot__.options[i].label
              }
            }
          }
          const value = srvValue || item.__config__.defaultValue
          item.__config__.defaultValue = value
        }
        return item
      })
      return list
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
      const __config__ = item.__config__
      const jsx = <van-cell
        title={__config__.label}
        value={__config__.defaultValue}
      />
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
    getSelectOptTxt() {

    }
  }
}

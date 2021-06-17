export const config = {
  fields: [{
    __config__: {
      label: '单行文本',
      labelWidth: null,
      showLabel: true,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'input',
      required: true,
      layout: 'colFormItem',
      span: 23,
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      regList: [],
      formId: 105,
      renderKey: 1621502980993
    },
    __slot__: {
      prepend: '',
      append: ''
    },
    placeholder: '请输入单行文本',
    style: {
      width: '100%'
    },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false,
    __vModel__: 'field105'
  }, {
    __config__: {
      label: '密码',
      showLabel: true,
      labelWidth: null,
      changeTag: true,
      tag: 'el-input',
      tagIcon: 'password',
      layout: 'colFormItem',
      span: 23,
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      formId: 106,
      renderKey: 1621502982060
    },
    __slot__: {
      prepend: '',
      append: ''
    },
    placeholder: '请输入密码',
    'show-password': true,
    style: {
      width: '100%'
    },
    clearable: true,
    'prefix-icon': '',
    'suffix-icon': '',
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false,
    __vModel__: 'field106'
  }, {
    __config__: {
      label: '计数器',
      showLabel: true,
      changeTag: true,
      labelWidth: null,
      tag: 'el-input-number',
      tagIcon: 'number',
      span: 23,
      layout: 'colFormItem',
      required: true,
      regList: [],
      document: 'https://element.eleme.cn/#/zh-CN/component/input-number',
      formId: 108,
      renderKey: 1621502990477
    },
    placeholder: '计数器',
    step: 1,
    'step-strictly': false,
    'controls-position': '',
    disabled: false,
    __vModel__: 'field108'
  }, {
    __config__: {
      label: '下拉选择',
      showLabel: true,
      labelWidth: null,
      tag: 'el-select',
      tagIcon: 'select',
      layout: 'colFormItem',
      span: 23,
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/select',
      formId: 109,
      renderKey: 1621502996327
    },
    __slot__: {
      options: [{
        label: '选项一',
        value: 1
      }, {
        label: '选项二',
        value: 2
      }]
    },
    placeholder: '请选择下拉选择',
    style: {
      width: '100%'
    },
    clearable: true,
    disabled: false,
    filterable: false,
    multiple: false,
    __vModel__: 'field109'
  }, {
    __config__: {
      label: '日期选择',
      tag: 'el-date-picker',
      tagIcon: 'date',
      defaultValue: null,
      showLabel: true,
      labelWidth: null,
      span: 23,
      layout: 'colFormItem',
      required: true,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/date-picker',
      formId: 110,
      renderKey: 1621503003348
    },
    placeholder: '请选择日期选择',
    type: 'date',
    style: {
      width: '100%'
    },
    disabled: false,
    clearable: true,
    format: 'yyyy-MM-dd',
    'value-format': 'yyyy-MM-dd',
    readonly: false,
    __vModel__: 'field110'
  }, {
    __config__: {
      layout: 'rowFormItem',
      tagIcon: 'row',
      layoutTree: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/layout#row-attributes',
      span: 23,
      formId: 101,
      renderKey: 1621502082492,
      componentName: '基本信息',
      children: [{
        __config__: {
          label: '单行文本',
          labelWidth: null,
          showLabel: true,
          changeTag: true,
          tag: 'el-input',
          tagIcon: 'input',
          required: true,
          layout: 'colFormItem',
          span: 23,
          document: 'https://element.eleme.cn/#/zh-CN/component/input',
          regList: [],
          formId: 103,
          renderKey: 1621502084806
        },
        __slot__: {
          prepend: '',
          append: ''
        },
        placeholder: '请输入单行文本',
        style: {
          width: '100%'
        },
        clearable: true,
        'prefix-icon': '',
        'suffix-icon': '',
        maxlength: null,
        'show-word-limit': false,
        readonly: false,
        disabled: false,
        __vModel__: 'field103'
      }, {
        __config__: {
          label: '密码',
          showLabel: true,
          labelWidth: null,
          changeTag: true,
          tag: 'el-input',
          tagIcon: 'password',
          layout: 'colFormItem',
          span: 23,
          required: true,
          regList: [],
          document: 'https://element.eleme.cn/#/zh-CN/component/input',
          formId: 104,
          renderKey: 1621502085743
        },
        __slot__: {
          prepend: '',
          append: ''
        },
        placeholder: '请输入密码',
        'show-password': true,
        style: {
          width: '100%'
        },
        clearable: true,
        'prefix-icon': '',
        'suffix-icon': '',
        maxlength: null,
        'show-word-limit': false,
        readonly: false,
        disabled: false,
        __vModel__: 'field104'
      }]
    },
    type: 'default',
    justify: 'start',
    align: 'top'
  },
  {
    __config__: {
      label: '多行文本',
      labelWidth: null,
      showLabel: true,
      tag: 'el-input',
      tagIcon: 'textarea',
      required: true,
      layout: 'colFormItem',
      span: 23,
      regList: [],
      changeTag: true,
      document: 'https://element.eleme.cn/#/zh-CN/component/input',
      formId: 107,
      renderKey: 1621502984890
    },
    type: 'textarea',
    placeholder: '请输入多行文本',
    autosize: {
      minRows: 4,
      maxRows: 4
    },
    style: {
      width: '100%'
    },
    maxlength: null,
    'show-word-limit': false,
    readonly: false,
    disabled: false,
    __vModel__: 'field107'
  }],
  formRef: 'elForm',
  formModel: 'formData',
  size: 'medium',
  labelPosition: 'left',
  labelWidth: 100,
  formRules: 'rules',
  gutter: 0,
  disabled: false,
  span: 23,
  formBtns: true,
  unFocusedComponentBorder: false
}

<template>
    <view :class="[`base_select_container ${param.inputBlock ? 'van_field_input_block' : ''}`]">
        <van-field
          readonly
          :required="param.required"
          :disabled="param.disabled"
          :style="param.style"
          :placeholder="param.placeholder"
          clickable
          name="picker"
          :label="param.label"
          :value="handleParseValue(param.value)"
          :error="param.error"
          :error-message="param['error-message'] || ''"
          label-class="van_field_label"
          @click-input="handleClick"
        />
        <van-popup :show="showPick" position="bottom" @click-overlay="handlePickerCancel" custom-style="background-color: #fff;z-index: 999">
          <van-picker
            show-toolbar
            :columns="param.columns"
            value-key="label"
            @confirm="handlePickerConfirm"
            @cancel="handlePickerCancel"
          />
        </van-popup>
    </view>
</template>

<script>
    import _ from 'lodash'
	import { getAdmUsers } from '@/common/api.js'
    export default {
        props: {
            param: {
                type: Object,
                default: function() {
                    return {
                        inputBlock: false,
                        required: false,
                        disabled: false,
                        error: false,
                        "error-message": "",
                        style: "",
						api: ""
                    }
                }
            }
        },
        data () {
          return {
              showPick: false,
			  columns: []
          } 
        },
        mounted() {
				console.log('param = ', this.param)
			if(_.has(this.param, 'api') && _.get(this.param, 'api', "").length > 0){
				this.initData()
			}else{
				console.log('本地数据')
				this.handleInitData()
			}
        },
        methods: {
            handleParseValue (value) {
              if (value) {
                  const list =  _.get(this.param, 'columns', [])
                  return _.get(list.find(x => x.value === value), 'label', '')
              }  
              return ''
            },
            handleInitData () {
                if (_.has(this.param, 'columns') && _.get(this.param, 'columns', []).length > 0) {
                    this.param.columns.map(x => {
                        if (!_.has(x, 'text')) {
                            x.text = _.get(x, 'label', '')
                        }
                    })
                }
            },
            handleClick () {
               this.showPick = true
            },
            handlePickerCancel () {
                this.showPick = false
            },
            handlePickerConfirm (e) {
                const value = _.get(e, 'detail.value.value', '')
                this.$emit('confirm', value)
                this.showPick = false
            },
			async initData(){
				const res = await getAdmUsers(this.param.api, {})
				if (_.get(res, 'code') === 200) {
					// this.userInfo = { ..._.get(res, 'data', {}) };
					const data = _.get(res, 'data', {})
					console.log('data = ', data)
				}
			},
        }
    }
</script>

<style lang="less">
    @import "../dynamic-form/common.less";
    .base_select_container {}
</style>

<template>
    <view :class="[`base_checkbox_container ${param.inputBlock ? 'van_field_input_block' : ''}`]">
        <van-field
          name="checkboxGroup"
          :label="param.label"
          :required="param.required"
          :readonly="param.readonly"
          :disabled="param.disabled"
          :style="param.style"
          :error="param.error"
          :error-message="param.error ? param['error-message'] ? param['error-message'] : '' : ''"
          label-class="van_field_label"
        >
          <template slot="input">
            <van-checkbox-group
              direction="horizontal"
              :readonly="param.readonly"
              :disabled="param.disabled"
              :value="param.value"
              @change="handleChange"
            >
              <view v-if="param.options && param.options.length > 0" class="checkbox_options">
                  <van-checkbox
                    v-for="(item, index) in param.options"
                    :key="index"
                    shape="square"
                    :name="item.value"
                    @click="handleClick"
                    style="margin: 10rpx 30rpx 10rpx 0"
                    label-class="checkbox_options_label"
                  >{{item.label}}
                  </van-checkbox>
              </view>
            </van-checkbox-group>
          </template>
        </van-field>
    </view>
</template>

<script>
    export default {
        props: {
            param: {
                type: Object,
                default: function() {
                    return { 
                        inputBlock: false,
                        checked: false,
                        required: false,
                        readonly: false,
                        error: false,
                        "error-message": "",
                        style: ""
                    }
                }
            }
        },
        methods: {
            handleChange (e) {
               this.$emit("change", e.detail)
            }
        }
    }
</script>

<style lang="less">
    @import "./common.less";
    .base_checkbox_container {
      .checkbox_options {
          display: flex;
          flex-wrap: wrap;
          .checkbox_options_label {
             margin-left: 10rpx;
          }
      }  
    }
</style>

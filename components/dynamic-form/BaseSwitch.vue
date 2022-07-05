<template>
    <view :class="[`base_switch_container ${param.inputBlock ? 'van_field_input_block' : ''}`]">
        <van-field
          name="switch"
          :label="param.label"
          :required="param.required"
          :readonly="param.readonly"
          :disabled="param.disabled"
          :style="param.style"
          :error="param.error"
          :error-message="param.error ? param['error-message'] ? param['error-message'] : '' : ''"
          label-class="van_field_label"
        >
          <template slot="input" style="transform: translateY(6rpx);">
            <van-switch
              size="20"
              :readonly="param.readonly"
              :disabled="param.disabled"
              :checked="param.value"
			  :activeValue="param.activeValue"
			  :inactiveValue="param.inactiveValue"
              @change="handleChange"
            />
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
                        inputBlock: true,
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
				console.log(e.detail, '============ e.detail')
               this.$emit("change", e.detail)
            }
        },
		mounted() {
			console.log(this.param, '============ param')
		}
    }
</script>

<style lang="less" >
    @import "./common.less";
    .base_switch_container {
        
    }
</style>

<template>
	<view :class="[`.base_upload_containe ${param.inputBlock ? 'van_field_input_block' : ''}`]">
		<van-field
		  name="upload"
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
		    <van-uploader 
				:file-list="param.value"
				:max-count="param['max-count'] || 9007199254740992"
				:deletable="param.deletable"
                :accept="param.accept || 'image'"
                @after-read="handleAfterRead"
                v-if="param.accept !== 'file'"
			/>
            <van-uploader 
                v-else
                :file-list="param.value"
                :max-count="param['max-count'] || 9007199254740992"
                :deletable="param.deletable"
                :accept="param.accept || 'image'"
                @after-read="handleAfterRead"
            >
              <van-button size="small" icon="upgrade" type="default">上传文件</van-button>
            </van-uploader>
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
                        "error-message": '',
                        style: ""
                    }
                }
            }
        },
		mounted() {
			console.log('FFF', this.param)
		},
        methods: {
            handleChange (e) {
               this.$emit('change', e.detail)
            },
            handleAfterRead (e) {
                console.log('SSS', e)
            }
        }
    }
</script>

<style lang="less">
    @import './common.less';
    .base_upload_containe {

    }
</style>

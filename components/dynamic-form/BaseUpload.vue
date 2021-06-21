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
				:file-list="fileList"
				:max-count="param['max-count'] || 9007199254740992"
				:deletable="param.deletable === false ? false : true"
                :accept="param.accept || 'image'"
                @after-read="handleAfterRead"
                @delete="handleDelete"
                v-if="param.accept !== 'file'"
			/>
            <van-uploader 
                v-else
                :file-list="fileList"
                :max-count="param['max-count'] || 9007199254740992"
                :deletable="param.deletable === false ? false : true"
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
    import { config } from '@/config.js'
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
        data() {
          return {
              fileList: []
          }  
        },
        watch: {
            param: {
                handler(val, oldVal) {
                  if (JSON.stringify(val) !== JSON.stringify(oldVal)) {
                    if (_.has(val, 'value')) {
                        this.fileList = [..._.get(this.param, 'value', [])]
                    }
                  }
                },
                deep: true
             },
        },
		mounted() {
            if (_.get(this.param, 'value', []).length > 0) {
                this.fileList = [...this.param.value]
            }
		},
        methods: {
            // 删除
            handleDelete (e) {
               const index = e.detail.index
               this.fileList.splice(index, 1)
               this.fileList = [...this.fileList.splice(index, 1)]
               console.log('change', e, this.fileList)
               this.$emit('change', this.fileList)
            },
            handleAfterRead (event) {
                const { file } = event.detail
                uni.uploadFile({
                    url: config.formHost + '/upload',
                    filePath: file.url,
                    name: 'file',
                    success: (res) => {
                        const list = this.fileList
                        const resUrl = res.data.substr(0, 5).includes('http') ? res.data :  config.formHost + res.data
                        if (_.has(this.param, 'accept') && this.param.accept === 'file') {
                            const index = resUrl.lastIndexOf('.')
                            const str = resUrl.substr(index + 1)
                            if (['png', 'jpg', 'jpeg', 'bmp', 'gif', 'psd', 'svg'].some(x => resUrl.includes(x))) {
                                list.push({ url: resUrl })
                            } else {
                                list.push({ url: resUrl, name: file.name })
                            }
                        } else {
                            list.push({ url: resUrl })
                        }
                        
                        this.fileList = [...list]
                        this.$emit('change', this.fileList)
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    @import './common.less';
    .base_upload_containe {

    }
</style>

<template>
    <view :class="[`base_single_modal_select_container ${param.inputBlock ? 'van_field_input_block' : ''}`]">
        <van-field
		  name="singleModalSelect"
          readonly
		  clickable
		  autosize
		  type="textarea"
		  :clearable="false"
          :required="param.required"
          :disabled="param.disabled"
          :style="param.style"
          :placeholder="param.placeholder"
          :label="param.label"
          :value="value"
          :error="param.error"
          :error-message="param['error-message'] || ''"
          label-class="van_field_label"
          @click-input="handleClick"
        />
		<mask v-if="showModal">
			<view class="mask_modal_content">
			  <view class="header">
				 <view>请选择</view>
				 <van-icon class='icon' name="cross" size="20px" color="#9E9E9E" @click="handleClose" />
			  </view>
			  <view class="list_content">
				<scroll-view  scroll-y="true" class="scroll-Y"  style="height: calc(100vh - 224rpx);">
					<view v-for="(item, index) in list" :key="index" class="list_item" @click="handleSelcet(item,index)">
						<van-checkbox icon-size="18px" :value="isChecked(item)" style="margin-right: 10rpx;" />
						{{item[titleField]}}
					</view> 
				</scroll-view>
			  </view>
			  <view class="button">
				  <view class="cancel" @click="handleClose">取消</view>
				  <view class="confirm" @click="handleSubmit">确定</view>
			  </view>
			</view>	
		</mask>
    </view>
</template>

<script>
    import _ from 'lodash'
	import mask from '../mask/index.vue'
	import { globalConfig } from '@/config.js'
    export default {
		components: {
			mask
		},
        props: {
			// ['radio', 'checkbox']
			selectType: {
				type: String,
				default: 'radio'
			},
            param: {
                type: Object,
                default: function() {
                    return {
                        inputBlock: false,
                        required: false,
                        disabled: false,
                        error: false,
                        "error-message": "",
                        style: ""
                    }
                }
            }
        },
        data () {
          return {
              showModal: false,
			  list: []
          } 
        },
		computed: {
			value () {
				if (this.selectType === 'checkbox') {
					let textList = []
					if (_.isArray(this.param.value) && this.param.value.length >0) {
						this.param.value.map(x => {
							const item = this.list.find(y => y[this.valueField] === x)
							if (_.get(item, this.titleField)) {
								textList.push(_.get(item, this.titleField, ''))
							}
						})
					}
					return textList.join('、')
				} else {
					let text = ''
					if (_.has(this.param, 'value')) {
						const item = this.list.find(y => y[this.valueField] === this.param.value)
						text = _.get(item, this.titleField, '')
					}
					return text
				}
			},
			// 列表数据取值处
			listField () {
				return _.get(this.param, 'listField') || 'data.records'
			},
			// 显示的标题
			titleField () {
				return _.get(this.param, 'titleField') || 'userName'
			},
			// 提交的值
			valueField () {
				return _.get(this.param, 'valueField') || 'id'
			}
		},
		watch: {
			param: {
			    handler(val, oldVal) {
				    if (JSON.stringify(_.get(val, 'listUrl')) !== JSON.stringify(_.get(oldVal, 'listUrl'))) {
						this.fetchList()  
					}
			        if (JSON.stringify(_.get(val, 'value')) !== JSON.stringify(_.get(oldVal, 'value'))) {
					    this.handleUpdateList() 
			        }
			    },
			    deep: true
			 }, 
		},
        mounted() {
          if (this.param.listUrl) {
			  this.fetchList()
		  }
        },
        methods: {
			isChecked (item) {
				return this.list.some(x => x[this.valueField] === item[this.valueField] && item.checked === true)
			},
			handleUpdateList () {
				const value = _.get(this.param, 'value', this.selectType === 'checkbox' ? [] : '')
				this.list.map(item => {
					if (this.selectType === 'checkbox') {
						item.checked = value.some(x => x === item[this.valueField])
					} else {
						item.checked = (item[this.valueField] === value)
					}
					return item
				})
				this.list = [...this.list]
			},
			fetchList () {
				uni.request({
					method: 'GET',
					url: this.param.listUrl,
					header: {  // 请求header
						Authorization: `Bearer ${uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''}`,
						token: uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
					},
					success: (res) => {
						const response = _.get(res, 'data', {})
						this.list = _.get(response, this.listField, [])
						if (this.param.value) {
							this.handleUpdateList()
						}
					}
				})
			},
			handleSelcet (item, index) {
				this.list.map((x, i) => {
					if (this.selectType === 'radio') {
						x.checked = (index === i)
					} else {
						if (index === i) {
							x.checked = !_.get(x, 'checked', false)
						}
					}
					return x
				})
				this.list = [...this.list]
			},
            handleClick () {
				this.handleUpdateList()
                this.showModal = true
            },
			handleClose () {
				this.handleUpdateList()
			    this.showModal = false
			},
			handleSubmit () {
				const value = this.list.filter(x => x.checked).map(y => y[this.valueField])
				this.$emit('change', this.selectType === 'checkbox' ? value : value[0])
				this.showModal = false
			}
        }
    }
</script>

<style lang="less">
    @import "./common.less";
    .base_single_modal_select_container {}
	.mask_modal_content {
		width: 100%;
		height: 100vh;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden;
		font-size: 32rpx;
		> .header {
			padding: 30rpx;
			text-align: center;
			box-shadow: 2px 0 30px rgba(181, 176, 176, 0.18);
			.icon {
				position: absolute;
				right: 30rpx;
				top: 24rpx;
			}
		}
		.list_content {
			flex: 1;
			.list_item {
				display: flex;
				align-items: center;
				padding: 28rpx 32rpx;
				border-bottom: 1px solid rgba(242, 242, 242, 0.5);
			}
			.list_item:active {
				background-color: #f2f2f2;
			}
		}
		> .button {
			display: flex;
			align-items: center;
			justify-content: space-around;
			border-top: 1px solid #f2f2f2;
			text-align: center;
			box-shadow: -2px 0 30px rgba(181, 176, 176, 0.18);
			background-color: #fff;
			>view {
				width: 50%;
				padding: 40rpx 0;
			}
			.cancel {
				border-right: 1px solid #f2f2f2;
			}
			.confirm {
				color: #1A5EB5;
			}
			.cancel:active {
				background-color: rgba(0, 0, 0, 0.1);
			}
			.confirm:active {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}
	}
</style>

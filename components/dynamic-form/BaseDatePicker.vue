<template>
	<view :class="[`base_date_picker_containe ${param.inputBlock ? 'van_field_input_block' : ''}`]">
		<van-field
			name="datetimePicker"
			clickable
			readonly
			:label="param.label"
			:required="param.required"
			:disabled="param.disabled"
			:placeholder="param.placeholder"
			:style="param.style"
			:value="param.value"
			:error="param.error === true"
			:error-message="param['error-message'] || ''"
			label-class="van_field_label"
			@click-input="handleShowPicker(true)"
		  />
		<van-popup :show="showPicker" position="bottom" @click-overlay="handleShowPicker(false)" custom-style="background-color: red;z-index: 999">
			<van-datetime-picker
			  :type="param.tagIcon"
			  :value="showTime()"
			  @confirm="handleComfirm"
			  @cancel="handleShowPicker(false)"
			/>
		</van-popup>
	</view>
</template>

<script>
	import moment from 'moment'
	import _ from 'lodash'
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
		data () {
			return {
				showPicker: false
			}
		},
	    methods: {
			showTime () {
				let time = _.get(this.param, 'value')
				if (!time) {
					return ''
				}
				if (['date', 'datetime', 'year-month'].includes(_.get(this.param, 'tagIcon')) && _.isString(time)) {
					time = new Date(time).getTime()
				}
				return time
			},
			handleShowPicker (value = false) {
				this.showPicker = value
			},
	        handleComfirm (e) {
				let value = e.detail
				if (['date', 'datetime', 'year-month'].includes(_.get(this.param, 'tagIcon'))) {
					const timeFomat = {
						date: 'YYYY-MM-DD',
						datetime: 'YYYY-MM-DD HH:mm',
						'year-month': 'YYYY-MM'
					}
					value = moment(value).format(timeFomat[this.param.tagIcon])
				}
				console.log('SSS', value)
	           this.$emit('confirm', value)
			   this.handleShowPicker(false)
	        }
	    }
	}
</script>

<style lang="less">
	@import "./common.less";
	.base_date_picker_containe {
	   
	}
</style>

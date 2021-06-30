<template>
    <view>
       <block v-for="(item, index) in fields" :key="index">
            <base-field
              v-if="['el-input'].includes(_get(item, '__config__.tag'))"
              :param="{
                  ...getBaseParam(item),
                   type: _get(item, '__config__.tagIcon') === 'input' ? 'text' : _get(item, '__config__.tagIcon'),
                   ..._get(item, 'error') 
                      ? { 'error-message': item['error-message'] || `请填写${_get(item, '__config__.label')}`} 
                      : {}
                 }"
                 @input="(e) => handleSetValue(e, fields[index])"
                 @clear="(e) => handleClear(e, fields[index])"
            />
           <base-input-number 
               v-if="_get(item, '__config__.tag') === 'el-input-number'"
               :param="{
                   ...getBaseParam(item),
                   ...item.min !== undefined ? { min: item.min } : {},
                   ...item.max !== undefined ? { max: item.max } : {},
                   ..._get(item, 'error', false) ? { error: item.error } : {},
                   ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请填写${_get(item, '__config__.label')}` } : {}
               }"
               @change="(e) => handleSetValue(e, fields[index])"
           />
           <base-select 
               v-if="_get(item, '__config__.tag') === 'el-select'"
               :param="{
                   ...getBaseParam(item),
                   columns: _get(item, '__slot__.options', []),
                   ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
               }"
               @confirm="(e) => handleSetValue(e, fields[index])"
           />
           
           <base-switch 
               v-if="_get(item, '__config__.tag') === 'el-switch'"
               :param="{
                   ...getBaseParam(item),
                   ..._get(item, 'error', false) ? { error: item.error } : {},
                   ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
               }"
               @change="(e) => handleSetValue(e, fields[index])"
           />
            
           <base-radio 
               v-if="_get(item, '__config__.tag') === 'el-radio-group'"
               :param="{
                   ...getBaseParam(item),
                   options: _get(item, '__slot__.options', []),
                   ..._get(item, 'error', false) ? { error: item.error } : {},
                   ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
               }"
               @change="(e) => handleSetValue(e, fields[index])"
           />
           
           <base-checkbox 
               v-if="_get(item, '__config__.tag') === 'el-checkbox-group'"
               :param="{
                  ...getBaseParam(item),
                  options: _get(item, '__slot__.options', []),
                  ..._get(item, 'error', false) ? { error: item.error } : {},
                  ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
               }"
               @change="(e) => handleSetValue(e, fields[index])"
           />
           
           <base-slider 
              v-if="_get(item, '__config__.tag') === 'el-slider'"
              :param="{
                ...getBaseParam(item),
                ..._get(item, 'error', false) ? { error: item.error } : {},
                ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
              }"
              @change="(e) => handleSetValue(e, fields[index])"
           />
           
		   <base-date-picker 
			  v-if="['el-time-picker', 'el-date-picker'].includes(_get(item, '__config__.tag'))"
			  :param="{
				  ...getBaseParam(item),
				  tagIcon: _get(item, '__config__.tagIcon'),
                  ..._get(item, 'error', false) ? { error: item.error } : {},
				  ..._get(item, 'error') ? { 'error-message' : item['error-message'] || '' } : {}
			  }"
			  @confirm="(e) => handleSetValue(e, fields[index])"
		   />
		   
		   <base-rate 
			  v-if="_get(item, '__config__.tag') === 'el-rate'"
			  :param="{
				  ...getBaseParam(item),
                  ..._get(item, 'error', false) ? { error: item.error } : {},
				  ..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {}
			  }"
			  @change="(e) => handleSetValue(e, fields[index])"
			/>
		   
		   <base-upload 
			v-if="_get(item, '__config__.tag') === 'el-upload'"
			:param="{
				...getBaseParam(item),
				..._get(item, 'error', false) ? { error: item.error } : {},
				..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {},
				...item['max-count'] ? { 'max-count': item['max-count'] } : {},
				..._has(item, 'deletable') ? { deletable: item.deletable } : {},
                ..._has(item, 'accept') ? { accept: item.accept } : {},
			}"
            @change="(e) => handleSetValue(e, fields[index])"
		   />
			 <c-image
				v-if="_get(item, '__config__.tag') === 'c-image'"
				:param="{
					...getBaseParam(item),
					..._get(item, 'error', false) ? { error: item.error } : {},
					..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {},
					...item['max-count'] ? { 'max-count': item['max-count'] } : {},
					..._has(item, 'deletable') ? { deletable: item.deletable } : {},
				          ..._has(item, 'accept') ? { accept: item.accept } : {},
				}"
				      @change="(e) => handleSetValue(e, fields[index])"
			 > 
			 </c-image>
			 <c-video
			 				v-if="_get(item, '__config__.tag') === 'c-video'"
			 				:param="{
			 					...getBaseParam(item),
			 					..._get(item, 'error', false) ? { error: item.error } : {},
			 					..._get(item, 'error') ? { 'error-message' : item['error-message'] || `请选择${_get(item, '__config__.label')}` } : {},
			 					...item['max-count'] ? { 'max-count': item['max-count'] } : {},
			 					..._has(item, 'deletable') ? { deletable: item.deletable } : {},
			 				          ..._has(item, 'accept') ? { accept: item.accept } : {},
			 				}"
			 				      @change="(e) => handleSetValue(e, fields[index])"
			 > 
			 </c-video>
			 

       </block>
    </view>
</template>

<script>
    import _ from 'lodash'
    import BaseField from './BaseField.vue'
    import BaseInputNumber from './BaseInputNumber.vue'
    import BaseSelect from './BaseSelect.vue'
    import BaseSwitch from './BaseSwitch.vue'
    import BaseRadio from './BaseRadio.vue'
    import BaseCheckbox from './BaseCheckbox.vue'
    import BaseSlider from './BaseSlider.vue'
	import BaseDatePicker from './BaseDatePicker.vue'
	import BaseRate from './BaseRate.vue'
	import BaseUpload from './BaseUpload.vue'
	import cImage from './custom/c-image.vue'
	import cVideo from './custom/c-video.vue'
    export default {
        components: {
           BaseField,
           BaseInputNumber,
           BaseSelect,
           BaseSwitch,
           BaseRadio,
           BaseCheckbox,
           BaseSlider,
		   BaseDatePicker,
		   BaseRate,
		   BaseUpload,
			 cImage,
			 cVideo,
        },
        props: {
          fields: {
              type: Array,
              default: function () {
                  return []
              }
          },
          form: {
             type: Object,
             default: function () {
                 return {}
             } 
          }
        },
        methods: {
           getBaseParam (item) {
               return {
                  label: _.get(item, '__config__.label'),
                  required: _.get(item, '__config__.required', false),
                  readonly: _.get(item, 'readonly', false),
                  disabled: _.get(item, 'disabled', false),
                  clearable: _.get(item, 'clearable', false),
                  inputBlock: _.get(item, 'inputBlock', false),
                  value: this.form[item.__vModel__],
                  style: _.get(item, 'style', ''),
                  regList: _.get(item, '__config__.regList', []),
                  ..._.has(item, 'placeholder') ? { placeholder: item.placeholder } : {},
                  ..._.has(item, 'password') ? { password: item.password } : {},
                  ..._.has(item, 'maxlength') ? { maxlength: item.maxlength } : {},
                  ..._.has(item, 'prefix-icon') ? { 'left-icon': item['prefix-icon'] } : {},
                  ..._.has(item, 'suffix-icon') ? { 'right-icon': item['suffix-icon'] } : {},
                  ..._.has(item, 'show-word-limit') ? { 'show-word-limit': item['show-word-limit'] } : {},
                  ..._.has(item, 'api') ? { 'api': _.get(item, 'api') } : "",
               }
           },
		   _has (item = {}, str) {
			 if (Object.keys(item).length === 0) {
				 return false
			 }  
			 return _.get(item, str)
		   },
           _get (item, str, defauleValue = '') {
              return _.get(item, str, defauleValue)
           },
           handleSetValue (e, item) {
              this.$emit('change', e, item)
           },
           handleClear (e, item) {
               this.$emit('clear', e, item)
           }
        }
    }
</script>

<style>
</style>

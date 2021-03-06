import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { safeData, setTitle, remInit, toPage } from '@/utils'
import {
  Form,
  Field,
  Stepper,
  Popup,
  Picker,
  RadioGroup,
  Radio,
  CheckboxGroup,
  Checkbox,
  Switch,
  Slider,
  DatetimePicker,
  Rate,
  Uploader,
  Button,
  Icon,
  Toast,
  Cell,
  CellGroup
} from 'vant'
import './style/global.less'
import vueEsign from 'vue-esign'

remInit()

Vue.use(vueEsign)
Vue.use(Field)
Vue.use(Form)
Vue.use(Stepper)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Switch)
Vue.use(Slider)
Vue.use(DatetimePicker)
Vue.use(Rate)
Vue.use(Uploader)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Cell)
Vue.use(CellGroup)

Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$f = {
  safeData,
  setTitle,
  toPage
}

window.Vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

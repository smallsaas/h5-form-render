import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { safeData, setTitle, remInit, toPage, jumpPage } from '@/utils'
import H5FormRender from './views/parser/index.vue'
import './widget-register.js'
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
  Tab,
  Tabs,
  List,
  Swipe,
  SwipeItem
} from 'vant'
import './style/global.less'
remInit()

Vue.component("H5FormRender", H5FormRender)

// Vue.use(H5FormRender)
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
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(List)
Vue.use(Swipe)
Vue.use(SwipeItem)


Vue.config.productionTip = false
Vue.prototype.$toast = Toast
Vue.prototype.$f = {
  safeData,
  setTitle,
  toPage,
  jumpPage
}

window.Vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

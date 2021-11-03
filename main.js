import Vue from 'vue'
import App from './App'
import {cache,LoginDefault,login,getUserProfile,reload} from '@/utils/tools.js'
import card from '@/components/other/Card.vue'
import ayQrcode from "@/components/ay-qrcode/ay-qrcode.vue"

Vue.config.productionTip = false

// 使用全局变量
Vue.prototype.$cache = cache
Vue.prototype.$loginDefault = LoginDefault
Vue.prototype.$wxlogin = login
Vue.prototype.$userProfile = getUserProfile
Vue.prototype.$reload = reload

// 引入全局公用组件
Vue.component("card",card)
Vue.component("ayQrcode",ayQrcode)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

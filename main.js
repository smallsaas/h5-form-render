import Vue from 'vue'
import App from './App'
import {cache,LoginDefault,login,getUserProfile,reload} from '@/utils/tools.js'

Vue.config.productionTip = false
Vue.prototype.$cache = cache
Vue.prototype.$loginDefault = LoginDefault
Vue.prototype.$wxlogin = login
Vue.prototype.$userProfile = getUserProfile
Vue.prototype.$reload = reload

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

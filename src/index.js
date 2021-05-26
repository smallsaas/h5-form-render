import { version } from '../package'
import H5FormRender from './views/parser'

const install = function (Vue) {
  Vue.component(H5FormRender.name, H5FormRender)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install
}

import { version } from '../package'
import H5FormRender from './views/parser'
import H5FormEsign from './views/esign'

const install = function (Vue) {
  Vue.component(H5FormRender.name, H5FormRender)
  Vue.component(H5FormEsign.name, H5FormEsign)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version,
  install
}

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/parser',
    name: 'Parser',
    component: () => import('@/views/parser'),
    meta: {
      title: 'form-render',
      keepAlive: false
    }
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import('@/views/example'),
    meta: {
      title: 'example',
      keepAlive: false
    }
  },
  {
    path: '/esign',
    name: 'Esign',
    component: () => import('@/views/esign'),
    meta: {
      title: 'esign',
      keepAlive: false
    }
  }
]

const RouterModel = new Router({
  routes
})

RouterModel.beforeEach((to, from, next) => {
  next()
})

export default RouterModel

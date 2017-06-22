// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRoute from 'vue-router'
import App from './App'
// import router from './router'

Vue.use(Vuex)
Vue.use(VueRoute)

const _routers = [
  { path: '/', components: resolve => require(['./pages/index.vue']) },
  { path: '/first', components: resolve => require(['./pages/index.vue']) }
]

const router = new VueRoute({
  _routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

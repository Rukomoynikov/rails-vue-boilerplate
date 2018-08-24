/* eslint no-console: 0 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from '../app.vue'
import router from '../router/index.js'
import store from '../store/index.js'

Vue.use(VueRouter)
Vue.use(Vuex)

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    store,
    router,
    el,
    render: h => h(App)
  })

  console.log(app)
})

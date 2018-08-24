/* eslint no-console: 0 */

import Vue from 'vue'
import App from '../app.vue'
import VueRouter from 'vue-router'

import router from '../router/index.js'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  const el = document.body.appendChild(document.createElement('hello'))
  const app = new Vue({
    router,
    el,
    render: h => h(App)
  })

  console.log(app)
})

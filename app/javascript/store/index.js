import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    suppliers: null
  },
  mutations: {
    LOAD_SUPPLIERS (state, payload) {
      state.suppliers = payload
    }
  },
  actions: {
    getSuppliers (context) {
      // axios.get('/api/suppliers.json')
      axios.get('/api/suppliers').then((result) => {
        context.commit('LOAD_SUPPLIERS', result.data)
      })
    }
  }
})

export default store

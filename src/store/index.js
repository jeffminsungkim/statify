import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isOpen: false
  },
  methods: {
    toggle: function () {
      this.isOpen = !this.isOpen
    }
  }
})

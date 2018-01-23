import Vue from 'vue'
import App from './App.vue'

import vueMove from './lib/index.js'
Vue.use(vueMove)

if (typeof window !== 'undefined' && window.vue) {
  window.Vue.use(move)
}

new Vue({
  el: '#app',
  render: h => h(App)
})

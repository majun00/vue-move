import Vue from 'vue'
import App from './App.vue'

import vueMove from './lib/index.js'
Vue.use(vueMove)

new Vue({
  el: '#app',
  render: h => h(App)
})

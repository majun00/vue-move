import vueMove from './vue-move.vue'
const move = {
  install(Vue, options) {
    Vue.component(vueMove.name, vueMove)
  }
}
if (typeof window !== 'undefined' && window.vue) {
  window.Vue.use(move)
}
export default move

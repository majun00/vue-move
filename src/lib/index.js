import vueMove from './vue-move.vue'
const move = {
  install(Vue, options) {
    Vue.component(vueMove.name, vueMove)
  }
}
export default move

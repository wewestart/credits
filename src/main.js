import Vue from 'vue'
import Index from './Index.vue'
import router from './router'
import store from './store'
import 'jquery'
import '@/assets/css/swiper.min.css'
import '@/assets/js/toast.js'
import '@/assets/css/toast.css'

Vue.config.productionTip = false

Vue.prototype.showtoast = (info) => {
  $('body').toast({
    position: 'fixed',
    content: info,
    duration: 2000,
    isCenter: true
  })
}
store.dispatch('ToggleDefaultParam', { openid: '45545' })
router.beforeEach((to, from, next) => { // 设置每个页面的标题
  if (to.meta.name) {
    // store.dispatch('ToggleDefaultParam', { openid: '45545' })
    document.title = to.meta.name
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(Index)
}).$mount('#index')

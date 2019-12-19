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
let obj = { }
obj = { unionid: 'o7EX8wByJufvTHjrzp8d-4x-EBts', sign: '3a9bdf7a9842ee89eadc1c6cd4a7f5cf8ad0434c', openid: 'oisd75XjK_5ORc2zAidGXsyTDjSM', noncestr: '45c166d697d65080d54501403b433256', timestamp: '1586739611' }
store.dispatch('ToggleDefaultParam', obj)
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

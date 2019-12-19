import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    meta: { name: '积分赢豪礼' },
    component: Home
  },
  {
    path: '/home',
    name: 'home',
    meta: { name: '积分赢豪礼' },
    component: Home
  },
  {
    path: '/activityRules',
    name: 'activityRules',
    meta: { name: '活动规则' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "activityRules" */ '../views/activityRules.vue')
  },
  {
    path: '/persentPoints',
    name: 'persentPoints',
    meta: { name: '赠送活动积分' },
    component: () => import(/* webpackChunkName: "persentPoints" */ '../views/persentPoints.vue')
  },
  {
    path: '/goodsList',
    name: 'goodsList',
    meta: { name: '积分兑换' },
    component: () => import(/* webpackChunkName: "goodsList" */ '../views/GoodsList.vue')
  },
  {
    path: '/hhList',
    name: 'hhList',
    meta: { name: '转入户号积分' },
    component: () => import(/* webpackChunkName: "hhList" */ '../views/HhList.vue')
  },
  {
    path: '/chongBangDetail',
    name: 'chongBangDetail',
    meta: { name: '积分冲榜' },
    component: () => import(/* webpackChunkName: "chongBangDetail" */ '../views/ChongBangDetail.vue')
  },
  {
    path: '/goodRecord',
    name: 'goodRecord',
    meta: { name: '兑换记录' },
    component: () => import(/* webpackChunkName: "goodRecord" */ '../views/GoodRecord.vue')
  },
  {
    path: '/earnPoints',
    name: 'earnPoints',
    meta: { name: '赚积分' },
    component: () => import(/* webpackChunkName: "earnPoints" */ '../views/EarnPoints.vue')
  },
  {
    path: '/oneGoodsDetail',
    name: 'oneGoodsDetail',
    meta: { name: '商品详情' },
    component: () => import(/* webpackChunkName: "OneGoodsDetail" */ '../views/OneGoodsDetail.vue')
  },
  {
    path: '/scoreDetail',
    name: 'scoreDetail',
    meta: { name: '积分明细' },
    component: () => import(/* webpackChunkName: "scoreDetail" */ '../views/scoreDetail.vue')
  },
  {
    path: '/qzgl',
    name: 'qzgl',
    meta: { name: '求赠攻略' },
    component: () => import(/* webpackChunkName: "qzgl" */ '../views/qzgl.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.base,
  routes
})

export default router

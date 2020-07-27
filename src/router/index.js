import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('../views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/home/Home.vue')
        },
        {
          path: 'video',
          name: 'Video',
          component: () => import('../views/video/Video.vue')
        },
        {
          path: 'my',
          name: 'My',
          component: () => import('../views/my/My.vue')
        },
        {
          path: "cart",
          name: 'Cart',
          component: () => import('../views/cart/Cart.vue')
        },
        {
          path: 'member',
          name: 'Member',
          component: () => import('../views/member/Member.vue')
        },
        {
          path: 'shoucangshangpin',
          name: 'ShangPin',
          component: () => import('../views/shoucangshangpin/shoucangshangpin.vue')
        },
        {
          path: 'youhuiquan',
          name: 'YouHuiQuan',
          component: () => import('../views/youhuiquan/youhuiquan.vue')
        }
      ]
    }
  ]
})

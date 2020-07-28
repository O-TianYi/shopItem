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

        // my的路由
        {
          path: 'shoucangshangpin',
          name: 'ShangPin',
          component: () => import('../views/my/compontents/shoucangshangpin.vue')
        },
        {
          path: 'shoucangdianpu',
          name: 'DianPu',
          component: () => import('../views/my/compontents/shoucangdianpu.vue')
        },
        {
          path: 'guanzhu',
          name: 'GuanZhu',
          component: () => import('../views/my/compontents/guanzhu.vue')
        },
        {
          path: 'youhuiquan',
          name: 'YouHuiQuan',
          component: () => import('../views/my/compontents/kaquan_youhuiquan.vue')
        },
        {
          path: 'hongbao',
          name: 'HongBao',
          component: () => import('../views/my/compontents/kaquan_hongbao.vue')
        },
        {
          path: 'jifen',
          name: 'JiFen',
          component: () => import('../views/my/compontents/kaquan_jifen.vue')
        },
        {
          path: 'daifukuan',
          name: 'DaiFuKuan',
          component: () => import('../views/my/compontents/order_daifukuan.vue')
        },
        {
          path: 'daifahuo',
          name: 'DaiFaHuo',
          component: () => import('../views/my/compontents/order_daifahuo.vue')
        },
        {
          path: 'daishouhuo',
          name: 'DaiShouHuo',
          component: () => import('../views/my/compontents/order_daishouhuo.vue')
        },
        {
          path: 'daipingjia',
          name: 'DaiPingJia',
          component: () => import('../views/my/compontents/order_daipingjia.vue')
        },
        {
          path: 'tuikuan',
          name: 'TuiKuan',
          component: () => import('../views/my/compontents/order_tuikuan.vue')
        },
        {
          path: 'pintuan',
          name: 'PinTuan',
          component: () => import('../views/my/compontents/tool_pintuan.vue')
        },
        {
          path: 'chengzhang',
          name: 'ChengZhang',
          component: () => import('../views/my/compontents/tool_chengzhang.vue')
        },
        {
          path: 'address',
          name: 'Address',
          component: () => import('../views/my/compontents/tool_address.vue')
        },
        {
          path: 'lianxikefu',
          name: 'LianXiKeFu',
          component: () => import('../views/my/compontents/tool_lianxikefu.vue')
        },

        
      ]
    }
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //       return savedPosition;
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop;
  //     }
  //       return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
})

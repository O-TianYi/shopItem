import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../pages/home/home.vue')
const User=()=>import('../pages/user/user.vue')
const ShopCart=()=>import('../pages/shopcart/shopcart.vue')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'Home',
      component:Home
    },
    {
      path: '/user',
      name:'User',
      component:User
    },
    {
      path: '/shopcart',
      name:'ShopCart',
      component:ShopCart
    }
  ]
})

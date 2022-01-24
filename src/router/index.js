import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/login'
//回调函数，  回调函数：http://127.0.0.1:8080/#/call_back
import call_back from '@/components/call_back'  
import index from '@/components/index'
import userbind from '@/components/userbind'
import user_center_info from '@/components/user_center_info'
import user_center_pass from '@/components/user_center_pass'
import header from '@/components/header'
import find_password from '@/components/find_password'
import rewsetpass from '@/components/rewsetpass'
import user_center_site from '@/components/user_center_site'
import list from '@/components/list'
import detail from '@/components/detail'
import cart from '@/components/cart'
import order from '@/components/order'
import place_order from '@/components/place_order'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/call_back',
      name: 'call_back',
      component: call_back
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/userbind',
      name: 'userbind',
      component: userbind
    },
    {
      path: '/user_center_info',
      name: 'user_center_info',
      component: user_center_info
    },
    {
      path: '/user_center_pass',
      name: 'user_center_pass',
      component: user_center_pass
    },
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/find_password',
      name: 'find_password',
      component: find_password
    },
    {
      path: '/rewsetpass',
      name: 'rewsetpass',
      component: rewsetpass
    },
    {
      path: '/user_center_site',
      name: 'user_center_site',
      component: user_center_site
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/place_order',
      name: 'place_order',
      component: place_order
    },
  ]
})

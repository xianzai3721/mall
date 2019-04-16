import Vue from 'vue'
import Router from 'vue-router'
import Address from '@/views/Address'
import Cart from '@/views/Cart'
import GoodsList from '@/views/GoodsList'
import OrderConfirm from '@/views/OrderConfirm'
import OrderSuccess from '@/views/OrderSuccess'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/Address',
      name: 'Address',
      component: Address
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/OrderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/OrderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})

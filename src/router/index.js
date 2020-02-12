import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/category',
      name: 'Category',
      meta:{
        title:'Category'
      },
      component: () => import('../views/category/category')  //路由懒加载
    },
    {
      path: '/home',
      name: 'Home',
      meta:{
        title:'Home'
      },
      component: () => import('../views/home/home')
    },
    {
      path: '/cart',
      name: 'Cart',
      meta:{
        title:'Cart'
      },
      component: () => import('../views/cart/cart')
    },
    {
      path: '/profile',
      name: 'Profile',
      meta:{
        title:'Profile'
      },
      component: () => import('../views/profile/profile')
    },
  ],
  mode:"history"
})

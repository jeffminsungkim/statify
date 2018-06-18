import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/pages/dashboard/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})

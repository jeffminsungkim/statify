import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/views/dashboard/Index'
import AppLog from '@/views/status-log/app/Index'
import DeviceLog from '@/views/status-log/device/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },

    {
      path: '/applog',
      name: 'AppLog',
      component: AppLog
    },

    {
      path: '/devicelog',
      name: 'DeviceLog',
      component: DeviceLog
    }
  ]
})

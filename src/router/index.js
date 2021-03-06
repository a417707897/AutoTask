import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import AutoTask from '@/components/AutoTask'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/jdAutoTask',
      name: 'AutoTask',
      component: AutoTask
    }
  ]
})

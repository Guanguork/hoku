import Vue from 'vue'
import Router from 'vue-router'
import Lala from '@/components/Lala'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Lala',
      component: Lala
    }
  ]
})

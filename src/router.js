import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import BladeTrack from '@/views/BladeTrack'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blade',
      name: 'blade',
      component: BladeTrack,
      children: [
        {
          path: '*',
          component: () => import('@/components/Blade')
        }
      ]
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

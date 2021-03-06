import Vue from 'vue'
import Router from 'vue-router'
import signUp from './../components/user/signUp'
import signIn from './../components/user/signIn'
import profile from './../components/user/profile'
import home from './../components/home'
import mobile from './../components/mobile'
import AuthGuard from './auth_guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/pyramid/signUp',
      name: 'signUp',
      component: signUp
    },
    {
      path: '/pyramid',
      name: 'home',
      component: home
    },
    {
      path: '/pyramid/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/pyramid/mobie',
      name: 'mobile',
      component: mobile
    },
    {
      path: '/pyramid/profile',
      name: 'profile',
      component: profile,
      beforeEnter: AuthGuard
    }
  ]
})

export default router

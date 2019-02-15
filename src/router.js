import Vue from 'vue'
import Router from 'vue-router'
import intro from './views/intro.vue'
import main from './views/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: intro
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: main
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import headerComponent from '@/components/headerComponent'
import bodyComponent from '@/components/bodyComponent'
// import app from '@/App'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app
    // },

    {
      path: '/head',
      name: 'headerComponent',
      component: headerComponent
    },
    {
      path: '/body',
      name: 'bodyComponent',
      component: bodyComponent
    }

  ]
})

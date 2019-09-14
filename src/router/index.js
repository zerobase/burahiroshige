import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

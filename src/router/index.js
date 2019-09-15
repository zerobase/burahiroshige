import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue' // added
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added
import stories from '@/components/stories'
import story from '@/components/story'
import spot from '@/components/spot'
import { ImagePlugin, TabsPlugin } from 'bootstrap-vue'

Vue.use(Router)
Vue.use(ImagePlugin)
Vue.use(TabsPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stories',
      component: stories
    },
    {
      path: '/story/:id',
      name: 'story',
      component: story
    },
    {
      path: '/spot/:id',
      name: 'spot',
      component: spot
    }
  ]
})

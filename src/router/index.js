import Vue from 'vue'
import Router from 'vue-router'
import Stories from '@/components/Stories'
import Story from '@/components/Story'
import Spot from '@/components/spot'
import { ImagePlugin, TabsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(ImagePlugin)
Vue.use(TabsPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'stories',
      component: Stories
    },
    {
      path: '/story/:id',
      name: 'story',
      component: Story
    },
    {
      path: '/spot/:id',
      name: 'spot',
      component: Spot
    }
  ]
})

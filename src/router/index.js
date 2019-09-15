import Vue from 'vue'
import Router from 'vue-router'
import stories from '@/components/stories'
import story from '@/components/story'
import storyText from '@/components/story-text'
import storyMap from '@/components/story-map'
import spot from '@/components/spot'
import { ImagePlugin, TabsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)
Vue.use(ImagePlugin)
Vue.use(TabsPlugin)

Vue.component('story-text', storyText)
Vue.component('story-map', storyMap)

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

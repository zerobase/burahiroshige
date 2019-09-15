import Vue from 'vue'
import Router from 'vue-router'
import Stories from '@/components/Stories'
import Story from '@/components/Story'
import Spot from '@/components/spot'
import { ImagePlugin, TabsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import dataset from '../dataset'

Vue.use(Router)
Vue.use(ImagePlugin)
Vue.use(TabsPlugin)

Vue.prototype.$dataset = dataset

axios
  .get('https://script.google.com/macros/s/AKfycbzLOxGaJZ8vmSzOp1cPrzmDLxIE2OHRVQpjcCAeWM3vK0mPl8Ls/exec?sheet=StoryMeta')
  .then(response => (console.log(response)))

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
      component: Story,
      props: (route) => ({ id: Number(route.params.id) })
    },
    {
      path: '/spot/:id',
      name: 'spot',
      component: Spot,
      props: (route) => ({ id: Number(route.params.id) })
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewsProjects from '@/views/ViewsProjects'
import ViewsTasks from '@/views/ViewsTasks'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
   
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/projects',
    name: 'ViewsProjects',
    component: ViewsProjects
  },
  {
    path:'/tasks',
    name: 'ViewsTasks',
    component: ViewsTasks
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

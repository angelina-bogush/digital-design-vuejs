import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewsProjects from '@/views/ViewsProjects'
import ViewsTasks from '@/views/ViewsTasks'
import ViewLayout from '@/views/ViewLayout'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // },
  {
    path:'/',
    name: 'ViewsLayout',
    component: ViewLayout,
    children: [
      {
        path:'',
        name: 'ViewsTasks',
        component: ViewsTasks,
        
      },
      {
        path:'task/:id',
        name: 'TaskCard',
        component: () => import ('@/components/tasks/TaskCard/TaskCard.vue')
      },
      {
        path: '/projects',
        name: 'ViewsProjects',
        component: ViewsProjects
      },
      {
        path:'/auth',
        name: 'ViewAuth',
        component: () => import ('@/views/ViewAuth.vue')
      },
      {
        path:'/users',
        name:'ViewUser',
        component: () => import ('@/views/ViewUser.vue')
      }
    ]
  },
  

  {
    path: '*',
    name: 'ViewError',
    component: () => import('@/views/ViewError')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

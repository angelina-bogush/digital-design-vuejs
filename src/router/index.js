import Vue from 'vue'
import VueRouter from 'vue-router'
import ViewsProjects from '@/views/ViewsProjects'
import ViewsTasks from '@/views/ViewsTasks'
import ViewLayout from '@/views/ViewLayout'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'ViewsLayout',
    component: ViewLayout,
    children: [
      {
        path:'',
        name: 'ViewsProjects',
        component: ViewsProjects,
        
      },
      {
        path:'task/:id',
        name: 'ViewTaskCard',
        props: true,
        component: () => import ('@/views/ViewTaskCard.vue')
      },
      {
        path: '/tasks',
        name: ' ViewsTasks',
        component: ViewsTasks
      },
      {
        path:'/auth',
        name: 'ViewAuth',
        component: () => import ('@/views/ViewAuth.vue')
      },
      {
        path:'/users',
        name:'ViewUser',
        component: () => import ('@/views/ViewUser.vue'),
        beforeEnter: (to, from, next) => {
          if(localStorage.getItem('auth')){
            next()
          } else {
            next({name: 'ViewsTasks'})
          }
        }
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

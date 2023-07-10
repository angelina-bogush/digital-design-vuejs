import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
import  tasks from './modules/tasks'
import users from './modules/users'
import axios from 'axios'
import {user} from './modules/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    //получение инфо о user
    getUser(){
      axios
      .get(
        `${user.baseUrl}/users/current`,
        {headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
      )
    .then((res) => {
      console.log(res.data)
    })
   }
  },
  modules: { 
    projects,
    tasks,
    users
  }

})

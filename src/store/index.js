import Vue from 'vue'
import Vuex from 'vuex'
import projects from './modules/projects'
import  tasks from './modules/tasks'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { 
    projects,
    tasks,
    users
  }

})

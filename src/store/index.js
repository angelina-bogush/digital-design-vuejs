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
    userId: ''
  },
  getters: {
    getLoading: (state) => state.isLoading,
    formatDate: () => (dateString) => {
      const date = new Date(dateString);
      const now = new Date();
    
      const diff = now - date;
    
      if (diff < 60000) {
        return "только что";
      } else if (diff < 3600000) {
        const minutes = Math.ceil(diff / 60000);
        return `${minutes} минут назад`;
      } else if (diff < 86400000 && date.getDate() === now.getDate()) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `Сегодня в ${hours}:${minutes}`;
      } else if (diff < 172800000 && date.getDate() === now.getDate() - 1) {
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `вчера в ${hours}:${minutes}`;
      } else if (date.getFullYear() === now.getFullYear()) {
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        return `${day} ${month} в ${hours}:${minutes}`;
      } 
      // else {
      //   const day = date.getDate();
      //   const month = date.toLocaleString("default", { month: "short" });
      //   const year = date.getFullYear();
      //   const hours = date.getHours().toString().padStart(2, "0");
      //   const minutes = date.getMinutes().toString().padStart(2, "0");
      //   return `${day} ${month} ${year} в ${hours}:${minutes}`;
      // }
    }
    
  },
  mutations: {},
  actions: {
    //получение инфо о user
    getUser() {
      axios
        .get(`${user.baseUrl}/users/current`, {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  },
  modules: {
    projects: projects,
    tasks: tasks,
    users: users,
  },
});

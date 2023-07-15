import router from '@/router'
import '@/api/axios-interceptors.js'
import axios from 'axios'
import { user, token, checkAnswer } from './data.js'
  export const mutation = {
    LOAD_PROJECTS: 'LOAD_PROJECTS',
    CREATE_PROJECT: 'CREATE_PROJECT',
    SET_SORT_FIELD: 'SET_SORT_FIELD',
    SET_SORT_TYPE: 'SET_SORT_TYPE',
    SET_FILTER_NAME: 'SET_FILTER_NAME',
    SET_LOADING: 'SET_LOADING'
  }
export default {
  namespaced: true,
  state: {
    isLoading: false,
    projects: [],
    filter: {
      search: {
        name: " "
      },
      sort: {
        field: "name", //по умолчанию
        type: "asc",
      },
    },
  },
  getters: {
    allProjects: (state) => state.projects,
    getLoading: (state) => state.isLoading,
    
  },

  mutations: {
    [mutation.SET_SORT_FIELD]: (state, field) => {
      state.filter.sort.field = field;
    },
    [mutation.SET_SORT_TYPE]: (state, type) => {
      state.filter.sort.type = type;
    },
    [mutation.SET_FILTER_NAME]: (state, searchName) => {
      state.filter.search.name = searchName
    },

    [mutation.LOAD_PROJECTS]: (state, response) => {
      state.projects = response.projects;
    },
    [mutation.SET_LOADING]: (state, value) => {
      state.isLoading = value
    },
    [mutation.CREATE_PROJECT]: (state, res) => {
      state.projects.push(res.data);
    },
  },
  actions: {
    //установка значения в поле сортировки
    setSortField({ commit }, field) {
      commit('SET_SORT_FIELD', field);
    },
    setSortType({ commit }, type) {
      commit('SET_SORT_TYPE', type);
    },
    setFilterName({commit}, searchName){
      commit('SET_FILTER_NAME', searchName)
    },
    //вывод проектов
    searchProjectAxios({ commit, state}) {
      commit('SET_LOADING', true);
      const stateFilterSort = state.filter.sort;
      const stateFilterSearch = state.filter.search;
      axios
        .post(
          `${user.baseUrl}/projects/search`,
          {
            _id: `${localStorage.getItem("id")}`,
            limit: 100,
            sort: stateFilterSort,
            filter: stateFilterSearch
            },
          {
            headers: {
              authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          commit("LOAD_PROJECTS", res.data);
          commit('SET_LOADING', false);
          // console.log(res.data)
        })
        // .catch((err) => {
        //   if (err.response.status === 401){
        //     this.$router.push('/auth')
        //   }
        //   console.log(err.response.status);
        // })
        .finally(() => {
          commit('SET_LOADING', false)
        })
    },
    createNewProject({commit}, newProject){
      commit('SET_LOADING', true);
      axios
      .post(
        `${user.baseUrl}/projects`,
        {
          code: newProject.code,
          name: newProject.projectName
          },
        {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        }
      })
      .then((res) => {
        console.log(res.data)
        commit('CREATE_PROJECT', res.data)
        commit('SET_LOADING', false);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        commit('SET_LOADING', false);
      })
    }
  
  },
};
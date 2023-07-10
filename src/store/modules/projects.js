import axios from 'axios'
import { user, token, checkAnswer } from './data.js'
  export const mutation = {
    LOAD_PROJECTS: 'LOAD_PROJECTS',
    CREATE_PROJECT: 'CREATE_PROJECT',
    SET_SORT_FIELD: 'SET_SORT_FIELD',
    SET_SORT_TYPE: 'SET_SORT_TYPE',
    SET_FILTER_NAME: 'SET_FILTER_NAME'
  }
export default {
  namespaced: true,
  state: {
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
      const stateFilterSort = state.filter.sort;
      const stateFilterSearch = state.filter.search;
      axios
        .post(
          `${user.baseUrl}/projects/search`,
          {
            _id: `${localStorage.getItem("id")}`,
            limit: 10,
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // createProjectAxios({ commit }) {
    //   axios
    //     .post(
    //       `${user.baseUrl}/projects`,
    //       { name: "Project 21", code: "#21" },
    //       {
    //         headers: {
    //           authorization: `Bearer ${user.token}`,
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       commit("CREATE_PROJECT", res);
    //       // id = res.data._id;
    //       // localStorage.setItem('id', id)
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
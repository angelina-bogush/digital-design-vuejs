import axios from 'axios'
import { user, token, checkAnswer } from './data.js'
  export const mutation = {
    LOAD_USERS: 'LOAD_USERS',
    CREATE_USER: 'CREATE_USER',
    SET_SORT_TYPE: 'SET_SORT_TYPE',
    SET_FILTER_NAME: 'SET_FILTER_NAME',
    SET_LOADING: 'SET_LOADING',
    SET_TOKEN: 'SET_TOKEN'
  }
export default {
  namespaced: true,
  state: {
    isLoading: false,
    token: '',
    users: [],
    page: 1,
    filter: {
        name: " ",
        _id: " "
    },
    sort: "asc"
  },
  getters: {
    allUsers: (state) => state.users,
    getLoading: (state) => state.isLoading,
    getToken: (state) => state.token
  },

  mutations: {
    [mutation.SET_SORT_TYPE]: (state, type) => {
      state.sort = type;
    },
    [mutation.SET_FILTER_NAME]: (state, searchName) => {
      state.filter.name = searchName
    },

    [mutation.LOAD_USERS]: (state, response) => {
      state.users = response.users;
    },
    [mutation.CREATE_USER]: (state, res) => {
      state.users.push(res.data);
    },
    [mutation.SET_LOADING]: (state, value) => {
      state.isLoading = value
    },
    [mutation.SET_TOKEN]: (state, value) => {
      state.token = value
    }
  },
  actions: {
    //установка значения в поле сортировки
    setInputSearch({commit}, input){
        commit('SET_INPUTSEARCH', input)
    },
    setSortType({ commit }, type) {
      commit('SET_SORT_TYPE', type);
    },
    setFilterName({commit}, searchName){
      commit('SET_FILTER_NAME', searchName)
    },
    //вывод задач
    searchUserAxios({ commit, state}) {
      commit('SET_LOADING', true);
      axios
        .post(
          `${user.baseUrl}/users/search`,
          {
            limit: 50,
            sort: state.sort,
            filter: {
                name: state.filter.name,
                // _id: state.filter._id
            }
            },
          {
            headers: {
              authorization: `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          commit('SET_LOADING', false);
          commit("LOAD_USERS", res.data);
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        })
    },
    authUser({commit}, auth){
      commit('SET_LOADING', true);
    axios
    .post(
    `${user.baseUrl}/login`,
      {
        login: auth.login,
        password: auth.password
      },
      {
        headers: {
          authorization: `Bearer ${user.token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
     commit('SET_TOKEN', res.data.token)
     commit('SET_LOADING', false)
     localStorage.setItem('token', res.data.token)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      commit('SET_LOADING', false)
    })
  
    }
  }
};
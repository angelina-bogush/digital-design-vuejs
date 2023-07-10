import axios from 'axios'
import { user, token, checkAnswer } from './data.js'
  export const mutation = {
    LOAD_TASKS: 'LOAD_TASKS',
    CREATE_TASK: 'CREATE_TASK',
    SET_SORT_FIELD: 'SET_SORT_FIELD',
    SET_SORT_TYPE: 'SET_SORT_TYPE',
    SET_FILTER_NAME: 'SET_FILTER_NAME',
  }
export default {
  namespaced: true,
  state: {
    tasks: [],
     page: 1, // нумерация страниц с единицы
    //  limit: ,
     filter: {
        name: " ",
        status: ["DRAFT"], // см. рест /statuses
        author: "id",
        executor: "id",
        projectId: "id",
        dateStart: "2023-06-28", // формат ISO
        dateEnd: "2023-06-28" // формат ISO
    },
    sort: {
        field: "name", // name, author, status, executor,     dateCreated, dateEdited
        type: "asc" // asc, des
    },
    options:[
        {name: 'По названию', value: 'name'},
        {name: 'По автору', value: 'author'},
        {name: 'По дате создания',  value: 'dateCreated'},
        {name: 'По дате обновления',  value: 'dateEdited'},
        {name: 'По статусу',  value: 'status'},
        {name: 'По исполнителю',  value: 'executor'}
      ]
  },
  getters: {
    allTasks: (state) => state.tasks,
    tasksOptions: (state) =>  state.options
  },

  mutations: {
    [mutation.SET_SORT_FIELD]: (state, field) => {
      state.sort.field = field;
    },
    [mutation.SET_SORT_TYPE]: (state, type) => {
      state.sort.type = type;
    },
    [mutation.SET_FILTER_NAME]: (state, searchName) => {
      state.filter.name = searchName
    },

    [mutation.LOAD_TASKS]: (state, response) => {
      state.tasks = response.tasks;
    },
    [mutation.CREATE_TASK]: (state, res) => {
      state.tasks.push(res.data);
    },
  },
  actions: {
    //установка значения в поле сортировки
    setInputSearch({commit}, input){
        commit('SET_INPUTSEARCH', input)
    },
    setSortField({ commit }, field) {
      commit('SET_SORT_FIELD', field);
    },
    setSortType({ commit }, type) {
      commit('SET_SORT_TYPE', type);
    },
    setFilterName({commit}, searchName){
      commit('SET_FILTER_NAME', searchName)
    },
    //вывод задач
    searchTaskAxios({ commit, state}) {
      axios
        .post(
          `${user.baseUrl}/tasks/search`,
          {
            limit: 10,
            sort: {
                field: state.sort.field,
                type: state.sort.type
            },
            filter: {
                name: state.filter.name
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
          commit("LOAD_TASKS", res.data);
          console.log(res.data)
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
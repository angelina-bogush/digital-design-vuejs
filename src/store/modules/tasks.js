import axios from 'axios'
import { user, token, checkAnswer } from './data.js'
  export const mutation = {
    LOAD_TASKS: 'LOAD_TASKS',
    LOAD_TASK: 'LOAD_TASK',
    CREATE_TASK: 'CREATE_TASK',
    SET_SORT_FIELD: 'SET_SORT_FIELD',
    SET_SORT_TYPE: 'SET_SORT_TYPE',
    SET_FILTER_NAME: 'SET_FILTER_NAME',
    SET_LOADING: 'SET_LOADING',
    SET_PROJECT_ID: 'SET_PROJECT_ID',
    SET_TASK_ID: 'SET_TASK_ID',
    SET_UPDATED_TASK: 'SET_UPDATED_TASK'
  }
export default {
  namespaced: true,
  state: {
    isLoading: false,
    projectId: '',
    tasks: [],
    taskId: '',
    currentTask: {},
    page: 1, 
    total: '',
    //  limit: ,
    filter: {
      name: " ",
      status: ["DRAFT"], // см. рест /statuses
      author: "id",
      executor: "id",
      projectId: "id",
      dateStart: "2023-06-28", // формат ISO
      dateEnd: "2023-06-28", // формат ISO
    },
    sort: {
      field: "name", // name, author, status, executor,     dateCreated, dateEdited
      type: "asc", // asc, des
    },
    options: [
      { name: "По названию", value: "name" },
      { name: "По автору", value: "author" },
      { name: "По дате создания", value: "dateCreated" },
      { name: "По дате обновления", value: "dateEdited" },
      { name: "По статусу", value: "status" },
      { name: "По исполнителю", value: "executor" },
    ],
  },
  getters: {
    allTasks: (state) => state.tasks,
    tasksOptions: (state) => state.options,
    getTask: (state) => state.currentTask,
    getLoading: (state) => state.isLoading,
    getProjectId: (state) => state.projectId,
    getTaskId: (state) => state.taskId,
    getPage: (state) => state.page,
    getTotal: (state) => state.total
  },

  mutations: {
    [mutation.SET_SORT_FIELD]: (state, field) => {
      state.sort.field = field;
    },
    [mutation.SET_SORT_TYPE]: (state, type) => {
      state.sort.type = type;
    },
    [mutation.SET_FILTER_NAME]: (state, searchName) => {
      state.filter.name = searchName;
    },

    [mutation.LOAD_TASKS]: (state, response) => {
      state.tasks = response.tasks;
      state.page = response.page;
      state.total = response.total
    },
    [mutation.LOAD_TASK]: (state, response) => {
      state.currentTask = response;
    },
    [mutation.SET_LOADING]: (state, value) => {
      state.isLoading = value
    },
    [mutation.CREATE_TASK]: (state, res) => {
      state.tasks.push(res);
    },
    [mutation.SET_PROJECT_ID]: (state, value) => {
      state.projectId = value
    },
    [mutation.SET_TASK_ID]: (state, res) => {
      state.taskId = res._id
    },
    [mutation.SET_UPDATED_TASK]: (state, updatedTask) => {
      const index = state.tasks.findIndex((task) => task.id === updatedTask._id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
    }
  },
  actions: {
    //установка значения в поле сортировки
    setInputSearch({ commit }, input) {
      commit("SET_INPUTSEARCH", input);
    },
    setSortField({ commit }, field) {
      commit("SET_SORT_FIELD", field);
    },
    setSortType({ commit }, type) {
      commit("SET_SORT_TYPE", type);
    },
    setFilterName({ commit }, searchName) {
      commit("SET_FILTER_NAME", searchName);
    },
    //вывод задач
    searchTaskAxios({ commit, state }) {
      commit('SET_LOADING', true);
      axios
        .post(
          `${user.baseUrl}/tasks/search`,
          {
            limit: 150,
            sort: {
              field: state.sort.field,
              type: state.sort.type,
            },
            filter: {
              name: state.filter.name,
            },
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
          commit("LOAD_TASKS", res.data);
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          commit('SET_LOADING', false);
        })
    },
    searchTaskId({ commit, state }, id) {
      axios
        .get(`${user.baseUrl}/tasks/${id}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        })
        .then(res => commit("LOAD_TASK", res.data));
    },
    
    createTaskAxios({commit,state}, payload){
      commit('SET_LOADING', true)
      axios
      .post(
        `${user.baseUrl}/tasks`,
        {
          name: payload.name,
          description: payload.description,
          projectId: payload.projectId,
          executor: payload.executor

        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          commit('SET_LOADING', false),
          commit('CREATE_TASK', res.data),
          commit('SET_TASK_ID', res.data)
        })
    
        .finally(() => {
          commit('SET_LOADING', false);
        })
      
    },

    editTask({commit,state}, task){
      axios
      .put(
        `${user.baseUrl}/tasks`,
        {
          _id: task.taskId,
          name: task.name,
      description: task.description,
      projectId: task.projectId,
      executor: task.executor,
        },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
      commit('SET_UPDATED_TASK', res.data)
    console.log(res.data)}
      )
      .catch((err) => {
        console.log(err)
      })
    },

    deleteTask({commit, state}, id){
      axios
      .delete(
        `${user.baseUrl}/tasks/${id}`,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        })
        .then(res => console.log(res.data));
    }
  
  },
};
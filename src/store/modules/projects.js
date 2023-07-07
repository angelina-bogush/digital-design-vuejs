import axios from 'axios'
const user = {
    baseUrl: "http://45.12.239.156:8081/api",
    login: "bogush.a",
    password: "jc63fk",
    token:
      localStorage.getItem('token')
  };
export default{
    state: {
        projects:[]
    },
    getters: {
        allProjects(state){
            return state.projects
        }
    },
    mutations: {
        UPDATE_PROJECTS(state, response){
            state.projects = response.projects
            console.log(state.projects)
        },
        CREATE_PROJECT(state, res){
            state.projects.push(res.data)
            console.log(state.projects)
        }
    },
    actions: {
        async searchProjectFetch(context) {
            const res = await fetch(`${user.baseUrl}/projects/search`, {
              method: "POST",
              headers: {
                authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            })
            const response = await res.json()
           context.commit('UPDATE_PROJECTS', response)
    },
    createProjectAxios({commit}) {
        axios
          .post(
            `${user.baseUrl}/projects`,
            { name: "Project 21", code: "#21" },
            {
              headers: {
                authorization: `Bearer ${user.token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            commit('CREATE_PROJECT', res)
            // id = res.data._id;
            // localStorage.setItem('id', id)
          })
          .catch((err) => {
            console.log(err);
          });
      }
}
}
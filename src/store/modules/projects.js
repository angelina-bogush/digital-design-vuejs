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
        updateProjects(state, response){
            state.projects = response.projects
            console.log(response.projects)
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
           context.commit('updateProjects', response)
    }
}
}
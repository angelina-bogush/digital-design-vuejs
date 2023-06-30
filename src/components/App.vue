<template>
  <div id="app">
   <pageTasks></pageTasks>
    <!-- <pageProjects></pageProjects>  -->
   <!-- <pageUser></pageUser>   -->
  </div>
</template>


<script>
import pageTasks from '@/views/pageTasks.vue'
import pageProjects from '@/views/pageProjects.vue'
import pageUser from '@/views/pageUser.vue'
export default{
  name: 'app',
  data(){     
    return {
     
    }
  },
  components: {
    pageTasks,
    pageProjects,
    pageUser
}
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
}
*{
  box-sizing: border-box;
  margin: 0;
}
</style>

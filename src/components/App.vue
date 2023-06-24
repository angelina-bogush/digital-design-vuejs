<template>
  <div id="app">
   <pageTasks></pageTasks>
   <!-- <pageProjects></pageProjects> -->
  </div>
</template>


<script>
import pageTasks from '@/views/pageTasks.vue'
import pageProjects from '@/views/pageProjects.vue'
export default{
  name: 'app',
  data(){     
    return {
     
    }
  },
  components: {
    pageTasks,
    pageProjects
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}
</style>

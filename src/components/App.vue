<template>
  <div id="app">
    <navigation @changePage="changePageClick"></navigation>
   <pageTasks v-if="currentPage === 'pageTasks'"></pageTasks>
    <pageProjects v-if="currentPage === 'pageProjects'"></pageProjects>  
    <pageCreateTask></pageCreateTask>
  </div>
</template>


<script>
import navigation from '@/components/navigation/navigation.vue';
import pageCreateTask from '@/views/pageCreateTask.vue'
import pageTasks from '@/views/pageTasks.vue'
import pageProjects from '@/views/pageProjects.vue'
import pageUser from '@/views/pageUser.vue'
export default{
  name: 'app',
  data(){     
    return {
     currentPage: 'pageTasks'
    }
  },
  components: {
    navigation,
    pageTasks,
    pageProjects,
    pageUser,
    pageCreateTask
},
methods:{
   changePageClick(page){
    this.currentPage = page;
    console.log(page)
   }
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

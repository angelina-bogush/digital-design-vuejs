<template>
  <div id="app">
   <navigation></navigation>
   <Project></Project> 
   <Task></Task>
   <EmptyProject></EmptyProject>
  </div>
</template>


<script>
import navigation from '@/components/navigation/navigation.vue';
import Project from '@/components/project/project.vue';
import Task from '@/components/task/task.vue';
import EmptyProject from '@/components/empty-project/emptyProject.vue'
export default{
  name: 'app',
  data(){
    return {
     
    }
  },
  components: {
    navigation,
    Project,
    Task,
    EmptyProject
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

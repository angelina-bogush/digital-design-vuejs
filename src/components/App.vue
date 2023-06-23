<template>
  <div id="app">
   <toDoList :list="todos"/>
  </div>
</template>


<script>
import toDoList from './toDoList.vue';
export default{
  name: 'app',
  data(){
    return {
      todos: ['Домашка по вью', 'Приготовить завтрак', 'выпить кофе']
    }
  },
  components: {
    toDoList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

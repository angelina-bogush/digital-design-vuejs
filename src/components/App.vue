<template>
  <div id="app">
    <router-view></router-view>
    <!-- <ViewLayout></ViewLayout> -->
  </div>
</template>

<script>
import ViewLayout from '@/views/ViewLayout.vue'
export default{
  name: 'app',
  data(){     
    return {
     currentPage: 'pageTasks'
    }
  },
  components: {
   ViewLayout,
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
@import '@/components/elements/variables.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
     
}
*{
  box-sizing: border-box;
  margin: 0;
}
a{
  color: $color-black;
  text-decoration: none;
}
</style>

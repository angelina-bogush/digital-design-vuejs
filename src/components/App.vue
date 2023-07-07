<template>
  <div id="app">
    <!-- <Navigation></Navigation> -->
    <!-- <ViewUser></ViewUser> -->
    <!-- <ViewsProjects></ViewsProjects> -->
    <router-view></router-view>
    <!-- <ViewLayout></ViewLayout> -->
  </div>
</template>

<script>
import ViewLayout from '@/views/ViewLayout.vue'
import Navigation from './navigation/Navigation.vue';
import ViewUser from '@/views/ViewUser.vue'
import ViewsProjects from '@/views/ViewsProjects.vue';
export default{
  name: 'app',
 
  components: {
    ViewLayout,
    Navigation,
    ViewUser,
    ViewsProjects
},
methods:{
   changePageClick(page){
    this.currentPage = page;
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

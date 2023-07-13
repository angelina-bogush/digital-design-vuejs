<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name: 'app',
 
  components: {
},
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
     
}
html{
 height: 100vh;
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

<template>
    <div class="container">
    <div class="page">
        <h2>Страница авторизации</h2>
       <router-link to="/users"> <Button variant="primary" name="Войти"></Button></router-link>
       <Button variant="secondary" name="Войти" @click="changeAuth"></Button>
    </div>
</div>
    </template>
    
    <script>
    export default{
    name:'ViewAuth',
      data(){
        return{
            isAuth: false
        }
      },
      methods:{
        changeAuth(){
            this.isAuth = !this.isAuth;
            localStorage.setItem('auth', this.isAuth);
            console.log(localStorage.getItem('auth'))
           
        }
      },
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';
    .auth{
        height: 100%
    }
    </style>
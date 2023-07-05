<template>
    <div class="container">
    <div class="page">
        <h2>Страница авторизации</h2>
        <Button variant="primary" name="Войти" @click="changeAuth"></Button>
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
           
        }
      }
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';
    .auth{
        height: 100%
    }
    </style>
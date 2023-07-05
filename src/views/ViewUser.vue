<template>
    <div class="container">
    <div class="page-users">
        <h2>Список пользователей</h2>
        <p>Иванов Иван Иванович</p>
        <p>Иванов Иван Иванович</p>
    </div>
</div>
    </template>
    
    <script>
    export default{
    name:'ViewUser',
    beforeRouteEnter(to,from,next){
        if(localStorage.getItem('auth') === 'true'){
          next()
        } else {
          next('/')
        }
      }
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';
    .page-users{
        border: 1px solid rgba(0,0,0,.15);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        height: 100%;
        padding: $gap;
        p{
            border-bottom: 1px solid $color-black;
        }
    }
    </style>
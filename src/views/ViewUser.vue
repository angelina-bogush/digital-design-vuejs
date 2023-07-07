<template>
    <div class="container">
      <div class="user-search-container">
        <Input :inputStyle="'input_search_default'" 
        placeholder="Поиск...">
        <template #search>
          <Icon :className="'search-input'" :iconClass="'search'"
          width="24px" height="24px"></Icon>
      </template>
      </Input>


        <DropdownButton :variant="'secondary'">
          <template #icon>
            <Icon :iconClass="'arrow-up'"
            width="16px" 
            height="16px"></Icon>
        </template>

        </DropdownButton>

      </div>
    <UsersList :users="users"></UsersList>
</div>
    </template>
    
    <script>
    import UsersList from '@/components/users/UsersList/UsersList.vue'
    export default{
    name:'ViewUser',
    components:{
      UsersList
    },
    beforeRouteEnter(to,from,next){
        if(localStorage.getItem('auth') === 'true'){
          next()
        } else {
          next('/')
        }
      },
      data(){
        return{
          users:[
            {name:'Котов Сергей в', id: 1},
            {name:'Котов Сергей в', id: 2},
            {name:'Котов Сергей в', id: 3},
            {name:'Котов Сергей в', id: 4}
          ]
        }
      }
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';
  .user-search-container{
    display: flex;
    gap: $gap;
  }
  .user__search-input{
    width: 910px
  }
  .arrow-up{
    width: 24px;
    height: 24px
  }
    </style>
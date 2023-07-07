<template>
    <div class="container">
      <div class="search-container">
       <SearchInput v-model="inputSearch" @clickSearchIcon="searchUser"></SearchInput>
        <DropdownButton :variant="'secondary'" @click="isArrowUp = !isArrowUp">
          <template #icon>
            <Icon :iconClass="iconClass"
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
    computed: {
      iconClass(){
        if(this.isArrowUp){
          return 'arrow-up'
        }
        if(!this.isArrowUp){
          return 'arrow-down'
        }
      }
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
          isArrowUp: true,
          inputSearch: '',
          users:[
            {name:'Котов Сергей в', id: 1},
            {name:'Котов Сергей в', id: 2},
            {name:'Котов Сергей в', id: 3},
            {name:'Котов Сергей в', id: 4}
          ]
        }
      },
      methods:{
        searchUser(){
          const user = {
            name: this.inputSearch
          }
          console.log(user);
          this.inputSearch = ''
        }
      }
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';
  .search-container{
    display: flex;
    gap: $gap;
  }
  .arrow-up{
    width: 24px;
    height: 24px
  }
    </style>
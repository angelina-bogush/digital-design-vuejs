<template>
  <div class="pageUsers">
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
    <UsersList :users="allUsers"></UsersList>
</div>
    </template>
    
    <script>
    import UsersList from '@/components/users/UsersList/UsersList.vue'
    import { mapActions, mapGetters } from 'vuex'
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
        }
      },
      computed:{
        ...mapGetters({
          allUsers: 'users/allUsers'
        })
      },
      methods:{
       ...mapActions({
        searchUser: 'users/searchUserAxios'
       }) 

      },
      mounted(){
        this.searchUser()
      }
    }
    </script>
    
    <style lang="scss">
    @import '@/components/elements/variables.scss';

    .pageUsers {
      height: calc(100% - 90px);
      padding: $gap;
      display: flex;
      flex-direction: column;
      gap: $gap;
    }

    .search-container {
      display: flex;
      gap: $gap;
    }

    .arrow-up {
      width: 24px;
      height: 24px
}</style>
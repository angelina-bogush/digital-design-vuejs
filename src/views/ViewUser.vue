<template>
  <div class="pageUsers" :class="{ disabled: getLoading}">
    <div v-if='getLoading' class="loader-container">
      <div class="loader">
      </div>
    </div>
    <div class="search-container">
      <div class="search-input-container">
        <SearchInput v-model="inputSearch" @input="searchUsersInput"></SearchInput>
        <DropdownButton :variant="'secondary'" @click="setSortTypeClick">
          <template #icon>
            <Icon :iconClass="iconClass" width="16px" height="16px"></Icon>
          </template>
        </DropdownButton>
      </div>
      <Button class="button__user" :variant="'primary'" :name="'Добавить пользователя'"></Button>

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
      },
      ...mapGetters({
          allUsers: 'users/allUsers',
          getLoading: 'users/getLoading'
        })
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
          sortType: 'ask',
        }
      },
      methods:{
       ...mapActions({
        searchUsers: 'users/searchUserAxios',
        setSortType: 'users/setSortType',
        setFilterName: 'users/setFilterName'
       }),
       setSortTypeClick(){
        this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.setSortType(this.sortType);
            console.log(this.sortType)
            this.searchUsers()
       },
       searchUsersInput(){
        if(this.inputSearch.length !== 0){
            const searchValue = this.inputSearch.toLowerCase();
            this.setFilterName(searchValue);
            this.searchUsers()
            } else {
                this.setFilterName(''); // Сбросить фильтр
                this.searchUsers()
            }
       }

      },
      mounted(){
        this.searchUsers()
      }
    }
    </script>
    
    <style lang="scss" scoped>
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
      gap: 120px
    }
.search-input-container{
  display: flex;
      gap: $gap;
}
    .arrow-up {
      width: 24px;
      height: 24px
}
.disabled{
  pointer-events: none;
}
</style>
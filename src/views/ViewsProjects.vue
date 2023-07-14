<template>
    <div class="pageProject" :class="{ disabled: getLoading}" >
        <div v-if='getLoading' class="loader-container">
        <div class="loader">
        </div>
       </div>
        <div class="search-container">
            <SearchInput v-model="inputSearch" @input="searchProjectsInput"></SearchInput>
            <div class="dropdowns-container">
            <Select 
            :options="options" 
            @selectOption="selectOptionClick"
            :selected="selected"
            class="input-select">
                 <template #icon>
                    <Icon :iconClass="'nav'"
                    :color="'#8E8E8E'"
                    width="24px" height="24px"></Icon>
                </template>
            </Select>
            <Button :buttonClass="'button_default_secondary'" 
             @click="setSortTypeClick">
                <template #icon>
                    <Icon :iconClass="iconClass"
                    width="16px" 
                    height="16px"></Icon>
                </template>
            </Button>
           </div>
            <Button :buttonClass="'button_default_secondary'"><template #name>Добавить</template></Button>
        </div>
        <template v-if="displayProjects.length">
            <ProjectList :projects="displayProjects" />
        </template>
        
        <template v-if="displayProjects.length === 0">
            <emptyProject :text="'Ни один проект не соответствует результатам поиска'">
            </emptyProject>
        </template>
        <template v-if="allProjects === 0">
            <emptyProject :text="'Нe создана ни одна задача'"><Button :buttonClass="'button_default_primary'"><template #name>Добавить</template></Button>
            </emptyProject>
        </template>
    </div>
</template>

<script>
import emptyProject from '@/components/empty-project/emptyProject.vue';
import ProjectList from '@/components/projects/ProjectList/ProjectList.vue';
import { mapActions, mapGetters } from 'vuex';

export default{
    name: 'ViewsProjects',
    data(){
        return{
        isArrowUp: true,
        sortType: 'ask',
          inputSearch: '',
          filteredProjects: [],
          showEmptyProjects: false,
          selected: 'По названию',
          options:[
            {name: 'По названию', value: 'name'},
            {name: 'По автору', value: 'author'},
            {name: 'По дате создания',  value: 'dateCreated'},
            {name: 'По дате обновления',  value: 'dateEdited'}
          ]
        }
    },
    components: {
    ProjectList,
    emptyProject
    },
    computed: {
        ...mapGetters({
            allProjects: 'projects/allProjects',
            getLoading: 'projects/getLoading',
            getToken: 'users/getToken'
        }),
        iconClass() {
            if (this.isArrowUp) {
                return 'arrow-up'
            }
            if (!this.isArrowUp) {
                return 'arrow-down'
            }
        },
        displayProjects() {
            return this.filteredProjects.length ? this.filteredProjects : this.allProjects;
  }
    },
    methods: {
        ...mapActions({
            createProjectAxios: 'projects/createProjectAxios', 
            searchProjectAxios: 'projects/searchProjectAxios', 
            setSortField: 'projects/setSortField',
            setSortType: 'projects/setSortType', 
            setFilterName: 'projects/setFilterName'}),
        setSortTypeClick(){
            this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.setSortType(this.sortType);
            this.searchProjectAxios()
            console.log(this.getToken)

        },
        filterByName(searchName){
            this.setFilterName(searchName);
            this.searchProjectAxios()
        },
        //выбор опции сортировки при клике
        selectOptionClick(selectedOption, selectedValue) {
            this.selected = selectedOption;
            this.setSortField(selectedValue);
            this.searchProjectAxios()
        },
        searchProjectsInput(){
        if(this.inputSearch.length !== 0){
            const searchValue = this.inputSearch.toLowerCase();
            this.setFilterName(searchValue);
            this.searchProjectAxios()
            } else {
                this.setFilterName(''); // Сбросить фильтр
                this.searchProjectAxios()
            }
        }
    },
beforeRouteEnter(to, from, next){
    const isAuth = localStorage.getItem('token');
    if(!isAuth){
        next('/login')
    } else {
        next()
    }
},

    mounted(){
       this.searchProjectAxios()
    }
}
</script>   

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.pageProject{
    padding: $gap;
    display: flex;
    flex-direction: column;
    gap: $gap;
    height: calc(100% - 90px);
}
.disabled{
    pointer-events: none;
}
.search-container{
    max-height: 42px;
    display: flex;
    gap: 120px
}
.dropdowns-container{
    display: flex;
}
.filter{
    border-radius: none;
}
.overlay{
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);

}
</style>
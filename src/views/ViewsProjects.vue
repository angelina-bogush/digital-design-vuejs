<template>
    <div class="pageProject">
        <div v-if="getLoading" class="loader-container">
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
                    width="16px" height="16px"></Icon>
                </template>
            </Select>
            <DropdownButton :variant="'secondary'" 
             @click="setSortTypeClick">
                <template #icon>
                    <Icon :iconClass="iconClass"
                    width="16px" 
                    height="16px"></Icon>
                </template>
            </DropdownButton>
           </div>
            <Button :variant="'secondary'" :name="'Добавить'" ></Button>
        </div>
        <template v-if="displayProjects.length">
            <ProjectList :projects="displayProjects" />
        </template>
        
        <template v-else>
            <emptyProject :text="'Ни один проект не соответствует результатам поиска'">
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
            getLoading: 'projects/getLoading'
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
        // createProject() {
        // },
        setSortTypeClick(){
            this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.setSortType(this.sortType);
            this.searchProjectAxios()

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
    async mounted(){
       this.searchProjectAxios()
       console.log(this.getLoading)
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
.loader{
    animation: spin 2s linear infinite; 
    border: 5px solid $primary-disabled-color; 
    border-top: 5px solid $primary-default-color; 
    border-radius: 50%;
    width: 50px;
    height: 50px;
}
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
.loader-container{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%
}
</style>
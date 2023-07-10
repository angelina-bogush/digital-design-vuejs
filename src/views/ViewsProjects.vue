<template>
    <div class="pageProject">
        <div class="search-container">
            <SearchInput v-model="inputSearch" @input="searchProjects"></SearchInput>
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
            <emptyProject :text="'Не создан ни один проект'"></emptyProject>
        </template>
    </div>
</template>

<script>
import emptyProject from '@/components/empty-project/emptyProject.vue';
import ProjectList from '@/components/projects/ProjectList/ProjectList.vue';
import { mapActions } from 'vuex';

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
        iconClass() {
            if (this.isArrowUp) {
                return 'arrow-up'
            }
            if (!this.isArrowUp) {
                return 'arrow-down'
            }
        },
        allProjects() {
            return this.$store.getters.allProjects;
        },
        displayProjects() {
            return this.filteredProjects.length ? this.filteredProjects : this.allProjects;
  }
    },
    methods: {
        ...mapActions(['createProjectAxios', 'searchProjectAxios', 'setSortField', 'setSortType', 'setFilterName']),
        // createProject() {
        // },
        //передаем значение полей сортировки в  store
        sortByField(field) {
            this.setSortField(field); // передаем в store
            this.searchProjectAxios()
        },
        //значение по убыванию/возрастанию
        sortByType(type) {
            this.setSortType(type);
            this.searchProjectAxios()
        },
        setSortTypeClick(){
            this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.sortByType(this.sortType)
            console.log(this.sortType)

        },
        filterByName(searchName){
            this.setFilterName(searchName);
            this.searchProjectAxios()
        },
        //выбор опции сортировки при клике
        selectOptionClick(selectedOption, selectedValue) {
            this.selected = selectedOption;
            this.sortByField(selectedValue)
        },
        searchProjects() {
            if(this.inputSearch.length !== 0){
            const searchValue = this.inputSearch.toLowerCase();
            this.filterByName(searchValue);
            } 
        }
    },
    async mounted(){
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
    gap: $gap
}
.search-container{
    max-height: 42px;
}
.dropdowns-container{
    display: flex;
}
.filter{
    border-radius: none;
}
</style>
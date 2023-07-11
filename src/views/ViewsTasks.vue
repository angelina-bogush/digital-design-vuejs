<template>
    <div class="pageTask">
        <div class="search-container">
            <SearchInput v-model="inputSearch" @input="searchTasksInput"></SearchInput>
            <div class="dropdowns-container">
            <Select 
            :options="tasksOptions" 
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
        <template v-if="allTasks.length">
            <TaskList :tasks='allTasks' />
        </template>
        <template v-else>
            <emptyProject :text="'Ни одна задача не соответствует результатам поиска/фильтрации'">
            </emptyProject>
        </template>

    </div>
</template> 

<script>
import TaskList from '@/components/tasks/TaskList/TaskList.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue';
import { mapActions, mapGetters } from 'vuex';

export default{
    name: 'pageTasks',
    components: {
     TaskList,
     emptyProject
     
    },
    computed:{
        ...mapGetters({
            tasksOptions: 'tasks/tasksOptions',
            allTasks: 'tasks/allTasks'
        }),
        iconClass() {
            if (this.isArrowUp) {
                return 'arrow-up'
            }
            if (!this.isArrowUp) {
                return 'arrow-down'
            }
        },
    },
    methods:{
        ...mapActions({
            searchTasks: 'tasks/searchTaskAxios',
            setSortField: 'tasks/setSortField',
            setSortType: 'tasks/setSortType', 
            setFilterName: 'tasks/setFilterName',
            setInputSearch: 'tasks/setInputSearch'
        }),
        selectOptionClick(selectedOption, selectedValue) {
            this.selected = selectedOption;
            this.setSortField(selectedValue);
            this.searchTasks()
        },
        // filterByName(searchName){
        //     this.setFilterName(searchName);
        //     this.searchTasks()
        // },
        setSortTypeClick(){
            this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.setSortType(this.sortType);
            this.searchTasks()
        },
        searchTasksInput(){
        if(this.inputSearch.length !== 0){
            const searchValue = this.inputSearch.toLowerCase();
            this.setFilterName(searchValue);
            this.searchTasks()
            } else {
                this.setFilterName(''); // Сбросить фильтр
                this.searchTasks()
            }
        }
    },
    data(){
        return{
            inputSearch: '',
            isArrowUp: true,
            sortType: 'ask',
            selected: 'По названию',
        }
    },
    mounted(){
        this.searchTasks();
    }
}
</script>
<style lang="scss">
@import '@/components/elements/variables.scss';
 .pageTask{
    height: calc(100% - 90px);
    padding: $gap;
    display: flex;
    flex-direction: column;
    gap: $gap;
 }
 li{
    list-style-type: none;
 }
 ul{
 padding: 0;
 }
 .search-container{
    max-height: 42px;
    display: flex;
    gap: 120px
}
 .input-select{
    width: 175px
 }
 .dropdowns-container{
    display: flex;
 }
</style>
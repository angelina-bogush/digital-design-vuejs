<template>
    <div class="pageTask">
        <div class="search-container">
            <SearchInput v-model="inputSearch" @input="searchTasks"></SearchInput>
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
            <emptyProject :text="'Не создана ни одна задача'"></emptyProject>
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
            setFilterName: 'tasks/setFilterName'
        }),
        selectOptionClick(selectedOption, selectedValue) {
            this.selected = selectedOption;
            this.setSortField(selectedValue);
            this.searchTasks()
        },
        sortByType(type) {
            this.setSortType(type);
            this.searchTasks()
        },
        setSortTypeClick(){
            this.isArrowUp = !this.isArrowUp;
            if(this.isArrowUp){
               this.sortType = 'ask'
            } else {
                this.sortType = 'desc'
            }
            this.sortByType(this.sortType)

        },
    },
    data(){
        return{
            inputSearch: '',
            isArrowUp: true,
            sortType: 'ask',
            selected: 'По названию',
            // tasks:[
            //     {
            //     id: 1,
            //     title: 'Описание задачи',
            //     number: 1,
            //     creator: 'Здесь описание создания',
            //     changes: 'Здесь описание изменений'
            //      },
            //      {
            //      id: 2,
            //     title: 'Описание задачи',
            //     number: 2,
            //     creator: 'Здесь описание создания',
            //     changes: 'Здесь описание изменений'
            //      },
            //      {
            //         id: 3,
            //     title: 'Описание задачи',
            //     number: 3,
            //     creator: 'Здесь описание создания',
            //     changes: 'Здесь описание изменений'
            //      },
            //      {
            //         id: 4,
            //     title: 'Описание задачи',
            //     number: 4,
            //     creator: 'Здесь описание создания',
            //     changes: 'Здесь описание изменений'
            //      },
            //      {
            //         id: 5,
            //     title: 'Описание задачи',
            //     number: 5,
            //     creator: 'Здесь описание создания',
            //     changes: 'Здесь описание изменений'
            //      }
            // ]
            
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
    padding: $gap
 }
 li{
    list-style-type: none;
 }
 ul{
 padding: 0;
 }
</style>
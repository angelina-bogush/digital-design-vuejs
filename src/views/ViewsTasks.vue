<template>
    <div class="pageTask" :class="{ disabled: getLoading}">
        <div v-if='getLoading' class="loader-container">
        <div class="loader">
        </div>
       </div>
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
            <router-link to="/create-task"><Button :buttonClass="'button_default_secondary'" ><template #name>Добавить</template></Button></router-link>
        </div>
        <template v-if="displayTasks.length">
            <TaskList :tasks='displayTasks' @deleteTask="deleteTaskClick"/>
            <template v-if="showModalDelete">
            <ModalDelete @clickCancel="cancelDelete" @create="deleteTaskModal" :agree="'Удалить'" :title="'Удаление'">
                <p class="modal__text">Вы уверены, что хотите <span>удалить</span> задачу "{{ this.taskName }}"?</p>
            </ModalDelete>
            </template>
        </template>
        <template v-if="allTasks === 0">
            <emptyProject :text="'Нe создана ни одна задача'"><Button :buttonClass="'button_default_primary'"><template #name>Добавить</template></Button>
            </emptyProject>
        </template>
        <template v-if="displayTasks.length === 0">
            <emptyProject :text="'Ни одна задача не соответствует результатам поиска/фильтрации'">
            </emptyProject>
        </template>
        <Pagination :total="this.getTotal" :currentPage="this.getPage" 
        @changePage="clickChangePage" @changePageInput="inputChangePage" @changePageArrow="clickArrowPage"></Pagination>
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
            allTasks: 'tasks/allTasks',
            getTotal: 'tasks/getTotal',
            getUserId: 'users/getUserId',
            getPage: 'tasks/getPage'
        }),
        iconClass() {
            if (this.isArrowUp) {
                return 'arrow-up'
            }
            if (!this.isArrowUp) {
                return 'arrow-down'
            }
        },
        displayTasks() {
            return this.filteredTasks.length ? this.filteredTasks : this.allTasks;
  }
    },
    methods:{
        ...mapActions({
            searchTasks: 'tasks/searchTaskAxios',
            setSortField: 'tasks/setSortField',
            setSortType: 'tasks/setSortType', 
            setFilterName: 'tasks/setFilterName',
            setInputSearch: 'tasks/setInputSearch',
            // getUser: 'users/getUser',
            deleteTaskAxios: 'tasks/deleteTask'

        }),
        selectOptionClick(selectedOption, selectedValue) {
            this.selected = selectedOption;
            this.setSortField(selectedValue);
            this.searchTasks()
        },
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
        getId(){
          this.getUser().then(() => console.log(this.getUserId))
        },
        searchTasksInput(){
        if(this.inputSearch.length !== 0){
            const searchValue = this.inputSearch.toLowerCase();
            this.setFilterName(searchValue);
            this.searchTasks()
        }
            else {
            this.setFilterName(''); // Сбросить фильтр
            this.searchTasks();
        }
    },
        deleteTaskClick(task){
            this.showModalDelete = true;
            this.taskName = task.taskName;
            this.taskIdtoDelete = task.id;
        },
        cancelDelete(){
            this.showModalDelete = false
        },
        deleteTaskModal(){
            this.deleteTaskAxios(this.taskIdtoDelete);
            this.showModalDelete = false;
            this.searchTasks();
        },
        clickChangePage(currentPage){
            this.searchTasks(currentPage)
        },
        inputChangePage(inputPage){
            this.searchTasks(inputPage)
        },
        clickArrowPage(page){
            this.searchTasks(page)
        }
    },
    data(){
        return{
            inputSearch: '',
            isArrowUp: true,
            sortType: 'ask',
            selected: 'По названию',
            showModalDelete: false,
            taskIdToDelete: '',
            taskName: '',
            filteredTasks: []
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
    padding-bottom: 0;
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
 .disabled{
    pointer-events: none;
}
</style>
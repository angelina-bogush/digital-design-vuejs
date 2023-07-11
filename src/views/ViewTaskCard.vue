<template>
    <div class="container">
        <Button :name="'Вернуться назад'" :variant="'secondary'" @click="goHome"></Button>
        <div class="task-card-container">
        <div class="task-card task-card_info">
            <div class="task__about task__about_heading">
                <div class="task__title-container">
                    <h3 class="task__title">#{{ this.getTask.number }}</h3>
                    <DropdownButton :variant="'secondary'">
                        <template #icon>
                            <Icon :iconClass="'menu'" :width="'14px'" :height="'14px'"></Icon>
                        </template>
                    </DropdownButton>
                </div>
                <h3 class="task__title"> {{ this.getTask.name }}</h3>
                <div class="task__info">
                    <p class="status">{{ this.getTask.status }}</p>
                    <p class="task__date">Создана {{ this.getTask.dateCreated }}</p>
                    <div class="task__user">
                        <span class="user-avatar"></span>
                        <span>{{ this.getTask.author }}</span>
                    </div>

                </div>
            </div>

            <div class="task__about">
                <p>{{ this.getTask.description }}</p>
                <div class="task__info">
                    <p class="task__date">Задача отредактирована {{ this.getTask.dateEdited }}</p>
                    <div class="task__user">
                        <span class="user-avatar"></span>
                        <span>{{ this.getTask.author }}</span>
                    </div>

                </div>
            </div>

            <div class="task__about">
                <h3 class="task__title">Активность</h3>
            </div>
        </div>
        <div class="task-card task-card_select">
            <div class="select_executor select">
                <label>Исполнитель</label>
                <Select :options="options" 
                @selectOption="selectOptionClick"
                :selected="selected"
                class="input-select">
                <template #icon>
                    <Icon :iconClass="'nav'"
                    :color="'#8E8E8E'"
                    width="16px" height="16px"></Icon>
                </template>
             </Select>
            </div>

            <div class="select_status select">
                <label>Статус</label>
                <Select></Select>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "ViewTaskCard",
    data(){
        return{
            options:[
               { name:'Константиновв Иван'},
               { name:'Константиновв Иван' },
               { name:'Константиновв Иван'}
            ],
            selected: 'По названию',
        }
    },
    props:{
        id:{
            type: String
        }
    },
    methods: {
        ...mapActions({
        searchTask: 'tasks/searchTaskId'
    }),
        goHome() {
            this.$router.go(-1);
        },
        selectOptionClick(selectedOption) {
            this.selected = selectedOption;
        },
    
    },
    computed: {
        ...mapGetters({
            formatDate: 'formatDate',
            getTask: 'tasks/getTask'
            }),
        },
        mounted(){
    this.searchTask(this.id)
}
        // id() {
        //     return this.$route.params.id;
        // },
        // name() {
        //     return this.$route.params.name;
        // },
        // code() {
        //     return this.$route.params.code;
        // },
        // author() {
        //     return this.$route.params.author;
        // },
        // status() {
        //     return this.$route.params.status;
        // },
        // created() {
        //     return this.$route.params.created;
        // },
        // edited() {
        //     return this.$route.params.edited;
        // },
        // description() {
        //     return this.$route.params.description;
        // }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import '@/components/tasks/TaskItem/style.scss';
.container{
    padding: $gap;
}
.task-card {
    display: flex;
    flex-direction: column;
    height: calc(100% - 70px);
    padding: $gap;
    gap: $gap
}

.task__title {
    font-size: 24px;
    font-weight: 600;
}

.task__about {
    display: flex;
    flex-direction: column;
    gap: 16px;
   
}

.task__about_heading {
    border-bottom: 1px solid rgba(0, 0, 0, .15);
}

.task__info {
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding: 8px 0;
}

.task__date {
    color: $disabled-font-button
}

.task__user {
    display: flex;
    gap: 8px;
    align-items: center;
}
.task__title-container{
    display: flex;
    justify-content: space-between;
    
}
.task-card-container{
    display: flex;
    width: 100%;
    border: 1px solid $color-border-default;
}
.task-card_select{
    width: 30%
}
.task-card_info{
    width: 70%;
    border-right: 1px solid $color-border-default;
}
.input-select{
    width: 100%
}
.select{
    display: flex;
    flex-direction: column;
    gap: 8px
}
.select_executor{
    padding-bottom: $gap;
    border-bottom: 1px solid $color-border-default;
}


</style>
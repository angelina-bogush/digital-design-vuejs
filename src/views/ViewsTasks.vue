<template>
    <div class="pageTask">
        <template v-if="tasks.length">
            <TaskList :tasks='tasks' />
        </template>
        <template v-else>
            <emptyProject :text="'Не создана ни одна задача'"></emptyProject>
        </template>

    </div>
</template> 

<script>
import TaskList from '@/components/tasks/TaskList/TaskList.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue';

export default{
    name: 'pageTasks',
    components: {
     TaskList,
     emptyProject
     
    },
    data(){
        return{
            tasks:[
                {
                title: 'Описание задачи',
                number: 1,
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: 2,
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: 3,
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: 4,
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: 5,
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 }
            ]
            
        }
    }
}
</script>
<style lang="scss">
 .pageTask{
    height:  100%;
 }
 li{
    list-style-type: none;
 }
 ul{
 padding: 0;
 }
</style>
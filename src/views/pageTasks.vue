<template>
    <div class="pageTask">
        <navigation></navigation>
        <ul v-if="tasks.length">
            <li v-for="(task, index) in tasks" :key="index">
            <task :title="task.title"
                :number='index + 1'
                :creator="task.creator"
                :changes="task.changes" /> 
            </li>
        </ul>
            <template v-else>
            <emptyProject></emptyProject>
             </template>
             
    </div>
</template> 

<script>
import navigation from '@/components/navigation/navigation.vue';
import task from '@/components/task/task.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue';
import dropdownButton from '@/components/dropdownButton/dropdownButton.vue';

export default{
    components: {
     navigation,
     task,
     emptyProject
     
    },
    data(){
        return{
            tasks:[
                {
                title: 'Описание задачи',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
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
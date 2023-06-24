<template>
    <div class="pageTask">
        <navigation></navigation>
        <template v-if="tasks.length">
            <div v-for="task in tasks" :key="task.number">
            <task :task="task"></task>
            </div>
        </template>
            <template v-else>
            <emptyProject></emptyProject>
             </template>
    </div>
</template> 

<script>
import navigation from '@/components/navigation/navigation.vue';
import task from '@/components/task/task.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue'

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
                number: '1',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: '2',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 },
                 {
                title: 'Описание задачи',
                number: '3',
                creator: 'Здесь описание создания',
                changes: 'Здесь описание изменений'
                 }
            ]
            
        }
    }
}
</script>
<style lang="scss" scoped>
 .pageTask{
    height:  100%;
 }
</style>
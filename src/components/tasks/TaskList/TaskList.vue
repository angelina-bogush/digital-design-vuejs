<template>
<div class="container">
    <TaskItem v-for="(task, index) in tasks" :key="index"
     :task="task"
     @editTask="editTaskClick" 
     @deleteTask="deleteTaskClick"></TaskItem>
</div>
</template>

<script>
import TaskItem from '@/components/tasks/TaskItem/TaskItem.vue'
export default{
props: {
   tasks: {
    type: Array,
    default: () => []
   }
},
components:{
 TaskItem
},
methods:{
 editTaskClick(){
    console.log('Редактировать задачу')
 },
deleteTaskClick(){
    console.log('Удалить задачу')
}
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.container{
    padding: 0 $gap;
}
</style>
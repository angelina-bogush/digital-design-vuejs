<template>
<div>
    <TaskItem v-for="(task, index) in tasks" :key="index"
     :task="task" @deleteTask="deleteClick"></TaskItem>
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
   deleteClick(taskId){
      this.$emit('deleteTask', taskId)
   }
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
</style>
<template>
<div class="container">
    <TaskItem v-for="(task, index) in tasks" :key="index"
     :number='index + 1'
     :creator="task.creator"
     :changes="task.changes"
     :title="task.title"
     :tasks="tasks" ></TaskItem>
</div>
</template>

<script>
import TaskItem from '@/components/tasks/TaskItem/TaskItem.vue'
export default{
props: {
   tasks: Array
},
components:{
 TaskItem
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.container{
    padding: 0 $gap;
}
</style>
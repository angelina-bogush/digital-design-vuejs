<template>
<div class="container">
    <TaskItem v-for="(task, index) in tasks" :key="index"
     :task="task"></TaskItem>
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
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.container{
    padding: 0 $gap;
}
</style>
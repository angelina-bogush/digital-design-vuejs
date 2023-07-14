<template>
    <div >
        <ProjectItem v-for="(project, index) in projects" :key="index"
         :project="project"></ProjectItem>
    </div>
    </template>

<script>
import ProjectItem from '@/components/projects/ProjectItem/ProjectItem.vue';
export default{
components:{
ProjectItem
},
props:{
    projects:{
        type: Array,
        default: () => []
    }
},
methods:{
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
</style>
<template>
    <div class="pageProject">
 <navigation></navigation>
 <ul v-if="projects.length">
 <li v-for="(project, index) in projects" :key="index">
<project
        :name="project.name"
        :number="index + 1"
        :creator="project.creator"
        :changes="project.changes"/>
</li>
</ul>
<template v-else>
<emptyProject></emptyProject>
</template>
    </div>
</template>

<script>
import navigation from '@/components/navigation/navigation.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue';
import project from '@/components/project/project.vue'

export default{
    name: 'pageProjects',
    components: {
    navigation,
    project,
    emptyProject
    },
    data(){
        return{
            projects:[ 
                {
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            }
        ]
        }
    }
}
</script>   

<style lang="scss">
.pageProject{
    height: 100%
}
</style>
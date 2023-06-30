<template>
    <div class="pageProject">
 <navigation></navigation>
 <template v-if="projects.length">
<ProjectList
        :projects="projects"/>
</template>
<template v-else>
<emptyProject></emptyProject>
</template>
    </div>
</template>

<script>
import navigation from '@/components/navigation/navigation.vue';
import emptyProject from '@/components/empty-project/emptyProject.vue';
import ProjectList from '@/components/projects/ProjectList/ProjectList.vue'

export default{
    name: 'pageProjects',
    components: {
    navigation,
    ProjectList,
    emptyProject
    },
    data(){
        return{
            projects:[ 
                {
                    number: 1,
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
                number: 2,
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
                number: 3,
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
                number: 4,
            name: 'Название',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
                number: 5,
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
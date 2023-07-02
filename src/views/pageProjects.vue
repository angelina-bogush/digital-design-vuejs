<template>
    <div class="pageProject">
 <template v-if="projects.length">
<ProjectList
        :projects="projects"/>
</template>
<template v-else>
<emptyProject :text="'Не создан ни один проект'"></emptyProject>
</template>
    </div>
</template>

<script>
import emptyProject from '@/components/empty-project/emptyProject.vue';
import ProjectList from '@/components/projects/ProjectList/ProjectList.vue'

export default{
    name: 'pageProjects',
    components: {
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
    height: calc(100% - 90px)
}
</style>
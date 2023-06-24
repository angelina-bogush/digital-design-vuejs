<template>
    <div class="pageProject">
 <navigation></navigation>
<!-- <project></project>  -->
<emptyProject></emptyProject>

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

    }
}
</script>   

<style lang="scss">
.pageProject{
    height: 100%
}
</style>
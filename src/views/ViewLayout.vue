<template>
<div class="layout">
<Navigation></Navigation>
<router-view />
</div>

</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue';
import ViewUser from './ViewUser.vue';
export default{
    name:'ViewLayout',
    components:{
    Navigation,
}
}
</script>

<style lang="scss">
.layout{
    height: 100%
}
</style>
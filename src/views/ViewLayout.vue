<template>
<div class="layout">
<Navigation></Navigation>
<router-view />
</div>

</template>

<script>
import Navigation from '@/components/navigation/Navigation.vue';
import ViewAuth from './ViewAuth.vue';
export default{
    name:'ViewLayout',
    components:{
    Navigation,
    ViewAuth
}
}
</script>

<style lang="scss">
.layout{
    height: 100%
}
</style>
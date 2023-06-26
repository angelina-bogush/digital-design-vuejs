<template>
<buttonUser>
     <svg-icon icon-class="nav" class-name="navigation__user-button" />
</buttonUser>
</template>

<script>
import buttonUser from '../button/button.vue';
export default{
    components:{
    buttonUser
}
}
</script>

<style>
@import '@/components/navigation/navigation.module.scss'
</style>
<template>
 <div>
 <button class="button navigation__button" :class="buttonClass" @click="clickButton">
 <iconButton></iconButton>
</button>
 </div> 
</template>

<script>
import iconButton from '../iconButton/iconButton.vue';
export default{
    components:{
    iconButton
}
}
</script>

<style>
@import '@/components/navigation/navigation.module.scss'
</style>
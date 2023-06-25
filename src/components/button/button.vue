<template>
    <div>
    <button class="button navigation__button">{{buttonName}}</button>
    </div> 
</template>

<script>
export default{
   props: {
    buttonName: String
   }

}
</script>

<style lang="scss">
@import '@/components/navigation/navigation.module.scss';
</style>
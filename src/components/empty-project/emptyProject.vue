<template>
    <div class="container">
        <div class="page">
           <p class="page__text">{{ text }}</p>
           <button class="button page__button">Добавить</button>
        </div>
    </div>

</template>

<script>
export default{
    name: 'emptyProject',
    props:{
        text: String
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import './style.scss'
</style>
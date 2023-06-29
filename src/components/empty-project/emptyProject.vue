<template>
    <div class="container">
        <div class="page">
           <p class="page__text">Не создан ни один проект</p>
           <button class="button page__button">Добавить</button>
        </div>
    </div>

</template>

<script>
export default{
    name: 'emptyProject'
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './empty-project.module.scss'
</style>
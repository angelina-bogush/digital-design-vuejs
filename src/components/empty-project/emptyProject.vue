<template>
    <div class="container">
        <div class="page">
           <p class="page__text">{{ text }}</p>
           <slot></slot>
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

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss'
</style>
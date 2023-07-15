
<template>
    <div>
        <form class="form" name="editForm" v-bind="$attrs">
            <!-- <slot name="input"></slot>
            <slot name="textarea"></slot>
            <slot name="password"></slot> -->
            <slot></slot>
        </form>
</div>

</template>

<script>
export default{
    name: 'Form'
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
.form {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: $gap;
padding: $gap;
}
</style>
<template>
    <button class="button_default" v-on="listeners" :class="buttonClass">
        <slot name="avatar"></slot>
        <slot name="icon"></slot>
        <slot name="menu"></slot>
    </button>
</template>

<script>
export default {
    name: 'DropdownButton',
    props: {
        variant: String,
        type: String,
    },
    data() {
        return {
            isDisabled: false
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners
            }
        },
        buttonClass() {
            if (this.type === 'disabled' && this.variant === 'primary') {
                return 'button_primary_disabled'
            }
            if (this.type === 'disabled' && this.variant === 'secondary') {
                return 'button_secondary_disabled'
            }
            if (this.variant === 'nav') {
                return 'button_default_nav'
            }
            if (this.variant === 'primary') {
                return 'button_default_primary'
            }
            if (this.variant === 'secondary') {
                return 'button_default_secondary'
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/Button/style.scss';
</style>
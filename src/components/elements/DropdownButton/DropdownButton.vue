<template>
 <div>
 <button class="button_default" v-on="listeners" :class="[buttonChangeClass, buttonClass]" @click="changeIsActive">
 <slot name="nameButton"></slot>
 <slot name="icon"></slot>

<div class="project-dropdown" :class="{'project-dropdown_opened': isActive}">
    <ul class="dropdown__list">
        <slot name="dropdown"></slot>
    </ul>
</div>
</button>
</div>

</template>

<script>
export default {
    name: 'DropdownButton',
    props: {
        variant: String,
        type: String,
        buttonClass: String
    },
    data() {
        return {
            isDisabled: false,
            isActive: false
        }
    },
    methods: {
            // editClick() {
            //     this.$emit('edit');
            // },
            // deleteClick() {
            //     this.$emit('deleteTask')
            // },
            changeIsActive(){
                this.isActive = !this.isActive
            }
        },
    computed: {
        listeners() {
            return {
                ...this.$listeners
            }
        },
    buttonChangeClass(){
        let classes = [];
        if (this.type === 'disabled' && this.buttonClass === 'button_default_primary') {
            classes.push('button_primary_disabled')
            }
            if (this.type === 'disabled' && this.variant === 'button_default_secondary') {
                classes.push('button_secondary_disabled')
            }
        return classes
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/Button/style.scss';

</style>
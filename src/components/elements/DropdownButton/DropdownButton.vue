<template>
 
 <button class="button_default" v-on="listeners" :class="buttonClass">
 <slot name="nameButton"></slot>
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
        borderRadius: String
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
    buttonClass(){
        let classes = [];
        if (this.type === 'disabled' && this.variant === 'primary') {
            classes.push('button_primary_disabled')
            }
            if (this.type === 'disabled' && this.variant === 'secondary') {
                classes.push('button_secondary_disabled')
            }
            if(this.borderRadius === 'left'){
            classes.push('border-radius_left')
        }
        if(this.borderRadius === 'right'){
            classes.push('border-radius_right')
        }
        if(this.variant === 'primary'){
            classes.push('button_default_primary')
        }
        if(this.variant === 'secondary'){
            classes.push('button_default_secondary')
        }
        return classes
    }
}
}
</script>

<style lang="scss">
@import '@/components/elements/Button/style.scss';

</style>
<template>
  <div class="input-container">
        <input v-bind="$attrs" :class='inputClass' required>
        <slot class="slot-search" name="search"></slot>
    </div>
</template>

<script>
export default {
    name: 'Input',
    inheritAttrs: false,
    props: {
        variant: String,
        inputStyle: String
    },
    data() {
        return {
            isError: false
        }
    },
    computed: {
        inputClass() {
            if (this.variant === 'disabled') {
                return 'input_disabled'
            }
            if (this.isError) {
                return 'input_error'
            } else {
                return this.inputStyle
            }
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss';


input::placeholder {
    color: $default-placeholder;
    font-size: 14px;
    font-family: 'Open Sans'
}
.input-container{
width: 100%;
display: flex;
position: relative;
}
.slot-search{
    position: absolute;
    top: 10px;
    right: 20px
}
</style>
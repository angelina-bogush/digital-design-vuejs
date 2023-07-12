<template>
  <div class="input-cont">
        <input v-bind="$attrs"
         class='input_default_empty' 
         @input="$emit('input', $event.target.value)" 
          required>
        
    </div>
</template>

<script>
export default {
    name: 'Input',
    inheritAttrs: false,
    props: {
        variant: String,
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
            }
        },
        // listeners() {
        //     return {
        //         ...this.$listeners
        //     }
        // }

    }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import './style.scss';


input::placeholder {
    color: $default-placeholder;
    font-size: 14px;
    font-family: 'Open Sans'
}
.input-cont{
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
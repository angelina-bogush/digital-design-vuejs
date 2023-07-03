<template>
    <div>
        <input
        :class="inputClass" class="input_default_empty" 
        v-bind="$attrs" required 
        @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: 'Input',
    model:{
        prop: 'value',
        event: 'input'
    },
    inheritAttrs: false,
    props: {
        variant: String
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
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss';

input {
    width: 100%
}

input::placeholder {
    color: $default-placeholder;
    font-size: 14px;
    font-family: 'Open Sans'
}
</style>
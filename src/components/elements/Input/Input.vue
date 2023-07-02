<template>
 <div>
<input  :class="inputClass" class="input_default_empty" v-bind="$attrs" required />
</div>
</template>

<script>
export default{
    name: 'Input',
    inheritAttrs: false,
    props:{
        variant: String
    },
    data(){
        return{
            isError: false
        }
    },
computed:{
      inputClass(){
          if(this.variant === 'disabled'){
             return 'input_disabled'
          }
          if(this.isError){
            return 'input_error'
          }
      }
}
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss';
input{
 width: 100%}
</style>
<template>
<input placeholder="Введите текст..." :class="inputClass">
</template>

<script>
export default{
    data(){
        return{
            isDisabled: false,
            isError: false,
        }
    },
computed:{
      inputClass(){
          if(this.isDisabled){
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
@import '@/components/input/input.module.scss'
</style>
<template>
    <div class="textarea-container">
   <textarea :class="inputClass" v-bind="$attrs" class="textarea_default"/>
   </div>
   </template>
   
   <script>
   export default{
       name: 'Textarea',
       inheritAttrs: false,
       props:{
           variant: String
       },
   computed:{
         inputClass(){
             if(this.variant === 'error'){
                return 'textarea_error'
             }
         }
   }
   }
   </script>

   <style lang="scss">
@import '@/components/elements/variables.scss';
.textarea-container{
    width: calc(100% - 120px)
}
.textarea_default{
    border: 1px solid $color-border-default;
    border-radius: 4px;
    min-height: 120px;
    width: 100%;
    padding: 10px 12px;
    resize: none
}
.textarea_error{
    border: 1px solid red;
}
textarea::placeholder{
    color: $default-placeholder;
    font-size: 14px;
    font-family:'Open Sans';
}
</style>
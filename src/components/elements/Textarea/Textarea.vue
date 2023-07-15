<template>
    <div class="textarea-container">
   <textarea :class="inputClass" v-bind="$attrs" class="textarea_default" @input="$emit('input', $event.target.value)"/>
   </div>
   </template>
   
   <script>
   export default{
       name: 'Textarea',
       inheritAttrs: false,
       props:{
           type: String
       },
   computed:{
         inputClass(){
             if(this.type === 'error'){
                return 'textarea_error'
             }
         }
   }
   }
   </script>

   <style lang="scss">
@import '@/components/elements/variables.scss';
.textarea-container{
    width:100%
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
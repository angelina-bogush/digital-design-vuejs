<template>
 <div>
    <button 
    class="button_default"
     v-bind="$attrs" 
    :class="[buttonChangeClass, buttonClass]"
    v-on="listeners">
   <slot name="name"> </slot>
   <slot name="icon"></slot>
  </button>
  </div>
</template>

<script>
export default{
  name: 'Button',
  inheritAttrs: false,
   props: {
    name: String,
    type: String,
    buttonClass: String
   },
   data(){
    return {
        isDisabled: false
   }
},
computed: {

  buttonChangeClass(){
    if(this.type === 'disabled' && this.buttonClass === 'button_default_nav'){
    return 'button_nav_disabled'
   }
   if(this.type === 'disabled' && this.buttonClass === 'button_default_primary'){
    return 'button_primary_disabled'
   }
   if(this.type === 'disabled' && this.buttonClass === 'button_default_secondary'){
    return 'button_secondary_disabled'
   }
  },
  listeners() {
            return {
                ...this.$listeners
            }
        }
      }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import './style.scss';
</style>
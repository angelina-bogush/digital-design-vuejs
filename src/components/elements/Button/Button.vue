<template>
 <div>
    <button class="button_default"
     v-bind="$attrs" 
    :class="buttonClass"
     @click="clickButton">{{name}}</button>
  </div>
</template>

<script>
export default{
  name: 'Button',
  inheritAttrs: false,
   props: {
    name: String,
    variant: String,
    type: String
   },
   data(){
    return {
        isDisabled: false
   }
},
computed: {
  buttonClass(){
    if(this.type === 'disabled' && this.variant === 'nav'){
    return 'button_nav_disabled'
   }
   if(this.type === 'disabled' && this.variant === 'primary'){
    return 'button_primary_disabled'
   }
   if(this.type === 'disabled' && this.variant === 'secondary'){
    return 'button_secondary_disabled'
   }
    if(this.variant === 'nav'){
        return 'button_default_nav'
    }
    if(this.variant === 'primary'){
      return 'button_default_primary' 
    }
    if(this.variant === 'secondary'){
      return 'button_default_secondary' 
    }
  }

},
methods: {
    clickButton(){

}
}
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss';
.button_is_disabled{
  color: $disabled-font-button;
  background-color: $primary-disabled-color;
   &:disabled{
    cursor: not-allowed;
   }
}
</style>
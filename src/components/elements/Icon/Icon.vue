<template>
    <div>
        <svg-icon
        v-bind="$attrs"
        :class-name="iconDisabled"/>
        <!-- <svg-icon icon-class="nav" class-name="navigation__user-button" /> -->
    </div>
</template>

<script>
export default{
    name: 'Icon',
    props:{
        class: String,
        icon: String,
        type: String
    },
    inheritAttrs: false,
    data(){
    return{
     isDisabled: false
    }
},
computed:{
    iconDisabled(){
  if(this.type === 'disabled'){
    return 'disabled'
  }}
}}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
.menu-image{
    color: $color-black;
    padding-right: 8px;
  
}
.disabled{
    color: $text-color-disabled;
}
.navigation__user-button{
    color: black
}
.svg-icon{
   margin: auto
}
</style>
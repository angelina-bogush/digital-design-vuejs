<template>
    <div>
    <button class="button_default button-container user-button_default" v-on="listeners" :class="[buttonChangeClass, buttonClass]" @click="changeIsActive">
    <span class="user-avatar"></span>
    <Icon  :iconClass="'nav'" :className="'icon_active'" :color="isActive ? '#DCDCDE' : '#FFF'"
    width="24px" height="24px"></Icon>
   
   <div class="project-dropdown" :class="{'project-dropdown_opened': isActive}" @click='handleDropdownClick'>
       <ul class="dropdown__list">
           <slot></slot>
       </ul>
   </div>
   </button>
   </div>
   
   </template>
   
   <script>
   export default {
       name: 'UserDropdown',
       props: {
           type: String,
           buttonClass: String
       },
       data() {
           return {
               isDisabled: false,
               isActive: false
           }
       },
       methods: {
               iconClass(){
                if(this.isActive){
                    return 'nav-active'
                } else {
                    return 'nav-default'
                }
               },
               changeIsActive(){
                   this.isActive = !this.isActive
               },
               handleDropdownClick(event) {
               event.stopPropagation();
           },
           },
       computed: {
           listeners() {
               return {
                   ...this.$listeners
               }
           },
       buttonChangeClass(){
           let classes = [];
           if (this.type === 'disabled' && this.buttonClass === 'button_default_primary') {
               classes.push('button_primary_disabled')
               }
               if (this.type === 'disabled' && this.variant === 'button_default_secondary') {
                   classes.push('button_secondary_disabled')
               }
               if(this.isActive){
                classes.push('user-button_active')
               }
           return classes
       }

      

   }
   }
   </script>
   
   <style lang="scss" scoped>
   @import '@/components/elements/Button/style.scss';
   .button-container{
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 4px;
   }
   .user-button_default{
    background-color: $primary-default-color;
    border: 1px solid $primary-default-color;
        &:hover{
            border: 1px solid white
        }
        &:active{
            background-color: $color-white;
        }
   }
   .user-button_active{
    background-color: $color-white;
   }
.nav-default{
    color: $color-white;
}
.nav-active{
    color: #DCDCDE
}
.project-dropdown{
  display: none;
}
.project-dropdown_opened{
    display: block;
    padding: 14px;
position: absolute;
background-color: $color-white;
left: 0;
top: 40px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
z-index: 2;
}
.icon_active{
    color: $primary-disabled-color
}
   </style>
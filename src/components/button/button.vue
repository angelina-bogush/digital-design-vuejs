<template>
    <div>
    <button class="button navigation__button" :class="buttonClass" @click="clickButton">{{buttonName}}</button>
    </div> 
</template>

<script>
export default{
   props: {
    buttonName: String
   },
   data(){
    return {
        isActive: false,
        isDisabled: false
   }
},
computed: {
  buttonClass(){
    if(this.isActive){
        return 'button_is_active'
    }
     if (this.isDisabled){
        return 'button_is_disabled'
    }
  }

},
methods: {
    clickButton(){
        this.isActive = !this.isActive;
}
}
}
</script>

<style lang="scss">
@import '@/components/navigation/navigation.module.scss';
</style>
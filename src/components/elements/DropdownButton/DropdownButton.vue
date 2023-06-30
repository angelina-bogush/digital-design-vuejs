<template>
 
 <button class="button" v-on="listeners">
 <slot name="icon"></slot>
 <slot name="menu"></slot>
</button>

</template>

<script>
export default{
    name: 'DropdownButton',
data(){
    return{

    }
},
 computed:{
listeners(){
    return{
        ...this.$listeners
    }
}
 }
}
</script>

<style>
.menu-image{
    margin: 0
}
</style>
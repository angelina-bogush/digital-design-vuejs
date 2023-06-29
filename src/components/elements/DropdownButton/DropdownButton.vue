<template>
 
 <button class="button" v-on="listeners">
 <Icon></Icon>
</button>

</template>

<script>
export default{
    name: 'DropdownButton',
    components:{
},
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
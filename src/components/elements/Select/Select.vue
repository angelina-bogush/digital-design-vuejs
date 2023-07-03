<template>
    <div class="select-container">
        <p 
        class="select-title"
        @click="areOptionsSeen = !areOptionsSeen"
        :class="{'active': areOptionsSeen}">{{ selected }}</p>
        <div class="options"
        v-if="areOptionsSeen">
            <p v-for="option in options"
             :key="option.value"
             @click="chooseOption">
                {{ option.name }}

            </p>

        </div>

    </div>
</template>

<script>
export default{
name:'Select',
props:{
    options: {
        type: Array,
        default: () => []
    },
    selected:{
        type: String,
        default: ''
    }
},
data(){
    return{
        areOptionsSeen: false
    }
},
methods:{
    chooseOption(event){
        const selectedOption = event.target.textContent;
        this.$emit('selectOption', selectedOption);
        this.areOptionsSeen = false
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.select-container{
    position: relative;
}
.select-title{
    border: 1px solid $color-border-default;
    cursor: pointer;
    padding: 10px;
    border-radius: 4px;
}
.active{
    border: 1px solid $color-black
}
.options{
    border: 1px solid $color-border-default;
    padding: 8px 0;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top:40px;
    left: 0px;
    width: 100%;
    cursor: pointer;
    p{
        padding: 8px 16px
    }
}
.options p:hover{
    background-color: $color-secondary-active;
}
</style>
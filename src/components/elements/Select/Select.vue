<template>
    <div class="select-container">
        <div 
        class="select-title"
        :class="{'active': areOptionsSeen}"
        @click="areOptionsSeen = !areOptionsSeen">{{ selected }}
        <slot name="icon"></slot>
    
    </div>
        <div class="options"
        v-if="areOptionsSeen">
            <p v-for="option in options"
             :key="option.value"
             :value="option.value"
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
        const selectedValue = event.target.getAttribute('value');
        this.$emit('selectOption', selectedOption, selectedValue);
        this.areOptionsSeen = false
    }
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.select-container{
    position: relative;
    z-index: 100;
}
.select-title{
    border: 1px solid $color-border-default;
    cursor: pointer;
    padding: 12px 6px 12px 10px;
    border-radius: 4px;
    width:172px;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    font-size: 14px;
}
.active{
    border: 1px solid $color-black
}
.options{
    border: 1px solid $color-border-default;
    padding: 8px 0;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top:45px;
    left: 0px;
    width: 100%;
    z-index: 100;
    background-color: $color-white;
    cursor: pointer;
    p{
        padding: 8px 16px;
        white-space: nowrap;
        z-index: 100;
        font-size: 14px;
    }
}
.options p:hover{
    background-color: $color-secondary-active;
    z-index: 100;
}
</style>
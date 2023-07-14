<template>
    <div class="select-container">
        <div 
        class="select-title"
        :class="{'active': areOptionsSeen}"
        v-on="listeners"
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
        const selectedOption = event.target.innerText;
        const selectedValue = event.target.getAttribute('value');
        this.$emit('selectOption', selectedOption, selectedValue);
        this.areOptionsSeen = false;
    }
},
computed:{
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
.select-container{
    position: relative;
}
.select-title{
    border: 1px solid $color-border-default;
    cursor: pointer;
    padding: 8px 8px 8px 10px;
    border-radius: 4px;
    width:100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    font-size: 14px;
    align-items: center;
}
.active{
    border: 1px solid $color-black
}
.options{
    border: 1px solid $color-border-default;
    overflow-y: scroll; 
    max-height: 216px;
    padding: 8px 0;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top:45px;
    left: 0px;
    width: 100%;
    cursor: pointer;
    p{
        padding: 8px 16px;
        white-space: nowrap;
        font-size: 14px;
        background-color: $color-white;
    }
}
.options p:hover{
    background-color: $color-secondary-active;
}
.options::-webkit-scrollbar{
width: 17px
}
.options::-webkit-scrollbar-track{
background-color: #F1F1F1;
}
.options::-webkit-scrollbar-thumb{
background-color: #C1C1C1;
}
</style>
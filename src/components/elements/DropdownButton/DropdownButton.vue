<template>
 <div>
 <button class="button_default" v-on="listeners" :class="[buttonChangeClass, buttonClass]" @click="changeIsActive">
 <slot name="nameButton"></slot>
 <slot name="icon"></slot>

<div class="project-dropdown" :class="{'project-dropdown_opened': isActive}">
    <ul class="dropdown__list">
        <li><span class="dropdown__link" @click="editClick">Редактировать</span></li>
        <li><span class="dropdown__link_delete" @click="deleteClick">Удалить</span></li>
    </ul>
</div>
</button>
</div>

</template>

<script>
export default {
    name: 'DropdownButton',
    props: {
        variant: String,
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
            editClick() {
                this.$emit('edit');
            },
            deleteClick() {
                this.$emit('deleteTask')
            },
            changeIsActive(){
                this.isActive =! this.isActive
            }
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
        return classes
    }
}
}
</script>

<style lang="scss">
@import '@/components/elements/Button/style.scss';
.project-dropdown{
    display: none
}
.project-dropdown_opened{
    display: block;
    padding: 14px;
position: absolute;
background-color: $color-white;
left: -90px;
top: 45px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
z-index: 2;
}
</style>
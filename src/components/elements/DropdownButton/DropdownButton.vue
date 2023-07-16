<template>
 <div>
 <button class="button_default" v-on="listeners" :class="[buttonChangeClass, buttonClass]" @click="changeIsActive">
 <slot name="nameButton"></slot>
 <slot name="icon"></slot>

<div class="project-dropdown" :class="{'project-dropdown_opened': isActive}">
    <ul class="dropdown__list">
        <slot name="dropdown"></slot>
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
            changeIsActive(){
                this.isActive = !this.isActive
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

<style lang="scss" scoped>
@import '@/components/elements/Button/style.scss';
.project-dropdown{
    display: none
}
  .project-dropdown_opened{
      display: block;
      padding: 16px;
  position: absolute;
  background-color: $color-white;
 right: 0;
  top: 43px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
  width: max-content
  }
  .dropdown__list{
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

</style>
<template>
    <div>
        <div class="overlay">
    <div class="modal-delete">
        <h3 class="modal__title">{{title}}</h3>
        <slot></slot>
        <div class="buttons-container">
            <Button :buttonClass="'button_default_secondary'" @click="cancel"><template #name>{{cancelled}}</template></Button>
            <Button :buttonClass="'button_default_primary'" @click="createProject"><template #name>{{agree}}</template></Button>
        </div>
    </div>
</div>
</div>
</template>

<script>
export default{
    props: {
     cancelled: {
    type: String,
    default: 'Отмена'
  },
  agree: {
    type: String,
    default: 'Cjplfnm'
  },
  title: {
    type: String,
    default: ''
  }

    },
    name:'ModalDelete',
    methods:{
        cancel(){
            this.$emit('clickCancel')
        },
        deleteClick(){
            this.$emit('deleteTask')
        },
        createProject(){
            this.$emit('create')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.modal-delete{
    min-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 100;
    
}
.modal__title{
    padding: 16px;
    font-size: 24px
}
.modal__text{
    padding: $gap;
    border-top: 1px solid $color-border-default;
    border-bottom: 1px solid $color-border-default;
    font-size: 14px;
    span{
        color: red
    }
}
.buttons-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 8px;
    padding: $gap
}
</style>
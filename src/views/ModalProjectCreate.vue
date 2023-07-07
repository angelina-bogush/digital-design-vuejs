<template>
<div class="modal-container">
    <ProjectEditModal :name="'Создание проекта'"></ProjectEditModal>
    <div class="buttons-container">
        <Button :variant="'secondary'" :name="'Отмена'"></Button>
        <Button :variant="'primary'" :name="'Создать проект'"></Button>

    </div>

</div>

</template>

<script>
export default{
    name: 'ModalProjectCreate'
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.modal-container{
    border: 1px solid black;
    max-width: 640px;
}
.buttons-container{
padding: $gap;
display: flex;
justify-content: flex-end;
gap: 8px
}
</style>
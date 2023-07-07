<template>
<div class="project-modal-container">

    <h2 class="modal__title">{{ name }}</h2>
    <div class="form-container">
      <Form class="modal-form">
        <div class="input-container">
        <label class="form__label" for="code">Код<p> *</p></label>
         <Input placeholder="Введите текст..."/>
        </div>
        <div class="input-container">
            <label class="form__label" for="code">Название<p> *</p></label>
             <Input placeholder="Введите текст..."/>
            </div>
      </Form>
    </div>

</div>

</template>

<script>
export default {
    props: {
        name: String
    },
    name: 'ProjectEditModal'
}
</script>
<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import './style.scss'
</style>
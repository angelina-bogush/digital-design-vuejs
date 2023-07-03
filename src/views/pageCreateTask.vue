<template>
    <div class="page-create-task">
        <navigation></navigation>
        <div class="container">
            <div class="page">
                <h1 class='create-title'>Создание задачи</h1>
                <div class="form-container">
                    <Form ref="formComponent"></Form>
                </div>
                <div class="form-button-container">
                    <Button :name="'Отмена'"
                    :variant="'secondary'"></Button>
                    <Button @click="createTaskClick"
                    :name="'Создать задачу'" 
                    :variant="'primary'"></Button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import navigation from '@/components/navigation/navigation.vue';
import Form from '@/components/elements/Form/Form.vue'
export default {
    components: {
        navigation,
        Form
    },
    methods:{
        createTaskClick(){
            this.$refs.formComponent.createTask();
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';

body {
    height: 100vh;
}

#app {
    height: 100%
}

.container {
    padding: $gap;
    height: calc(100% - 90px)
}

.page {
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    padding: $gap;
    display: flex;
    flex-direction: column;
}

.page-create-task {
    height: 100%;
}

.create-title {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: $gap;
}

.form-container {
    border-top: 1px solid rgba(0, 0, 0, .15);
    padding: $gap 0;
}
.form-button-container{
    display: flex;
    margin-top: auto;
    justify-content: flex-end;
    padding: 34px 10px 10px 0;
    gap: $gap;
    align-self: flex-end;
}
</style>
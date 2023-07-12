<template>
    <div class="page-create-task">
            <div class="page-container">
                <h1 class='create-title'>Создание задачи</h1>
                <div class="container-form">
                    <Form class="form">
                            <div class="input">
                              <label for="login">Название<span>*</span></label>
                              <Input type='text' v-model="inputLogin"></Input>
                            </div>
                            <div class="input">
                              <label for="login">Описание</label>
                              <Input type='text' v-model="inputLogin"></Input>
                            </div>
                            <div class="input">
                              <label for="login">Проект<span>*</span></label>
                              <Select class="task-select">
                                <template #icon class="task-icon">
                                    <Icon :iconClass="'nav'"
                                    :color="'#8E8E8E'"
                                    width="16px" height="16px"></Icon>
                                </template>
                          
                              </Select>
                            </div>
                            <div class="input">
                                <label for="login">Исполнитель</label>
                                <Input type='text' v-model="inputLogin"></Input>
                              </div>
                    </Form>
                </div>
                <div class="form-button-container">
                    <Button :name="'Отмена'"
                    :buttonClass="'button_default_secondary'"></Button>
                    <Button :name="'Создать задачу'" 
                    :buttonClass="'button_default_primary'"></Button>
                </div>
            </div>
        </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';

label{
    width: 120px;
    font-size: 14px;
    color: $text-color-disabled;
    span{
        color: red;
        font-size: 16px;
    }
}
.page-container {
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 4px;
    padding: $gap;
}

.page-create-task {
    height: calc(100% - 90px);
    padding: $gap;
    
}

.create-title {
    font-size: 40px;
    font-weight: 600;
    padding-bottom: $gap;
}
.container-form{
    padding: 56px 0;
    border-top: 1px solid rgba(0, 0, 0, .15);
    border-bottom: 1px solid rgba(0, 0, 0, .15)
}
.form-button-container{
    display: flex;
    margin-top: auto;
    justify-content: flex-end;
    padding: 34px 10px 10px 0;
    gap: $gap;
    align-self: flex-end;
}
.input{
    display: flex;
}
.task-select{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
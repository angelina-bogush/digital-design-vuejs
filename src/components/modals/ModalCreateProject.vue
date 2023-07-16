<template>
    <div class="container">
        <ModalDelete :title="'Создание проекта'" :agree="'Создать проект'" @clickCancel="cancelCreation" @create="createProject">
            <Form class="form-project">
                <div class="input">
                    <label>Код<span>*</span></label>
                    <Input type='text' placeholder="Введите текст..."  v-model='inputCode'></Input>
                  </div>
            
                  <div class="input">
                    <label>Название<span>*</span></label>
                    <Input type='text' placeholder="Введите текст..."  v-model="inputName"></Input>
                  </div>
            </Form> 
        </ModalDelete>
        <!-- <h2>Создание проекта</h2> -->
<!-- <Form class="form-project">
    <div class="input">
        <label>Код<span>*</span></label>
        <Input type='text' placeholder="Введите текст..."  v-model='inputCode'></Input>
      </div>

      <div class="input">
        <label>Название<span>*</span></label>
        <Textarea type='text' placeholder="Введите текст..."  v-model="inputDesc"></Textarea>
      </div>
</Form> -->
</div>
</template>
<script>
export default{
    name: 'ModalCreateProject',
    data(){
        return{
            inputCode: '',
            inputName: ''
        }
    },
    methods:{
        cancelCreation(){
            this.$emit('clickCancel')
        },
        createProject(){
            const newProject = {
                code: this.inputCode,
                projectName: this.inputName
            }
            this.$emit('create', newProject)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';

label{
    font-size: 14px;
    color: $text-color-disabled;
    span{
        color: red;
        font-size: 16px;
    }
}
.input{
    display: flex;
    flex-direction: column;
    gap: 8px
}
.form-project{
    width: 640px
}
</style>
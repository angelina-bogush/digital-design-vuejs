<template>
    <div>
        <form class="form" name="editForm" v-bind="$attrs">
            <div class="input-container">
                <label class="form__label" for="name">Название<span>  *</span></label>
                <Input placeholder="Введите текст..." id="name" type="text"
                    class="input-name"
                     :variant="''"
                     v-model="inputText"
                    >
                </Input>
            </div>
            <div class="input-container">
                <label class="form__label" for="description">Описание</label>
                 <Textarea 
                 id="description" 
                 type="text"
                 :variant="''" 
                 placeholder="Введите текст..."
                  v-model="textareaText"></Textarea>
            </div>
            <div class="input-container">
                <label class="form__label" for="project">Проект<span>  *</span></label>
                <Select :options="options" 
                @selectOption="selectOptionClick"
                :selected="selected"
                 class="input-select">
                 <template #icon>
                    <Icon :className="'navigation__user-button'" :iconClass="'nav-down'"
                    :color="'#8E8E8E'"
                    width="24px" height="24px"></Icon>
                </template>
                </Select>
            </div>
        </form>
    </div>

</template>

<script>
export default{
    name: 'Form',
    data(){
        return{
            options: [
                {name:'Проект1', value: '1'},
                {name:'Проект2', value: '2'},
                {name:'Проект3', value: '3'},
                {name:'Проект4', value: '4'},
            ],
            selected: 'Проект1',
            inputText: '',
            textareaText: ''
        }
    },
    methods:{
        selectOptionClick(selectedOption){
            this.selected = selectedOption
        },
        createTask(){
            const task = {
                name: this.inputText,
                description: this.textareaText,
                project: this.selected
            }
            console.log(task)
            // this.$emit('createTaskForm', task);
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
.form {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    gap: $gap;
}

.form__label {
    color: $disabled-font-button;
    font-size: 14px;
    width: 120px;
     span{
        color: red
     }
}

.input-container {
    display: flex;
    gap: 8px;
}

.input-name, .input-select {
    width: calc(100% - 120px)
}
</style>
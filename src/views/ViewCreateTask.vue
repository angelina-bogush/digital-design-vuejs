<template>
    <div class="page-create-task">
        <div v-if='getLoading' class="loader-container">
            <!-- <div class="overlay"></div> -->
        <div class="loader">
        </div>
        </div>
            <div class="page-container">
                <h1 class='create-title'>Создание задачи</h1>
                <div class="container-form">
                    <Form class="form">
                            <div class="input">
                              <label for="login">Название<span>*</span></label>
                              <Input type='text' placeholder="Введите текст..." class="input-column" v-model="inputName"></Input>
                            </div>

                            <div class="input">
                              <label for="login">Описание</label>
                              <Textarea type='text' placeholder="Введите текст..." class="input-column" v-model="inputDesc"></Textarea>
                            </div>

                            <div class="input">
                              <label for="login">Проект<span>*</span></label>
                              <Select class="task-select input-column" @click="clickProjectSelect" :options="this.getProjects" :selected="selectedProject"
                              @selectOption="selectOptionClickProject">
                                <template #icon class="task-icon">
                                    <Icon :iconClass="iconClassProject"
                                    :color="'#8E8E8E'"
                                    width="24px" height="24px"></Icon>
                                </template>
                          
                              </Select>

                            </div>
                            <div class="input">
                                <label>Исполнитель</label>
                                <Select class="task-select input-column" @click="clickExecSelect" :options="this.getUsers" :selected="selectedUser"
                                @selectOption="selectOptionClickUser">
                                    <template #icon class="task-icon">
                                        <Icon :iconClass="iconClassExec"
                                        :color="'#8E8E8E'"
                                        width="24px" height="24px"></Icon>
                                    </template>
                                </Select>
                              </div>
                    </Form>
                </div>
                <div class="form-button-container">
                    <Button
                    :buttonClass="'button_default_secondary'"><template #name>Отмена</template></Button>
                    <Button  :buttonClass="'button_default_primary'" @click="createTask"><template #name>Создать задачу</template></Button>
                </div>
            </div>
        </div>

</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    data(){
        return{
            isIconProjectUp: false,
            isIconExecUp: false,
            inputName: '',
            inputDesc: '',
            selectedProject: '',
            selectedUser: 'Не выбран'
        }
    },
    methods:{
        ...mapActions({
            getProjectAxios: 'projects/searchProjectAxios',
            getUsersAxios: 'users/searchUserAxios',
            createTaskAxios: 'tasks/createTaskAxios'
        }),
        ...mapMutations({
            setProjectId: 'tasks/SET_PROJECT_ID'
        }),
        clickProjectSelect(){
            this.getProjectAxios()
            this.isIconProjectUp = !this.isIconProjectUp;
        },
        clickExecSelect(){
            this.getUsersAxios();
            this.isIconExecUp = !this.isIconExecUp;
        },
        selectOptionClickUser(selectedOption){
            this.selectedUser = selectedOption;
            this.isIconExecUp = !this.isIconExecUp;
        },
        selectOptionClickProject(selectedOption){
            this.selectedProject = selectedOption;
            const foundProjectId = this.getProjects.find(project => project.name === selectedOption)._id;
            this.setProjectId(foundProjectId); // передача projectId задаче
            this.isIconProjectUp = !this.isIconProjectUp;
        },
        createTask() {
            const task = {
                name: this.inputName,
                description: this.inputDesc,
                projectId: this.getProjectId
            }
            this.createTaskAxios(task)
                .then((res) => {
                    console.log(res);
                    this.$router.push('/tasks');
                })
                .catch((err) => {
                    console.log(err);
                    // Дополнительные действия при возникновении ошибки
                });

            } 
        },
    computed:{
        ...mapGetters({
            getProjects: 'projects/allProjects',
            getUsers: 'users/allUsers',
            getProjectId: 'tasks/getProjectId',
            getLoading: 'tasks/getLoading',
            getTaskId: 'tasks/getTaskId' // id задачи
        }),
        iconClassProject(){
            if(this.isIconProjectUp){
                return 'nav-up'
            } else {
                return 'nav'
            }
        },
        iconClassExec(){
            if(this.isIconExecUp){
                return 'nav-up'
            } else {
                return 'nav'
            }
        },

    },
    mounted(){
        this.getUsersAxios()
        this.getProjectAxios()
    }
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
    justify-content: space-between ;
}
.input-column{
    max-width: 544px;
}
.task-select{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
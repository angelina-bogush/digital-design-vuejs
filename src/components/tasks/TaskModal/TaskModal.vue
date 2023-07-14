<template>
    <div class="page-container">
        <h1 class='create-title'>{{title}}</h1>
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
        </div>
</template>

<script>
export default{
    props:{
        title:{
            type: String
        }
    }
}
</script>

<style>

</style>
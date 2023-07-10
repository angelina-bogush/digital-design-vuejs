<template>
    <div class="container">
            <Button :name="'Вернуться назад'" 
               :variant="'secondary'"
               @click="goHome"
               ></Button> 
         <div class="task-card">
            <div class="task__about">
               <h3 class="task__title">#{{code}}</h3>
               <h3 class="task__title"> {{name}}</h3>
               <div class="task__info">
                <p class="status">{{ status }}</p>
                    <p class="task__date">Создана 17 сен 2022 в 13:55</p>
                    <div class="task__user">
                        <span class="user-avatar"></span>
                        <span>{{author}}</span>
                    </div>

               </div>
            </div>

            <div class="task__about">
                <p>Здесь описание задачи</p>
            </div>
            </div>
        </div>

</template>

<script>
export default{
    name: 'TaskCard',
    methods:{
        goHome(){
            this.$router.go(-1)
        }
    },
    computed:{
        id(){
            return this.$route.params.id
        },
        name(){
            return this.$route.params.name
        },
        code(){
            return this.$route.params.code
        },
        author(){
            return this.$route.params.author
        },
        status(){
            return this.$route.params.status
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import '@/components/tasks/TaskItem/style.scss';
.task-card{
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    height: calc(100% - 70px);
    margin-top: $gap;
}
.task__title{
    font-size: 24px;
    font-weight: 600;
}
.task__about{
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: $gap;
    border-bottom: 1px solid rgba(0,0,0,.15);
}
.task__info{
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
}
.task__date{
    color: $disabled-font-button
}
.task__user{
    display: flex;
    gap: 8px;
    align-items: center;
}
</style>
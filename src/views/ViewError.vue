<template>
    <div class="container">
        <div class="page">
           <p class="text">Страницы не существует</p>
           <Button :name="'Вернуться назад'" 
           :variant="'primary'"
           @click="goHome"></Button>
        </div>
    </div>

</template>

<script>
export default{
    name: 'ViewError',
    methods:{
        goHome(){
            this.$router.push('/tasks')
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.text{
    font-weight: 600;
    font-size: large;
}

</style>
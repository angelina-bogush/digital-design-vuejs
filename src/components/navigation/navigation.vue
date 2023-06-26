<template>
   <div>
    <div class="navigation">
        <div class="navigation__container">
            <buttonNav v-for="button in buttonsName" :buttonName="button" />
            <div class="navigation__user">
                <button class="navigation__user-container">
                <span class="user-avatar navigation__user-avatar"></span>
                <svg-icon icon-class="nav" class-name="navigation__user-button" />
                <div class="dropdown nav-dropdown">
                        <ul class="dropdown__list nav-dropdown">
                            <li><a class="dropdown__link nav-dropdown">Профиль</a></li>
                            <li><a class="dropdown__link nav-dropdown">Выход</a></li>
                        </ul>
                    </div> </button>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import buttonNav from '@/components/button/button.vue'
export default{
data(){
    return{
        buttonsName:['Проекты', 'Задачи', "Пользователи"]
    }
},
components: {
    buttonNav
  
}
}

</script>

<style lang="scss">
@import '@/components/navigation/navigation.module.scss';
</style>
<template>
   <div>
    <div class="navigation">
        <div class="navigation__container">
            <button class="button navigation__button" v-for="button in buttonsName">{{button}}</button>
            <!-- <button class="button navigation__button">Задачи</button>
            <button class="button navigation__button">Пользователи</button> -->
            <div class="navigation__user">
                <button class="navigation__user-container">
                <span class="user-avatar navigation__user-avatar"></span>
                <svg class="navigation__user-button"><use xlink:href="#nav"></use>
                </svg>
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
import '@/assets/icons/nav.svg'
export default{
data(){
    return{
        buttonsName:['Проекты', 'Задачи', "Пользователи"]
    }
}
}
</script>

<style lang="scss">
@import '@/components/navigation/navigation.module.scss';
</style>
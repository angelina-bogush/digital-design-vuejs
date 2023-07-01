<template>
   <div>
    <div class="navigation">
        <div class="navigation__container">
        <Button 
            :type="'disabled'"
            :name="'Проекты'" 
            :variant="'primary'">
         </Button>
         <Button
            :name="'Задачи'"
            :type="''"
            :variant="'primary'">
        </Button>
            <Button :type="'not'" 
            :name="'Пользователи'"
            :variant="'nav'"></Button>
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
export default{
data(){
    return{
    }
}
}

</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import './style.scss';
.navigation__user-button{
    color: black
}
</style>
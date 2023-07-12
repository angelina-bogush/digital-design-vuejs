<template>
   <div>
    <div class="navigation">
        <div class="navigation__container">
     <router-link to="/">
         <Button 
         :name="'Проекты'" 
         :buttonClass="'button_default_nav'"
         >
      </Button>
    </router-link>
    <router-link to="/tasks">
         <Button
            :name="'Задачи'"
            :buttonClass="'button_default_nav'">
        </Button>
    </router-link>
  <router-link to="/users"> <Button :type="'not'" 
            :name="'Пользователи'"
            :buttonClass="'button_default_nav'"></Button> 
        </router-link>
            <div class="navigation__user">
                <button class="navigation__user-container">
                <span class="user-avatar"></span>
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
    name: 'Navigation',
    methods: {
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
<template>
   <div>
    <div class="navigation">
        <div class="navigation__container">
     <router-link to="/">
         <Button 
         :name="'Проекты'" 
        class="button_default_nav"
         >
      </Button>
    </router-link>
    <router-link to="/tasks">
         <Button
            :name="'Задачи'"
            :type="''"
            :variant="'nav'">
        </Button>
    </router-link>
  <router-link to="/users"> <Button :type="'not'" 
            :name="'Пользователи'"
            :variant="'nav'"></Button> </router-link>
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
        showProjects() {
            this.$emit("changePage", "pageProjects");
        },
        showTasks() {
            this.$emit("changePage", "pageTasks");
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
.button_nav_disabled{
    color: $disabled-font-button;
    background-color: $primary-disabled-color;
}
.button_default_nav{
    background-color: $primary-default-color;
    border-radius: 4px;
    border: 1px solid $color-white;
    cursor: pointer;
    color:$color-white;
        &:hover{
        background-color: $hover-button-color;
            color: $color-black; 
    }
        &:active, &_active{
        background-color: $color-white;
        color: $color-black;
    }
}
</style>
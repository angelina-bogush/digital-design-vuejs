<template>
    <div class="navigation">
        <div class="navigation__container">
     <router-link to="/">
         <Button 
         :buttonClass="'button_default_nav'"
         @click="changeActive"
         >
         <template #name>Проекты</template>
      </Button>
    </router-link>
    <router-link to="/tasks">
         <Button
         :buttonClass="'button_default_nav'"
            @click="changeActive">
            <template #name>Задачи</template>
        </Button>
    </router-link>
  <router-link to="/users"> <Button :type="'not'" 
            :name="'Пользователи'"
            :buttonClass="'button_default_nav'">
            <template #name>Пользователи</template>
        </Button> 
        </router-link>
            <UserDropdown>
               <router-link to="/profile"><li><span class="dropdown__link">Профиль</span></li></router-link>
                    <router-link to="/login"><li class="dropdown__link">Выход</li></router-link>  
            </UserDropdown>
        </div>
    </div>

</template>

<script>
export default{
    name: 'Navigation',

   
}

</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
@import './style.scss';
.navigation__user-button{
    color: black
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
.button_nav_active{
    background-color: $color-white;
   color: $color-black;
}
</style>
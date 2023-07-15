<template>
    <div class="navigation">
        <div class="navigation__container">
     <router-link to="/">
         <Button 
         :buttonClass="'button_default_nav'"
         >
         <template #name>Проекты</template>
      </Button>
    </router-link>
    <router-link to="/tasks">
         <Button
            :buttonClass="'button_default_nav'">
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
<template>
    <div>
<div class="user-container">
    <img class="user__image" src="../assets/images/userImage.png">
    <div class="user__info-container">
      <div class="user__title-container">
        <div class="user__title">
        <h2>{{this.getCurrentUser.name}}</h2>
        <span class="status user__status">{{this.getCurrentUser.status}}</span>
    </div>
        <DropdownButton :buttonClass="'button_default_secondary'" class="menu">
            <template #icon>
                <Icon :className="'menu-image'" :iconClass="'menu'"
                width="14px" height="14px"></Icon>
            </template>
            <template #dropdown>
                <li><span class="dropdown__link">Редактировать</span></li>
               <li><span class="dropdown__link_delete">Удалить</span></li>
            </template>
        </DropdownButton>
      </div>
      <p class="about-me">О себе</p>
      <p class="user__text">{{this.getCurrentUser.description}}</p>

    </div>
</div>
 </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default{
    name: 'ViewProfile',
    methods:{
        ...mapActions({
            getUser: 'users/getUser'
        })
    },
    computed:{
        ...mapGetters({
            getCurrentUser: 'users/getCurrentUser',
        })
    },
    mounted(){
        this.getUser()
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';

h2{
    padding-right: $gap;
}
.user-container{
    display: flex;
    padding:$gap;
}
.about-me{
      color:$disabled-font-button;
}
.user__image{
    width: 300px;
    height: 300px;
    
}
.user__info-container{
    width: 100%;
    padding-left:$gap;
}
.user__title-container{
display: flex;
padding:8px 0 $gap 0;
justify-content: space-between;
}
.user__status{
    background-color: $primary-default-color;
    color: white;
    padding: 0 8px;
    @include font-regular;

}
.user__title{
    display: flex;
    align-items: center;
}
.user__text{
    padding-top: 8px;
}
.menu{
    position: relative;
}
</style>
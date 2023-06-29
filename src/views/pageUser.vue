<template>
    <div>
<navigation></navigation>
<div class="user-container">
    <img class="user__image" src="../assets/images/userImage.png">
    <div class="user__info-container">
      <div class="user__title-container">
        <div class="user__title">
        <h2>Котов Семен Васильевич</h2>
        <span class="status user__status">Активен</span>
    </div>
        <template class="button__user">
        <!-- <buttonUser></buttonUser> -->
    </template>
      </div>
      <p><span>О себе</span></p>
      <p class="user__text">Привет space-between space-between space-between space-betweenvv space-between space-between space-between space-between space-between space-betweenv space-between space-between</p>

    </div>
</div>
 </div>
</template>

<script>
import navigation from '@/components/navigation/navigation.vue';
export default{
components:{
    navigation
}
}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
span{
    color:$disabled-font-button;
}
h2{
    padding-right: $gap;
}
.user-container{
    display: flex;
    padding:$gap;
}
.user__image{
    width: 300px;
    height: 300px
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
</style>
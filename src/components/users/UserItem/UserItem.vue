<template>
<div class="user">
    <div class="user-container">
    <span class="user-avatar"></span>
    <p class="user__name">{{ user.name }}</p>
    </div>
    <p class="status" :class="{'status_inactive': !isActive}">Не активен</p>
</div>

</template>

<script>
export default{
    name:'UserItem',
    props:{
        user:{
            type: Object,
            default: () => {}
        }
    },
    data(){
        return {
            isActive: true
        }
    }
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
.user{
    padding: 9px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid $color-black;
    gap: 16px
}
.user__name{
   font-size: 14px;
}
.user-container{
    padding: 8px 16px;
    display: flex;
    gap: 8px;
    align-items: center;
}
.status_inactive{
    display: none
}
</style>
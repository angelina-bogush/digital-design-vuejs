<template>
    <div>
        <UserItem v-for="(user, index) in users" :key="index"
         :user="user"></UserItem>
    </div>
</template>
<script>
import UserItem from '@/components/users/UserItem/UserItem.vue'
export default{
    name: 'UsersList',
    props:{
        users:{
            type: Array,
            default: () => []
        }
    },
    components:{
        UserItem
    }
}
</script>

<style lang="scss" scoped>

</style>

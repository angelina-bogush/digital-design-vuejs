<template>
    <ul>
        <li v-for="task in list">{{ task }}</li>
    </ul>
</template>

<script>
export default{
    props: ['list']
}
</script>
<template>
<div>
    <article class="task item">
        <div class="task__content content">
            <div class="task__description-container">
                <p class="task__title title">{{title}}</p>
                <span class="user-avatar task__user-avatar"></span>
            </div>
            <div class="task__description description">
                <div class="task__description-creation description-creation">
                    <p class="task__number number">#{{number}}</p>
                    <p class="task__creator creator">{{ creator}}</p>
                    <p class="status task__status">Черновик</p>
                </div>
                <p class="task__description-changes description-changes">{{changes}}</p>
            </div>
        </div>
        <button class="task__menu menu" data-dropdown="menu-2">
        <svg class="menu-image"><use xlink:href="#project-menu"></use></svg>
        <div class="project-dropdown task-dropdown" id='menu-2'>
                        <ul class="dropdown__list task-dropdown">
                            <li><a class="dropdown__link project-dropdown__link task-dropdown">Редактировать</a></li>
                            <li><a class="dropdown__link project-dropdown__link task-dropdown"><span class="task-dropdown">Удалить</span></a></li>
                        </ul>
        </div>
        </button>
    </article>
</div>
</template>

<script>
export default{
name: 'task',
props: {
    title: String,
    number: Number,
    creator: String,
    changes: String
}
}
</script>

<style lang="scss">
@import './task.module.scss'
</style>
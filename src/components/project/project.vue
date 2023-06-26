<template>
<div>
    <article class="project item">
        <div class="project__content content">
        <p class="project__title title">{{name}}</p>
        <div class="project__description description">
            <div class="project__description-creation description-creation">
                <p class="project__number number">#{{number}}</p>
                <p class="project__creator creator">{{creator}}</p>
            </div>
            <p class="project__description-changes description-changes">{{changes}}</p>
        </div>
    </div>
    <button class="project__menu menu" data-dropdown="menu-1">
        <svg-icon icon-class="project-menu" class-name="menu-image" />
        <div class="project-dropdown project-dropdown-opened">
                        <ul class="dropdown__list project-dropdown-opened">
                            <li><a class="dropdown__link project-dropdown__link project-dropdown-opened">Редактировать</a></li>
                            <li><a class="dropdown__link project-dropdown__link project-dropdown-opened"><span class="project-dropdown-opened">Удалить</span></a></li>
                        </ul>
        </div>
        </button> 
    </article>

</div>
</template>

<script>
export default{
   props:{
    name: String,
    creator: String,
    changes: String,
    number: Number
   }
}
</script>

<style lang="scss">
@import  '@/components/project/project.module.scss'
</style>
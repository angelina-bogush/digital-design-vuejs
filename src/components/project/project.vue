<template>
<div>
    <article class="project item" v-for="project in projects">
        <div class="project__content content">
        <p class="project__title title">{{project["name"]}}</p>
        <div class="project__description description">
            <div class="project__description-creation description-creation">
                <p class="project__number number">#{{project["number"]}}</p>
                <p class="project__creator creator">{{project["creator"]}}</p>
            </div>
            <p class="project__description-changes description-changes">{{project["changes"]}}</p>
        </div>
    </div>
    <button class="project__menu menu" data-dropdown="menu-1">
        <svg class="menu-image"><use xlink:href="#project-menu"></use></svg>
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
    data(){
        return{
            projects:[ 
                {
            name: 'Название',
            number: '1',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            number: '2',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            },
            {
            name: 'Название',
            number: '3',
            creator: 'Здесь описание создания',
            changes: 'описание изменений'
    
            }
        ]
        }
    }
}
</script>

<style lang="scss">
@import  '@/components/project/project.module.scss'
</style>
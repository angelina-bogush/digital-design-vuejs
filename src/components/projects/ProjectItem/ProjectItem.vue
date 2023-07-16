<template>
<div>
    <article class="project item">
        <div class="project__content content">
       <p class="project__title title">{{project.name}}</p> 
        <div class="project__description description">
            <div class="project__description-creation description-creation">
                <p class="project__number number">#{{project.code}}</p>
                <p class="project__creator creator">{{formattedDateCreate}}</p>
            </div>
            <p class="project__description-changes description-changes">{{formattedDateEdit}}</p>
        </div>
    </div>
        <div class="dropdown-container">
            <DropdownButton class="menu" :buttonClass="'button_default_secondary'" :type="''" > 
                <template #icon>
                    <Icon :iconClass="'menu'"
                    width="14px" height="14px"></Icon>
                </template>
                <template #dropdown>
                    <li><span class="dropdown__link">Редактировать</span></li>
                   <li><span class="dropdown__link_delete">Удалить</span></li>
                </template>
            </DropdownButton>
            </div>
    </article>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
    name: 'ProjectItem',
   props:{
    project:{
        type: Object,
        default: () => {}
    }
   },
computed:{
    ...mapGetters({
        formatDate: 'formatDate'
    }),
    formattedDateCreate(){
       return this.formatDate(this.project.dateCreated)
    },
    formattedDateEdit(){
       return this.formatDate(this.project.dateEdited)
    }
},
methods: {

}
}
</script>

<style lang="scss">
@import '@/components/elements/variables.scss';
@import  './style.scss';
*{
    margin: 0;
    padding: 0;
}
.dropdown__link_delete{
    color: red
}
</style>
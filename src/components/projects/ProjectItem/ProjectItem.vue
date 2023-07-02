<template>
<div>
    <article class="project item">
        <div class="project__content content">
        <p class="project__title title">{{project.name}}</p>
        <div class="project__description description">
            <div class="project__description-creation description-creation">
                <p class="project__number number">#{{project.number}}</p>
                <p class="project__creator creator">{{project.creator}}</p>
            </div>
            <p class="project__description-changes description-changes">{{project.changes}}</p>
        </div>
    </div>
        <div class="dropdown-container">
            <DropdownButton class="menu" @click="clickButton" :variant="'secondary'" :type="''"
                > 
                <template #icon>
                    <Icon :className="'menu-image'" :iconClass="'project-menu'"
                    width="14px" height="14px"></Icon>
                </template>
                <template #menu>
                <div class="project-dropdown" :class="{'project-dropdown_opened': isActive}">
                                <ul class="dropdown__list">
                                    <li><span class="dropdown__link" @click="editClick">Редактировать</span></li>
                                    <li><span class="dropdown__link_delete" @click="deleteClick">Удалить</span></li>
                                </ul>
                </div>
            </template>
            </DropdownButton>
            </div>
    </article>

</div>
</template>

<script>
export default{
    name: 'ProjectItem',
   props:{
    project:{
        type: Object,
        default: () => {}
    }
   },
   data(){
    return{
        isActive: false
    }
},
methods: {
    clickButton() {
    this.isActive =! this.isActive
  },
  editClick(){
   this.$emit('editTask')
  },
  deleteClick(){
    this.$emit('deleteTask')
  }
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
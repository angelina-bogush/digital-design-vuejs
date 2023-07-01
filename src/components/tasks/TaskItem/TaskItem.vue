<template>
    <div>
        <article class="item">
            <div class="content">
                <div class="task__description-container">
                    <p class="task__title title">{{ task.title }}</p>
                    <span class="user-avatar task__user-avatar"></span>
                </div>
                <div class="description">
                    <div class="task__description-creation description-creation">
                        <p class="number">#{{ task.number }}</p>
                        <p class="creator">{{ task.creator }}</p>
                        <p class="status">Черновик</p>
                    </div>
                    <p class="description-changes">{{ task.changes }}</p>
                </div>
            </div>
            <div class="dropdown-container">
                <DropdownButton class="menu" @click="clickButton" :variant="'secondary'" :type="''">
                    <template #icon>
                        <Icon :className="'menu-image'" :iconClass="'project-menu'"></Icon>
                    </template>
                    <template #menu>
                        <div class="project-dropdown" :class="{ 'project-dropdown_opened': isActive }">
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
    data(){
    return{
        isActive: false
    }
},
    props: {
        task: {
            type: Object,
            default: () => {}
        }
    },
computed:{

},
methods: {
  clickButton() {
    this.isActive =! this.isActive;
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
@import './style.scss';
.project-dropdown{
    display: none
}
.project-dropdown_opened{
    display: block;
    padding: 14px;
position: absolute;
background-color: $color-white;
left: -90px;
top: 45px;
box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

</style>
<template>
<div>
    <article class="item">
        <div class="content">
            <div class="task__description-container">
                <p class="task__title title">{{title}}</p>
                <span class="user-avatar task__user-avatar"></span>
            </div>
            <div class="description">
                <div class="task__description-creation description-creation">
                    <p class="number">#{{number}}</p>
                    <p class="creator">{{ creator}}</p>
                    <p class="status">Черновик</p>
                </div>
                <p class="description-changes">{{changes}}</p>
            </div>
        </div>
        <div class="dropdown-container">
         <DropdownButton class="menu" @click="clickButton"
        > </DropdownButton>
        <div class="project-dropdown" :class="dropdownClass">
                        <ul class="dropdown__list">
                            <li><a class="dropdown__link project-dropdown__link">Редактировать</a></li>
                            <li><a class="dropdown__link project-dropdown__link"><span class="task-dropdown">Удалить</span></a></li>
                        </ul>
        </div>
    </div>
    </article>
</div>
</template>

<script>
export default{
    data(){
    return{
        isClickedMenu: false
    }
},
    props: {
    title: String,
    number: Number,
    creator: String,
    changes: String
},
computed:{
    dropdownClass(){
      if(this.isClickedMenu === true){
         return 'project-dropdown_opened'
      }
    },
},
methods: {
  clickButton() {
    this.isClickedMenu = !this.isClickedMenu;
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
<template>
    <div>
        <article class="item">
            <div class="content">
                <div class="task__description-container">
                    <router-link :to="{name: 'ViewTaskCard', params: {id: task._id},}"> <p class="task__title title">{{ task.name }}</p> </router-link>
                    <span class="user-avatar task__user-avatar"></span>
                </div>
                <div class="description">
                    <div class="task__description-creation description-creation">
                        <p class="number">#{{ task.number }}</p>
                        <p class="creator">{{ dateCreated}}</p>
                        <p class="status">{{ task.status }}</p>
                    </div>
                    <p class="description-changes">{{ dateEdited }}</p>
                </div>
            </div>
            <div class="dropdown-container">
                <DropdownButton class="menu"  :buttonClass="'button_default_secondary'" :type="''" @edit="editClick">
                    <template #icon>
                        <Icon :className="'menu-image'" :iconClass="'menu'" :width="'14px'" :height="'14px'"></Icon>
                    </template>
                </DropdownButton>
            </div>
        </article>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
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
    ...mapGetters({
        formatDate: 'formatDate'
    }),
    dateCreated(){
        return this.formatDate(this.task.dateCreated)
    },
    dateEdited(){
        return this.formatDate(this.task.dateEdited)
    }
},
methods: {
//   clickButton() {
//     this.isActive =! this.isActive;
//   },
  editClick(){
this.$router.push('/edit-task')
  },
  deleteClick(){
    this.$emit('deleteTask', this.task._id)
  }
},

}
</script>

<style lang="scss" >
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
z-index: 2;
}

</style>
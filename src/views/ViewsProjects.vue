<template>
    <div class="pageProject">
        <div class="search-container">
            <SearchInput v-model="inputSearch"></SearchInput>
            <div class="dropdowns-container">
            <!-- <DropdownButton :variant="'secondary'" :borderRadius="'right'">
                <template #nameButton>
                    <p>По названию</p>
                </template>
                <template #icon>
                    <Icon :iconClass="'nav'"
                    width="16px" 
                    height="16px"></Icon>
                </template>
            </DropdownButton> -->
            <Select :options="options" 
                @selectOption="selectOptionClick"
                :selected="selected"
                 class="input-select">
                 <template #icon>
                    <Icon :iconClass="'nav'"
                    :color="'#8E8E8E'"
                    width="24px" height="24px"></Icon>
                </template>
                </Select>
            <DropdownButton :variant="'secondary'" 
            :borderRadius="'right'" @click="isArrowUp = !isArrowUp">
                <template #icon>
                    <Icon :iconClass="iconClass"
                    width="16px" 
                    height="16px"></Icon>
                </template>
            </DropdownButton>
           </div>
            <Button :variant="'secondary'" :name="'Добавить'" @click="createProject"></Button>
        </div>
        <template v-if="allProjects.length">
            <ProjectList :projects="allProjects" />
        </template>
        <template v-else>
            <emptyProject :text="'Не создан ни один проект'"></emptyProject>
        </template>
    </div>
</template>

<script>
import emptyProject from '@/components/empty-project/emptyProject.vue';
import ProjectList from '@/components/projects/ProjectList/ProjectList.vue';
import { mapActions } from 'vuex';

export default{
    name: 'ViewsProjects',
    data(){
        return{
        isArrowUp: true,
          inputSearch: '',
          options:[
            {name: 'По названию'},
            {name: 'По автору'},
            {name: 'По дате создания'},
            {name: 'По дане обновления'}
          ]
        }
    },
    components: {
    ProjectList,
    emptyProject
    },
    computed:{
      iconClass(){
        if(this.isArrowUp){
          return 'arrow-up'
        }
        if(!this.isArrowUp){
          return 'arrow-down'
        }
      },
        allProjects(){
            return this.$store.getters.allProjects;
        }
    },
    methods: {
       ...mapActions(['searchProjectFetch', 'createProjectAxios']),
     createProject(){
        this.createProjectAxios()
     }
    },
    async mounted(){
        this.searchProjectFetch()
    }
}
</script>   

<style lang="scss">
@import '@/components/elements/variables.scss';
.pageProject{
    padding: $gap;
    display: flex;
    flex-direction: column;
    gap: $gap
}
.search-container{
    max-height: 42px;
}
.dropdowns-container{
    display: flex;
}
.filter{
    border-radius: none;
}
</style>
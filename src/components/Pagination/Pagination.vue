<template>
<div class="container-pagination">
    <div class="pagination">
    <div class="buttons-container">
        <Button :buttonClass="'button_default_secondary button_icon'">
            <template #icon><Icon :iconClass="'nav-left'"
                :color="'#8E8E8E'"
                width="24px" height="24px"></Icon></template>
        </Button>
        <Button :buttonClass="'button_default_primary button_number'" class="button"
        @click="changePage(currentPage - 1)"  v-for="page in displayedPages"><template #name>{{page}}</template></Button>
        <Button :buttonClass="'button_default_secondary button_icon'"
        @click="changePage(currentPage + 1)">
            <template #icon><Icon :iconClass="'nav-right'"
                :color="'#1C1C1C'"
                width="24px" height="24px"></Icon></template>
        </Button>
    </div>
    <div class="to-page">
        <p>Перейти к странице</p>
        <Input v-model.number.trim="currentPage" @input="handleInput"></Input>
    </div>
</div>
<p>Страница {{ currentPage}} из {{ total }}</p>
</div>
</template>
<script>
export default{
    name: 'Pagination',
    props:{
        page: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    total: {
      type: Number,
      default: 0,
    }
    },
    data(){
        return {
            currentPage: 1
        }
    },
    methods: {
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    handleInput() {
      if (this.currentPage < 1) {
        this.currentPage = 1;
      } else if (this.currentPage > this.totalPages) {
        this.currentPage = this.totalPages;
      }
    },
  },
  computed: {
    displayedPages() {
      let pages = [];
      if (this.total = 3) {
        for (let i = 1; i <= this.total; i++) {
          pages.push(i);
        }
      } else if (this.currentPage <= 2) {
        pages = [1, 2];
      } else if (this.currentPage >= this.total - 1) {
        pages = [this.total - 2, this.total - 1, this.total];
      } else {
        pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      }
      return pages;
    },

  }

}
</script>

<style lang="scss" scoped>
@import '@/components/elements/variables.scss';
.container-pagination{
padding: 20px;
padding-top: 0;
display: flex;
justify-content: space-between;
align-items: center;
}
.buttons-container{
    display: flex;
    gap: 8px
}
.pagination{
    display: flex;
    gap: 32px;
    max-width: 490px;
}
.to-page{
    display: flex;
    gap: 8px;
    align-items: center;
}
p{
    font-size: 14px;
    color: $disabled-font-button;
    white-space: nowrap;
}
</style>
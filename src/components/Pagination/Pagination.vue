<template>
<div class="container-pagination">
    <div class="pagination">
    <div class="buttons-container">
        <Button :buttonClass="'button_default_secondary button_icon'" @click="changePage(currentPage - 1)">
            <template #icon><Icon :iconClass="'nav-left'"
                :color="'#1C1C1C'"
                width="24px" height="24px"></Icon></template>
        </Button>
        <Button :buttonClass="getClass(index)" class="button" @click="clickPage(index)"
          v-for=" (page, index) in displayedPages"><template #name>{{page}}</template></Button>
        <Button :buttonClass="'button_default_secondary button_icon'" @click="changePage(currentPage + 1)"
       >
            <template #icon><Icon :iconClass="'nav-right'"
                :color="'#1C1C1C'"
                width="24px" height="24px"></Icon></template>
        </Button>
    </div>
    <div class="to-page">
      <p>Перейти к странице</p>
      <Input v-model="currentPageInput" @input="changePageInput"></Input>
  </div>
</div>
<p>Страница {{ currentPage }} из {{ total }}</p>
</div>
</template>
<script>
export default{
    name: 'Pagination',
    props:{
      currentPage: {
        type: Number,
        default: null
      },
    total: {
      type: Number,
      default: null
    }
    },

    data(){
        return {
          currentPageInput: '',
          page: null,
          activeIndex: null
        }
    },
    methods: {
      clickPage(index){
        this.activeIndex = index + 1;
        this.$emit('changePage', this.activeIndex);
      },
      changePageInput(){
        this.$emit('changePageInput', this.currentPageInput)
      },
    changePage(page) {
      const pageTotal = this.total;
      if (page >= 1 && page <= pageTotal) {
        this.currentPage = page;
        this.$emit('changePageArrow', page)
      }
    },
    getClass(index) {
      if (index + 1 === this.activeIndex) {
        return 'button_default_primary button_number'
      } else {
        return 'button_default_secondary button_number'
      }
    }
   
  },
  computed: {
    displayedPages() {
      const pageTotal = this.total;
      let pages = [];
      if (pageTotal === 3) {
        for (let i = 1; i <= pageTotal; i++) {
          pages.push(i);
        }
      } else if (this.currentPage >= pageTotal - 1) {
        pages = [pageTotal - 2, pageTotal - 1, pageTotal];
      } else if(this.currentPage === 1){
        pages = [1, 2, 3]
      }
      else {
        pages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      }
      return pages;
    },
    isFirstPage() {
      return this.currentPage === 1
    },
    isLastPage() {
      return this.currentPage === this.total 
    }


  },
  mounted(){
 
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
<template>
    <div class="search-input-container">
        <input v-bind="$attrs" class='input_search_empty' 
        placeholder="Поиск..." :class="inputClass"
        @input="$emit('input', $event.target.value)" required>
        <div class="search-icon" @click="clickSearch">
        <Icon width="24px" height="24px" :iconClass="'search'"></Icon>
       </div>
      </div>
  </template>
  
  <script>
  export default {
      name: 'SearchInput',
      inheritAttrs: false,
      props: {
        variant: String
      },
      data() {
          return {
              isError: false
          }
      },
      computed: {
          inputClass() {
              if (this.variant === 'disabled') {
                  return 'input_disabled'
              }
              if (this.variant === 'error') {
                  return 'input_error'
              } 
          }
      },
      methods: {
        clickSearch(){
          this.$emit('clickSearchIcon')
        }
      }
  }
  </script>
  
  <style lang="scss">
  @import '@/components/elements/variables.scss';
  .input_search_empty{
    padding: 13px 14px;
  }
  .search-input-container{
width: 100%;
display: flex;
position: relative
  }
  .search-icon{
    position: absolute;
    top:10px;
    right: 10px;
    cursor: pointer;
  }
</style>
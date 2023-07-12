<template>
  <div class="pageAuth">
    <div class="modal-form">
      <h2>Вход</h2>
      <div class="input-container">
        <div class="input">
          <label for="login">Логин<span>*</span></label>
          <!-- <Input v-model="inputLogin" ></Input> -->
          <SearchInput v-model="inputSearch"></SearchInput>
        </div>
        <div class="input">
          <label for="password">Пароль<span>*</span></label>
          <Input id="password" v-model="inputPassword">
          <Icon :iconClass="'nav'" width="16px" height="16px"></Icon>
          </Input>
        </div>
      </div>
      <div class='footer'>
        <Button :variant="'primary'" :type="'disabled'" :name="'Войти'"></Button>
      </div>

    </div>
  </div>
</template>
    
    <script>
    export default{
    name: "ViewAuth",
    data() {
        return {
            inputSearch: '',
            inputPassword: ''
        };
    },
    // methods:{
    //   inputLoginAuth(){
    //     console.log(this.inputLogin)
    //   }
    // }
}
    </script>
    
    <style lang="scss" scoped>
    @import '@/components/elements/variables.scss';
    .pageAuth{
      position: fixed;
      top: 0;
      left: 0;
      right:0;
      bottom:0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .modal-form{
      width: 300px;
      box-shadow: $box-shadow;
      background-color: $color-white;
      h2{
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        padding: 16px;
      }
    }
    .input-container{
      display: flex;
      padding: $gap;
      flex-direction: column;
      gap: 36px;
      position: relative;
      border-bottom: 1px solid $color-border-default;
      border-top: 1px solid $color-border-default
  }
  span{
    color: red;
          font-size: 20px;
          padding: 0;
          display: inline;
          position: absolute;
          top: -4px;
  }
  label{
    color: $disabled-font-button;
    font-size: 14px;
    position: relative;
    
  }
  .input{
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px
  }
  .footer{
    padding: $gap;
    display: flex;
    justify-content: flex-end;
  }

    </style>
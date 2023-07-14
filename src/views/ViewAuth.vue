<template>
  <div class="pageAuth">
    <div class="overlay"></div>
    <div class="modal-form">
      <h2>Вход</h2>
      <div class="form-container">
      <Form>
        <div class="input">
          <label for="login">Логин<span>*</span></label>
          <Input type='text' v-model="inputLogin"></Input>
        </div>
        <div class="input">
          <label for="password">Пароль<span>*</span></label>
          <Input type='password' v-model="inputPassword"></Input>
          <Icon :iconClass="'password'" width="24px" height="24px" class="input-icon"></Icon>
          
        </div>
      </Form>
      </div>
      <p class="error" v-if="error">{{ error }}</p>
      <div class='footer'>
        <Button :buttonClass="'button_default_primary'" @click="getAuth" :name="'Войти'" type="submit"><template #name>Войти</template></Button>
      </div>
    </div>
  

  </div>
</template>
    
    <script>
import { mapActions, mapGetters } from 'vuex';
    export default{
    name: "ViewAuth",
    data() {
        return {
            inputLogin: '',
            inputPassword: '',
            error: ''
        };
    },
    computed:{
      ...mapGetters({
        getToken: 'users/getToken'
      })
    },
    methods:{
      ...mapActions({
        authUser: 'users/authUser'
      }),
      getAuth(){
        const auth = {
          login: this.inputLogin,
          password: this.inputPassword
        }
        this.authUser(auth);
        if(this.getToken){
          this.$router.push('/');

        } else {
          this.error = 'Invalid username or password.'
        }

      },
    }
}
    </script>
    
    <style lang="scss" scoped>
    @import '@/components/elements/variables.scss';
    .pageAuth{
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(100% - 90px)
    }
    .modal-form{
      z-index: 2;
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
    gap: 8px;
    position: relative
  }
  .footer{
    padding: $gap;
    display: flex;
    justify-content: flex-end;
  }
  .input-icon{
    position: absolute;
    top: 31px;
    right: 10px;
  
  }
.error{
  text-align: center;
  color: red
}
.overlay{
  position: fixed;
  top:0;
  left:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.1);

}
.form-container{
  display: flex;
    padding: $gap;
    flex-direction: column;
    gap: 36px;
    position: relative;
    border-bottom: 1px solid $color-border-default;
    border-top: 1px solid $color-border-default
}

    </style>
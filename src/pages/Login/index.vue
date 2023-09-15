<template>
  <div class="back">
    <img src="..\public\背景logo.png" alt="" />

    <Verify
		@success="'success'" 
		:mode="'pop'"     
		:captchaType="'blockPuzzle'"   
        :imgSize="{ width: '330px', height: '155px' }" 
        ref="verify"
    ></Verify>

    <div class="login">
      <button class="log" @click="LogOrReg=false">注册</button>
      <button class="log" ref="cli" @click="LogOrReg=true">登录</button>
      
        <transition-group appear-class="active" name="log" >
          <Login v-show="LogOrReg" key="1"/>
          <Register v-show="!LogOrReg" key="2"/>
        </transition-group>
      
    </div>
  </div>
</template>

<script>
import Login from '../../components/LoginAndRegister/Login.vue'
import Register from '../../components/LoginAndRegister/Register.vue'
import Verify from '../../components/LoginAndRegister/verifition/Verify.vue'
export default {
  name: "login",
  data() {
    return {
      LogOrReg:true
    }
  },
  components: {
    Login,
    Register,
    Verify
    },methods:{
      success(params){
		  // params 返回的二次验证参数, 和登录参数一起回传给登录接口，方便后台进行二次验证
      alert('123123')
        },
        useVerify(params){
          console.log(params)
            this.$refs.verify.show()
        },
    },
  mounted() {
    this.$bus.$on('useVerify',this.useVerify)
    this.$refs.cli.click();
  },
};
</script>

<style scoped>
body{
    min-height: 100vh;
    min-width: 100vw;
}
* {
  margin: 0;
  padding: 0;
}
.log-enter-active {
  animation: atguigu 0.5s;
}
.log-leave-active {
  animation: atguigu 0s reverse linear;
}
@keyframes atguigu {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}



a {
  text-decoration: none;
}

.login {
  height: 60%;
  width: 22%;
  color: white;
  position: relative;
  border: 1px solid rgb(199, 193, 206);
  border-radius: 5%;
  backdrop-filter: blur(15px);
  top: 20%;
  left: 55%;
}
img {
  height: 915px;
  width: 100%;
  position: fixed;
  z-index: -1;
}
.back {
  height: 100vh;
  width: 100vw;
  background-size: cover;
}
.log {
  margin-top: 30px;
  float: right;
  margin-right: 20px;
  background-color: rgb(120, 214, 243);
  border: none;
  height: 30px;
  width: 80px;
  border-radius: 30px;
  color: white;
}
.log:hover {
  background-color: rgb(65, 200, 241);
}
</style>

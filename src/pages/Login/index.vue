<template>
  <div class="back">
    <!-- 滑块验证 -->
    <Verify
      @success="&quot;success&quot;;"
      :mode="'pop'"
      :captchaType="'blockPuzzle'"
      :imgSize="{ width: '330px', height: '155px' }"
      ref="verify"
    ></Verify>
    <div class="login">
      <el-button
        type="primary"
        round
        @click="LogOrReg = !LogOrReg"
        id="AccountOrCode"
        >账号/验证码</el-button
      >
      <!-- <transition-group name="test"> -->
      <Account v-show="LogOrReg" key="1" />
      <Code v-show="!LogOrReg" key="2" />
      <!-- </transition-group> -->

      <el-link id="Register" :plain="true" @click="ToRegister"
        >没有账号?</el-link
      >
      <img src="./img/shanhe.png" alt="" id="logo" />
    </div>
  </div>
</template>

<script>
import Account from "../../components/Login/Account.vue";
import Code from "../../components/Login/Code.vue";
import Verify from "../../components/Login/verifition/Verify.vue";
export default {
  name: "login",
  data() {
    return {
      LogOrReg: true,
    };
  },
  components: {
    Account,
    Code,
    Verify,
  },
  methods: {
    //触发滑块验证
    useVerify(email) {
      this.$refs.verify.show(email);
    },
    //前往注册页面
    ToRegister() {
      this.$message("页面已关闭 请联系管理员");

      // this.$router.push({ name: "Register" });
    },
  },
  mounted() {
    this.$bus.$on("useVerify", this.useVerify);
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* .test-enter-active {
  animation: test 0.5s linear;
}
.test-leave-active {
  animation: test 0s linear reverse;
}
@keyframes test {
  from {
    display: none;
  }
  to {
    display: block;
  }
} */
#Register {
  margin-top: 2%;
  margin-left: 74%;
  font-size: 17px;
}
#AccountOrCode {
  margin-left: 63%;
  margin-top: 10%;
}
.back {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fbfbfd;
}

/* 登录框 */
.login {
  height: 500px;
  width: 540px;
  color: white;
  position: relative;
  border: 1px solid rgb(199, 193, 206);
  border-radius: 5%;
  backdrop-filter: blur(15px);
  background-color: white;
  box-shadow: 0 11px 34px 0 rgba(0, 0, 0, 0.2);
}
#logo {
  height: 60px;
  width: 60px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}
</style>

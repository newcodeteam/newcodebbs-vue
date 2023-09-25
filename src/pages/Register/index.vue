<template>
  <div class="back">
    <!-- <Verify
      @success="&quot;success&quot;;"
      :mode="'pop'"
      :captchaType="'blockPuzzle'"
      :imgSize="{ width: '330px', height: '155px' }"
      ref="verify"
    ></Verify> -->
    <div class="Register">
      <el-link id="Login" @click="ToHome">进入首页</el-link>
      <Register />

      <img src="./img/shanhe.png" alt="" id="logo" />
    </div>
  </div>
</template>

<script>
import Register from "../../components/Register";
// import Verify from "../../components/Login/verifition/Verify.vue";
export default {
  name: "login",
  data() {
    return {};
  },
  components: {
    Register,
    // Verify,
  },
  methods: {
    // success(params) {
    // params 返回的二次验证参数, 和登录参数一起回传给登录接口，方便后台进行二次验证
    // },
    // useVerify(email) {
    //   this.$refs.verify.show(email);
    // },
    //前往首页
    ToHome() {
      this.$router.push({ name: "Home" });
    },
  },
  mounted() {
    this.$bus.$on("useVerify", this.useVerify);
    // this.$refs.cli.click();
  },
};
</script>

<style scoped>
body {
  min-height: 100vh;
  min-width: 100vw;
}
* {
  margin: 0;
  padding: 0;
}

#AccountOrCode {
  margin-left: 63%;
  margin-top: 10%;
}
#Login {
  margin-top: 10%;
  margin-left: 70%;
  font-size: 17px;
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
.Register {
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

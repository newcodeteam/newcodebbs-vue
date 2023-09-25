<template>
  <div>
    <el-input
      v-model="email"
      placeholder="请输入邮箱"
      class="input1"
    ></el-input>
    <el-input
      v-model="code"
      @keydown.alt="checkCode"
      placeholder="请输入验证码"
      class="Code"
    ></el-input>
    <el-button
      type="danger"
      icon="el-icon-message"
      circle
      @click="useVerify"
      id="getCode"
    ></el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      //邮箱
      email: "",
      //验证码
      code: "",
    };
  },

  methods: {
    useVerify() {
      this.$bus.$emit("useVerify", this.email);
    },
    //验证码登录
    login() {
      let CodeLogin = { mail: this.email, code: this.code };
      let promise = this.$store.dispatch("LogAndReg/Login", CodeLogin);
      promise
        .then((result) => {
          if (this.$store.state.LogAndReg.token) {
            //判断是否需要输入更新密码
            console.log(this.$store.state.LogAndReg.isRegister);
            //跳转到 注册/首页
            this.$store.state.LogAndReg.isRegister
              ? this.$router.push("Register")
              : this.$router.push("Home");
          }
        })
        .catch((err) => {
          //错误信息弹框
          alert(err);
        });
    },
  },
  watch: {
    code() {
      //输入验证码后自动登录
      if (this.code.length == 6) {
        //登录
        this.login();
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
#edit {
  font-size: 17px;
  float: right;
  margin-right: 10%;
}
#checked {
  margin-left: 10%;
}
.input1,
.input2 {
  height: 60px;
  width: 75%;
  margin: 2% 10%;
}
.test {
  position: relative;
}

#login {
  position: absolute;
  top: 18%;
  right: 16%;

  text-align: left;
}
.input1::after {
  content: "@163.com";
  color: #000;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
}
.Code {
  height: 60px;
  margin: 2% 10%;
  width: 30%;
}
#getCode {
  margin-left: -7%;
}
</style>

<template>
  <div>
    <div>
      <el-input
        v-model="email"
        placeholder="请输入邮箱"
        class="input1"
      ></el-input>

      <el-input
        placeholder="请输入密码"
        v-model="password1"
        show-password
        class="input2"
        size="big"
      ></el-input>
      <el-input
        placeholder="请输入相同密码"
        v-model="password2"
        show-password
        class="input2"
        size="big"
      ></el-input>

      <el-input
        placeholder="请输入验证码"
        v-model="Code"
        class="Code"
        size="big"
      ></el-input>

      <el-button
        type="danger"
        icon="el-icon-message"
        circle
        @click="useVerify"
        id="getCode"
      ></el-button>
    </div>
  </div>
</template>

<script>
import Verify from "./verifition/Verify.vue";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password1: "",
      password2: "",
      Code: "",
    };
  },
  components: {
    Verify,
  },

  methods: {
    showTime() {
      this.show = true;
    },
    useVerify() {
      this.showEmail = false;
      this.$bus.$emit("useVerify", this.email);
    },
    register() {
      console.log(this.password2);
    },
  },
};
</script>

<style scoped>
.input1,
.input2,
.Code {
  height: 60px;
  width: 70%;
  margin: 1% 10%;
}
.input1 {
  margin-top: 15%;
}
.Code {
  width: 30%;
}
#getCode {
  margin-left: -7%;
}
</style>

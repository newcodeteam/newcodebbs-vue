<template>
  <div>
    <el-input
      v-model="accountNumber"
      placeholder="请输入邮箱"
      class="input1"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      checked: true,
      accountNumber: "",
      password: "",
    };
  },
  methods: {
    cli(target) {
      console.log(target);
    },
    login() {
      // requests({url:'https://localhost:8080',method:'get'})
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
</style>

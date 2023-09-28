<template>
  <div class="header">
    <div class="left">
      <a href="" @click.prevent="t()"><i class="el-icon-more"></i></a>
      <a id="logo" href=""><img src="./logo.png" alt="" /></a>
      <div class="search">
        <i class="el-icon-search"></i>
        <el-input v-model="search" placeholder="搜索..."></el-input>
        <div class="menu">
          <div id="tittle"><el-checkbox /><span>仅搜索标题</span></div>
          <div id="user">
            <span>作者:</span
            ><el-input v-model="user" placeholder="会员" id="te"></el-input>
          </div>
          <div id="bottom">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
            <el-button type="text">Advanced...</el-button>
          </div>
        </div>
      </div>
    </div>

    <div class="right">
      <el-link icon="el-icon-key" :underline="false" class="link">登录</el-link>
      <el-link icon="el-icon-s-claim" :underline="false" class="link" id="link"
        >注册</el-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      user: "",
    };
  },
  methods: {
    t() {
      console.log(111);
    },
  },
};
</script>

<style>
/* 导航栏头部 */
.header {
  height: 7vh;
  width: 100vw;
  background-color: #2175f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
}
/* 左侧内容 */
.left {
  width: 70%;
  display: flex;
  align-items: center;
}
.left a ~ *,
.left a {
  margin-left: 20px;
}
/* 菜单栏按钮 */
.el-icon-more {
  font-size: 20px;
}
/* logo */
img {
  height: 30px;
  width: 124px;
}
/* 搜索框 */
.el-input input {
  padding: 0% 15px 0 30px;
  background-color: #438af5;
  border: none;
  border-radius: 8px;
}
.el-input input::placeholder {
  color: white;
}
.search {
  display: flex;
  align-items: center;
  position: relative;
  width: 50%;
}
.el-icon-search {
  font-size: 20px;
  position: absolute;
  left: 5px;
  z-index: 1;
}
.el-input input:focus {
  background-color: white;
}
/* 搜索框弹窗 */
.menu {
  position: absolute;
  bottom: -151px;
  border-radius: 8px;
  height: 141px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;
}
/* 弹框上部 */
#tittle {
  display: flex;
  height: 33%;
  margin-left: 10px;
  align-items: center;
}
#tittle span {
  padding: 0 0 0 10px;
  color: black;
}
/* 弹框中部 */
#user {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#user .el-input input {
  padding: 0 15px;
  height: 36px;
  width: 97%;
}
#user span {
  width: 50px;
  margin-left: 2%;
}
#te {
  background-color: #f1f3fb;
}

#te::placeholder {
  color: gray;
}
/* 弹框下部 */
#bottom {
  display: flex;
  height: 33%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: #f1f3fb;
  position: absolute;
  bottom: 0px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
#bottom .el-icon-search {
  position: relative;
  left: 0px;
  font-size: 15px;
}
#bottom .el-button {
  margin-right: 0 10px 0 0;
  margin-top: 5px;
  padding: 7px 10px;
}
/* 登录 注册标签 */
.right {
  width: 20%;
  display: flex;
  justify-content: flex-end;
}
#link {
  margin-right: 30px;
}
.link {
  margin-right: 10px;
  font-size: 16px;
}
.el-link.el-link--default {
  color: rgba(255, 255, 255, 0.7);
}
</style>

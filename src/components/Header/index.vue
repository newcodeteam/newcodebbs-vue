<template>
  <div class="header">
    <div class="left" style="width: 200px">
      <a href="" @click.prevent="t()"><i class="el-icon-more"></i></a>
      <a id="logo" href=""><img src="./logo.png" alt="" /></a>
    </div>
    <div class="search">
      <i class="el-icon-search"></i>
      <el-input v-model="search" placeholder="搜索..." id="top"></el-input>
      <!-- 搜索框弹窗 -->
      <transition name="el-zoom-in-top">
        <div v-show="show1 || show2" class="transition-box">
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
      </transition>
    </div>
    <div class="right">
      <el-link icon="el-icon-key" :underline="false" class="link">登录</el-link>
      <el-link icon="el-icon-s-claim" :underline="false" class="link" id="link"
        >注册</el-link
      >
    </div>
  </div>
</template>

<script scoped>
export default {
  name: "Header",
  data() {
    return {
      search: "",
      user: "",
      show1: false,
      show2: false,
    };
  },
  methods: {
    t() {
      this.$bus.$emit("show");
    },
  },
};
</script>

<style scoped>
/* 导航栏头部 */
.header {
  height: 7vh;
  width: 100vw;
  background-color: #2175f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
}
/* 左侧内容 */
.left {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left a:nth-child(1) {
  transition-duration: 0.5s;
  transform: translateY(-100px);
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
.search {
  display: flex;
  align-items: center;
  position: relative;
  width: 45%;
  transition-duration: 0.5s;
}
.search .el-input /deep/ #top {
  padding: 0% 15px 0 30px;
  background-color: #438af5;
  border: none;
  border-radius: 8px;
}
.search .el-input /deep/ #top ::placeholder {
  color: white;
}

.el-icon-search {
  font-size: 20px;
  position: absolute;
  left: 5px;
  z-index: 1;
}
.search .el-input /deep/ #top:focus {
  background-color: white;
}
/* 搜索框弹窗 */
.transition-box {
  width: 100%;
  border-radius: 4px;
  text-align: center;
  padding: 20px 0px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  z-index: -1;
}
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
#user .el-input /deep/ #te {
  padding: 0 15px;
  height: 36px;
  width: 97%;
}
#user span {
  width: 50px;
  margin-left: 2%;
}
#user .el-input /deep/ .el-input__inner {
  background-color: #f1f3fb;
}

#user .el-input /deep/ .el-input__inner::placeholder {
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
  width: 150px;
  display: flex;
  justify-content: flex-end;
  margin-right: 5%;
}
#link {
  margin-right: 30px;
}
.link {
  margin-right: 10px;
  font-size: 16px;
  width: 60px;
}
.right .link:hover {
  color: white;
}
.el-link.el-link--default {
  color: rgba(255, 255, 255, 0.7);
}
@media screen and (max-width: 769px) {
  .left a:nth-child(1) {
    transform: translateY(0);
  }
  .search {
    transform: translateY(-300px);
  }
}
</style>

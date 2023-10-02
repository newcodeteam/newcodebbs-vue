<template>
  <div>
    <el-container>
      <!-- 头部导航栏 -->
      <el-header style="height: 13vh"
        ><Header />
        <div class="block"><a href="" id="dd">论坛列表</a></div>
      </el-header>

      <el-container>
        <!-- 左侧导航 -->
        <el-aside width="220px"><Menu /></el-aside>
        <!-- 右侧body -->
        <el-main>
          <!-- 欢迎框头部 -->
          <div class="welcome">
            <span>论坛列表</span>
            <el-button>\</el-button>
          </div>
          <!-- 欢迎框 -->
          <div class="mediu">
            <h1>欢迎来到论坛!</h1>
            <span>遇见你真好! 快快进入这篇创造快乐的地方吧!</span>
            <el-button>注册</el-button>
          </div>
          <!-- 页面主体 -->
          <div class="body">
            <div class="left">
              <List />
            </div>
            <div class="right"></div>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <Footer>d</Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Menu from "../../components/Body/menu";
import List from "../../components/Body/list";
export default {
  name: "home",
  components: { Header, Menu, List },
};
</script>

<style scoped>
/* 标题栏 */
a {
  text-decoration: none;
}
/* 顶部标题栏 */
.el-header {
  padding: 0;
  z-index: 2;
}
.block {
  height: 7vh;
  width: 100%;
  background-color: #2175f3;
  position: fixed;
  top: 7vh;
  text-align: center;
  z-index: -2;
}
#dd {
  position: relative;
  padding: 14px;
  border-bottom: 4px solid rgb(255, 255, 255);
  top: 2vh;
  color: white;
}
/* 中间内容区 */

.el-container .el-container {
  padding-top: 15px;
  background-color: #f8faff;
  margin-top: 8px;
  z-index: 1;
}

.el-main {
  background-color: #f8faff;
  height: 2000px;
  padding: 8px;
}

/* 左侧导航栏 */
.el-aside {
  height: 800px;
  position: sticky;
  top: 14vh;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
/* 右侧主体欢迎页 */
.welcome {
  display: flex;
  justify-content: space-between;
}
.welcome span {
  font-size: 25px;
}
.welcome .el-button {
  padding: 1px 12px;
  background-color: transparent;
  border: none;
}
.welcome .el-button:hover {
  background-color: #afcbf7;
}
/* 欢迎框 */
.mediu {
  height: 153.8px;
  margin-top: 25px;
  background-color: #afcbf7;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}
.mediu h1 {
  font-size: 30px;
  font-weight: 500;
}
.mediu * {
  margin-top: 8px;
  color: white;
}
.mediu .el-button {
  color: #2175f3;
  padding: 11px 15px;
  border: none;
}
.mediu .el-button:hover {
  background-color: #2175f3;
  color: white;
}
/* 页面信息主体 */
.body {
  display: flex;
  justify-content: space-between;
}
.left {
  width: 70%;
}
.right {
  border: 1px solid darkblue;
  height: 100px;
  width: 25%;
}
/* 底部 */
Footer {
  background-color: #ecf2fb;
  height: 200px;
  width: 100%;
}
</style>

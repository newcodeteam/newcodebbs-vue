<template>
  <div>
    <el-container>
      <!-- 头部导航栏 -->
      <el-header style="height: 13vh"
        ><Header />
        <div class="block">
          <a href="" id="dd">论坛列表</a>
        </div>
      </el-header>

      <el-container>
        <!-- 左侧导航 -->
        <div :class="show3 ? 'menu2' : 'menu1'">
          <el-aside style="220px"><Menu /></el-aside>
        </div>

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
              <List />
              <List />
              <List />
            </div>
            <div class="right">
              <!-- 右侧信息栏 -->
              <div class="one">
                <div>
                  <i class="el-icon-user-solid"></i
                  ><el-link href="" target="_blank">在线会员</el-link>
                </div>
                <div>现在没有会员在线.</div>
                <div>当前在线: 3 (会员: 0,游客: 3)</div>
              </div>
              <News />
            </div>
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
import News from "../../components/Body/news";

export default {
  name: "home",
  components: { Header, Menu, List, News },
  data() {
    return {
      show3: false,
    };
  },
  methods: {
    show2() {
      this.show3 = !this.show3;
    },
  },
  mounted() {
    this.$bus.$on("show", this.show2);
  },
};
</script>

<style scoped>
/* PC端 */

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
  position: relative;
  height: 54px;
  width: 100%;
  background-color: #2175f3;
  position: fixed;
  top: 7vh;
  text-align: center;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 菜单 */
#dd {
  position: absolute;
  font-size: 1rem;
  width: 100px;
  color: white;
}
.block::after {
  content: "";
  height: 2px;
  width: 100px;
  background-color: white;
  bottom: 0;
  position: absolute;
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
.menu1,
.menu2 {
  width: 220px;
  transition-duration: 0.3s;
}

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
  transition-duration: 0.5;
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
  transition-duration: 0.5s;
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
  transition-duration: 0.5s;
  height: auto;
  width: 25%;
}
/* 右侧信息栏 */
.one {
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  margin-top: 10px;
}
.one div {
  padding: 13px;
  color: #c4c0c0;
  font-size: 13px;
}
.one :nth-child(1) {
  padding: 5px 7px;
  color: #c4c0c0;
  display: flex;
  align-items: center;
}
.one div:nth-child(2) {
  color: black;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 15px 0 rgba(88, 106, 153, 0.2);
}
.one div:nth-child(3) {
  color: black;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: rgb(213, 213, 216);
  box-shadow: 0 4px 15px 0 rgba(88, 106, 153, 0.2);
}

/* 底部 */
Footer {
  background-color: #ecf2fb;
  height: 200px;
  width: 100%;
}

/* 移动端 */
@media screen and (max-width: 769px) {
  /* 右侧状态栏隐藏 */
  .right {
    display: none;
  }
  /* 左侧导航栏隐藏 */
  .menu1 {
    /* transform: translateX(-200px); */
    position: fixed;
    top: 13vh;
    z-index: -1;
    opacity: 0;
    width: 0;
  }
  .el-aside /deep/ .el-menu {
    margin-top: 20px;
  }

  .menu2 {
    z-index: 2;
    /* background-color: rgba(124, 123, 122, 0.562); */
    position: fixed;
    top: 13vh;
    opacity: 1;
    width: 100%;
  }
  /* 左侧导航栏弹出阴影 */
  .menu2::after {
    content: "";
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    transition-duration: 0;
    background-color: rgba(124, 123, 122, 0.562);
    width: 100%;
    height: 1200px;
  }
  /* 列表部分宽度适配 */
  .left {
    width: 100%;
  }
  /* 列表部分总体居中 */
  .body {
    width: 100%;
    justify-content: center;
  }
  .mediu {
    width: 100%;
  }
}
</style>

<template>
  <div>
    <el-container>
      <!-- 头部导航条 -->
      <el-header
        ><Header />
        <div class="block">
          <a href="" id="dd">菜单</a>
        </div></el-header
      >
      <el-container>
        <!-- 左侧导航栏 -->
        <div :class="show3 ? 'menu2' : 'menu1'">
          <el-aside style="220px"><Menu /></el-aside>
        </div>
        <!-- 主体 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Menu from "../../components/Body/menu";

export default {
  name: "Background",
  components: { Header, Menu },
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
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.el-header {
  z-index: 3;
}
/* 顶部菜单栏 */
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
/* 左侧导航栏 */
.menu1,
.menu2 {
  width: 220px;
  transition-duration: 0.3s;
}
.el-aside {
  height: 900px;
  position: sticky;
  top: 13vh;
}
.el-aside::-webkit-scrollbar {
  display: none;
}
.el-aside /deep/ .el-menu {
  margin-top: 30px;
}
/* 右侧内容区 */
.el-main {
  background-color: #fdfeff;
  height: 2000px;
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
    z-index: 2;
    opacity: 0;
    width: 0;
  }

  .menu2 {
    z-index: 2;
    /* background-color: rgba(124, 123, 122, 0.562); */
    position: fixed;
    top: 13vh;
    opacity: 1;
    height: 100px;
    width: 100%;
  }
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
}
</style>

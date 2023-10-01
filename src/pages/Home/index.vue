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
        <el-aside width="240px"><Menu /></el-aside>
        <!-- 右侧body -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <Footer>d</Footer>
  </div>
</template>

<script>
import Header from "../../components/Header";
import Menu from "../../components/Body/menu";
export default {
  name: "home",
  components: { Header, Menu },
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
  z-index: 2;
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
  background-color: #f8faff;
  margin-top: 8px;
  z-index: 1;
}

.el-main {
  background-color: #f8faff;
  height: 2000px;
}
Footer {
  background-color: #ecf2fb;
  height: 200px;
  width: 100%;
}
.el-aside {
  height: 100vh;
  position: sticky;
  top: 14vh;
}
</style>

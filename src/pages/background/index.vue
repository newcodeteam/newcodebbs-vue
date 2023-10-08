<template>
  <div>
    <el-container>
      <el-header><Header /></el-header>
      <el-container>
        <el-aside style="width: 220px"><Menu /></el-aside>
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
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 左侧导航栏 */
.el-aside {
  height: 800px;
  position: sticky;
  top: 4vh;
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
</style>

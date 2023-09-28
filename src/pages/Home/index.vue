<template>
  <div>
    <Header />
    <div class="block"><a href="" id="dd">论坛列表</a></div>

    <div>
      <Menu />
    </div>
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
.block {
  height: 6vh;
  width: 100%;
  background-color: #2175f3;
  position: fixed;
  top: 7vh;
  text-align: center;
  z-index: -1;
}
#dd {
  position: relative;
  padding: 14px;
  border-bottom: 4px solid white;
  top: 2vh;
  color: white;
}
</style>

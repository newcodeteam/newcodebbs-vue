<template>
  <div>
    <div class="top">
      <i class="el-icon-user-solid"></i
      ><el-link href="" target="_blank">最新资源</el-link>
    </div>

    <div class="news">
      <div>
        <img src="../../../assets/logo.png" alt="用户头像" />
        <div>
          <span>
            <el-link type="primary" :underline="false"
              >{百度云}BaiduPCS--百度云Linux客户端</el-link
            >
          </span>
          <span>Linux下的百度云客户端</span>
          <span style="color: grey">SakuraPuare~已更新:2021-08-09</span>
        </div>
      </div>
      <div>
        <img src="../../../assets/logo.png" alt="用户头像" />
        <div>
          <span>
            <el-link type="primary" :underline="false"
              >{百度云}BaiduPCS--百度云Linux客户端</el-link
            >
          </span>
          <span>Linux下的百度云客户端</span>
          <span style="color: grey">SakuraPuare~已更新:2021-08-09</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
/* 最新资源 */
img {
  height: 35px;
  width: 34px;
  margin-top: 5px;
}
.top {
  padding: 10px 10px;
}
.news {
  display: flex;
  background-color: white;
  border-radius: 8px;
  flex-flow: column;
}
.news div {
  display: flex;
  justify-content: space-around;
  padding: 5px;
}
.news div div {
  width: 75%;
  display: flex;
  flex-flow: column;
}
.news div div span {
  font-size: 1rem;
  width: 220px;
}
.el-link {
  padding: 2px;
  align-self: start;
}
</style>

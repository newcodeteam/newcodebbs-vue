<template>
  <div>
    <div class="top">
      <el-link href="" @click.prevent="t()" target="_blank">默认链接</el-link>
      <a href="" @click.prevent="show2 = !show2"
        ><i class="el-icon-arrow-down"></i
      ></a>
    </div>
    <transition name="el-zoom-in-top">
      <div v-show="show2" class="transition-box">
        <div class="li">
          <div class="left">
            <i class="el-icon-chat-line-square"></i>
            <div id="me">
              <el-link href="" @click.prevent="t()" target="_blank" id="m"
                >Android</el-link
              >
            </div>
            <!-- 手机端使用 -->
            <div class="right2">
              <el-link href="" @click.prevent="t()" target="_blank" id="m"
                >Android</el-link
              >
              <div>
                <span style="color: #afb0b3"
                  ><span style="color: black">3 </span>主题
                </span>
                <span style="color: #afb0b3"
                  ><span style="color: black">3 </span>消息
                </span>
              </div>
              <span style="font-size: 14px; padding: 5px 0 0 0"
                >Java开发入门</span
              >
              <div style="display: flex; font-size: 13px; color: #afb0b3">
                <span>2021-5-25-</span>
                <el-link
                  href=""
                  @click.prevent=""
                  target="_blank"
                  style="color: #afb0b3"
                >
                  用户名</el-link
                >
              </div>
            </div>
          </div>
          <!-- PC端使用 -->
          <div class="right">
            <div class="zhuti">
              <span>3</span>
              <span>主题</span>
            </div>
            <div class="xiaoxi">
              <span>5</span>
              <span>消息</span>
            </div>
            <div class="asd">
              <img src="../../../assets/logo.png" alt="用户头像" />
              <div>
                <span>Java开发入门</span>
                <span id="time"
                  >2021-05-25~<el-link
                    href=""
                    @click.prevent="t()"
                    target="_blank"
                    >用户名</el-link
                  ></span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      show2: true,
    };
  },
};
</script>

<style scoped>
img {
  height: 35px;
  width: 34px;
  margin-top: 5px;
}

/* 点击下拉按钮 */
.top {
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #409eff 3px solid;
}
.top * {
  margin: 0 10px;
}
/* 内容 */

.transition-box {
  margin-bottom: 10px;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
  text-align: center;
  padding: 20px 20px;
  box-sizing: border-box;
  margin-right: 20px;
  box-shadow: 0 4px 15px 0 rgba(88, 106, 153, 0.2);
}

/* 每一条内容 */
.li {
  padding: 8px 0px;
  height: auto;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.li:hover {
  background-color: rgb(229, 228, 230);
}
/* 内容左侧 */
.left {
  width: 50%;
  display: flex;
}
#m {
  padding: 0 7px;
  font-size: 16px;
  width: 50px;
}
.el-icon-chat-line-square {
  font-size: 25px;
  color: #afb0b3;
  padding: 10px;
}
/* 手机端样式隐藏 */
.right2 {
  display: none;
}
/* 内容右侧 */
.right {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}
/* 主题 / 消息*/
.zhuti {
  border-right: gray 1px solid;
}
.zhuti,
.xiaoxi {
  padding: 0 8px;
  display: flex;
  flex-flow: column;
}
.zhuti :nth-child(2),
.xiaoxi :nth-child(2) {
  color: #afb0b3;
  font-size: 0.9rem;
}
.zhuti span,
.xiaoxi span {
  width: 30px;
}
/* 内容信息 */
.asd {
  padding: 0 15px;
  display: flex;
  justify-content: center;
}
.asd div {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
}
.asd div span {
  text-align: start;
  width: 100%;
  font-size: 0.8rem;
}
/* 内容日期 */
#time *,
#time {
  display: flex;
  color: #afb0b3;
  font-size: 0.6rem;
}
#time /deep/ .el-link:hover {
  color: #409eff;
}

/* 移动端适配 */
@media screen and (max-width: 769px) {
  /* 博主头像隐藏 */
  .asd img {
    display: none;
  }
  #me {
    display: none;
  }
  .left {
    width: 100%;
  }
  /* 手机端样式 */
  .right2 {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
  }
  /* PC端样式隐藏 */
  .right {
    display: none;
  }
}
</style>

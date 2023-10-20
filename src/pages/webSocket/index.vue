<template>
  <div>
    <div v-for="i in data" :key="i">{{ i }}</div>
    <el-input
      style="width: 30%"
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea"
      maxlength="30"
      show-word-limit
    >
    </el-input>
    <el-button type="primary">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: "webSocket",
  data() {
    return {
      textarea: "",
      path: "ws://localhost:8999/websocket/",
      ws: {},
      data: ["123", "123"],
    };
  },
  methods: {
    //init函数可在页面加载的时候就进行初始化或者根据自己的业务需求在需要打开通讯的时候在进行初始化
    init() {
      // 实例化socket，这里的实例化直接赋值给this.ws是为了后面可以在其它的函数中也能调用websocket方法，例如：this.ws.close(); 完成通信后关闭WebSocket连接
      this.ws = new WebSocket(this.path);

      //监听是否连接成功
      this.ws.onopen = () => {
        console.log("ws连接状态：" + this.ws.readyState);
        //连接成功则发送一个数据
        this.ws.send("连接成功");
      };

      //接听服务器发回的信息并处理展示
      this.ws.onmessage = (data) => {
        console.log("接收到来自服务器的消息：");
        console.log(data);
      };

      //监听连接关闭事件
      this.ws.onclose = () => {
        //监听整个过程中websocket的状态
        console.log("ws连接状态：" + this.ws.readyState);
      };

      //监听并处理error事件
      this.ws.onerror = function (error) {
        console.log(error);
      };
    },
  },
};
</script>

<style scoped>
body {
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

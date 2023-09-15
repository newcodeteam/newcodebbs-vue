<template>
  <div>
    
    <input type="text" placeholder="请输入账号" @click="showTime" :value="accountNumber">
    <div  v-show="show"  :class="{'showTime':show}">
        <input type="password" placeholder="请输入密码" v-model="password1" >
        <input type="password" placeholder="确认密码" v-model="password2" >
        <input type="text" placeholder="邮箱" v-model="email" id="email" v-show="showEmail">
        <input type="text" placeholder="验证码" v-model="code" id="code" v-show="!showEmail">
        <button @click="useVerify" id="verifition">获取验证码</button>
    </div >
    
    <button id="button" @click="register">点击注册</button>
  </div>
</template>

<script>
import Verify from "./verifition/Verify";
export default {
    name:'Register',
    data() {
        return {
            show:false,
            showEmail:true,
            accountNumber:'',
            password1:'',
            password2:'',
            email:'',
            code:''
        }
        
    },
    components:{
        Verify
    },
    
    methods: {
        showTime(){
            this.show=true
        },
        useVerify(){
            this.showEmail=false
            this.$bus.$emit('useVerify','$$$')
        },
        register(){
            console.log(this.password2)
        }
    },
}
</script>

<style scoped>

input[type='text'],input[type='password']{
        height: 50px;
        width: 80%;
        margin: 3% 10%;
        background-color: transparent;
         border: none; 
         outline: none;
         border-bottom:2px solid rgb(248, 245, 245);
         color: white;
         font-size: 16px;
         transition-duration: 0.5s;
    }
    input::placeholder {
         color: white;
         font-size: 16px;
    }
    input:focus{
        transform:translateX(10px);
        border-bottom:1px solid blue;
        
        
    }
    label{
        user-select:none;
        margin: 5px;
        height:15px;
    }
    #radio{
        margin:5px 0 0 40px;
        height: 15px;
        width: 15px;
    }
    a{
        float: right;
        margin-right: 40px;
    }
    #button{
        height: 53px;
        width: 80%;
        margin: 5% 0 0 10%;
        background-color:hsl(216, 88%, 74%);
        border: none;
        border-radius: 15px;
        font-size: 16px;
        color: #f8e9e9;
    }
    #button:hover{
        background-color: hsl(226, 82%, 57%);
    }
    .showTime{
        animation: atguigu linear 0.2s;
    }
    @keyframes atguigu{
    from{
        opacity: 0;
        height: 0px;
    }
    to{
        opacity: 1;
        height: 250px;
    }
    }
    #email{
        width: 55%;
    }
    /* 验证码按钮 */
    #verifition{
        
        height: 60px;
        border: none;
        color: rgb(1, 5, 5);
        background-color: transparent;
        font-weight: 600;
        font-size: 10px;
        margin: 0 0 0 -10px;
    }
</style>
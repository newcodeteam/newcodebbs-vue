<template>
  <div>
    <input type="text" placeholder="请输入账号">
    <input @click="cli" type="password" placeholder="请输入密码" value="" >
    <input type="checkbox" name="radio" id="radio" ><label for="radio">自动登录</label><a href="#">忘记密码</a>
    <button id="button" @click="login">点击登录</button>
  </div>
</template>

<script>
export default {
    name:'Login',
    methods: {
        cli(target){
            console.log(target)
        },
        login(){
            // requests({url:'https://localhost:8080',method:'get'})
        }
    },
}
</script>

<style scoped>

    a{
        text-decoration: none;
        color: #000;
    }
    
    input[type='text'],input[type='password']{
        height: 50px;
        width: 80%;
        margin: 5% 10%;
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
        background-color:hsl(328, 88%, 74%);
        border: none;
        border-radius: 15px;
        font-size: 16px;
        color: #f8e9e9;
    }
    #button:hover{
        background-color: hsl(328, 82%, 57%);
    }
</style>
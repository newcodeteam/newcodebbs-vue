import LogAndReg from '../pages/Login'
export default[
    {
        name:'LoginAndRegister',
        path:'/logAndReg',
        component:LogAndReg
    },
    {
        //没写就是任意路由都是定向这个
        path:'*',
        //重定向
        redirect:'/logAndReg'
    }
    
]
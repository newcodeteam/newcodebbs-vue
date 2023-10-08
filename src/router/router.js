import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Background from '../pages/background'

export default [
    
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Register',
        path:'/register',
        component:Register
    },
    {
        name:'Home',
        path:'/home',
        component:Home
    },
    {
        name:'Background',
        path:'/background',
        component:Background
    },
    {
        //没写就是任意路由都是定向这个
        path:'*',
        //重定向
        redirect:'/background'
    }
    
]
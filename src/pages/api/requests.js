import store from '@/store'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests=axios.create({
    baseURL:'/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
//请求拦截器
requests.interceptors.request.use((config) => {
    //加载进度条
    nprogress.start()
    //将验证码标识放入请求头中进行发送
    let reqMsg = sessionStorage.getItem("reqMsg")
    let token = store.state.LogAndReg.token
    
    reqMsg?config.headers["reqMsg"] = reqMsg:''
    token ? config.headers['token'] = token : ''
    console.log(token)
    return config
})
//返回值拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()


    return res.data
},(error)=>{
     return Promise.reject(error)
})

export default requests
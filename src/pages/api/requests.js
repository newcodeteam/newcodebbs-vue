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
requests.interceptors.request.use((config)=>{
    nprogress.start()
    //将验证码标识放入请求头中进行发送
    console.log('请求一次')
    let reqMsg = sessionStorage.getItem("reqMsg")
    
    if (reqMsg) {
        
        config.headers["reqMsg"] = reqMsg
    }

    return config
})
requests.interceptors.response.use((res)=>{
    nprogress.done()

    
    

    return res.data
},(error)=>{
     return Promise.reject(error)
})

export default requests
import store from '@/store'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests=axios.create({
    baseURL:'/api',
    timeout:5000
})
requests.interceptors.request.use((config)=>{
    nprogress.start()
    console.log(store)
    return config
})
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    console.log(1)
})

export default requests
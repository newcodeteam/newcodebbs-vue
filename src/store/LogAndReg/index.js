import {reqCode} from '../../pages/api/api'
export default {
    namespaced:true,
    actions: {
        // 获取验证码
       async getCode({commit},email) {
            const result = await reqCode({ 'mail':email })
            
            if (result.code == 200) {
                //请求成功
                //清除本地存储的一次性验证码标识
                window.sessionStorage.removeItem('reqMsg')
            } 
        }
    },
    mutations:{

    },
    state:{

    },
    getters:{
        
    }
}
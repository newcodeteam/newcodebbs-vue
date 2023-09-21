import {reqCode,reqCodeLogin} from '../../pages/api/api'
export default {
    namespaced:true,
    actions: {
        // 获取验证码
       async getCode({commit},email) {
            const result = await reqCode({ 'mail':email })
            
            if (result.code == 200) {
                //获取验证码成功
                //清除本地存储的一次性验证码标识
                window.sessionStorage.removeItem('reqMsg')
            } 
        },
        async Login({ commit }, mail, code) {
            const result = await reqCodeLogin({ 'code':code,'mail':mail,'password':'' })
            
            if (result.code == 200) {
                //登录成功
                console.log(result)
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
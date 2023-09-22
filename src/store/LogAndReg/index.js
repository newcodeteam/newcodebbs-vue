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
        async Login({ commit }, data) {
            const result = await reqCodeLogin( data )
            
            if (result.code == 200) {
                //登录成功 已注册
                commit(false)
                
            }
            else if (result.code == 201) {
                //登录成功 未注册
                commit(true)
            }
            
        }
    },
    mutations:{
        Login({ state }, isRegister) {
            //修改注册状态
            state.isRegister=isRegister
        }
    },
    state:{
        isRegister:true
    },
    getters:{
        
    }
}
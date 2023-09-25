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
                commit('Login', { isRegister: false, token: result.data })
                return 'ok'
            }
            else if (result.code == 201) {
                //登录成功 未注册
                commit('Login', result.data)
                return 'ok'
            } else {
                return Promise.reject(new Error(result.msg))
            }
            
        }
    },
    mutations:{
        Login(state , data) {
            //修改注册状态
            state.isRegister = data.isRegister
            state.token=data.token
        }
    },
    state: {
        //是否需要设置密码
        isRegister: true,
        //登录凭证
        token:''
    },
    getters:{
        
    }
}
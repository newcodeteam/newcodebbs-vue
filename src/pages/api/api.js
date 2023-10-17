import requests from './requests'
//获取验证码
export const reqCode=(params)=>{
    return requests({
        url: '/user/register/code',
        method: 'post',
        params 
    })
}
//验证码登录
export const reqCodeLogin=(data)=>{
    return requests({
        url: '/user/loginMail',
        method: 'post',
        data
    })
}
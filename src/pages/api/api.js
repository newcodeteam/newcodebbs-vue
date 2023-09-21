import requests from './requests'
export const reqCode=(params)=>{
    return requests({
        url: '/user/code',
        method: 'post',
        params 
    })
}
export const reqCodeLogin=(data)=>{
    return requests({
        url: '/user/loginMail',
        method: 'post',
        data 
    })
}
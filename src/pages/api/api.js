import requests from './requests'
export const reqCode=(params)=>{
    return requests({
        url: '/user/code',
        method: 'post',
        params 
    })
}
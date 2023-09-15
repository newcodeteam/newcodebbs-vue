import Vue from 'vue'
import vueRouter from 'vue-router'
import routers from './router'
Vue.use(vueRouter)

// 重写编程路由
let originPush=vueRouter.prototype.push
let originReplace=vueRouter.prototype.replace

vueRouter.prototype.push=function(location,reslove,reject){
    if(reslove&&reject){
        originPush.call(this,location,reslove,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
vueRouter.prototype.replace=function(location,reslove,reject){
    if(reslove&&reject){
        originReplace.call(this,location,reslove,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

const router= new vueRouter({
    routes:routers
})
export default router
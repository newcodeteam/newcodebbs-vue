import Vue from 'vue'
import App from './App.vue'
//引入router路由
import router from './router/index'
//引入vuex
import store from './store'
//引入Element UI组件库
import { Button,Link ,Checkbox,Input} from 'element-ui'
Vue.use(Button)
Vue.use(Link)
Vue.use(Checkbox)
Vue.use(Input)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    //绑定全局事件总线
    Vue.prototype.$bus=this
  }
}).$mount('#app')

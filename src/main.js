import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
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
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')

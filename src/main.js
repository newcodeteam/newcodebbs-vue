import Vue from 'vue'
import App from './App.vue'
//引入router路由
import router from './router/index'
//引入vuex
import store from './store'
//引入Element UI组件库



import { Button,Link,Menu,Submenu,MenuItem,MenuItemGroup,Header,Aside,Main ,Radio,Checkbox,Input, Icon, Container} from 'element-ui'
Vue.use(Link)
Vue.use(Icon)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
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

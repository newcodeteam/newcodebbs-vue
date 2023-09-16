import Vue from 'vue'
import Vuex from 'vuex'
import LogAndReg from './LogAndReg'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        LogAndReg
    }
})
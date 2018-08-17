// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routers/routers'
import Vuex from 'vuex'
import { store } from './store/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'


axios.defaults.baseURL = '120.27.137.151:9976/'

import { Header,Button } from 'mint-ui';
import { Radio } from 'mint-ui';


import { Toast } from 'mint-ui'
window.Toast = Toast;

import { MessageBox } from 'mint-ui'
window.MessageBox = MessageBox


Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Radio.name, Radio);



import msgbox from '../src/components/MsgBox/index.js'
Vue.use(msgbox)

//import Vue from 'vue';
//import VueSocketio from 'vue-socket.io';

//本地化，中文时间显示
moment.locale('zh-cn')

Vue.prototype.moment = moment;

Vue.prototype.random = n => Math.floor(n*Math.random())

//Vuex
Vue.use(Vuex)

//axios
Vue.use(VueAxios,axios)
Vue.prototype.$axios = axios

//router
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  render: h => h(App)
})

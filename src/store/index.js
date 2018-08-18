import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
      useId:"",
      gender:"",
      headPortrait:"",
      count:7,
      msgs:[]
    },
    getters:{},
    mutations:{
        Login:(state,data) => {
            localStorage.setItem('token',data)
            //localStorage.token = data
            state.token = data
        },
        Logout:(state) => {
            localStorage.removeItem('token')
            state.token = null
        },
        User_id:(state,data) => {
            localStorage.setItem('userId',data)
            state.userId = data
        }
    },
  })
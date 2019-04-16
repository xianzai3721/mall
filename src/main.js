import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import Vuex from 'vuex'

import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'

Vue.use(infiniteScroll)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueLazyLoad,{
  preLoad: 1.3,
  error: '../static/loading-svg/error.png',
  loading: '../static/loading-svg/loading-bars.svg',
  attempt: 3
})
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    nickName:'',
    carCount:0,
    isLogin:false
  },
  mutations:{
    updateUserInfo(state,nickName){
      console.log(nickName);
      state.nickName = nickName;
      if(nickName){
        state.isLogin = true;
      }
    },
    updateCartCount(state,carCount){
      state.carCount += carCount;
    }
  },
  actions:{
    updateUserInfoAction(context,nickname){
      context.commit('updateUserInfo',nickname);
    },
    updateCartCountAction(context,carCount){
      context.commit('updateCartCount',carCount);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  mounted(){
    this.checkLogin();
    this.getCartCount();
  },
  methods:{
    checkLogin(){
      this.$axios.get('users/checkLogin').then(res=>{
        console.log(res)
        var res = res.data;
        if(res.status == 0){
          console.log(res.data.result.username)
          this.$store.dispatch("updateUserInfoAction", res.data.result.username);
        }else{
          if(this.$route.path != '/goods'){
            this.$route.push('/goods');
          }
        }
      })
    },
    getCartCount(){
      this.$axios.get("users/getCartCount").then(res=>{
        console.log(res)
        var res = res.data;
        if(res.status=="0"){
          this.$store.commit("updateCartCount",res.data.result);
        }
      });
    }
  }
})

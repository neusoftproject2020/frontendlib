import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  loginuser:null,
	  visitCount:0
	  
  },
  getters:{ //取得Store中数据的方法
	  loginuser(state){
		  return state.loginuser;
	  },
	  visitcount(state){
		  return state.visitCount;
	  }
  },
  mutations: { //store 更改的方法
	  setLoginUser(state, user){
	  	 state.loginuser=user;
	  },
	  logoutUser(state){
	  	  state.loginuser=null;
	  }
  },
  actions: {
	  loginUser(state, user){
	  	  state.commit("setLoginUser",user);
	  },
	  logout(state){
	  	  state.commit("logoutUser"); //提交mutations的logoutUser
	  }
	  
  },
  modules: {
  }
})

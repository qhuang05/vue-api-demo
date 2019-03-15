import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count: 100
	},	
	// 在组件内部获取store中状态的函数。类似于组件中的computed
	getters:{
		filterCount(state){
			return state.count >= 120 ? 120 : state.count;
		}
	},
	// 唯一修改状态的事件回调函数。
	mutations:{
		decrease(state, payload){
			state.count -= payload.n;
		},
		increase(state, payload){
			state.count += payload.n;
		}
	},
	// 包含异步操作时，使用actions
	actions: {
		increaseAction(context){
			setTimeout(()=>{
				//改变状态，提交mutations
				context.commit('increase', {n: 10});
				context.dispatch('callbackAction', { name: '张三' });
			}, 1000)
		},
		callbackAction(context, obj){
			console.log(obj);
		}
	}
})
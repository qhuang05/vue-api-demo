<template>
  <div class='count-wrap'>
  	<button @click="deHandler">－</button>
  	<span>{{ number }}</span>
  	<button @click="addHandler">＋</button>
  	<span class="result">结果：{{number2}}</span>
  </div>
</template>

<script>
export default {
	computed:{
		number(){
			return this.$store.state.count
		},
		number2(){
			return this.$store.getters.filterCount
		}
	},
	methods:{
		deHandler(){
			this.$store.commit('decrease',{
				n: 5
			});
		},
		addHandler(){
			// this.$store.commit('increase', {
			// 	n: 10
			// });
			//包含异步操作时，触发action
			this.$store.dispatch('increaseAction');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.count-wrap{
		padding: 10px 0;
	}
	button{
		display: inline-block;
		width:36px;
		height: 36px;
		line-height: 36px;
	}
	span{
		padding: 0 15px;
	}
</style>

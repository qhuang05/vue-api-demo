<template>
  <div class='count-wrap'>
  	<button @click="deHandler({n:5})">－</button>
  	<span>{{ count }}</span>
  	<button @click="addHandler">＋</button>
  	<span class="result">结果：{{ count2 }}</span>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
	// computed: mapState({
		// count: 'count'
		// count: (state) => state.count
		// count(state){
		// 	return state.count+100;
		// }
	// }),
	// computed: mapState(['count']),
	computed:{
		...mapState({
			count: 'count'
		}),
		...mapGetters({
			count2: 'filterCount'
		})
	},
	methods:{
		...mapMutations({
			deHandler: 'decrease'
		}),
		...mapActions({
			addHandler: 'increaseAction'
		})
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

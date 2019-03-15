<template>
	<div class="select-wrap">
		<input type="text" readonly ref="selectValue" @click="listShow=true" />
		<ul v-if="listShow">
			<li v-for="item in dataList" :data-id="item.id" @click="selectHandler(item)">{{ item.text }}</li>
		</ul>
	</div>
</template>
<script>
	export default{
		props: ['dataList'],
		data(){
			return {
				listShow: false
			}
		},
		methods:{
			selectHandler(item){
				this.listShow = false;
				this.$refs.selectValue.value = item.text;
				this.$emit('change', item);
			}
		}
	}
</script>
<style scoped>
	.select-wrap{
		border:1px solid #ccc;
		margin:0 auto;
	}
	.select-wrap input{
		width: 100%;
		height: 40px;
		line-height: 40px;
		border:0;
	}
	.select-wrap li{
		line-height: 40px;
		border-bottom:1px solid #ccc;
		cursor: pointer;
	}
	.select-wrap li:last-child{
		border: 0
	}
</style>
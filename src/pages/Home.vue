<template>
	<div>
		<h2>This is home page.</h2><hr>
		<section>
			下拉框的值：{{selectText}}
			<custom-select :data-list="dataList" @change="selectCallback"></custom-select>
		</section>
		<section>
			<count></count>
			<count2></count2>
		</section>
	</div>
</template>
<script>
	import customSelect from '@/components/select'
	import count from '@/components/count'
	import count2 from '@/components/count2'
	export default{
		components:{
			customSelect, count, count2
		},
		data(){
			return {
				dataList:[],
				selectText: ''
			}
		},
		methods:{
			getSelectData(){
				this.$http.get('https://www.easy-mock.com/mock/5ac6d449293ef220f7676868/vue-apidemo/getSelectData')
				.then((response)=>{
					// console.log(response);
					let res = response.data;
					this.dataList = res.data;
				}).catch((error)=>{
					// console.log(error);
				});
			},
			selectCallback(value){
				console.log(value);
				this.selectText = value.text;
			}
		},
		created(){
			this.getSelectData();
		}
	}
</script>
<style scoped>
	section{
		padding: 0 10px;
	}
</style>
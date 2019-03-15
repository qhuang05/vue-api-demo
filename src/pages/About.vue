<template>
	<div>
		<h2>This is about page.</h2><hr>
		<ul>
			<router-link to="/about" tag="li" exact>Study</router-link>
			<router-link to="/about/work" tag="li">Work</router-link>
			<router-link to="/about/hobby" tag="li">Hobby</router-link>
		</ul>		
		<router-view></router-view>
		{{ test }}
	</div>
</template>
<script>
	export default{
		data(){
			return {
				test:'初始值'
			}
		},
		beforeRouteEnter(to,from,next){
			next((vm)=>{
				vm.test = '改变了';
			})
		},
		beforeRouteUpdate(to,from,next){
			next();
		},
		beforeRouteLeave(to,from,next){
			next();
		}
	}
</script>
<style scoped>
	li{
		display: inline-block;
		line-height: 40px;
		padding:0 15px;
	}
	.link-active{
		background: green;
		color: #fff;
	}
</style>
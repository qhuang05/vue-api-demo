<template>
	<div id="app">
		<header>
	  <!-- <ul class="clearfix">
		<li>
		  <a href="#/home">首页</a>
		</li>
		<li>
		  <a href="#/document">文档</a>
		</li>
		<li>
		  <a href="#/about">关于</a>
		</li>
		<li>
		  <a href="#/user">用户</a>
		</li>
	</ul> -->
	 <!--  <ul class="clearfix">
		<li>
		  <router-link to="/" tag="p" exact>首页</router-link>
		</li>
		<li>
		  <router-link :to="{path:'/document'}" tag="p">文档</router-link>
		</li>
		<li>
		  <router-link :to="about" tag="p">关于</router-link>
		</li>
		<li>
		  <router-link to="/user" tag="p">用户</router-link>
		</li>
	</ul> -->
		<ul>
			<router-link to="/" tag="li" exact event="click">
				<i class="icon">△</i>
				<span>首页</span>
			</router-link>
			<router-link to="/document#abc" tag="li" event="click">
				<i class="icon">△</i>
				<span>文档</span>
			</router-link>
			<router-link to="/about" tag="li" event="click">
				<i class="icon">△</i>
				<span>关于</span>
			</router-link>
			<router-link to="/user" tag="li" event="mouseover" active-class="link-active-user">
				<i class="icon">△</i>
				<span>用户</span>
			</router-link>
		</ul>
	</header>
	<section class="btn-groups">
		<button @click="forwardHandler">前进</button>
		<button @click="backHandler">后退</button>
		<button @click="goHandler">go</button>
		<button @click="pushHandler">push</button>
		<button @click="replaceHandler">replace</button>
	</section>
	<transition mode="out-in" :name="pageTransName">
		<router-view class="body"></router-view>
	</transition>
	<router-view name="slider"></router-view>
	</div>
</template>

<script>
export default {
	name: 'App',
	data(){
		return {
			about: '/about',
			pageTransName: 'left'
		}
	},
	watch:{
		$route(to,from){
			let toIndex = to.meta.index,
			fromIndex = from.meta.index;
			if(toIndex > fromIndex){
				this.pageTransName = 'left'
			} else{
				this.pageTransName = 'right'
			}
		}
	},
	methods:{
		forwardHandler(){
	  // 自定义vue插件使用
	  // console.log(this);
	  // this.$storage.save('test',{a: 1});
	  this.$router.forward();
	},
	backHandler(){
		this.$router.back();
	},
	goHandler(){
		this.$router.go(2);
	},
	pushHandler(){
	  // this.$router.push('/user');
	  this.$router.push({path:'/user',query:{a:1,b:2}});
	},
	replaceHandler(){
		this.$router.replace({path:'/about',query:{a:1,b:2}});
	}
}
}
</script>

<style scoped>
.btn-groups{
	position:fixed;
	top:60px;
}
/*过渡动画*/
.left-enter{ transform: translateX(100%) }
.left-enter-to, .left-leave{ transform: translateX(0) }
.left-enter-active{ transition: all 0.5s }
.left-leave-to{ transform: translateX(-100%) }
.left-leave-active{ transition: all 0.5s }

.right-enter{ transform: translateX(-100%) }
.right-enter-to, .right-leave{ transform: translateX(0) }
.right-enter-active{ transition: all 0.5s }
.right-leave-to{ transform: translateX(100%) }
.right-leave-active{ transition: all 0.5s }
</style>

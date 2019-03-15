<template>
	<div>
		<h2>This is user page.</h2><hr>
		<ul class="user-list">
		<!-- 	<router-link 
				tag="li"
				v-for="(item,index) in userList"  
				:to="'/user/'+ item.type + '/' + item.id + '?key=follow'" :key="item.id" >{{ item.name }}
			</router-link> -->
		<!-- 	<router-link 
				tag="li"
				v-for="(item,index) in userList" 
				:to="{path:'/user/'+ item.type + '/' + item.id, query: {key: 'follow'}}" :key="item.id">{{ item.name }}
			</router-link> -->
			<router-link 
				tag="li"
				v-for="(item,index) in userList" 
				:to="{name:'User',params:{type: item.type, id: item.id}, query:{key: 'follow'}}" :key="item.id">{{ item.name }}
			</router-link>
		</ul>
		<section class="user-info" v-if="userInfo.id">
			<div class="item name">
				<label>姓名</label>
				<p>{{ userInfo.name }}</p>
			</div>
			<div class="item age">
				<label>年龄</label>
				<p>{{ userInfo.age }}</p>
			</div>
			<div class="item sex">
				<label>性别</label>
				<p>{{ userInfo.sex }}</p>
			</div>
			<div class="item type">
				<label>类型</label>
				<p> {{ userInfo.type == 'vip' ? userInfo.type : '普通' }}</p>
			</div>
		</section>
		<div class="footer" v-if="userInfo.id">
			<router-link :to="{path:'', query:{key:'follow'}}" exact>我的关注</router-link>
			<router-link :to="{path:'', query:{key:'share'}}" exact>我的分享</router-link>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				userList: [],
				userInfo:{},
			}
		},
		methods:{
			getUserList(){
				this.$http.get('https://www.easy-mock.com/mock/5ac6d449293ef220f7676868/vue-apidemo/getUserList')
				.then((response)=>{
					// console.log(response.data);
					let res = response.data;
					this.userList = res.data;
				})
				.catch((error)=>{
					console.log(error);
				})
			},
			getUserInfo(){
				// console.log(this.$route.params);
				let id = this.$route.params.id;
				if(id){
					this.userInfo = this.userList.filter((item)=>{
						return item.id == id;
					})[0];
				} else{
					this.userInfo = {};
				}
				// this.$http.post('https://www.easy-mock.com/mock/5ac6d449293ef220f7676868/vue-apidemo/getUserInfo', {
				// 	id: id
				// }).then((response)=>{
				// 	this.userInfo = response.data.data;
				// })
				// .catch((error)=>{
				// 	console.log(error);
				// })
			}
		},
		// 渲染这个组件会调用一次这个生命周期函数；复用这个组件，这个函数不会被调用了；地址一旦发生变化，$route会重新生成一个路由信息对象
		created(){
			this.getUserList();
		},
		watch:{
			// 路径发生变化，$route会重新赋值，监控了这个属性会执行这个函数。
			$route(){
				this.getUserInfo();
			}
		}
	}
</script>
<style scoped>
	.user-list{
		text-align:center;
	}
	.user-list li{
		display: inline-block;
		padding:10px 20px;
		border:1px solid #ccc;
	}
	.user-info{
		margin:10px 0;
	}
	.user-info .item{
		min-height: 40px;
		line-height: 40px;
		background: #fff;
		border-bottom:1px solid #efefef;
	}
	.user-info label{
		width: 80px;
		display: block;
		text-align:center;
		border-right:1px solid #efefef;
		float: left;
	}
	.user-info p{
		padding-left:10px;
		overflow: hidden;
	}
	.footer{
		padding-right:20px;
		text-align:right;
	}
	.link-active{
		color: red;
	}
</style>
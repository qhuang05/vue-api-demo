import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home' //@等价于src目录, 在build/webpack.base.conf.js下配置
import Document from '@/pages/Document'
import Slider from '@/components/slider'
import About from '@/pages/about'
import Study from '@/components/study'
import Work from '@/components/work'
import Hobby from '@/components/hobby'
import User from '@/pages/User'
import Nofound from '@/pages/404'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	linkActiveClass: 'link-active',
	// 点击浏览器的前进后退或切换导航时触发
	scrollBehavior(to,from,savePosition){
		if(to.hash){
			return {
				selector: to.hash
			}
		} else{
			if(savePosition){
				return savePosition;
			}
		}
	},
	routes:[
		{
			path: '/',
			name: 'Home',
			component: Home,
			meta: {
				index: 1,
				title: '首页',
				login: false
			},
			// beforeEnter(to,from,next){
			// 	next();
			// },
		},{
			path: '/home',
			name: 'Home',
			component: Home,
			// alias: '/index',
			alias: ['/index', '/start']
		},{
			path: '/document',
			name: 'Document',
			components: {	//一个页面有多个router-view
				default: Document,
				slider: Slider
			},
			meta: {
				index: 2,
				title: '文档',
				login: false
			}
		},{
			path: '/about',
			// name: 'About',
			component: About,
			children:[
				{
					path: '',	//默认子路由/about
					name: 'About',
					component: Study,
					meta: {
						index: 3,
						title: '关于',
						login: false
					}
				},{
					path: 'work',
					name: 'Work',
					component: Work
				},{
					path: 'hobby',
					name: 'Hobby',
					component: Hobby
				}
			]
		},{
			path: '/user/:type?/:id?',
			name: 'User',
			component: User,
			meta: {
				index: 4,
				title: '用户',
				login: true
			}
		},{
			path: '/404',
			name: 'Nofound',
			component: Nofound,
			meta: {
				title: '404页面不存在'
			}
		},{
			path: '*',
			// 重定向
			// redirect: '/home',
			// redirect: { path: '/home' },
			// redirect: { name: 'Home' },
			// 动态设置重定向的目标
			redirect: (to) => {
				console.log(to);
				if(to.path == '/login'){
					return '/home'
				} else{
					return '/404'
				}
			}
		}
	]
});
// router.beforeEach((to,from,next)=>{
// 	if(to.meta.login){
// 		next({path: '/login'})
// 	} else{
// 		next();
// 	}
// })
// router.afterEach((to,from,next)=>{
// 	let dTitle = to.meta.title;
// 	if(dTitle){
// 		window.document.title = dTitle;
// 	}
// })
export default router;

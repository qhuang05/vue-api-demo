// Vue插件编写
let storage = {
	save(key,value){
		localStorage.setItem(key, JSON.stringify(value));
	},
	fetch(key){
		return JSON.parse(localStorage.getItem(key)) || {}
	}
}

export default{
	install: function(vm){
		vm.prototype.$storage = storage;
	}
}
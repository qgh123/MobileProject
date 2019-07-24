import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'

import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import '../node_modules/mint-ui/lib/style.css'

import {Header} from 'mint-ui'
import router from './router.js'

Vue.component(Header.name, Header)
Vue.use(VueRouter)

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})

/* import Vue from 'vue'
import login from './view/login.vue'
import register from './view/register.vue'
import account from './view/account.vue'
import goodsList from './view/goodslist.vue'


Vue.use(VueRouter)

var vm = new Vue({
	el: '#app',
	data: {
		msg: 'test111'
	},
	methods: {
		
	},
	components:{
		login
	},
	router
}) */

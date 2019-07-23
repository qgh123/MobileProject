import Vue from 'vue'
import app from './App.vue'
import {Header} from 'mint-ui'
import '../lib/css/mui.min.css'

import '../node_modules/mint-ui/lib/style.css'

Vue.component(Header.name, Header)

var vm = new Vue({
	el: '#app',
	render: c => c(app)
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

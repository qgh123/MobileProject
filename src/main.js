import Vue from 'vue'
import VueRouter from 'vue-router'
import app from './App.vue'
import axios from 'axios'

import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import '../node_modules/mint-ui/lib/style.css'

import {Header,Swipe, SwipeItem} from 'mint-ui'
import router from './router.js'

//这是一条注释
Vue.use(VueRouter)
// Vue.use(axios)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})


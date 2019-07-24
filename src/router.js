import VueRouter from 'vue-router'

import HomeContainer from './component/HomeContainer.vue'
import MemberContainer from './component/MemberContainer.vue'
import ShopCartContainer from './component/ShopCartContainer.vue'
import SearchContainer from './component/SearchContainer.vue'

var router = new VueRouter({
	routes:[
		{path: "/home", component: HomeContainer},
		{path: "/member", component: MemberContainer},
		{path: "/shopcart", component: ShopCartContainer},
		{path: "/search", component: SearchContainer}
	],
	linkActiveClass: 'mui-active'
})

export default router
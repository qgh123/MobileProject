import VueRouter from 'vue-router'

import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopCartContainer from './component/tabbar/ShopCartContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import NewsList from './component/news/NewsList.vue'
import NewsInfo from './component/news/NewsInfo.vue'
import PhotoList from './component/photos/PhotoList.vue'

var router = new VueRouter({
	routes:[
		{path: '/', redirect: '/home'},
		{path: "/home", component: HomeContainer},
		{path: "/member", component: MemberContainer},
		{path: "/shopcart", component: ShopCartContainer},
		{path: "/search", component: SearchContainer},
		{path: "/home/newslist", component: NewsList},
		{path: "/home/newsinfo/:id", component: NewsInfo},
		{path: "/home/photolist", component: PhotoList}
	],
	linkActiveClass: 'mui-active'
})

export default router
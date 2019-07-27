<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in lunboList" :key="item.key">
			  <img :src="item.img"/>
		  </mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
					<img src="../../../images/menu1.png" />
					<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../../images/menu2.png" />
					<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../../images/menu3.png" />
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../../images/menu4.png" />
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../../images/menu5.png" />
					<div class="mui-media-body">视屏专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="../../../images/menu6.png" />
					<div class="mui-media-body">联系我们</div></a></li>
		</ul> 
		<h3>HomeContainer</h3>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				lunboList: []
			}
		},
		mounted(){
			this.getLunbo()
		},
		methods: {
			getLunbo(){
				axios({
					url: 'http://www.liulongbin.top:3005/api/getLunbo',
					method: 'get'
				}).then(res => {
					this.lunboList = res.data.message
				})
			}
		}
	}
</script>

<style>
	.mint-swipe-items-wrap{
		height: 200px;
	}
	img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9 .mui-media{
		background-color: #fff;
		border: none;
	}
	.mui-grid-view .mui-grid-9 .mui-table-view-cell{
		border: 0px;
	}
	 li img{
		width: 60px;
		height: 60px;
	}
	.mui-media-body{
		font-size: 13px;
	}
</style>

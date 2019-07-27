<template>
	<div>
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
				<router-link :to="'/home/newsinfo/' + item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h2>{{item.title}}</h2>
						<p class='mui-ellipsis'>
							<span class="font">发表时间：{{item.add_time | dateFormat()}}</span>
							<span class="font">点击：{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	import {Toast} from 'mint-ui'
	export default{
		data(){
			return {
				newsList: []
			}
		},
		mounted(){
			this.getNewsList()
		},
		methods: {
			getNewsList(){
				request.get('/api/getnewslist').then(res => {
					if(res.data.status == 0){
						this.newsList = res.data.message
					}else{
						Toast("获取新闻列表失败")
					}
				})
			}
		}
	}
</script>

<style scoped>
	h2{
		font-size: 14px
	}
	.font{
		font-size: 12px;
		color: #226aff;
	}
	.mui-ellipsis{
		display: flex;
		justify-content: space-between;
	}
</style>

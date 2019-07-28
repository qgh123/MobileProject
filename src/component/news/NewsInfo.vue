<template>
	<div class="newsInfoContainer">
		<h3 class="title">{{newsInfo.title}}</h3>
		<p class="subtitle">
			<span>发表时间：{{newsInfo.add_time}}</span>
			<span>点击：{{newsInfo.click}}次</span>
		</p>
		
		<hr />
		
		<div class="container" v-html="newsInfo.content">
		</div>
		
		<!-- <Comment></Comment> -->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	import Comment from '../subcomponent/Comment.vue'
	
	export default{
		components:{
			'commentBox': Comment
		},
		data(){
			return {
				id: this.$route.params.id,
				newsInfo: {}
			}
		},
		mounted(){
			this.getNewsInfo();
		},
		methods:{
			getNewsInfo(){
				request.get('/api/getnew/' + this.id).then(res => {
					if(res.data.status == 0){
						this.newsInfo = res.data.message[0]
					}
				})
			}
		}
	}
</script>

<style>
	.newsInfoContainer{
		padding: 0 4px;
	}
	.title{
		font-size: 16px;
		color: red;
		margin: 15px 0;
		text-align: center;
	}
	.subtitle{
		font-size: 13px;
		color: #226AFF;
		display: flex;
		justify-content: space-between;
	}
</style>

<template>
	<div class="cmt-container">
		<h3>发表评论</h3>
		<hr />
		<textarea placeholder="请输入要评论的内容(最多120个字)" maxlength="120" v-model="comment"></textarea>
		<mt-button type="primary" size="large" @click="publishComment">发表评论</mt-button>
		
		<div class="cmt-list" v-for="(comment, index) in comments">
			<div class="cmt-item">
				<div class="cmt-title">
					第{{index + 1}}楼&nbsp;&nbsp;用户：{{comment.user_name}}&nbsp;&nbsp;发表时间：{{comment.add_time | dateFormat}}
				</div>
				<div class="cmt-body">
					{{comment.content === 'undefined' ? '此用户很懒，什么都没写' : comment.content}}
				</div>
			</div>
		</div>
		
		<mt-button type="danger" size="large" plain @click="more">加载更多</mt-button>
	</div>
</template>

<script>
	import request from '../../utils/request.js'
	import {Toast} from 'mint-ui'
	
	export default{
		data(){
			return {
				pageIndex: 1,
				//要发表的评论内容
				comment: '',
				//评论列表
				comments: []
			}
		},
		mounted(){
			this.getComments()
		},
		methods: {
			getComments(){
				request.get('/api/getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(res => {
					this.comments = this.comments.concat(res.data.message)
				})
			},
			more(){
				this.pageIndex++
				this.getComments()
			},
			publishComment(){
				if(this.comment.trim().length == 0){
					return Toast("评论内容不能为空")
				}
				request.post('/api/postcomment/' + this.$route.params.id, {content: this.comment.trim()}).then(res => {
					if(res.data.status == 0){
						this.pageIndex = 1
						this.comment = ''
						this.getComments()
					}
				})
				
			}
		},
		props: ['id']
	}
</script>

<style scoped="scoped" lang="less">
	.cmt-container{
		h3{
			font-size: 18px
		}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 0px;
		}
		.cmt-list{
			margin: 5px 0;
			.cmt-item{
				font-size: 12px;
				.cmt-title{
					line-height: 30px;
					background-color: #ccc;
				}
				.cmt-body{
					line-height: 35px;
					text-indent: 2em
				}
			}
		}
	}
</style>

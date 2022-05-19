<template>
	<div class="container">
		<Category title="美食" :listData='foods'>
			<img slot="center" src="../public/img/food.jpg" alt="">
			<a slot="footer" href="http://www.baidu.com">更多</a>
		</Category>

		<Category title="游戏" :listData='games'>
	    	<ul slot="center">
      			<li v-for="(item,index) in games" :key="index">{{item}}</li>
   			</ul> 
		</Category>
		
		<Category title="电影" :listData='films'>
			<img slot="center" src="../public/img/movie.jpg" alt="">
			<!-- 还有一种写法，包在template里 -->
			<!-- <template v-slot:footer>
				XXXX
			</template> -->
		</Category>
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name:'App',
		components:{Category},
		 data(){
          return{
            foods:['egg','veg','beef','milk'],
            games:['redalert','minecraft','csgo','bingo'],
            films:['captain','hulk','iron-man','spider-man']
          }
        },
	

	}	
	
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
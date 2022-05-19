<template>
	<div class="container">
		<Category title="美食" :listData='foods'>
			<img src="../public/img/food.jpg" alt="">
		</Category>

		<Category title="游戏" :listData='games'>
	    	<ul>
      			<li v-for="(item,index) in games" :key="index">{{item}}</li>
   			</ul> 
		</Category>
		
		<Category title="电影" :listData='films'>
			<img src="../public/img/movie.jpg" alt="">
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
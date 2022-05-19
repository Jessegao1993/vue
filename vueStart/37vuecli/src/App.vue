<template>
	<div class="container">
		

		<Category title="游戏" >
			<template scope="getGame"><!--必须用-->
				<ul>
      				<li v-for="(item,index) in getGame.games" :key="index">{{item}}</li>
   				</ul>
			</template>
	    	 
		</Category>

		<Category title="游戏" >
			<template scope="getGame">
				<ol>
      				<li v-for="(item,index) in getGame.games" :key="index">{{item}}</li>
   				</ol> 
			</template>
		</Category>

		<Category title="游戏" >
			<template scope="getGame">
				
      			<h4 v-for="(item,index) in getGame.games" :key="index">{{item}}</h4>
   				
			</template>
		</Category>
		
		
	</div>
</template>

<script>
	import Category from './components/Category'

	export default {
		name:'App',
		components:{Category},
	
	

	}	
	
</script>

<style>
	.container{
		display: flex;
		justify-content: space-around;
	}
</style>
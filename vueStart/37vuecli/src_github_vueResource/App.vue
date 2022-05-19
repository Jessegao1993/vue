<template>
	<div class="container">
		<Search/>
		<MyList/>
	</div>
</template>

<script>
	import MyList from './components/MyList'
	import Search from './components/Search'

	export default {
		name:'App',
		components:{MyList,Search}
	}	
	
</script>

<style>

</style>
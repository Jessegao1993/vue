<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="KeyWord"/>&nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'Search',
        data(){
          return{
            KeyWord:''
          }
        },
        methods:{
          searchUsers(){
              axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
                  response => {
                    this.$bus.$emit('getUsers',response.data.items)//传递服务器获取的数据
                  },
                  error => {
                    console.log('请求失败',error.message)
                  }
              )  
          }
        },
    }
</script>

<style>

</style>
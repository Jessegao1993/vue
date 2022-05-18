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
            // 请求前更新mylist数据
            this.$bus.$emit('upDateListData',{isFirst:false,isLoading:true,errMsg:'',users:[]})
            axios.get(`https://api.github.com/search/users?q=${this.KeyWord}`).then(
                  response => {
                    // 请求成功后更新mylist数据
                    this.$bus.$emit('upDateListData',{isLoading:false,errMsg:'',users:response.data.items})
                  },
                  error => {
                    console.log('请求失败',error.message)
                    // 请求失败后更新mylist数据
                    this.$bus.$emit('upDateListData',{isLoading:false,errMsg:error.message,users:[]})
                  }
              )  
          }
        },
    }
</script>

<style>

</style>
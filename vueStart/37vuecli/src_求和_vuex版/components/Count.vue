<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h2>当前求和放大十倍后为：{{bigSum}}</h2>
    <h3>My name is {{name}} and I am in {{city}}.</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select> 
    <button @click="increment">+</button>    
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    export default {
        name:'Count',
        data(){
          return{
            n:1,//用户选择的数字
            
          }
        },
        methods:{
          increment(){
            this.$store.commit('ADD',this.n)
          },
          decrement(){
            this.$store.commit('MINUS',this.n)
          },
          incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
          },
          incrementWait(){
           
              this.$store.dispatch('addWait',this.n)
          }
          },
          computed:{
            // 自己手写计算属性，简化标签
            // sum(){
            //   return this.$store.state.sum
            // }
            //其他标签同理
            
            // 借助mapState生成计算属性，从state中读取数据（对象写法）
            //...mapState({sum:'sum',name:'name',city:'city'})
             // 借助mapState生成计算属性，从state中读取数据（数组写法，生成计算属性名和属性名需一致）
            ...mapState(['sum','name','city']),
            // 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
            //...mapGetters({bigSum:'bigSum'})
            // 借助mapGetters生成计算属性，从getters中读取数据（数组写法，生成计算属性名和属性名需一致）
            ...mapGetters(['bigSum'])
          }
        }
    
</script>

<style>
button{
  margin-left:5px;
}
</style>





   
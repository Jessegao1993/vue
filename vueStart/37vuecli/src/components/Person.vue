<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
    <h3>上方组件的求和为：{{sum}}</h3>
  </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapGetters, mapState,mapMutations,mapActions} from 'vuex'
    export default {
        name:'Person',
        data(){
          return{
            name:''
          }
        },
        methods:{
          add(){
            const personObj = {id:nanoid(),name:this.name}
            this.$store.commit('personAbout/ADD_PERSON',personObj)
            this.name = ''//清空输入框
          }
          },
          computed:{
            // personList(){
            //   return this.$store.state.personList
            // }
            //...mapState({personList:'personList',sum:'sum'})
            ...mapState('countAbout',['sum','name','city']),
            ...mapState('personAbout',['personList']),

          }
        }
    
</script>

<style>

</style>





   
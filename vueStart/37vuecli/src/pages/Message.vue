<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由并携带params参数 to字符串写法-->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->
                <!-- to对象写法 如果使用params携带参数，不能用path只能用name-->
                <router-link :to="{
                    //path:'/home/message/detail',
                    name:'d',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>  
</template>

<script>
export default {
    name:'Message',
    data(){
        return{
            messageList:[
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'},
            ]
        }
    },
    methods:{
        pushShow(m){
            this.$router.push({
                name:'d',
                query:{
                        id:m.id,
                        title:m.title
                    }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'d',
                query:{
                        id:m.id,
                        title:m.title
                    }
            })
        }
    }

}
</script>

<style>

</style>
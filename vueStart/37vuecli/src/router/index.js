// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
export default new VueRouter({
     routes:[
         {
            path:'/about',
            component:About
         },
         {
            path:'/home',
            component:Home,
            children:[
               {
                  path:'news',
                  component:News,
               },
               {
                  path:'message',
                  component:Message,
                  children:[
                     {
                        name:'d',
                        path:'detail/:id/:title',
                        component:Detail,
                        // props的第一种写法，值为对象，其中所有键值对都会以props形式传给Detail组件
                        // props:{
                        //    a:1,
                        //    b:'hello'
                        // }
                        // props的第二种写法，值为布尔，为真时将该组件收到的所有params参数以props形式传给Detail组件
                        //props:true,
                        // props的第三种写法，值为函数，该函数返回对象中每一组键值对都会通过props传给Detail组件
                        props($route){
                           return{id:$route.query.id,title:$route.query.title}
                        }

                     }
                  ]
               }
              
            ]
         },
     ],

})
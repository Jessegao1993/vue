// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import Message from '../pages/Message.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建并暴露一个路由器
const router = new VueRouter({
   // 更改路由器为history模式
   // mode:'history',
     routes:[
         {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{isAuth:false,title:'关于'}
         },
         {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{isAuth:false,title:'主页'},
            children:[
               {
                  name:'xinwen',
                  path:'news',
                  component:News,
                  meta:{isAuth:true,title:'新闻'},
                  //独享路由守卫，只有前置没有后置
                  // beforeEnter:(to,from,next)=>{
                  //      if(to.meta.isAuth){//是否需要鉴权
                  //       if (localStorage.getItem('school')=='atguigu') {
                  //          next()
                  //          }
                  //         }else{
                  //      next()
                  //      }
                  // }
               },
               {
                  name:'xiaoxi',
                  path:'message',
                  component:Message,
                  meta:{isAuth:true,title:'消息'},
                  children:[
                     {
                        name:'d',
                        path:'detail/:id/:title',
                        component:Detail,
                        meta:{isAuth:true,title:'详情'},
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

// 全局前置路由守卫--初始化时被调用，每次路由切换之前被调用
// router.beforeEach((to,from,next)=>{

//   if(to.meta.isAuth){//是否需要鉴权
//       if (localStorage.getItem('school')=='atguigu') {
//          next()
//       }
//   }else{
//      next()
//   }
// })

// 全局后置路由守卫--初始化时被调用，每次路由切换之后被调用
// router.afterEach((to,from)=>{
//    document.title = to.meta.title || '展示系统'
// })

export default router
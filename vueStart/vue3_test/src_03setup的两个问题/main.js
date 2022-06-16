// 引入的不再是Vue构造函数了，而是createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

// 创建应用实例对象（类似vue2中vm，但更轻量）
const app = createApp(App)
// 挂载
app.mount('#app')

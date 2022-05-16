const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,//关闭语法检查
  //lintOnSave: process.env.NODE_ENV !== 'production'
  // 开启代理服务器（方式一，仅限一个服务器）
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },
  // 方法二：配置多个代理
  // devServer:{
  //   proxy:{
  //     '/atguigu':{//请求前缀
  //       target: 'http://localhost:5000',
  //       pathRewrite:{'^/atguigu':''},
  //       ws: true,//用于websocket
  //       changeOrigin: true //用于控制请求头中的Host值
  //     },
  //     '/demo':{//请求前缀
  //       target: 'http://localhost:5001',
  //       pathRewrite:{'^/demo':''},
  //       ws: true,//用于websocket
  //       changeOrigin: true //用于控制请求头中的Host值
  //     }
  //     // '/foo':{
  //     //   target:'<other_url>'
  //     // }
  //   }
  // }


})

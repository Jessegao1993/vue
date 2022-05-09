const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false//关闭语法检查
  //lintOnSave: process.env.NODE_ENV !== 'production'
})

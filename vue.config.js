const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8084',
        changeOrigin:true,
        pathRewrite:{'^/api':'/api'}
      }
    }
  }
})

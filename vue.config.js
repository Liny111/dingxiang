const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  }, 
  devServer:{
    proxy:{
      '/api':{
        target:'http://apis.juhe.cn',//聚合接口
        ws:true,
        changeOrigin:true,
        pathRewrite:{//重写路径
          '^/api':''
        }
      },
      //360接口
      '/foo':{
        target:'https://bang.360.cn',//聚合接口
        ws:true,
        changeOrigin:true,
        pathRewrite:{//重写路径
          '^/foo':''
        }
      }
    }
  }
};

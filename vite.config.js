// const path = require('path');
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// export default defineConfig({
//     plugins: [vue()],
//     resolve: {
//       alias: {
//         "@": '/src'
//       }
//     },
//     pluginsOptions: {
//         "style-resourcess-loader":{
//             preProcess: "scss",
//             patterns:[]
//         }
//     },
    
// })
const path = require("path");
module.exports = {
  base: "./",
  outDir: "target",
  port: 3000,
  open: true,
  runtimeCompiler: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  },
  //跨域配置
  proxy: {
  },
};
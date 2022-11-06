/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 15:36:57
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-06 18:36:09
 * @FilePath: \vue3-game\vite.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'
function pathResolve(dir) {
  return resolve(process.cwd(), '.', dir)
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url))
      '@': pathResolve('src')
    }
  },
  server: {
    host: '0.0.0.0', //ip地址
    port: 8080, //端口号
    open: false //启动后是否自动打开浏览器
  }
})
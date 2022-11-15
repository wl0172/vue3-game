/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-10 20:03:00
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-16 00:03:31
 * @FilePath: \vue3-game\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vant/lib/index.css'; // 全局引入vant样式
import ComAudio from '@/components/ComAudio/index.vue'


import VConsole from 'vconsole'
if (process.env.NODE_ENV !== 'prod') {
  new VConsole()
}

const app = createApp(App)

app.component("ComAudio",ComAudio)

app.use(createPinia())
app.use(router)

app.mount('#app')

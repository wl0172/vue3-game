/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 15:36:57
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-06 21:35:58
 * @FilePath: \vue3-game\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/index.vue';
import SignUp from '../components/signUp/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

export default router

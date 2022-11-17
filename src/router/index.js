/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 15:36:57
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-15 21:26:34
 * @FilePath: \vue3-game\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '../stores/counter'

import Login from '../components/login/index.vue';
import SignUp from '../components/signUp/index.vue';
import Home from '../views/home.vue'

// Yiyi专用
import Yiyi from '../components/yiyi/index.vue'
import Love from '../components/other/Love.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: "/Love",
      name: 'Love',
      component: Love
    },
    {
      path: "/Yiyi",
      name: 'Yiyi',
      component: Yiyi
    },
    // 空白404页
    {
      path: "/:pathMatch(.*)*",
      name: '404',
      component: Home
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 获取 token 
  const { token } = useCounterStore().token
  // 如果有token
  if (token !== null && token !== '') {
    // 带有token访问登录页面跳转至主页
    if (to.path === '/Login') {
      next({
        path: '/'
      })
    } else {
      // 带有token访问其他页面允许跳转
      next()
    }
  } else {
    // 没有token
    // 没有token访问登录页面允许
    if (to.path === '/Login' || to.path === '/SignUp') {
      next()
    } else {
      // 没有token访问其他页面跳转至登录页面
      next({
        path: '/Login',
      })
    }
  }
})


export default router

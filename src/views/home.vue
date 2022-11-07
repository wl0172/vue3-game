<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 23:46:06
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-07 00:42:52
 * @FilePath: \vue3-game\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter'
import { login } from '../api/index'

const $router = useRouter();
const counterStore = useCounterStore()

const handleGet = () => {
  login()
}

// 退出登录
const handleExit = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  counterStore.token = ''
  // 跳转到登录页
  $router.push({
    path: '/Login'
  })
}

</script>

<template>
  <div class="home">
    <h1>This is an about page</h1>

    <button @click="handleGet">查询</button>

    <button @click="handleExit">退出登录</button>
  </div>
</template>

<style>
.home {
  color: white;
}
</style>

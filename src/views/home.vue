<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 23:46:06
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-07 00:42:52
 * @FilePath: \vue3-game\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter'
import { login } from '../api/index'

const $router = useRouter();
const counterStore = useCounterStore()

let jokesArr = []

// 查询笑话
const handleGet = () => {
  const data = login()
  data.then((res) => {
    console.log(res, '------')
    if (res.result) {
      jokesArr = res.result
    }
  })
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

onMounted(() => {
  let layer = [...document.getElementsByClassName('home')][0]
  let startX, startY, moveEndX, moveEndY, X, Y;
  layer.addEventListener("touchstart", (event => {
    console.log('start' + event)
    // event.preventDefault(); 
    startX = event.targetTouches[0].pageX;
    startY = event.targetTouches[0].pageY;
  }))
  layer.addEventListener("touchend", (event => {
    console.log(event)
    // event.preventDefault();
    moveEndX = event.changedTouches[0].pageX;
    moveEndY = event.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    if (X > 80) this.prevPreview();
    if (X < -80) this.nextPreview();
  }))
})




</script>

<template>
  <div class="home">
    <h1>This is an about page</h1>

    <button @click="handleGet">查询笑话</button>

    <button @click="handleExit">退出登录</button>
  </div>
</template>

<style>
.home {
  width: 100%;
  height: 100%;
  color: white;
}
</style>

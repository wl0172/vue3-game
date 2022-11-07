<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 23:46:06
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-07 00:42:52
 * @FilePath: \vue3-game\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref,reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../stores/counter'
import { login } from '../api/index'

const $router = useRouter();
const counterStore = useCounterStore()

let jokesArr = reactive({
  value: []
})
const yi = reactive({count: 0})

// 查询笑话
const handleGet = () => {
  const data = login()
  data.then((res) => {
    console.log(res,jokesArr.value, '------')
    if (res.result) {
      jokesArr.value = res ? res.result ? res.result.data : [] : []
    }
    console.log(jokesArr.value, '---')
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

// 监听手指滑动
onMounted(() => {
  return
  let layer = [...document.getElementsByClassName('home')][0]
  let startX, startY, moveEndX, moveEndY, X, Y;
  layer.addEventListener("touchstart", (event => {
    console.log('start' + event)
    // event.preventDefault()
    startX = event.targetTouches[0].pageX;
    startY = event.targetTouches[0].pageY;
  }))
  layer.addEventListener("touchend", (event => {
    console.log(event)
    // event.preventDefault()
    moveEndX = event.changedTouches[0].pageX;
    moveEndY = event.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    if (X > 80) this.prevPreview();
    if (X < -80) this.nextPreview();
  }))
})



const handleYiyi = () => {
  yi.count++
  if (yi.count >= 3) $router.push({
    path: '/Yiyi'
  })
}
</script>

<template>
  <div class="home">
    <!-- 隐藏smallPlay -->
    <div @click="handleYiyi" class="hide_yiyi"></div>
    <h1>This is an about page</h1>

    <button @click="handleGet">查询笑话</button>

    <button @click="handleExit">退出登录</button>
    <ul>
      <li v-for="i in jokesArr.value" :key="i">{{i.content}}</li>
    </ul>
  </div>
</template>

<style scoped lang="less">
.home {
  width: 100%;
  height: 100%;
  color: white;
  .hide_yiyi {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    z-index: 999;
  }
  ul{
    overflow: auto;
    max-height: 70%;
    background: #c3ab86;
  }
}
</style>

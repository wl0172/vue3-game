<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-11 20:37:01
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-15 21:13:41
 * @FilePath: \vue3-game\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="conter">
    <ComAudio />
    <RouterView />
  </div>
</template>

<style scoped>
.conter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 700px) {
  .conter {
    background: url('@/assets/img/bg.jpeg') no-repeat;
    background-size: 100% 100%;
    /* background-size: cover; */
    background-attachment: fixed;
    margin: auto;
    background-position: center center;
  }
}

@media (min-width: 700px) {
  .conter {
    background-color: #464646;
  }
}
</style>

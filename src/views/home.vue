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
import { Finger } from '@/componentsEvent/index'

import ComHeader from '../components/ComHeader/index.vue'
import Comconter from '../components/Comconter/index.vue'
import ComFooter from '../components/ComFooter/index.vue'


// 监听手指滑动
onMounted(() => {
  Finger()
})


</script>

<template>
  <div class="home">
    <!-- 隐藏smallPlay -->
    <div @click="handleLogout" class="hide_yiyi"></div>
    <ComHeader />
    <Comconter />
    <ComFooter />
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
    background: yellow
  }
}
</style>

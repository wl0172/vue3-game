<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 23:46:06
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-15 21:13:20
 * @FilePath: \vue3-game\src\views\home.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, onMounted } from 'vue';
import { Finger } from '@/componentsEvent/index'

import ComHeader from '../components/ComHeader/index.vue'
import Comconter from '../components/Comconter/index.vue'
import ComFooter from '../components/ComFooter/index.vue'


// 监听手指滑动
onMounted(() => {
  Finger(false)
})



</script>

<template>
  <div class="home">
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
}
</style>

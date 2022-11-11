<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-10 20:03:00
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-10 21:35:20
 * @FilePath: \vue3-game\src\components\ComSetting\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { handleLogout } from '@/componentsEvent/index'


</script>

<template>
  <div class="ComHeader_van_popup">
    <div class="logout" @click="handleLogout">退出</div>
  </div>
</template>

<style scoped lang="less">
.ComHeader_van_popup {
  width: 100%;
  height: 100%;
  color: black;
  position: relative;
  .logout{
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    background: rgb(200, 167, 167);
    position: absolute;
    bottom: 0;
  }
}
</style>


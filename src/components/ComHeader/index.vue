<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-10 00:41:16
 * @FilePath: \vue3-game\src\components\ComHeader\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useCounterStore } from '@/stores/counter'
import { handleLogout } from '@/componentsEvent/index'

const counterStore = useCounterStore()

console.log(counterStore, 'header玩家信息======')
</script>

<template>
  <div class="ComHeader">
    <div class="ComHeader_userInfo_img">
      <img src="@/assets/img/bg.jpeg" alt="">
    </div>
    <div class="ComHeader_userInfo_list">
      <div class="ComHeader_userInfo_list_li">
        <div>昵称</div>
        <div>健康</div>
      </div>
      <div class="ComHeader_userInfo_list_li">
        <div>精神力</div>
        <div>体力</div>
      </div>
    </div>
    <div class="ComHeader_userInfo_icon" @click="handleLogout">
      <img src="@/assets/img/left_arrow.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="less" >
.ComHeader {
  width: 100%;
  height: 4rem;
  background: linear-gradient(-90deg, rgb(188, 45, 45), rgb(207, 197, 85));
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  .ComHeader_userInfo_img{
    width: 3rem;
    height: 3rem;
    background: black;
    border-radius: .4rem;
    overflow: hidden;
    margin: 0 .5rem;
  }
  .ComHeader_userInfo_list{
    width: 77%;
    .ComHeader_userInfo_list_li{
      display: flex;
      margin: .1rem 0;
      div{
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        border-radius: .3rem;
        background: black;
        margin: 0 .5rem 0 0;
        width: 100%;
      }
    }
  }
  .ComHeader_userInfo_icon{
    width: 1rem;
    height: 1rem;
  }
}
</style>

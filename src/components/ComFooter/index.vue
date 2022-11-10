<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-10 00:34:55
 * @FilePath: \vue3-game\src\components\ComFooter\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()

// 搜索
const handleDoun = () => {
  if(!counterStore.state.searchState){
    counterStore.state.searchState = !counterStore.state.searchState
    setTimeout(() => {
      counterStore.state.searchState = false
      counterStore.state.combarState = true
      counterStore.state.escapeState = false
    }, (3400))
  }
}

// 战斗
const handleCombat = () => {
  if(!counterStore.state.startBattle){
    counterStore.state.startBattle = true
  }
}

// 逃跑
const hadnleEscape = () => {
  counterStore.state.searchState = false
  counterStore.state.combarState = false
  counterStore.state.startBattle = false
  counterStore.state.escapeState = true
}

</script>

<template>
  <div class="ComFooter">

    <!-- 探索 -->
    <div class="ComFooter_search" @click="handleDoun" v-if="!counterStore.state.combarState">
      <img src="@/assets/img/footer_search.png" alt="">
      <div :class="[counterStore.state.searchState?'ComFooter_searchAction':'']"></div>
    </div>
    <!-- 战斗-逃跑 -->
    <div class="ComFooter_Combat" v-if="counterStore.state.combarState">
      <div class="ComFooter_Combat_li" @click="handleCombat">战斗</div>
      <div class="ComFooter_Combat_li" @click="hadnleEscape">逃跑</div>
    </div>

  </div>
</template>

<style scoped lang="less" >
@import url('@/assets/css3/index.less');
.ComFooter {
  width: 100%;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  // 探索
  .ComFooter_search {
    overflow: hidden;
    border: 0;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: linear-gradient(-90deg, rgba(188, 45, 45, 0.482), rgba(207, 197, 85, 0.409));
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    // display: none;
    img {
      width: 70%;
      height: 70%;
      animation: shake 2.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    }
  }
  .ComFooter_searchAction{
    font-size: 1.7rem;
    width: 1.7rem;
    height: 1.7rem;
    position: absolute;
    color: white;
    overflow: hidden;
    border-radius: 50%;
    transform: translateZ(0);
    /* animation：规定完成动画所花费的时间，该属性必须规定，否则动画时长为0，无法播放 */
    animation: load 1.7s infinite ease, round 1.7s infinite ease;
  }
  // 战斗+逃跑
  .ComFooter_Combat{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .ComFooter_Combat_li{
      width: 37%;
      height: 3rem;
      text-align: center;
      line-height: 3.7rem;
      font-size: 1.4rem;
      border-radius: .3rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ComFooter_Combat_li:nth-child(1){
      background: rgba(193, 60, 60, 0.632);
    }
    .ComFooter_Combat_li:nth-child(2){
      background: rgba(44, 143, 156, 0.539);
    }
  }
}
</style>

<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-10 00:34:55
 * @FilePath: \vue3-game\src\components\ComFooter\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, reactive } from 'vue'
let buttonState = reactive({
  value: false
})
const handleDoun = () => {
  buttonState.value = !buttonState.value
}

// 战斗
const handleCombat = () => {
  alert('战斗')
}

// 逃跑
const hadnleEscape = () => {
  alert('逃跑')
}

</script>

<template>
  <div class="ComFooter">
    <!-- <div class="cont">
      <button class="btn">
        <span>Submit</span>
        <img src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png" height="62" width="62">
      </button>
    </div> -->

    <!-- 探索 -->
    <div class="ComFooter_search" @click="handleDoun">
      <img src="@/assets/img/footer_search.png" alt="">
    </div>
    <!-- 战斗-逃跑 -->
    <div class="ComFooter_Combat">
      <div class="ComFooter_Combat_li" @click="handleCombat">战斗</div>
      <div class="ComFooter_Combat_li" @click="hadnleEscape">逃跑</div>
    </div>

  </div>
</template>

<style scoped lang="less" >
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
    // display: flex;
    // align-items: center;
    // justify-content: center;
    display: none;
    img {
      width: 70%;
      height: 70%;
    }
  }
  // 战斗-逃跑
  .ComFooter_Combat{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .ComFooter_Combat_li{
      width: 10rem;
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



































@keyframes extend {
  0% {
    width: 600px;
    height: 200px;
    border-radius: 100px;
  }

  10% {
    width: 610px;
    height: 210px;
    background: #fff;
    margin-left: - 5px;
    margin-top: - 5px;
  }

  20% {
    width: 600px;
    height: 200px;
    background: #6fb07f;
    margin-left: 0px;
    margin-top: 0px;
  }

  100% {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    margin-left: 190px;
    background: #6fb07f;
  }
}


@keyframes disappear {
  0% {
    opacity: 1;
  }

  20% {
    color: #fff;
  }

  100% {
    opacity: 0;
  }
}

@keyframes appear {
  0% {
    opacity: 1;
  }

  70% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
  }
}

@keyframes hidetip {

from {

  opacity: 1;

}

to {

  opacity: 0;

}

}

// button:focus>img {
//   /*animation*/
//   -webkit-animation: appear 1s ease-in-out;
//   -ms-animation: appear 1s ease-in-out;
//   animation: appear 1s ease-in-out;
//   -webkit-animation-fill-mode: forwards;
//   /* Chrome, Safari, Opera */
//   animation-fill-mode: forwards
// }
</style>

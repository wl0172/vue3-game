<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 17:09:40
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-07 00:12:12
 * @FilePath: \vue3-game\src\components\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '../../stores/counter.js'

// let x = 50
// let y = 60
// let xin = true
// let yin = true
// let step = 1
// let delay = 10
// const obj = ref({
//   o: document.getElementById('yiyi_con')
// })
const { ctx } = getCurrentInstance()

console.log(ctx, '---')

// const oDiv = () => {
//     var L = 0
//     let T = 0
//     var R = document.documentElement.clientWidth - document.getElementById('yiyi_con').offsetWidth
//     var B = document.documentElement.clientHeight - document.getElementById('yiyi_con').offsetHeight
//     document.getElementById('yiyi_con').style.left = x + document.body.scrollLeft + document.documentElement.scrollLeft + "px"
//     document.getElementById('yiyi_con').style.top = y + document.body.scrollTop + document.documentElement.scrollTop + "px"
//     x = x + step * (xin ? 1 : -1)
//     if (x < L) {
//       xin = true;
//       x = L
//     }
//     if (x > R) {
//       xin = false;
//       x = R
//     }
//     y = y + step * (yin ? 1 : -1)
//     if (y < T) {
//       yin = true;
//       y = T
//     }
//     if (y > B) {
//       yin = false;
//       y = B
//     }
//   }
onMounted(() => {
//   var itl = setInterval(oDiv, delay)
//   document.getElementById('yiyi_con').onmouseover = function () {
//     clearInterval(itl)
//   }
//   document.getElementById('yiyi_con').onmouseout = function () {
//     itl = setInterval(oDiv, delay)
//   }

  // console.log(obj, '---')
})
</script>

<template>
  <div class="yiyi_conter">
    <div id="yiyi_con"></div>
  </div>
</template>

<style scoped lang="less">
.yiyi_conter {
  width: 100%;
  height: 100%;
  #yiyi_con {
    position: absolute;
    width: 5rem;
    height: 5rem;
    background: red;
    left: 0;
    top: 0;
    z-index: 999;
    border-radius: 50%
  }
}
</style>
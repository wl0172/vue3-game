<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-10 20:03:00
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-17 20:56:58
 * @FilePath: \vue3-game\src\components\Comconter\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter'
// import { login } from '@/api/index'
import ComMonster from '@/components/ComMonster/index.vue'

const counterStore = useCounterStore()

watch(counterStore.state, (newVal, oldVal) => { })



</script>

<template>
  <div class="Comconter">
    <!-- 公告 -->
    <div class="Comconter_tip">
      <van-notice-bar mode="closeable" scrollable text="优惠大酬宾！！！！！" />
    </div>
    <!-- 怪物面板 -->
    <div class="Comconter_div">
      <ComMonster v-if="counterStore.state.combarState" />
    </div>

  </div>
</template>

<style scoped lang="less">
.Comconter {
  width: 100%;
  height: calc(100% - 7.7rem);
  overflow: auto;
  position: relative;

  .Comconter_tip {
    height: 1.5rem;

    .van-notice-bar {
      height: 100%;
    }
  }

  .Comconter_div {
    height: calc(100% - 3.5rem);
    background: rgba(189, 68, 68, 0.422);
    margin: 1rem;
    border-radius: .3rem
  }
}
</style>


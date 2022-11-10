<script setup>
import { reactive, watch } from 'vue';
import { useCounterStore } from '@/stores/counter'
// import { login } from '@/api/index'
import ComMonster from '@/components/ComMonster/index.vue'

const counterStore = useCounterStore()

watch(counterStore.state,(newVal,oldVal)=>{})



</script>

<template>
  <div class="Comconter">
    <!-- 公告 -->
    <div class="Comconter_tip">
      <van-notice-bar scrollable text="优惠大酬宾！！！！！" />
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
  .Comconter_tip{
    height: 1.5rem;
    .van-notice-bar{
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


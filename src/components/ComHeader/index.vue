<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>

<template>
  <div class="ComHeader">
    <div>家</div>
    <div>{{counterStore.aa}}</div>
  </div>
</template>

<style scoped lang="less" >
.ComHeader{
  width: 100%;
  height: 2.5rem;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

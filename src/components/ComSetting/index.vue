<script setup>
import { reactive } from 'vue'
import { handleLogout } from '@/componentsEvent/index'

</script>

<template>
  <div class="ComHeader_van_popup">
    <div class="logout" @click="handleLogout">退出</div>
  </div>
</template>

<style scoped lang="less">
.ComHeader_van_popup {
  color: black;
  position: relative;
  .logout{
    width: 100%;
    background: red
  }
}
</style>


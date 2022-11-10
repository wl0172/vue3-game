<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="conter">
    <RouterView />
  </div>
</template>

<style scoped>
.conter {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 700px) {
  .conter {
    background: url('@/assets/img/bg.jpeg') no-repeat;
    background-size: 100% 100%;
    /* background-size: cover; */
    background-attachment: fixed;
    margin: auto;
    background-position: center center;
  }
}

@media (min-width: 700px) {
  .conter {
    background-color: #464646;
  }
}
</style>

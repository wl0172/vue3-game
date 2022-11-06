<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ComLogin from './components/login/index.vue'
</script>

<template>
  <div class="conter">
    <RouterView />
    <!-- <ComLogin /> -->
  </div>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
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
    background: url('./assets/img/bg.png') no-repeat;
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

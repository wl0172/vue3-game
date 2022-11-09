<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { login } from '@/api/index'

// import '@/componentsEvent/sticks'

const counterStore = useCounterStore()

let jokesArr = reactive({
  value: []
})
const yi = reactive({ count: 0 })

// 查询笑话
const handleGet = () => {
  const data = login()
  data.then((res) => {
    if (res.result) {
      jokesArr.value = res ? res.result ? res.result.data : [] : []
    }
  })
}
const handleVuex = () => {
  counterStore.aa = counterStore.aa + 1
}

</script>

<template>
  <div class="Comconter">
    <!-- <h1>This is an about page</h1> -->

    <!-- <div class="container">
      <div id="score"></div>
      <canvas id="game" width="375" height="375"></canvas>
      <div id="introduction">按住鼠标伸出一根棍子</div>
      <div id="perfect">双倍得分</div>
      <button id="restart">重玩</button>
    </div> -->

    <button @click="handleGet">查询笑话</button>
    <button @click="handleVuex">vuexxxxxx</button>

    <ul>
      <li v-for="i in jokesArr.value" :key="i">{{ i.content }}</li>
    </ul>



  </div>
</template>

<style scoped lang="less">
.Comconter {
  width: 100%;
  height: calc(100% - 5rem);
  overflow: auto;

  ul {
    overflow: auto;
    background: #c3ab86;
    height: calc(100% - 6rem);
    margin: 0 2rem;
    list-style-type: none;
    padding: 0;

    li {
      margin: 1em;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  #score {
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 2em;
    font-weight: 900;
  }

  #introduction {
    width: 200px;
    height: 150px;
    position: absolute;
    font-weight: 600;
    font-size: 0.8em;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    transition: opacity 2s;
  }

  #restart {
    width: 120px;
    height: 120px;
    position: absolute;
    border-radius: 50%;
    color: white;
    background-color: red;
    border: none;
    font-weight: 700;
    font-size: 1.2em;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    display: none;
    cursor: pointer;
  }

  #perfect {
    position: absolute;
    opacity: 0;
    transition: opacity 2s;
  }
}
</style>


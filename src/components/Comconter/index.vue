<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { login } from '@/api/index'

const counterStore = useCounterStore()

// 数据
let dataArr = reactive({
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
    
    <div class="Comconter_div">
      <h1>This is an about page</h1>
    </div>



  </div>
</template>

<style scoped lang="less">
.Comconter {
  width: 100%;
  height: calc(100% - 7.7rem);
  overflow: auto;
  position: relative;
  padding: 2rem;
  .Comconter_div {
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 0, 0.422);
    margin: 0 auto;
  }
}
</style>


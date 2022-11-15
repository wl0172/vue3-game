import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const token = ref(document.cookie)
  // const doubleCount = computed(() => token.value * 2)
  // function increment() {
  //   token.value
  // }
  const state = ref({
    searchState: false, // 找怪状态
    combarState: false, // 是否显示-战斗+逃跑
    startBattle: false, // 点击战斗 - 开始
    escapeState: false, // 逃跑
  })

  return { token, state }
})

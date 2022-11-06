import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const token = ref(document.cookie)
  // const doubleCount = computed(() => token.value * 2)
  // function increment() {
  //   token.value
  // }

  return { token }
})

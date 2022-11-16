import { ref, watch, computed } from 'vue'
import { defineStore } from 'pinia'
import { userInfo } from '@/api/index'

export const useCounterStore = defineStore('counter', () => {
  // state: () => ({
  //   user: {aa:1}
  // })

  // const setUserInfo = (info) => {
  //   console.log(state.value,'pania------')
  //   // return userInfo = info
  // }
  // const getUserInfo = () => {
  //   try {
  //     return new Promise(async (resolve) => {
  //       const { data } = await userInfo();
  //       setUserInfo(data)
  //     }) 
  //   } catch (error) {
  //     // 让表单组件显示错误
  //     return error
  //   }
  // }


  const token = ref(document.cookie)

  const state = ref({
    searchState: false, // 找怪状态
    combarState: false, // 是否显示-战斗+逃跑
    startBattle: false, // 点击战斗 - 开始
    escapeState: false, // 逃跑
  })


  return { token, state }
})

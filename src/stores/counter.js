import { ref, reactive, watch, computed } from 'vue'
import { defineStore } from 'pinia'
import { login, userInfo } from '@/api/index'
import { useApiState } from '@/api/requestState'


export const useCounterStore = defineStore('counter', () => {

  const userStateInfo = ref({
    info: {}
  })
  const token = ref({
    token: document.cookie
  })

  const state = ref({
    searchState: false, // 找怪状态
    combarState: false, // 是否显示-战斗+逃跑
    startBattle: false, // 点击战斗 - 开始
    escapeState: false, // 逃跑
  })

  const useLogin = async (val) => {
    const { datas } = await useApiState(login, val)
    const useToken = datas.value?.data?.token ? datas.value?.data.token : null
    if(useToken){
      document.cookie = `token=${useToken}`
      token.value.token = `token=${useToken}`
      location.reload()
    }
  }

  const useGetInfo = async () => {
    const { datas } = await useApiState(userInfo)
    if (datas.value) {
      userStateInfo.value.info = datas.value.data.player
    }
  }

  return {
    userStateInfo,
    token,
    state,
    useLogin,
    useGetInfo,
  }
})

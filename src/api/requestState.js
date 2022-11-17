// fetch.js
import { ref } from 'vue'

export const useApiState = async (api,data)=> {
  const datas = ref(null)
  const errors = ref(null)

  await api(data)
    .then((res) => res)
    .then((json) => (datas.value = json))
    .catch((err) => (errors.value = err))

  return { datas, errors }
}

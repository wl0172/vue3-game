<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 17:09:40
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-16 20:31:28
 * @FilePath: \vue3-game\src\components\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter.js'
import { login } from '@/api/index'
import { deviceApp } from '@/utils/device'

const counterStore = useCounterStore()
const $router = useRouter();
const sinupInfo = ref({
  name: '',
  password: '',
  device: JSON.stringify(deviceApp())
})
// 忘记密码
const handleForgotPassword = () => {
  alert('敬请期待')
}
// 注册
const handleSignUp = () => {
  $router.push({
    path: '/SignUp',
  })
}
// 登录
const handleLogin = async () => {
  if (sinupInfo.value.name && sinupInfo.value.password) {
    counterStore.useLogin(sinupInfo.value)
  } else {
    alert('请输入完整登录信息!')
  }
}
</script>

<template>
  <div class="login_conter">
    <p class="login_p">熊出没</p>
    <div class="login_div">
      <input v-model="sinupInfo.name" maxlength="30" placeholder="请输入账号"
        oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
    </div>
    <div class="login_div">
      <input v-model="sinupInfo.password" maxlength="8" placeholder="请输入密码"
        oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
    </div>
    <div class="login_a">
      <div @click="handleForgotPassword">
        <!-- 忘记密码? -->
      </div>
      <div @click="handleSignUp">注册</div>
    </div>
    <div @click="handleLogin" class="buttonHover login_button">登录</div>
  </div>
</template>

<style scoped lang="less">
.login_conter {
  width: 70%;
  // height: 40%;
  background: #ffffffcc;
  text-align: center;
  border-radius: 0.7rem;
  color: black;

  .login_p {
    margin: 1rem;
    font-size: 1rem;
  }

  .login_div {
    margin: 0 0 1rem 0;

    input {
      width: 87%;
      border: 0;
      height: 3rem;
      border-radius: 0.3rem;
      outline: none;
      padding: 0 1rem;
    }
  }

  .login_a {
    display: flex;
    font-size: 0.9rem;
    justify-content: space-between;
    color: #7676cb;
    width: 87%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .login_button {
    width: 70%;
    border-radius: 0.7rem;
    padding: 0.7rem;
    margin: 3rem auto 1rem auto;
    background: linear-gradient(to right, #8ebcf5 0, #00e2fa 80%, #00e2fa 100%);
    color: white;
  }
}
</style>
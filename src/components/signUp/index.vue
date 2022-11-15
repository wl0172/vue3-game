<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 17:09:40
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-16 00:15:53
 * @FilePath: \vue3-game\src\components\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { signUp } from '@/api/index'
import { deviceApp } from '@/utils/device'

const reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/

const $router = useRouter();

const sinupInfo = ref({
  name: '',
  password: '',
  phone_number: '',
  phone_area: "86",
  email: '',
  device: JSON.stringify(deviceApp())
})
const handleBank = () => {
  $router.push({
    path: '/Login',
    replace: true
  })
}
const handleSigUp = async () => {
  if(!sinupInfo.value.name){
    alert('请输入账号')
    return
  }
  if(sinupInfo.value.password.length < 8){
    alert('请输入密码')
    return
  }
  if(!(/^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(sinupInfo.value.phone_number))){
    alert('请输入正确的手机号')
    return
  }
  if(!reg.test(sinupInfo.value.email)){
    alert('请输入正确的邮箱')
    return
  }
  sinupInfo.value.phone_number = String(sinupInfo.value.phone_number)
  const { data } = await signUp(sinupInfo.value)
	if(data?.token){
		document.cookie = `token=${data.token}`
		$router.push({
			path: '/',
			replace: true
		})
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
      <input v-model="sinupInfo.password" maxlength="8" placeholder="请输入密码,最少8位"
        oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
    </div>
    <div class="login_div">
      <input type="number" v-model="sinupInfo.phone_number" maxlength="11" placeholder="请输入手机号" />
    </div>
    <div class="login_div">
      <input v-model="sinupInfo.email" placeholder="请输入邮箱" oninput="value=value.replace(/[\u4E00-\u9FA5]/g,'')" />
    </div>
    <div class="login_a">
      <div></div>
      <div @click="handleBank">返回</div>
    </div>
    <div @click="handleSigUp" class="buttonHover login_button">注册</div>
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
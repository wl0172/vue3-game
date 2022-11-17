<!--
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-17 20:52:04
 * @FilePath: \vue3-game\src\components\ComHeader\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, watch, computed, onMounted, toRefs } from 'vue'
import ComSetting from '@/components/ComSetting/index.vue';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const useStore = useCounterStore()
useStore.useGetInfo()

const info = ref(null)

const settingsInfo = ref({
  popupShow: false
})

const handlePortrait = () => {
  alert('编辑个人信息')
}

watch(useStore.userStateInfo,(n)=>{
  info.value = n.info
})

</script>

<template>
  <div class="ComHeader">
    
    <div class="ComHeader_userInfo_img" @click="handlePortrait">
      <img src="@/assets/img/bg.jpeg" alt="">
    </div>
    <div class="ComHeader_userInfo_list">
      <div class="ComHeader_userInfo_list_li">
        <div>昵称：{{info?.name}}</div>
        <div>生命：{{info?.hp}}</div>
      </div>
      <div class="ComHeader_userInfo_list_li">
        <div>enemy：{{info?.enemy}}</div>
        <div>体力：{{info?.thew}}</div>
      </div>
    </div>
    <!-- 设置 -->
    <div class="ComHeader_userInfo_icon" @click="settingsInfo.popupShow = !settingsInfo.popupShow">
      <img src="@/assets/img/left_arrow.png" alt="">
    </div>
    <van-popup
      @click-overlay="settingsInfo.popupShow = !settingsInfo.popupShow"
      :show="settingsInfo.popupShow" 
      position="right" 
      :style="{ height: '100vh',width: '70%' }">
      <ComSetting />
    </van-popup>


  </div>
</template>

<style scoped lang="less" >
.ComHeader {
  width: 100%;
  height: 4rem;
  background: linear-gradient(-90deg, rgb(188, 45, 45), rgb(207, 197, 85));
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  .ComHeader_userInfo_img{
    width: 3rem;
    height: 3rem;
    background: black;
    border-radius: .4rem;
    overflow: hidden;
    margin: 0 .5rem;
  }
  .ComHeader_userInfo_list{
    width: 77%;
    .ComHeader_userInfo_list_li{
      display: flex;
      margin: .1rem 0;
      div{
        height: 1.7rem;
        line-height: 1.7rem;
        text-align: center;
        border-radius: .3rem;
        background: black;
        margin: 0 .5rem 0 0;
        width: 100%;
      }
    }
  }
  .ComHeader_userInfo_icon{
    width: 1rem;
    height: 1rem;
  }
}
</style>

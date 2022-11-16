<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()

let timer = ref()

const listArr = ref({
  arr: []
})

watch(counterStore.state, (newVal, oldVal) => {
  if (newVal.startBattle) {
    let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    for (let i = 0; i < arr.length; i++) {
      let j = 0;
      setTimeout(function () {
        handleBattle()
        listArr.value.arr.push(arr[j++])
      }, i * 3000)
    }
  }
})

// setTimeout(() => {
//   let a = [...document.getElementsByClassName('ComMonster_list')][0]
//   a.scrollTop = a.scrollHeight
// }, 4000);

const handleBattle = () => {
  if(counterStore.state.escapeState){
    let end = setInterval(function () { }, 10);
    for (let i = 1; i <= end; i++) {
      clearInterval(i);
    }
    return
  }
  let num = 0
  let max = document.querySelector('.ComMonster_state_xue_n').clientWidth
  let xieNode = document.querySelector('.ComMonster_state_xue_n');

  // localStorage.setItem('x', max)
  //从localStorage中取出上次血量
  // if (localStorage.x) {
    // max = localStorage.x;
    xieNode.style.width = max + 'px';
  // };

  let r = Math.random() * 5 + 5
  max -= r
  // localStorage.setItem('x', max); //将血量存到localStorage中
  xieNode.style.width = max + 'px';

  clearInterval(timer); //实现画面震动效果
  timer = setInterval(function() {
    num++; //num控制画面震动时间，点击一下后，每隔30ms震动一次，震动10次
    if (num == 10) {
      clearInterval(timer);
      num = 0;
      document.body.style.left = 0;
      document.body.style.top = 0;
      return;
    };
    document.body.style.left = Math.random() * -20 + 10 + 'px';
    document.body.style.top = Math.random() * -20 + 10 + 'px';
  }, 30)
}


onMounted(() => {})

</script>

<template>
  <div class="ComMonster">
    <!-- 头像+信息 -->
    <div class="ComMonster_portrait">
      <div class="ComMonster_portrait_img">
        <img src="@/assets/img/bg.jpeg" alt="">
      </div>
      <div class="ComMonster_portraitTxt">简介多久是多久啊手机打开撒娇的叫撒大家撒到家啊啥的就撒娇的洒进房间啊手机关机啊感觉啊就</div>
    </div>
    <!-- 状态+预计伤害 -->
    <div class="ComMonster_state">
      <div class="ComMonster_state_xue">
        <div class="ComMonster_state_xue_n">100</div>
      </div>
      <div>预计伤害：10 ～ 14</div>
    </div>
    <!-- 对战信息 -->
    <div class="ComMonster_list" v-if="listArr.arr">
      <div v-for="i in listArr.arr" :key="i">第一回合，你使用普通攻击，对敌人造成了 1000 点伤害</div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url('@/assets/css3/index.less');

.ComMonster {
  padding: 1rem;

  .ComMonster_portrait {
    display: flex;
    align-items: center;
    padding: 0 0 0 .3rem;

    .ComMonster_portrait_img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: .3rem;
      margin: 0 1rem 0 0;
      animation: wiggle 2s linear infinite;
    }

    .ComMonster_portraitTxt {
      width: 13rem;
      overflow: auto;
      max-height: 3rem;
    }
  }

  .ComMonster_state {
    text-align: center;
    .ComMonster_state_xue {
      width: 90%;
      height: 2rem;
      border-radius: .3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem auto;
      border: 1px solid white;
      position: relative;
      .ComMonster_state_xue_n{
        width: 100%;
        background: #B0171F;
        position: absolute;
        left: 0;
      }
      // animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    }
  }

  .ComMonster_list {
    margin: 1rem auto;
    overflow: auto;
    max-height: calc( 100vh - 25rem );
  }
}
</style>

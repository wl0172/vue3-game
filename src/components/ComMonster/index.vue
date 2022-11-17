<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { adventurFight } from '@/api/index'
import { hpSetting } from '@/utils/hp'

const counterStore = useCounterStore()

const monsterInfo = ref(counterStore.monster)
const listArr = ref({
  arr: []
})
const hpNum = ref(hpSetting(counterStore.monster))

// const hpSetting = computed(({hp,hp_max}) => {
//   if (hp == hp_max) {
//     return 100
//   } else if(hp > 0) {
//     return Number(((hp/hp_max)*100).toFixed(2))
//   } else {
//     return 0
//   }
// })

watch(counterStore.state, async (newVal) => {
  if (newVal.startBattle) {
    const { data } = await adventurFight()

    if(monsterInfo.value.hp){

      if(data.adventure.monster.hp > 0){
        const text = `第${data.adventure.turn}回合，你使用普通攻击，对${monsterInfo.value.name}造成了 ${data.targetSelf} 点伤害`
        listArr.value.arr.push(text)
        counterStore.monster = data.adventure.monster
        monsterInfo.value = data.adventure.monster
        counterStore.info = data.player
        hpNum.value = hpSetting(data.adventure.monster)
        counterStore.state.startBattle = false
      }else{
        // counterStore.state.searchState = false
        // counterStore.state.combarState = false
        // counterStore.state.startBattle = false
        // counterStore.state.escapeState = true
      }
    }

    // let arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
    // for (let i = 0; i < arr.length; i++) {
    //   let j = 0;
    //   setTimeout(function () {
    //     handleBattle()
    //     listArr.value.arr.push(arr[j++])
    //   }, i * 3000)
    // }
  }
},{deep:true})


onMounted(() => {
})

</script>

<template>
  <div class="ComMonster">
    <!-- 头像+信息 -->
    <div class="ComMonster_portrait">
      <div class="ComMonster_portrait_img">
        <img src="@/assets/img/bg.jpeg" alt="">
      </div>
      <div class="ComMonster_portraitTxt">{{monsterInfo.name}}</div>
    </div>
    <!-- 状态+预计伤害 -->
    <div class="ComMonster_state">
      <div class="ComMonster_state_xue">
        <!-- <div class="ComMonster_state_xue_n">{{monsterInfo.hp}}</div> -->
        <van-progress 
          class="ComMonster_state_xue_n" 
          pivot-color="#00000000" 
          color="linear-gradient(to right, #B0171F, #af464c)"
          :percentage="hpNum > 0 ? hpNum : 0"
          :pivot-text="monsterInfo.hp" />
      </div>
      <div>预计伤害：{{monsterInfo.drops[0].min}} ～ {{monsterInfo.drops[0].max}}</div>
    </div>
    <!-- 对战信息 -->

    <div class="ComMonster_list" v-if="listArr.arr">
      <div v-for="i in listArr.arr" :key="i">{{i}}</div>
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
        height: 100%;
        position: absolute;
        left: 0;
        background: #00000000;
      }
      // animation: shake 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    }
  }

  .ComMonster_list {
    margin: 1rem auto;
    overflow: auto;
    max-height: calc( 100vh - 25rem );
    div{
      margin: .7rem 0;
    }
  }
}
</style>

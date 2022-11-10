/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-10 00:01:04
 * @FilePath: \vue3-game\src\componentsEvent\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore

// 退出登录 - 清空cookie
export const handleLogout = () => {
  let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if (keys) {
    for (var i = keys.length; i--;) {
      document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
      document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
      document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
    }
  }
  counterStore.token = ''
  // 刷新
  location.reload()
}

// 监听鼠标-手指滑动事件
export const Finger = (state) => {
  if(state){
    let layer = [...document.getElementsByClassName('home')][0]
    let startX, startY, moveEndX, moveEndY, X, Y;
    layer.addEventListener("touchstart", (event => {
      console.log('start',event)
      // event.preventDefault()
      startX = event.targetTouches[0].pageX;
      startY = event.targetTouches[0].pageY;
    }))
    layer.addEventListener("touchend", (event => {
      console.log('end',event)
      // event.preventDefault()
      moveEndX = event.changedTouches[0].pageX;
      moveEndY = event.changedTouches[0].pageY;
      X = moveEndX - startX;
      Y = moveEndY - startY;
      // if (X > 80) this.prevPreview();
      // if (X < -80) this.nextPreview();
    }))
  }
}
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCounterStore } from '@/stores/counter'
const $router = useRouter();
const counterStore = useCounterStore

// 退出登录
export const handleLogout = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  counterStore.token = ''
  // 跳转到登录页
  location.reload()
}

// 监听鼠标-手指滑动事件
export const Finger = () => {
  // return
  let layer = [...document.getElementsByClassName('home')][0]
  let startX, startY, moveEndX, moveEndY, X, Y;
  layer.addEventListener("touchstart", (event => {
    console.log('start' + event)
    // event.preventDefault()
    startX = event.targetTouches[0].pageX;
    startY = event.targetTouches[0].pageY;
  }))
  layer.addEventListener("touchend", (event => {
    console.log(event)
    // event.preventDefault()
    moveEndX = event.changedTouches[0].pageX;
    moveEndY = event.changedTouches[0].pageY;
    X = moveEndX - startX;
    Y = moveEndY - startY;
    // if (X > 80) this.prevPreview();
    // if (X < -80) this.nextPreview();
  }))
}
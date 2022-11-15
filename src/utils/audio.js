/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-10 21:29:46
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-16 00:04:13
 * @FilePath: \vue3-game\src\utils\audio.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const musicPlay = (isPlay) => {
  let media = document.querySelector('#IdComAudio');
  if (isPlay && media.paused) {
    media.play();
  }
  if (!isPlay && !media.paused) {
    media.pause();
  }
}

const autoPlayMusic = () => {
  // 自动播放音乐效果，解决浏览器或者APP自动播放问题
  function musicInBrowserHandler() {
    musicPlay(true);
    document.body.removeEventListener('touchstart', musicInBrowserHandler);
  }
  document.body.addEventListener('touchstart', musicInBrowserHandler);
  // 自动播放音乐效果，解决微信自动播放问题
  function musicInWeixinHandler() {
    musicPlay(true);
    document.addEventListener("WeixinJSBridgeReady", function () {
      musicPlay(true);
    }, false);
    document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
  }
  document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
}
document.body.addEventListener('click',function(){
  debugger
  autoPlayMusic()
})
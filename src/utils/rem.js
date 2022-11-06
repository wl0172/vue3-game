/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 16:19:22
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-06 16:19:45
 * @FilePath: \vue3-game\src\utils\rem.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
        // if(clientWidth>=640){
        //     docEl.style.fontSize = '100px';
        // }else{
        //     docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
        // }
      docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

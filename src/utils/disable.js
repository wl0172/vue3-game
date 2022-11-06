/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 14:30:31
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-06 14:30:41
 * @FilePath: \vue3-game\vue3-game\src\utils\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 禁用鼠标右键
window.document.oncontextmenu = () => false

//禁用开发者工具F12
document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
  let e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 123) {
    e.returnValue = false;
    return false;
  }
};
let userAgent = navigator.userAgent;
if (userAgent.indexOf("Firefox") > -1) {
  let checkStatus;
  let devtools = /./;
  // @ts-ignore
  devtools.toString = function () {
    checkStatus = "on";
  };
  setInterval(function () {
    checkStatus = "off";
    console.log(devtools);
    console.log(checkStatus);
    console.clear();
    if (checkStatus === "on") {
      let target = "";
      try {
        window.open("about:blank", (target = "_self"));
      } catch (err) {
        let a = document.createElement("button");
        a.onclick = function () {
          window.open("about:blank", (target = "_self"));
        };
        a.click();
      }
    }
  }, 200);
} else {
  //禁用控制台
  let ConsoleManager = {
    onOpen: function () {
      alert("Console is opened");
    },
    onClose: function () {
      alert("Console is closed");
    },
    init: function () {
      let self = this;
      let x = document.createElement("div");
      let isOpening = false,
        isOpened = false;
      Object.defineProperty(x, "id", {
        get: function () {
          if (!isOpening) {
            self.onOpen();
            isOpening = true;
          }
          isOpened = true;
          return true;
        }
      });
      setInterval(function () {
        isOpened = false;
        console.info(x);
        console.clear();
        if (!isOpened && isOpening) {
          self.onClose();
          isOpening = false;
        }
      }, 200);
    }
  };
  ConsoleManager.onOpen = function () {
    //打开控制台，跳转
    let target = "";
    try {
      window.open("about:blank", (target = "_self"));
    } catch (err) {
      let a = document.createElement("button");
      a.onclick = function () {
        window.open("about:blank", (target = "_self"));
      };
      a.click();
    }
  };
  ConsoleManager.onClose = function () {
    alert("Console is closed!!!!!");
  };
  ConsoleManager.init();
}
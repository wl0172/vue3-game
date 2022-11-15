/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-15 23:41:07
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-15 23:42:05
 * @FilePath: \vue3-game\src\utils\device.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const deviceApp = () => {
  let webLog = {}
  let userAgent = navigator.userAgent
  // 获取微信版本
  let m1 = userAgent.match(/MicroMessenger.*?(?= )/)
  if (m1 && m1.length > 0) {
    webLog.wechat = m1[0]
  }
  // 苹果手机
  if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    // 获取设备名
    if (userAgent.includes('iPad')) {
      webLog.device = 'iPad'
    } else {
      webLog.device = 'iPhone'
    }
    // 获取操作系统版本
    m1 = userAgent.match(/iPhone OS .*?(?= )/)
    if (m1 && m1.length > 0) {
      webLog.system = m1[0]
      console.log(webLog.system)
    }
  }
  // 安卓手机
  if (userAgent.includes('Android')) {
    // 获取设备名
    m1 = userAgent.match(/Android.*; ?(.*(?= Build))/)
    if (m1 && m1.length > 1) {
      webLog.device = m1[1]
      console.log(webLog.device)
    }
    // 获取操作系统版本
    m1 = userAgent.match(/Android.*?(?=;)/)
    if (m1 && m1.length > 0) {
      webLog.system = m1[0]
    }
  }

  return webLog

}
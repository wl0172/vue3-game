/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-15 23:10:32
 * @FilePath: \vue3-game\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request, service } from "./request";

export function login(data) {
  return request({
    url: 'auth/login',
    method: "post",
    data
  })
}

export function signUp(data) {
  return request({
    url: 'auth/signup',
    method: "post",
    data
  })
}

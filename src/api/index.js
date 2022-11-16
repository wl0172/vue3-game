/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-09 19:48:35
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-16 23:06:16
 * @FilePath: \vue3-game\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request, service } from "./request";

// 登录
export function login(data) {
  return request({
    url: 'auth/login',
    method: "post",
    data
  })
}
// 注册
export function signUp(data) {
  return request({
    url: 'auth/signup',
    method: "post",
    data
  })
}
// 玩家信息
export function userInfo(data) {
  return request({
    url: 'user/info',
    method: "get",
    data
  })
}

// 开始冒险
export function startAdventure(data) {
  return request({
    url: 'adventure',
    method: "post",
    data
  })
}
// 本回合尝试战斗
export function adventurFight(data) {
  return request({
    url: 'adventure/fight',
    method: "post",
    data
  })
}
// 本回合尝试逃跑
export function adventurRunaway(data) {
  return request({
    url: 'adventure/runaway',
    method: "post",
    data
  })
}

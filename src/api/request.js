/*
 * @Author: ljw 15262283592@163.com
 * @Date: 2022-11-06 17:29:03
 * @LastEditors: ljw 15262283592@163.com
 * @LastEditTime: 2022-11-06 17:29:46
 * @FilePath: \vue3-game\src\api\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://api.tubecoin.org', // 所有的请求地址前缀部分
  timeout: 60000, // 请求超时时间毫秒
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    'Content-Type': 'application/json',
    'token': ' token',
    'X-Requested-With': 'XMLHttpRequest',
  },
})
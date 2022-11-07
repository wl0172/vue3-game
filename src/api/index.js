import { request, service } from "./request";

export function login(data) {
  return request({
    url: "cook/query.php",
    method: "get",
    data: {
      key:'',
      menu:''
    }
  })
}

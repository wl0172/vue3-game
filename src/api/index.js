import { request, service } from "./request";

export function login(data) {
  return request({
    url: `joke/content/list.php?key=eb308adf29702228c6f4f5a976f06a82&time=${new Date().getTime().toString().substr(0,10)}`,// `?key=eb308adf29702228c6f4f5a976f06a82&page=1&pagesize=10&sort=asc&time=${new Date().getTime().toString().substr(0,10)}`,
    method: "get",
    data: {
      // key: 'eb308adf29702228c6f4f5a976f06a82',
      page: '1',
      pagesize: '10',
      sort: 'asc',
      time: new Date().getTime().toString().substr(0,10)
    }
  })
}

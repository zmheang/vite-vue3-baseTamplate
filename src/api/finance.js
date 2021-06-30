import request from '../http/index'

console.log(4);
export function getAllFund() {
  return request({
    url: 'https://api.doctorxiong.club/v1/fund/all',
    method: 'get'
  })
}

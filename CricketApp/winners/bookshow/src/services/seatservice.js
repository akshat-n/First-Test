import baseService from './index.js'

export function insertSeat(cerndentials){
   return baseService.post('/seat/insert',cerndentials)
}
export function deleteseat(cerndentials){
   return baseService.delete(`seat/del/${cerndentials.Name}`)
}

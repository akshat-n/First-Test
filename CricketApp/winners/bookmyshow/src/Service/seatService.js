import baseService from './index.js'
export function insertSeat(cerndentials){
    return baseService.post('/seat/insert',cerndentials)
 }
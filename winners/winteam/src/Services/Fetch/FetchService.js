import baseService from '../index.js'

export function fetchData(){
   return baseService.get('/get')
}
export function fetchSelectedData(credentials){
    return baseService.post('/getSelected',credentials)
}
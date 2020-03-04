import baseService from './index.js'

export function fetchData(){
   return baseService.get('/theater/get')
}
export function fetchMovie(credentials){
    return baseService.get(`movie/get/${credentials.Name}`)
}
export function fetchSeats(credentials){
    return baseService.get(`seat/get/${credentials.tname}/${credentials.Name}`);
}
export function fetchAllSeats(){
    return baseService.get('/seat/getall');
}
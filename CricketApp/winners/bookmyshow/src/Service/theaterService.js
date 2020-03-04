import baseService from './index.js'

export function fetchTheater(credentials){
    
    return baseService.get(`seat/gett/${credentials.tname}/${credentials.mname}/${credentials.date}`)
}

export function deleteseat(cerndentials){
    return baseService.delete(`seat/del/${cerndentials.Name}`)
 }
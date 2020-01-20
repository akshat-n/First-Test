import baseService from '../index.js'

export function updateData(id,credentials){
    debugger
    return baseService.put(`/update/${id}`,credentials);
}
import baseService from '../index.js'

export function del(credentials){

    return baseService.delete(`/del/${credentials.id}`);
}
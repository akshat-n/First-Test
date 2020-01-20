import baseService from '../index.js'

export function login(credentials){
    return baseService.post('/login',credentials)
}
export function getUserData(credentials){
    debugger
    return baseService.get(`/getUserData/${credentials}`)
}
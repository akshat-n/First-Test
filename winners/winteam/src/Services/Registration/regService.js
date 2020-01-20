import baseService from '../index.js'

export function register(credentials){
    return baseService.post('/register',credentials)
}
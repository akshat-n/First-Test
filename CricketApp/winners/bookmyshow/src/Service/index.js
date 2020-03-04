import axios from 'axios'

export const baseurl = "http://localhost:4000/"

const baseService = axios.create ({ baseURL:baseurl })
export default baseService;
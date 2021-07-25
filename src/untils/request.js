import axios from 'axios'
import {getToken} from './auth'
const instancs = axios.create({
    baseURL:"http://localhost:3000",
    timeout:5000
})
//请求拦截
instancs.interceptors.request.use(function(config){
    config.headers['authorization']='Bearer'+getToken()
    return config
},function(error){
    return Promise.reject(error)
})

//响应拦截
instancs.interceptors.response.use(function(response){
    return response.data
},function(error){
    return Promise.reject(error)
})

export function get(url,parsms){
    return axios.get(url,{
        // params
    })
}

export function post (url,data){
    return axios.post(url,data)
}
export function put(url,data){
    return axios.put(url,data)
}
export function del(url){
    return axios.delete(url)
}
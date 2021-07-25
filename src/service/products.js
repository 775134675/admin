import {del, get, post, put} from '../untils/request'

export function listApi(page=1){
    return get('/api',{page})
}

export function createApi(data){
    return post('/api',data)
}
export function change(id,data){
    return put(`/api/change/${id}`,data)
}
export function del(id){
    return del(`/api/delete/${id}`)
}
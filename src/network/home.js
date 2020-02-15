import {instance1} from './request'

export function getdata(){
    return instance1({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type ,page){
    return instance1({
        url:'api/hy/home/data',
        params:{
            type:type,
            page:page
        }
    })
}